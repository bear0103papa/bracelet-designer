import styled from 'styled-components';
import { useDesign } from '../../contexts/DesignContext';
import { useState, useEffect } from 'react';

const DisplayContainer = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;

const BraceletContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 1px dashed #ccc;
  border-radius: 50%;
  transition: all 0.3s ease;
`;

const CrystalBead = styled.img`
  position: absolute;
  left: 100%;
  top: 60%;
  width: ${props => props.displaySize}px;
  height: ${props => props.displaySize}px;
  border-radius: 50%;
  transform-origin: ${props => `${-props.radius}px ${0}px`};
  transform: ${props => `
    translate(-50%, -50%)
    rotate(${props.angle}deg)
  `};
  object-fit: cover;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 1;
  
  &:hover {
    z-index: 2;
    scale: 1.2;
  }
`;

const SizeDisplay = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.9);
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
`;

const TrashIcon = styled.div`
  position: absolute;
  bottom: -20px;
  left: 30%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background: rgba(255, 0, 0, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.show ? 1 : 0};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 0, 0, 0.2);
    transform: translateX(-50%) scale(1.1);
  }
  
  &.drag-over {
    background: rgba(255, 0, 0, 0.3);
    transform: translateX(-50%) scale(1.2);
  }
`;

const FloatingPreview = styled.div`
  display: none;
  
  @media (max-width: 767px) {
    display: ${props => props.show ? 'block' : 'none'};
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 100px;
    height: 100px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    overflow: hidden;
    cursor: pointer;
  }
`;

const MiniPreviewContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MiniCrystalBead = styled.img`
  position: absolute;
  width: ${props => props.displaySize * 0.4}px;
  height: ${props => props.displaySize * 0.4}px;
  border-radius: 50%;
  transform-origin: center;
  transform: ${props => `
    translate(-50%, -50%)
    rotate(${props.angle}deg)
    translateX(${props.radius}px)
  `};
  left: 50%;
  top: 50%;
  object-fit: cover;
`;

