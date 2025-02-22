import styled from 'styled-components';
import { useDesign } from '../../contexts/DesignContext';
import { useState, useEffect } from 'react';
import React from 'react';
import ProductInfo from '../ProductInfo';

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
  width: 200px;
  height: 200px;
  border: 1px dashed #ccc;
  border-radius: 50%;
  transition: all 0.3s ease;
`;

const CrystalBead = styled.img`
  position: absolute;
  width: ${props => props.displaySize}px;
  height: ${props => props.displaySize}px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform-origin: center;
  transform: 
    translate(-20px, 80px)
    rotate(${props => props.angle}deg)
    translateX(${props => props.radius}px);
  cursor: ${props => props.moveMode ? 'pointer' : 'grab'};
  transition: all 0.3s ease;
  z-index: ${props => props.moveMode ? (props.isSource ? 3 : 2) : 1};
  pointer-events: auto;
  
  ${props => props.moveMode && `
    filter: brightness(${props.isSource ? '1.2' : props.isTarget ? '1' : '0.7'});
    transform: translate(-50%, -50%)
      rotate(${props.angle}deg)
      translateX(${props.radius}px)
      scale(${props.isSource || props.isTarget ? '1.1' : '1'});
    border: ${props.isTarget ? '2px solid #4a90e2' : 'none'};
  `}

  &:hover {
    z-index: 2;
    filter: brightness(1.1);
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

const SizeSelectorContainer = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h3`
  margin-bottom: 12px;
  font-size: 16px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SizeOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SizeButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.active ? '#D4C4B4' : '#fff'};
  color: ${props => props.active ? '#fff' : '#333'};
  border: 1px solid ${props => props.active ? '#D4C4B4' : '#ddd'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#333' : '#e0e0e0'};
  }
`;

const CustomInput = styled.input`
  width: 80px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
`;

const Unit = styled.span`
  margin-left: 4px;
  color: #666;
  font-size: 14px;
`;

const ErrorMessage = styled.div`
  color: #ff4444;
  font-size: 14px;
  margin-top: 8px;
`;

const ClearAllButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 8px 16px;
  background: rgba(255, 0, 0, 0.1);
  border: none;
  border-radius: 4px;
  color: #ff4444;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 0, 0, 0.2);
  }
`;

const MobileActionMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-radius: 16px 16px 0 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transform: translateY(${props => props.show ? '0' : '100%'});
  transition: transform 0.3s ease;
  z-index: 1000;
`;

const ActionButton = styled.button`
  width: 100%;
  padding: 16px;
  margin-bottom: 8px;
  border: none;
  border-radius: 8px;
  background: ${props => props.variant === 'danger' ? '#ffebee' : '#f5f5f5'};
  color: ${props => props.variant === 'danger' ? '#ff4444' : '#333'};
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MoveIndicator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  transform: translate(-50%, -50%) 
    rotate(${props => props.angle}deg)
    translateX(${props => props.radius}px);
  border: 3px dashed #4a90e2;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
  pointer-events: none;
  z-index: 2;

  @keyframes pulse {
    0% { opacity: 0.8; }
    50% { opacity: 0.4; }
    100% { opacity: 0.8; }
  }
`;

const MovePrompt = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(74, 144, 226, 0.9);
  color: white;
  padding: 12px 24px;
  border-radius: 24px;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${props => props.show ? 1 : 0};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  z-index: 999;
`;

// 添加 Modal 相關樣式
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${props => props.show ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`;

