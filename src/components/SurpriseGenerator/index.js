import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDesign } from '../../contexts/DesignContext';
import { crystals } from '../../data/crystals';
import heartIcon from '../../assets/Logo/heart.png';

// 樣式定義
const Container = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 1200px;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const LeftPanel = styled.div`
  flex: 1;
  margin-bottom: 20px;
  background: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  width: 100%;
`;

const RightPanel = styled.div`
  display: none;
`;

const SizeContainer = styled.div`
  margin-bottom: 20px;
`;

const SizeTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 15px;
  color: #333;
`;

const SizeButtonsRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const SizeButton = styled.button`
  width: 40px;
  height: 40px;
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
    background: ${props => props.active ? '#666' : '#f5f5f5'};
  }
`;

const CustomButton = styled(SizeButton)`
  width: auto;
  padding: 0 15px;
  border-radius: 20px;
`;

const SizeInfo = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
`;

const ClearButton = styled.button`
  padding: 8px 12px;
  background: #ffeeee;
  color: #ff6666;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  margin-right: auto;
  
  &:hover {
    background: #ffe6e6;
  }
`;

const CustomInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 8px;
`;

const CustomInput = styled.input`
  width: 60px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
`;

const UnitLabel = styled.span`
  font-size: 14px;
  color: #666;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
  color: #333;
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const OptionButton = styled.button`
  padding: 12px;
  border-radius: 30px;
  border: 1px solid #ddd;
  background: ${props => props.active ? '#666' : '#fff'};
  color: ${props => props.active ? '#fff' : '#333'};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.active ? '#666' : '#f5f5f5'};
  }
`;

const GenerateButton = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 30px;
  border: none;
  background: #f0f0f0;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.2s ease;
  
  &:hover {
    background: #e0e0e0;
  }
`;

const HeartButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #ddd;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &.active {
    color: #ff6666;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

// 修改手機版水晶預覽相關樣式
const MobilePreviewContainer = styled.div`
  display: none;
  
  @media (max-width: 767px) {
    display: block;
    margin-top: 20px;
    width: 100%;
    height: 150px;
    position: relative;
    background: #f8f8f8;
    border-radius: 10px;
    overflow: hidden;
  }
`;

const MobileCircleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const MobileCrystalBead = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform-origin: center;
  transform: 
    translate(-50%, -50%)
    rotate(${props => props.angle}deg)
    translateX(${props => props.radius}px)
    rotate(-${props => props.angle}deg);
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: ${props => props.size > 12 ? 2 : 1};
`;

const MobileBeadImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const MobileBeadGloss = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.5);
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), transparent 70%);
  pointer-events: none;
`;

const EmptyPreviewMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #aaa;
  font-size: 14px;
  text-align: center;
`;

const PreviewTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
  color: #333;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const SurpriseGenerator = () => {
  const navigate = useNavigate();
  const { currentDesign, setCurrentDesign, savedDesigns, setSavedDesigns } = useDesign();
  
  // 狀態
  const [wristSize, setWristSize] = useState(15);
  const [currentLength, setCurrentLength] = useState(0);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customValue, setCustomValue] = useState('15');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedEnergy, setSelectedEnergy] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  
  // 添加手機預覽相關狀態
  const [mobileBeadPositions, setMobileBeadPositions] = useState([]);
  
  // 選項數據
  const sizeOptions = [14, 15, 16, 17, 18];
  const colorOptions = ['紅色系', '橙色系', '黃色系', '綠色系', '藍色系', '紫色系', '黑色系', '白色系', '多色系'];
  const energyOptions = ['財富', '愛情', '健康', '事業', '學業', '人緣', '保護', '智慧'];
  const priceOptions = ['$300以下', '$300-$500', '$500-$800', '$800以上', '不限'];
  
  // 添加狀態來追蹤當前視窗寬度
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  
  // 監聽窗口大小變化
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // 當前設計變更時更新總長度
  useEffect(() => {
    const length = currentDesign.crystals.reduce((sum, crystal) => sum + crystal.size, 0);
    setCurrentLength(length);
  }, [currentDesign]);
  
  // 當前設計變更時更新手機預覽位置
  useEffect(() => {
    if (currentDesign.crystals.length > 0) {
      // 為手機版計算水晶位置
      const positions = calculateMobileBeadPositions(currentDesign.crystals);
      setMobileBeadPositions(positions);
    } else {
      setMobileBeadPositions([]);
    }
  }, [currentDesign.crystals]);
  
  // 處理尺寸選擇
  const handleSizeSelect = (size) => {
    setWristSize(size);
    // 更新當前設計的尺寸
    setCurrentDesign(prev => ({
      ...prev,
      size: size * 10
    }));
  };
  
  // 處理自定義尺寸
  const handleCustomSizeChange = (e) => {
    setCustomValue(e.target.value);
  };
  
  const applyCustomSize = () => {
    const value = parseFloat(customValue);
    if (!isNaN(value) && value >= 8 && value <= 30) {
      handleSizeSelect(value);
    }
    setShowCustomInput(false);
  };
  
  // 處理色系選擇
  const handleColorSelect = (color) => {
    setSelectedColor(selectedColor === color ? '' : color);
  };
  
  // 處理能量選擇
  const handleEnergySelect = (energy) => {
    setSelectedEnergy(selectedEnergy === energy ? '' : energy);
  };
  
  // 處理價格選擇
  const handlePriceSelect = (price) => {
    setSelectedPrice(selectedPrice === price ? '' : price);
  };
  
  // 處理清除全部
  const handleClearAll = () => {
    setCurrentDesign(prev => ({
      ...prev,
      crystals: []
    }));
  };
  
  // 切換收藏狀態
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    
    if (!isFavorite) {
      // 保存設計
      const newDesign = {
        ...currentDesign,
        id: Date.now().toString(),
        savedAt: new Date().toISOString()
      };
      setSavedDesigns([...savedDesigns, newDesign]);
    }
  };
  
  // 生成隨機手鍊
  const generateRandomBracelet = () => {
    // 根據選擇篩選水晶
    let filteredCrystals = [...crystals];
    
    // 篩選色系
    if (selectedColor) {
      filteredCrystals = filteredCrystals.filter(crystal => crystal.color === selectedColor);
    }
    
    // 篩選能量
    if (selectedEnergy) {
      filteredCrystals = filteredCrystals.filter(crystal => 
        crystal.power === selectedEnergy || 
        (crystal.energy && crystal.energy.includes(selectedEnergy))
      );
    }
    
    // 篩選價格
    if (selectedPrice) {
      // 價格篩選邏輯
      if (selectedPrice === '$300以下') {
        filteredCrystals = filteredCrystals.filter(crystal => crystal.price < 300);
      } else if (selectedPrice === '$300-$500') {
        filteredCrystals = filteredCrystals.filter(crystal => crystal.price >= 300 && crystal.price <= 500);
      } else if (selectedPrice === '$500-$800') {
        filteredCrystals = filteredCrystals.filter(crystal => crystal.price >= 500 && crystal.price <= 800);
      } else if (selectedPrice === '$800以上') {
        filteredCrystals = filteredCrystals.filter(crystal => crystal.price > 800);
      }
    }
    
    // 如果沒有符合條件的水晶，使用全部水晶
    if (filteredCrystals.length === 0) {
      filteredCrystals = [...crystals];
    }
    
    // 決定手鍊總長度
    const targetLengthMm = wristSize * 10;
    
    // 隨機選擇水晶組合
    const selectedCrystals = [];
    let totalLength = 0;
    
    // 為了避免無限循環，設置最大嘗試次數
    let attempts = 0;
    const maxAttempts = 500; // 增加嘗試次數，避免無法填滿手鍊
    
    // 建立一個參與選擇的水晶副本，而不是修改原始列表
    // 這樣可以允許重複選擇同一種水晶
    const availableCrystals = [...filteredCrystals];
    
    // 隨機選擇水晶直到達到目標長度的90%或達到最大嘗試次數
    while (totalLength < targetLengthMm * 0.9 && attempts < maxAttempts) {
      attempts++;
      
      // 如果沒有剩餘水晶可選，重新填充可用水晶列表
      if (availableCrystals.length === 0) {
        availableCrystals.push(...filteredCrystals);
      }
      
      // 隨機選擇一個水晶
      const randomIndex = Math.floor(Math.random() * availableCrystals.length);
      const selectedCrystal = availableCrystals[randomIndex];
      
      // 檢查添加這個水晶是否會超出目標長度
      if (totalLength + selectedCrystal.size <= targetLengthMm) {
        // 使用深拷貝添加水晶，確保每個水晶是獨立的對象
        selectedCrystals.push({...selectedCrystal, id: `${selectedCrystal.id}-${Date.now()}-${Math.random()}`});
        totalLength += selectedCrystal.size;
      }
      
      // 從可用列表中移除這個水晶，但允許在下一次迭代中再次選擇
      availableCrystals.splice(randomIndex, 1);
    }
    
    // 更新當前設計
    setCurrentDesign({
      size: targetLengthMm,
      crystals: selectedCrystals
    });
    
    // 重置收藏狀態
    setIsFavorite(false);
  };
  
  // 計算手機版水晶位置的函數
  const calculateMobileBeadPositions = (crystals) => {
    const totalBeads = crystals.length;
    if (totalBeads === 0) return [];
    
    const positions = [];
    const baseRadius = 50; // 手機版預覽圓的基本半徑
    
    // 計算水晶在圓上的均勻分佈
    for (let i = 0; i < totalBeads; i++) {
      const crystal = crystals[i];
      
      // 計算基於水晶大小的顯示尺寸
      const sizeFactor = crystal.size / 8; // 相對於基準水晶大小(8mm)的比例
      let displaySize = 20 * sizeFactor; // 手機版使用較小的基準尺寸
      
      // 限制大小範圍
      displaySize = Math.max(12, Math.min(displaySize, 28));
      
      // 計算角度 - 均勻分佈在圓上
      const angle = (i / totalBeads) * 360;
      
      positions.push({
        ...crystal,
        angle,
        radius: baseRadius,
        displaySize
      });
    }
    
    return positions;
  };
  
  // 渲染手機版水晶預覽
  const renderMobilePreview = () => {
    // 只在小螢幕裝置上渲染預覽
    const isMobile = window.innerWidth <= 767;
    if (!isMobile) return null;
    
    if (mobileBeadPositions.length === 0) {
      return (
        <EmptyPreviewMessage>
          尚未選擇水晶<br/>
          點擊「來些驚喜」生成手鍊
        </EmptyPreviewMessage>
      );
    }
    
    return mobileBeadPositions.map((bead, index) => (
      <MobileCrystalBead
        key={`mobile-bead-${index}`}
        size={bead.displaySize}
        angle={bead.angle}
        radius={bead.radius}
      >
        <MobileBeadImage
          src={bead.image}
          alt={bead.name || `水晶 ${index + 1}`}
          onError={(e) => {
            e.target.src = 'default-crystal.png'; // 圖片載入失敗時的替代圖像
          }}
        />
        <MobileBeadGloss />
      </MobileCrystalBead>
    ));
  };
  
  return (
    <Container>
      <Layout>
        <LeftPanel>
          <HeaderRow>
            <SizeTitle>手圍尺寸 (cm)</SizeTitle>
          </HeaderRow>
          
          <SizeButtonsRow>
            {sizeOptions.map(size => (
              <SizeButton
                key={size}
                active={Math.abs(wristSize - size) < 0.1}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </SizeButton>
            ))}
            <CustomButton onClick={() => setShowCustomInput(true)}>
              自訂
            </CustomButton>
          </SizeButtonsRow>
          
          {showCustomInput && (
            <CustomInputContainer>
              <CustomInput
                type="number"
                step="0.1"
                min="8"
                max="30"
                value={customValue}
                onChange={handleCustomSizeChange}
                onBlur={applyCustomSize}
                autoFocus
              />
              <UnitLabel>cm</UnitLabel>
            </CustomInputContainer>
          )}
          
          <HeaderRow>
            <SizeInfo>目前長度：{(currentLength / 10).toFixed(1)} cm</SizeInfo>
            <ClearButton onClick={handleClearAll}>清除全部</ClearButton>
            <HeartButton 
              className={isFavorite ? 'active' : ''} 
              onClick={toggleFavorite}
            >
              {isFavorite ? '❤️' : '♡'}
            </HeartButton>
          </HeaderRow>
          
          <Section>
            <SectionTitle>色系</SectionTitle>
            <OptionsGrid>
              {colorOptions.map(color => (
                <OptionButton
                  key={color}
                  active={selectedColor === color}
                  onClick={() => handleColorSelect(color)}
                >
                  {color}
                </OptionButton>
              ))}
            </OptionsGrid>
          </Section>
          
          <Section>
            <SectionTitle>能量</SectionTitle>
            <OptionsGrid>
              {energyOptions.map(energy => (
                <OptionButton
                  key={energy}
                  active={selectedEnergy === energy}
                  onClick={() => handleEnergySelect(energy)}
                >
                  {energy}
                </OptionButton>
              ))}
            </OptionsGrid>
          </Section>
          
          <Section>
            <SectionTitle>總價</SectionTitle>
            <OptionsGrid>
              {priceOptions.map(price => (
                <OptionButton
                  key={price}
                  active={selectedPrice === price}
                  onClick={() => handlePriceSelect(price)}
                >
                  {price}
                </OptionButton>
              ))}
            </OptionsGrid>
          </Section>
          
          <GenerateButton onClick={generateRandomBracelet}>
            來些驚喜
          </GenerateButton>
          
          {/* 只在手機版顯示預覽 */}
          {isMobile && (
            <>
              <PreviewTitle>手鍊預覽</PreviewTitle>
              <MobilePreviewContainer>
                <MobileCircleContainer>
                  {renderMobilePreview()}
                </MobileCircleContainer>
              </MobilePreviewContainer>
            </>
          )}
        </LeftPanel>
        
        {/* 右側面板將由 ProductDisplay 組件自動填充 */}
        <RightPanel />
      </Layout>
    </Container>
  );
};

export default SurpriseGenerator; 