const ProductDisplay = ({ onCrystalClick }) => {
  const { currentDesign, setCurrentDesign, setSelectedCrystal } = useDesign();
  const [beadPositions, setBeadPositions] = useState([]);
  const [displaySize, setDisplaySize] = useState(200);
  const [remainingLength, setRemainingLength] = useState(currentDesign.size);
  const [draggedBead, setDraggedBead] = useState(null);
  const [isSpaceFull, setIsSpaceFull] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    if (currentDesign.crystals.length > 0) {
      const wristCircumference = currentDesign.size;
      const DISPLAY_DIAMETER = 200;
      
      const usedLength = currentDesign.crystals.reduce((sum, crystal) => sum + crystal.size, 0);
      const remaining = Math.max(0, wristCircumference - usedLength);
      setRemainingLength(remaining);
      
      setIsSpaceFull(remaining <= 0);
      
      const positions = currentDesign.crystals.map((crystal, index) => {
        let accumulatedLength = currentDesign.crystals
          .slice(0, index)
          .reduce((sum, c) => sum + c.size, 0);
        
        const angle = (accumulatedLength / wristCircumference) * 360;
        const beadDisplaySize = (crystal.size / wristCircumference) * DISPLAY_DIAMETER * Math.PI;
        const radius = (DISPLAY_DIAMETER - beadDisplaySize) / 2;
        
        return {
          ...crystal,
          angle,
          radius,
          displaySize: beadDisplaySize
        };
      });
      
      setBeadPositions(positions);
      setDisplaySize(DISPLAY_DIAMETER);
    } else {
      setRemainingLength(currentDesign.size);
      setIsSpaceFull(false);
    }
  }, [currentDesign.crystals, currentDesign.size]);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 300;
      setShowFloating(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBeadClick = (bead, index) => {
    if (!isSpaceFull) {
      setSelectedCrystal(bead);
      onCrystalClick?.(bead);
    }
  };

  const handleBeadDragStart = (e, index) => {
    e.dataTransfer.setData('moveBeadIndex', index.toString());
    setDraggedBead(index);
    setIsDragging(true);
  };

  const handleBeadDragOver = (e, index) => {
    e.preventDefault();
    if (draggedBead !== null && draggedBead !== index) {
      const draggedElement = e.target;
      const dropZone = draggedElement.parentNode;
      const rect = dropZone.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
      const normalizedAngle = (angle + 360) % 360;
      
      const positions = beadPositions.map(bead => bead.angle);
      const closestIndex = positions.reduce((closest, current, i) => {
        const currentDiff = Math.abs(normalizedAngle - current);
        const closestDiff = Math.abs(normalizedAngle - positions[closest]);
        return currentDiff < closestDiff ? i : closest;
      }, 0);
      
      if (closestIndex !== draggedBead) {
        const newCrystals = [...currentDesign.crystals];
        const [removed] = newCrystals.splice(draggedBead, 1);
        newCrystals.splice(closestIndex, 0, removed);
        
        setCurrentDesign(prev => ({
          ...prev,
          crystals: newCrystals
        }));
        
        setDraggedBead(closestIndex);
      }
    }
  };

  const handleBeadDragEnd = () => {
    setDraggedBead(null);
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    if (isSpaceFull) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    
    const crystal = e.dataTransfer.getData('crystal');
    if (crystal) {
      try {
        const parsedCrystal = JSON.parse(crystal);
        if (remainingLength < parsedCrystal.size) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      } catch (error) {
        // 忽略解析錯誤
      }
    }
    
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = (e) => {
    if (isSpaceFull) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    e.preventDefault();
    
    const moveBeadIndex = e.dataTransfer.getData('moveBeadIndex');
    if (moveBeadIndex) {
      return;
    }

    try {
      const crystal = JSON.parse(e.dataTransfer.getData('crystal'));
      if (crystal && remainingLength >= crystal.size) {
        setCurrentDesign(prev => ({
          ...prev,
          crystals: [...prev.crystals, crystal]
        }));
      }
    } catch (error) {
      console.log('非有效的拖放數據');
    }
  };

  const handleBeadRemove = (index) => {
    setCurrentDesign(prev => ({
      ...prev,
      crystals: prev.crystals.filter((_, i) => i !== index)
    }));
    setSelectedCrystal(null);
  };

  const handleTrashDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
  };

  const handleTrashDragLeave = (e) => {
    e.currentTarget.classList.remove('drag-over');
  };

  const handleTrashDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    
    const index = parseInt(e.dataTransfer.getData('moveBeadIndex'));
    if (!isNaN(index)) {
      handleBeadRemove(index);
    }
    setIsDragging(false);
  };

  const calculateMiniBeadPosition = (index, total, radius) => {
    const angle = (index / total) * 360;
    return {
      x: radius * Math.cos(angle * Math.PI / 180),
      y: radius * Math.sin(angle * Math.PI / 180),
      angle: angle
    };
  };

  return (
    <>
      <DisplayContainer>
        <ImageContainer>
          <SizeDisplay style={{ 
            color: isSpaceFull ? '#ff4444' : 'inherit' 
          }}>
            {(currentDesign.size / 10).toFixed(1)} cm
            <br />
            剩餘：{(remainingLength / 10).toFixed(1)} cm
          </SizeDisplay>
          <BraceletContainer 
            size={displaySize}
            onDragOver={isSpaceFull ? null : handleDragOver}
            onDrop={isSpaceFull ? null : handleDrop}
            style={{
              cursor: isSpaceFull ? 'not-allowed' : 'default',
              pointerEvents: isSpaceFull ? 'none' : 'auto'
            }}
          >
            {beadPositions.map((bead, index) => (
              <CrystalBead
                key={`${bead.id}-${index}`}
                src={bead.image}
                displaySize={bead.displaySize}
                angle={bead.angle}
                radius={bead.radius}
                alt={bead.name}
                draggable={!isSpaceFull}
                onClick={() => handleBeadClick(bead, index)}
                onDragStart={(e) => handleBeadDragStart(e, index)}
                onDragOver={(e) => handleBeadDragOver(e, index)}
                onDragEnd={handleBeadDragEnd}
                onContextMenu={(e) => {
                  e.preventDefault();
                  handleBeadRemove(index);
                }}
                onError={(e) => {
                  e.target.src = '/assets/placeholder.jpg';
                }}
                style={{
                  opacity: draggedBead === index ? 0.5 : 1
                }}
              />
            ))}
          </BraceletContainer>
          
          <TrashIcon
            show={isDragging}
            onDragOver={handleTrashDragOver}
            onDragLeave={handleTrashDragLeave}
            onDrop={handleTrashDrop}
          >
            🗑️
          </TrashIcon>
        </ImageContainer>
      </DisplayContainer>
      
      <FloatingPreview show={showFloating}>
        <MiniPreviewContainer>
          {beadPositions.map((bead, index) => {
            const position = calculateMiniBeadPosition(
              index,
              beadPositions.length,
              30 // 調整這個值來改變水晶到中心的距離
            );
            
            return (
              <MiniCrystalBead
                key={`mini-${bead.id}-${index}`}
                src={bead.image}
                displaySize={bead.displaySize}
                angle={position.angle}
                radius={30} // 固定半徑
                alt={bead.name}
                draggable={false}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{
                  transform: `
                    translate(-50%, -50%)
                    rotate(${position.angle}deg)
                    translateX(30px)
                  `
                }}
              />
            );
          })}
        </MiniPreviewContainer>
      </FloatingPreview>
    </>
  );
};

export default ProductDisplay; 