const ProductDisplay = ({ onCrystalClick }) => {
  const { currentDesign, setCurrentDesign, setSelectedCrystal } = useDesign();
  const [beadPositions, setBeadPositions] = useState([]);
  const [displaySize, setDisplaySize] = useState(200);
  const [remainingLength, setRemainingLength] = useState(currentDesign.size);
  const [draggedBead, setDraggedBead] = useState(null);
  const [isSpaceFull, setIsSpaceFull] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartTime, setDragStartTime] = useState(0);
  const [showFloating, setShowFloating] = useState(false);
  const sizesInCm = [14.0, 15.0, 16.0, 17.0, 18.0];
  const currentSizeInCm = currentDesign.size / 10;
  const [inputValue, setInputValue] = useState(currentSizeInCm.toString());
  const [sizeError, setSizeError] = useState('');
  const [selectedBeadIndex, setSelectedBeadIndex] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isDraggingEnabled, setIsDraggingEnabled] = useState(false);
  const [moveMode, setMoveMode] = useState(false);
  const [sourceIndex, setSourceIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    if (currentDesign.crystals.length > 0) {
      const wristCircumference = currentDesign.size;
      const FIXED_CIRCLE_SIZE = 200;
      const BRACELET_RADIUS = FIXED_CIRCLE_SIZE / 2;
      const MM_TO_PIXEL = 3.5;
      const FIXED_GAP_ANGLE = 20; // 水晶之間的固定間距角度
      
      // 計算實際使用的長度
      const usedLength = currentDesign.crystals.reduce((sum, crystal) => {
        return sum + crystal.size;
      }, 0);

      // 計算實際剩餘長度
      const remaining = Math.max(0, wristCircumference - usedLength);
      setRemainingLength(remaining);
      setIsSpaceFull(remaining <= 0);

      // 計算總共需要的角度（包含間距）
      const totalGapAngles = FIXED_GAP_ANGLE * currentDesign.crystals.length;
      const availableAngleForBeads = 360 - totalGapAngles;

      // 計算每毫米對應的角度（不包含間距）
      const anglePerMm = availableAngleForBeads / wristCircumference;

      // 計算位置
      let currentAngle = 0;
      const positions = currentDesign.crystals.map((crystal, index) => {
        // 計算這個水晶需要的角度
        const beadAngle = crystal.size * anglePerMm;
        
        // 設定水晶位置（加上間距）
        const angle = currentAngle;
        
        // 更新下一個水晶的起始角度（加上本水晶的角度和間距）
        currentAngle = currentAngle + beadAngle + FIXED_GAP_ANGLE;

        // 計算顯示尺寸
        const displaySize = crystal.size * MM_TO_PIXEL;

        return {
          ...crystal,
          angle,
          radius: BRACELET_RADIUS,
          displaySize,
          arcAngle: beadAngle
        };
      });
      
      setBeadPositions(positions);
    } else {
      setBeadPositions([]);
      setRemainingLength(currentDesign.size);
      setIsSpaceFull(false);
    }
  }, [currentDesign]);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 300;
      setShowFloating(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setInputValue(currentSizeInCm.toString());
  }, [currentSizeInCm]);

  const handleBeadClick = (bead, index, e) => {
    e.preventDefault();
    
    if (moveMode) {
      if (sourceIndex === null) {
        setSourceIndex(index);
      } else if (index !== sourceIndex) {
        const newCrystals = [...currentDesign.crystals];
        const temp = newCrystals[sourceIndex];
        newCrystals[sourceIndex] = newCrystals[index];
        newCrystals[index] = temp;
        setCurrentDesign(prev => ({
          ...prev,
          crystals: newCrystals
        }));
        setMoveMode(false);
        setSourceIndex(null);
      }
      return;
    }

    if (window.innerWidth > 768) {
      console.log('Setting selected crystal:', bead);
      setSelectedCrystal(bead);
      setShowModal(true);
    } else {
      setSelectedBeadIndex(index);
      setShowMobileMenu(true);
    }
  };

  const handleBeadDragStart = (e, index) => {
    setDragStartTime(Date.now());
    e.dataTransfer.setData('moveBeadIndex', index.toString());
    setIsDragging(true);
  };

  const handleBeadDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    if (isSpaceFull) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    
    const moveBeadIndex = e.dataTransfer.getData('moveBeadIndex');
    if (moveBeadIndex) {
      const fromIndex = parseInt(moveBeadIndex);
      
      // 計算拖放位置對應的角度
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dropX = e.clientX - centerX;
      const dropY = e.clientY - centerY;
      const dropAngle = (Math.atan2(dropY, dropX) * 180 / Math.PI + 360) % 360;

      // 找出最接近拖放角度的水晶位置
      let toIndex = 0;
      let minAngleDiff = 360;
      beadPositions.forEach((bead, index) => {
        const angleDiff = Math.abs(bead.angle - dropAngle);
        if (angleDiff < minAngleDiff) {
          minAngleDiff = angleDiff;
          toIndex = index;
        }
      });

      // 交換位置
      if (fromIndex !== toIndex) {
        const newCrystals = [...currentDesign.crystals];
        const temp = newCrystals[fromIndex];
        newCrystals[fromIndex] = newCrystals[toIndex];
        newCrystals[toIndex] = temp;

        setCurrentDesign(prev => ({
          ...prev,
          crystals: newCrystals
        }));
      }
      
      setIsDragging(false);
      return;
    }

    // 處理從水晶選擇區拖入新水晶的情況
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

  const handleSizeChange = (sizeInCm) => {
    const newSizeInMm = sizeInCm * 10;
    const currentCrystals = [...currentDesign.crystals];
    
    // 計算目前水晶總長度
    let totalCrystalLength = currentCrystals.reduce((sum, crystal) => sum + crystal.size, 0);
    
    // 如果新的手圍尺寸小於目前水晶總長度，從後面開始移除水晶
    while (totalCrystalLength > newSizeInMm && currentCrystals.length > 0) {
      const removedCrystal = currentCrystals.pop();
      totalCrystalLength -= removedCrystal.size;
    }

    setCurrentDesign(prev => ({
      ...prev,
      size: newSizeInMm,
      crystals: currentCrystals
    }));

    // 更新剩餘長度
    setRemainingLength(newSizeInMm - totalCrystalLength);
  };

  const handleCustomSize = (e) => {
    const value = e.target.value;
    setInputValue(value);
    
    const valueInCm = parseFloat(value);
    if (value === '') {
      setSizeError('');
    } else if (isNaN(valueInCm)) {
      setSizeError('請輸入有效的數字');
    } else if (valueInCm < 8) {
      setSizeError('手圍尺寸不得小於 8 cm');
    } else if (valueInCm > 30) {
      setSizeError('手圍尺寸不得大於 30 cm');
    } else {
      setSizeError('');
      handleSizeChange(valueInCm);
    }
  };

  const handleClearAll = () => {
    setCurrentDesign(prev => ({
      ...prev,
      crystals: []
    }));
    setBeadPositions([]);
    setRemainingLength(currentDesign.size);
  };

  const handleMobileActionClick = (action) => {
    setShowMobileMenu(false);
    
    switch(action) {
      case 'info':
        // 設置選中的水晶並顯示 Modal
        setSelectedCrystal(currentDesign.crystals[selectedBeadIndex]);
        setShowModal(true);
        break;
      case 'move':
        setMoveMode(true);
        setSourceIndex(selectedBeadIndex);
        break;
      case 'delete':
        handleBeadRemove(selectedBeadIndex);
        break;
      default:
        break;
    }
  };

  const handleCancelMove = () => {
    setMoveMode(false);
    setSourceIndex(null);
    setSelectedBeadIndex(null);
  };

  return (
    <>
      <DisplayContainer>
        <SizeSelectorContainer>
          <Title>
            手圍尺寸
            <Unit>cm</Unit>
          </Title>
          <SizeOptions>
            {sizesInCm.map(size => (
              <SizeButton
                key={size}
                active={currentSizeInCm === size}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </SizeButton>
            ))}
            <CustomInput
              type="number"
              step="0.1"
              min="0"
              max="30"
              value={inputValue}
              onChange={handleCustomSize}
              placeholder="自訂"
            />
          </SizeOptions>
          {sizeError && <ErrorMessage>{sizeError}</ErrorMessage>}
        </SizeSelectorContainer>
        
        <ImageContainer>
          <SizeDisplay style={{ 
            color: isSpaceFull ? '#ff4444' : 'inherit' 
          }}>
            剩餘：{(remainingLength / 10).toFixed(1)} cm
          </SizeDisplay>
          {beadPositions.length > 0 && (
            <ClearAllButton onClick={handleClearAll}>
              清除全部
            </ClearAllButton>
          )}
          {moveMode && (
            <MovePrompt>
              {sourceIndex === null ? '請選擇要移動的水晶' : '請選擇目標位置'}
            </MovePrompt>
          )}
          <BraceletContainer 
            onDragOver={isSpaceFull ? null : handleDragOver}
            onDrop={isSpaceFull ? null : handleDrop}
            style={{
              cursor: isSpaceFull ? 'not-allowed' : 'default',
              pointerEvents: isSpaceFull ? 'none' : 'auto'
            }}
          >
            {beadPositions.map((bead, index) => (
              <div key={`${bead.id}-${index}`} style={{ position: 'relative' }}>
                <CrystalBead
                  src={bead.image}
                  alt={bead.name}
                  displaySize={bead.displaySize}
                  angle={bead.angle}
                  radius={bead.radius}
                  onClick={(e) => handleBeadClick(bead, index, e)}
                  draggable={!moveMode}
                  onDragStart={(e) => handleBeadDragStart(e, index)}
                  onDragEnd={handleBeadDragEnd}
                  moveMode={moveMode}
                  isSource={moveMode && index === sourceIndex}
                  isTarget={moveMode && index !== sourceIndex}
                  style={{
                    cursor: moveMode ? (
                      index === sourceIndex ? 'default' : 'pointer'
                    ) : 'grab',
                    opacity: moveMode ? (
                      index === sourceIndex ? 1 : 0.7
                    ) : 1
                  }}
                />
              </div>
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
      
      <Backdrop show={showMobileMenu} onClick={handleCancelMove} />
      <MobileActionMenu show={showMobileMenu}>
        <ActionButton 
          onClick={() => handleMobileActionClick('info')}
        >
          查看資訊
        </ActionButton>
        <ActionButton 
          onClick={() => handleMobileActionClick('move')}
        >
          移動位置
        </ActionButton>
        <ActionButton 
          variant="danger"
          onClick={() => handleMobileActionClick('delete')}
        >
          刪除水晶
        </ActionButton>
      </MobileActionMenu>

      {/* 添加 Modal */}
      <Modal show={showModal} onClick={() => setShowModal(false)}>
        <ModalContent onClick={e => e.stopPropagation()}>
          <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
          <ProductInfo />
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductDisplay; 