import styled from 'styled-components';
import { useDesign } from '../../contexts/DesignContext';
import { useState, useEffect } from 'react';
import React from 'react';
import ProductInfo from '../ProductInfo';
import heartIcon from '../../assets/Logo/heart.png';

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
  top: calc(50% + 90px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  border-radius: 50%;
  transition: all 0.3s ease;
`;

const ConnectionLine = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  height: 2px;
  transform-origin: left center;
  z-index: 0;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
`;

const CrystalBead = styled.div`
  position: absolute;
  width: ${props => props.displaySize}px;
  height: ${props => props.displaySize}px;
  left: 50%;
  top: 50%;
  transform-origin: center;
  transform: 
    translate(-50%, -50%)
    rotate(${props => props.angle}deg)
    translateX(${props => props.radius}px)
    rotate(-${props => props.angle}deg);
  transition: all 0.3s ease;
  z-index: ${props => props.moveMode ? (props.isSource ? 3 : 2) : (props.size > 10 ? 2 : 1)};
  pointer-events: auto;
  border-radius: 50%;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40%;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    pointer-events: none;
  }
  
  ${props => props.moveMode && `
    filter: brightness(${props.isSource ? '1.2' : props.isTarget ? '1' : '0.7'});
    transform: translate(-50%, -50%)
      rotate(${props.angle}deg)
      translateX(${props.radius}px)
      rotate(-${props.angle}deg)
      scale(${props.isSource || props.isTarget ? '1.1' : '1'});
    ${props.isTarget ? 'outline: 2px solid #4a90e2;' : ''}
  `}
`;

const BeadImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  display: block;
`;

const BeadGloss = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5);
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), transparent 70%);
  pointer-events: none;
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
  cursor: pointer;
  color: #666;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: scale(1.1);
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
  
  img {
    width: 24px;
    height: 24px;
    
    @media (min-width: 768px) {
      width: 28px;
      height: 28px;
    }
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

// 修正 processImageUrl 函數
const processImageUrl = (url) => {
  // 如果 URL 為空或未定義，返回空字符串
  if (!url) return '';
  
  // 如果 URL 已經是完整的 URL，則直接返回
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  
  // 如果 URL 是相對路徑，則直接返回，不添加任何前綴
  // React 會自動從 public 目錄加載
  return url;
};

const ProductDisplay = ({ onCrystalClick }) => {
  const { currentDesign, setCurrentDesign, setSelectedCrystal, savedDesigns, setSavedDesigns } = useDesign();
  const [beadPositions, setBeadPositions] = useState([]);
  const [displaySize, setDisplaySize] = useState(200);
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
  const [usedLength, setUsedLength] = useState(0);

  useEffect(() => {
    if (currentDesign.crystals.length > 0) {
      const wristCircumference = currentDesign.size;
      
      // 計算實際使用的長度（水晶長度加總）
      const totalUsedLength = currentDesign.crystals.reduce((sum, crystal) => {
        return sum + crystal.size;
      }, 0);
      
      // 更新使用的長度狀態
      setUsedLength(totalUsedLength);
      

      // 如果水晶總長度超出手圍尺寸，自動調整手圍尺寸
      if (totalUsedLength > wristCircumference) {
        // 設置新的手圍尺寸，稍微大於水晶總長度
        const newSize = Math.ceil(totalUsedLength / 10) * 10; // 向上取整到最接近的整數厘米
        
        console.log(`自動調整手圍尺寸：從 ${wristCircumference}mm 到 ${newSize}mm`);
        
        // 更新設計的手圍尺寸
        setCurrentDesign(prev => ({
          ...prev,
          size: newSize
        }));
        
        // 提前返回，等待下一次渲染
        return;
      }

      // 根據手圍尺寸優化水晶大小與排列
      const totalBeads = currentDesign.crystals.length;
      
      // 計算手圍尺寸與標準尺寸的比例
      const standardWristSize = 160; // 標準手圍尺寸(mm)
      const sizeRatio = wristCircumference / standardWristSize;
      
      // 使用反比例關係調整水晶大小 - 手圍越大，水晶相對越小
      // 這樣可以確保水晶數量增加時，整體效果更加美觀
      const sizeAdjustFactor = 1 / Math.sqrt(sizeRatio);
      
      // 根據手圍尺寸調整半徑 - 手圍越大，半徑越大
      const adjustedRadius = 120 * Math.sqrt(sizeRatio);
      
      // 計算每個水晶的位置和大小
      const positions = [];
      
      // 計算水晶在圓上的均勻分佈角度 - 但要考慮水晶大小
      // 首先計算所有水晶的總角度佔用
      let totalAngleOccupation = 0;
      const angleOccupations = [];
      
      for (let i = 0; i < totalBeads; i++) {
        const crystal = currentDesign.crystals[i];
        
        // 根據水晶大小計算顯示尺寸
        const baseDisplaySize = 45; // 基準顯示尺寸(px)
        const sizeFactor = crystal.size / 8; // 相對於基準水晶大小(8mm)的比例
        
        // 計算顯示尺寸 - 手圍越大，水晶相對越小
        let displaySize = baseDisplaySize * sizeFactor * sizeAdjustFactor;
        
        // 限制在合理範圍內
        const minSize = 25 * sizeAdjustFactor;
        const maxSize = 60 * sizeAdjustFactor;
        displaySize = Math.max(minSize, Math.min(displaySize, maxSize));
        
        // 計算水晶在圓上的角度佔用 - 根據水晶大小和半徑
        // 使用弧長公式：角度(弧度) = 弧長 / 半徑
        // 弧長近似為水晶直徑
        const arcLength = displaySize;
        const angleOccupation = (arcLength / adjustedRadius) * (180 / Math.PI);
        
        angleOccupations.push({
          crystal,
          displaySize,
          angleOccupation
        });
        
        totalAngleOccupation += angleOccupation;
      }
      
      // 計算重疊係數 - 使水晶看起來緊密串連
      // 重疊係數越大，水晶重疊越多
      const overlapFactor = 1.25;
      
      // 調整總角度佔用，考慮重疊
      const adjustedTotalAngleOccupation = totalAngleOccupation / overlapFactor;
      
      // 計算每個水晶的角度位置
      let currentAngle = 0;
      
      for (let i = 0; i < angleOccupations.length; i++) {
        const { crystal, displaySize, angleOccupation } = angleOccupations[i];
        
        // 計算角度 - 考慮水晶大小和重疊
        const angle = currentAngle + (angleOccupation / 2);
        
        // 更新當前角度
        currentAngle += angleOccupation / overlapFactor;
        
        positions.push({
          ...crystal,
          angle: (angle * 360) / adjustedTotalAngleOccupation,
          radius: adjustedRadius,
          displaySize,
          sizeAdjustFactor
        });
      }
      
      setBeadPositions(positions);
    } else {
      setBeadPositions([]);
      setUsedLength(0);
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

  // 修改添加水晶的函數，確保自動調整手圍尺寸
  const handleAddCrystal = (crystal) => {
    // 檢查是否還有剩餘空間
    const currentCrystals = [...currentDesign.crystals];
    const currentUsedLength = currentCrystals.reduce((sum, c) => sum + c.size, 0);
    const remainingSpace = currentDesign.size - currentUsedLength;
    
    // 如果剩餘空間不足，自動調整手圍尺寸
    if (crystal.size > remainingSpace) {
      const newSize = currentDesign.size + (crystal.size - remainingSpace) + 2; // 加2mm作為緩衝
      
      // 更新設計，同時添加新水晶和調整手圍尺寸
      setCurrentDesign(prev => ({
        ...prev,
        size: newSize,
        crystals: [...prev.crystals, crystal]
      }));
      
      console.log(`添加水晶後自動調整手圍尺寸：從 ${currentDesign.size}mm 到 ${newSize}mm`);
    } else {
      // 如果空間足夠，直接添加水晶
      setCurrentDesign(prev => ({
        ...prev,
        crystals: [...prev.crystals, crystal]
      }));
    }
  };

  // 修改 renderConnectionLines 函數，使連接線更加隱蔽
  const renderConnectionLines = () => {
    if (beadPositions.length < 2) return null;
    
    return beadPositions.map((bead, index) => {
      const nextIndex = (index + 1) % beadPositions.length;
      const nextBead = beadPositions[nextIndex];
      
      // 計算兩個水晶的位置
      const angle1 = bead.angle * Math.PI / 180;
      const angle2 = nextBead.angle * Math.PI / 180;
      
      // 計算水晶邊緣的位置，而不是中心點
      const radius1 = bead.radius;
      const radius2 = nextBead.radius;
      
      const x1 = Math.cos(angle1) * radius1;
      const y1 = Math.sin(angle1) * radius1;
      const x2 = Math.cos(angle2) * radius2;
      const y2 = Math.sin(angle2) * radius2;
      
      // 計算連線長度和角度
      const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
      
      // 根據手圍尺寸調整連接線的粗細
      const lineThickness = bead.sizeAdjustFactor ? 1 * bead.sizeAdjustFactor : 1;
      
      return (
        <ConnectionLine 
          key={`connection-${index}`}
          style={{
            width: `${length}px`,
            height: `${lineThickness}px`,
            left: `calc(50% + ${x1}px)`,
            top: `calc(50% + ${y1}px)`,
            transform: `rotate(${angle}deg)`,
            opacity: 0.3, // 降低透明度，使連接線更加隱蔽
            background: 'linear-gradient(to right, rgba(255,255,255,0.7), rgba(220,220,220,0.7))'
          }}
        />
      );
    });
  };

  // 修改 renderCrystals 函數，確保水晶圖片正確顯示
  const renderCrystals = () => {
    return beadPositions.map((bead, index) => (
      <CrystalBead
        key={index}
        displaySize={bead.displaySize}
        angle={bead.angle}
        radius={bead.radius}
        size={bead.size}
        moveMode={moveMode}
        isSource={sourceIndex === index}
        isTarget={moveMode && selectedBeadIndex === index && sourceIndex !== index}
        onClick={(e) => handleBeadClick(bead, index, e)}
        draggable={isDraggingEnabled}
        onDragStart={(e) => handleBeadDragStart(e, index)}
        onDragEnd={handleBeadDragEnd}
        onDragOver={(e) => handleBeadDragOver(e, index)}
        onDrop={(e) => handleBeadDrop(e, index)}
      >
        <BeadImage 
          src={bead.image} 
          alt={`Crystal ${index}`} 
          onError={(e) => {
            console.error(`Failed to load image: ${bead.image}`);
            e.target.src = 'default-crystal.png';
          }}
        />
        <BeadGloss />
      </CrystalBead>
    ));
  };

  return (
    <>
      <DisplayContainer>
        <ImageContainer>
          <SaveButtonContainer>
            <SaveButton onClick={handleSave}>
              <img src={heartIcon} alt="儲存樣式" />
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
            {/* 渲染連接線 */}
            {renderConnectionLines()}
            
            {/* 渲染水晶 */}
            {renderCrystals()}
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
            
            <totalUsedLength>
              目前長度：{(usedLength / 10).toFixed(1)} cm
            </totalUsedLength>
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