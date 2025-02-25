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
  height: 500px;
`;

const BraceletContainer = styled.div`
  position: absolute;
  top: calc(50% + 40px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
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
    translate(-50%, -50%)
    rotate(${props => props.angle}deg)
    translateX(${props => props.radius}px);
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

const ClearAllButton = styled.button`
  position: absolute;
  top: 90px;
  left: 10px;
  padding: 8px 16px;
  background: rgba(255, 0, 0, 0.1);
  border: none;
  border-radius: 4px;
  color: #ff4444;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  
  &:hover {
    background: rgba(255, 0, 0, 0.2);
  }
  
  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileActionMenu = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  z-index: 1001;
  width: 80%;
  max-width: 300px;
  overflow: hidden;
`;

const MobileActionButton = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  background: white;
  text-align: center;
  font-size: 16px;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:active {
    background: #f5f5f5;
  }
`;

const Backdrop = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

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
  z-index: 1100;
  
  @media (max-width: 767px) {
    align-items: flex-start;
    padding-top: 20%;
  }
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  
  @media (max-width: 767px) {
    max-height: 70vh;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 100px;
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

const SaveButtonContainer = styled.div`
  position: absolute;
  top: 90px;
  right: 10px;
  z-index: 10;
  
  @media (min-width: 768px) {
    top: 95px;
    right: 15px;
  }
`;

const SaveButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: scale(1.1);
    color: #ff6b6b;
  }
  
  &:hover::after {
    content: "儲存樣式";
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
  }
  
  @media (min-width: 768px) {
    font-size: 28px; /* 在桌面版上稍微大一點 */
  }
`;

// 添加手圍尺寸選擇器相關樣式，使用不同的變數名稱避免衝突
const ProductSizeContainer = styled.div`
  margin: 15px 0;
  text-align: center;
`;

const ProductSizeTitle = styled.h3`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductUnitLabel = styled.span`
  font-size: 14px;
  color: #666;
  margin-left: 5px;
  font-weight: normal;
`;

const ProductSizeOptions = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
`;

const ProductSizeButton = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${props => props.active ? '#666' : '#fff'};
  color: ${props => props.active ? '#fff' : '#333'};
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: 16px;
  
  &:hover {
    background: ${props => props.active ? '#666' : '#f0f0f0'};
  }
`;

const ProductCustomButton = styled(ProductSizeButton)`
  width: 70px;
  height: 45px;
  border-radius: 22.5px;
  padding: 0 15px;
`;

const ProductCustomInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const ProductCustomInput = styled.input`
  width: 80px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
`;

const ProductUnit = styled.span`
  margin-left: 8px;
  color: #666;
  font-size: 14px;
`;

const RemainingLength = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: ${props => props.isLow ? '#ff6b6b' : '#666'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeartIcon = styled.span`
  color: #ff6b6b;
  margin-left: 5px;
`;

const MoveModeTip = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(74, 144, 226, 0.9);
  color: white;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 14px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CancelMoveButton = styled.button`
  background: white;
  color: #4a90e2;
  border: none;
  border-radius: 15px;
  padding: 4px 10px;
  margin-top: 5px;
  font-size: 12px;
  cursor: pointer;
  
  &:hover {
    background: #f0f0f0;
  }
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eee;
`;

const ActionButton = styled.button`
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    background: #3a80d2;
  }
  
  &:nth-child(2) {
    background: #ff6b6b;
    
    &:hover {
      background: #ff5252;
    }
  }
`;

const ProductDisplay = ({ onCrystalClick }) => {
  const { currentDesign, setCurrentDesign, setSelectedCrystal, savedDesigns, setSavedDesigns } = useDesign();
  const [beadPositions, setBeadPositions] = useState([]);
  const [displaySize, setDisplaySize] = useState(200);
  const [remainingLength, setRemainingLength] = useState(currentDesign.size);
  const [draggedBead, setDraggedBead] = useState(null);
  const [isSpaceFull, setIsSpaceFull] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartTime, setDragStartTime] = useState(0);
  const [showFloating, setShowFloating] = useState(false);
  const sizesInCm = [14, 15, 16, 17, 18];
  const currentSizeInCm = currentDesign.size / 10;
  const [inputValue, setInputValue] = useState(currentSizeInCm.toString());
  const [sizeError, setSizeError] = useState('');
  const [selectedBeadIndex, setSelectedBeadIndex] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isDraggingEnabled, setIsDraggingEnabled] = useState(false);
  const [moveMode, setMoveMode] = useState(false);
  const [sourceIndex, setSourceIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customValue, setCustomValue] = useState('');

  useEffect(() => {
    if (currentDesign.crystals.length > 0) {
      const wristCircumference = currentDesign.size;
      const BRACELET_RADIUS = 120; // 增加手環半徑
      const MM_TO_PIXEL = 5;
      
      // 計算實際使用的長度
      const usedLength = currentDesign.crystals.reduce((sum, crystal) => {
        return sum + crystal.size;
      }, 0);

      // 計算實際剩餘長度
      const remaining = Math.max(0, wristCircumference - usedLength);
      setRemainingLength(remaining);
      setIsSpaceFull(remaining <= 0);

      // 計算每個水晶的位置
      let accumulatedLength = 0;
      const positions = currentDesign.crystals.map((crystal, index) => {
        // 計算每個水晶在手環上的位置
        accumulatedLength += crystal.size / 2; // 加上當前水晶的一半尺寸
        
        // 計算角度 (0度在頂部，順時針增加)
        const angle = (accumulatedLength / wristCircumference) * 360;
        
        // 計算顯示尺寸
        const displaySize = crystal.size * MM_TO_PIXEL;
        
        // 加上當前水晶的另一半尺寸，為下一個水晶做準備
        accumulatedLength += crystal.size / 2;
        
        return {
          ...crystal,
          angle,
          radius: BRACELET_RADIUS, // 固定半徑
          displaySize
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

  // 監聽窗口大小變化
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleBeadClick = (bead, index, event) => {
    // 如果事件對象存在，則阻止默認行為
    if (event) {
      event.preventDefault();
    }
    
    // 如果處於移動模式
    if (moveMode) {
      // 如果已經選擇了源水晶（即 sourceIndex 不為 null）
      if (sourceIndex !== null) {
        // 移動水晶
        const newCrystals = [...currentDesign.crystals];
        const temp = newCrystals[sourceIndex];
        newCrystals[sourceIndex] = newCrystals[index];
        newCrystals[index] = temp;
        
        // 更新設計
        setCurrentDesign({
          ...currentDesign,
          crystals: newCrystals
        });
        
        // 重置移動模式
        setSourceIndex(null);
        setMoveMode(false);
        return;
      }
      
      // 如果還沒有選擇源水晶
      setSourceIndex(index);
      return;
    }
    
    // 檢查是否為移動設備
    if (isMobile) {
      // 在移動設備上，選擇水晶並顯示操作菜單
      setSelectedBeadIndex(index);
      setShowMobileMenu(true);
      return;
    }
    
    // 桌面版的原有邏輯（非移動模式）
    // 設置選中的水晶索引
    setSelectedBeadIndex(index);
    
    // 設置選中的水晶，用於在 ProductInfo 中顯示
    setSelectedCrystal(currentDesign.crystals[index]);
    
    // 顯示模態框
    setShowModal(true);
  };

  const handleBeadDragStart = (e, index) => {
    setDragStartTime(Date.now());
    e.dataTransfer.setData('moveBeadIndex', index.toString());
    setIsDragging(true);
  };

  const handleBeadDragEnd = () => {
    setIsDragging(false);
  };

  const handleBeadDragOver = (e, index) => {
    e.preventDefault();
    if (moveMode && index !== sourceIndex) {
      setSelectedBeadIndex(index);
    }
  };

  const handleBeadDrop = (e, index) => {
    e.preventDefault();
    
    if (moveMode && sourceIndex !== null && index !== sourceIndex) {
      // 交換位置
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
      setSelectedBeadIndex(null);
      return;
    }
    
    // 處理拖放水晶的邏輯
    const moveBeadIndex = e.dataTransfer.getData('moveBeadIndex');
    if (moveBeadIndex) {
      const fromIndex = parseInt(moveBeadIndex);
      
      // 直接交換位置，不再計算角度
      if (fromIndex !== index) {
        const newCrystals = [...currentDesign.crystals];
        const temp = newCrystals[fromIndex];
        newCrystals[fromIndex] = newCrystals[index];
        newCrystals[index] = temp;

        setCurrentDesign(prev => ({
          ...prev,
          crystals: newCrystals
        }));
      }
      
      setIsDragging(false);
    }
  };

  const handleBeadRemove = (index) => {
    setCurrentDesign(prev => ({
      ...prev,
      crystals: prev.crystals.filter((_, i) => i !== index)
    }));
    setSelectedCrystal(null);
  };

  const handleTrashDragEnter = (e) => {
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
    setCustomValue(value);
  };

  const handleCustomSubmit = () => {
    const valueInCm = parseFloat(customValue);
    if (!isNaN(valueInCm) && valueInCm >= 8 && valueInCm <= 30) {
      handleSizeChange(valueInCm);
    }
    setShowCustomInput(false);
  };

  const handleCustomClick = () => {
    setShowCustomInput(true);
    setCustomValue(currentSizeInCm.toString());
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
    switch(action) {
      case 'info':
        // 顯示水晶詳情
        // 設置選中的水晶，用於在 ProductInfo 中顯示
        setSelectedCrystal(currentDesign.crystals[selectedBeadIndex]);
        setShowModal(true);
        break;
      case 'move':
        // 進入移動模式
        setMoveMode(true);
        setSourceIndex(selectedBeadIndex);
        setShowMobileMenu(false); // 關閉菜單，但保持移動模式
        return; // 提前返回，不執行下面的 setShowMobileMenu(false)
      case 'delete':
        // 刪除選中的水晶
        handleBeadRemove(selectedBeadIndex);
        break;
      case 'clearAll':
        // 清除所有水晶
        handleClearAll();
        break;
      default:
        break;
    }
    // 關閉操作菜單
    setShowMobileMenu(false);
  };

  const handleCancelMove = () => {
    setMoveMode(false);
    setSourceIndex(null);
    setSelectedBeadIndex(null);
  };

  const handleSave = () => {
    if (currentDesign.crystals.length > 0) {
      // 儲存到 localStorage
      const newDesign = {
        ...currentDesign,
        id: Date.now(),
        timestamp: new Date()
      };
      
      const updatedDesigns = [...savedDesigns, newDesign];
      setSavedDesigns(updatedDesigns);
      localStorage.setItem('savedDesigns', JSON.stringify(updatedDesigns));
    }
  };

  const handleMoveBeadClick = () => {
    // 進入移動模式
    setMoveMode(true);
    // 關閉模態框
    setShowModal(false);
  };

  return (
    <>
      <DisplayContainer>
        <ImageContainer>
          <SaveButtonContainer>
            <SaveButton onClick={handleSave}>
              ♡
            </SaveButton>
          </SaveButtonContainer>
          <ClearAllButton onClick={handleClearAll}>
            清除全部
          </ClearAllButton>
          
          {/* 添加移動模式提示和取消按鈕 */}
          {moveMode && (
            <MoveModeTip>
              請選擇要交換位置的水晶
              <CancelMoveButton onClick={handleCancelMove}>
                取消移動
              </CancelMoveButton>
            </MoveModeTip>
          )}
          
          <BraceletContainer>
            {/* 添加一個圓形背景，模擬手環 */}
            <svg width="250" height="250" style={{ position: 'absolute', top: 0, left: 0 }}>
              <circle 
                cx="125" 
                cy="125" 
                r="120" 
                fill="none" 
                stroke="#e0e0e0" 
                strokeWidth="1" 
                strokeDasharray="5,5" 
              />
            </svg>
            
            {beadPositions.map((position, index) => (
              <CrystalBead
                key={`${position.id}-${index}`}
                src={position.image}
                alt={position.name}
                displaySize={position.displaySize}
                angle={position.angle}
                radius={position.radius}
                draggable={!moveMode}
                moveMode={moveMode}
                isSource={moveMode && index === sourceIndex}
                isTarget={moveMode && index === selectedBeadIndex}
                onClick={(e) => handleBeadClick(position, index, e)}
                onDragStart={(e) => handleBeadDragStart(e, index)}
                onDragEnd={handleBeadDragEnd}
                onDragOver={(e) => handleBeadDragOver(e, index)}
                onDrop={(e) => handleBeadDrop(e, index)}
                onError={(e) => {
                  e.target.src = '/assets/placeholder.jpg';
                }}
              />
            ))}
          </BraceletContainer>
          
          {/* 手圍尺寸選擇器 */}
          <ProductSizeContainer>
            <ProductSizeTitle>
              手圍尺寸
              <ProductUnitLabel>(cm)</ProductUnitLabel>
            </ProductSizeTitle>
            <ProductSizeOptions>
              {sizesInCm.map(size => (
                <ProductSizeButton
                  key={size}
                  active={currentSizeInCm === size}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </ProductSizeButton>
              ))}
              
              <ProductCustomButton onClick={handleCustomClick}>
                自訂
              </ProductCustomButton>
            </ProductSizeOptions>
            
            {showCustomInput && (
              <ProductCustomInputContainer>
                <ProductCustomInput
                  type="number"
                  step="0.1"
                  min="8"
                  max="30"
                  value={customValue}
                  onChange={handleCustomSize}
                  onBlur={handleCustomSubmit}
                  autoFocus
                />
                <ProductUnit>cm</ProductUnit>
              </ProductCustomInputContainer>
            )}
            
            <RemainingLength isLow={remainingLength < 10}>
              剩餘：{(remainingLength / 10).toFixed(1)}
            </RemainingLength>
          </ProductSizeContainer>
          
          <TrashIcon 
            show={isDragging} 
            onDragEnter={handleTrashDragEnter}
            onDragLeave={handleTrashDragLeave}
            onDrop={handleTrashDrop}
          >
            🗑️
          </TrashIcon>
        </ImageContainer>
      </DisplayContainer>
      
      {/* 桌面版的浮動預覽 */}
      <FloatingPreview show={showFloating && !isMobile}>
        <MiniPreviewContainer>
          {beadPositions.map((bead, index) => {
            const position = calculateMiniBeadPosition(
              index,
              beadPositions.length,
              30
            );
            
            return (
              <MiniCrystalBead
                key={`mini-${bead.id}-${index}`}
                src={bead.image}
                displaySize={bead.displaySize}
                angle={position.angle}
                radius={30}
                alt={bead.name}
                draggable={false}
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
      
      {/* 移動設備操作菜單 */}
      {showMobileMenu && selectedBeadIndex !== null && !moveMode && (
        <MobileActionMenu>
          <MobileActionButton onClick={() => handleMobileActionClick('info')}>
            顯示資訊
          </MobileActionButton>
          <MobileActionButton onClick={() => handleMobileActionClick('move')}>
            移動位置
          </MobileActionButton>
          <MobileActionButton onClick={() => handleMobileActionClick('delete')}>
            刪除水晶
          </MobileActionButton>
          <MobileActionButton onClick={() => handleMobileActionClick('clearAll')}>
            全部刪除
          </MobileActionButton>
          <MobileActionButton onClick={() => setShowMobileMenu(false)}>
            取消
          </MobileActionButton>
        </MobileActionMenu>
      )}
      
      {/* 背景遮罩 */}
      <Backdrop show={showMobileMenu && !moveMode} onClick={() => setShowMobileMenu(false)} />

      <Modal show={showModal}>
        <ModalContent onClick={e => e.stopPropagation()}>
          <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
          <ProductInfo />
          
          {/* 添加移動按鈕 */}
          <ModalActions>
            <ActionButton onClick={handleMoveBeadClick}>
              移動位置
            </ActionButton>
            <ActionButton onClick={() => {
              handleBeadRemove(selectedBeadIndex);
              setShowModal(false);
            }}>
              刪除水晶
            </ActionButton>
          </ModalActions>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductDisplay; 