import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDesign } from '../../contexts/DesignContext';
import { crystals } from '../../data/crystals';

const Container = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 1200px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

const TemplatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TemplateCard = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  }
`;

const PreviewContainer = styled.div`
  height: 200px;
  background: #f8f8f8;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  overflow: hidden;
`;

const CirclePreviewContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: transparent;
`;

const CircularCrystalBead = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform-origin: center;
  transform: 
    translate(-50%, -50%) 
    rotate(${props => props.angle}deg) 
    translateX(${props => props.radius}px)
    rotate(-${props => props.angle}deg);
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: ${props => props.size > 20 ? 2 : 1};
`;

const BeadImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const BeadGloss = styled.div`
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

const TemplateInfo = styled.div`
  padding: 15px;
`;

const TemplateName = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
  color: #333;
`;

const TemplateDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Tag = styled.span`
  background: #f0f0f0;
  color: #666;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
`;

// 預設範本
const templates = [
  {
    id: 'green-rejuvenation',
    name: '綠色系復活力量',
    description: '以鳳凰石和綠紋石組成的手鍊，帶來再生、活力和和諧',
    tags: ['再生', '活力', '愛', '和諧'],
    color: '綠色系',
    size: 147, // 14.7cm
    price: 1490,
    crystals: (() => {
      const phoenixStones = Array(12).fill().map(() => crystals.find(c => c.name === '鳳凰石'));
      const greenVeinStones = Array(2).fill().map(() => crystals.find(c => c.name === '綠紋石'));
      return [...phoenixStones, ...greenVeinStones].filter(Boolean);
    })()
  },
  {
    id: 'blue-calm-focus',
    name: '藍色系寧靜',
    description: '藍月光與藍磷輝的組合，帶來寧靜、聚焦和洞察力',
    tags: ['洞察', '聚焦'],
    color: '藍色系',
    size: 138, // 13.8cm
    price: 676,
    crystals: (() => {
        const bluePhosphors = Array(6).fill().map(() => crystals.find(c => c.name === '藍磷輝'));
      const blueMoonstones = Array(2).fill().map(() => crystals.find(c => c.name === '藍月光'));
      const bluePhosphos = Array(6).fill().map(() => crystals.find(c => c.name === '藍磷輝'));
      const blueMoonstoneq = Array(2).fill().map(() => crystals.find(c => c.name === '藍月光'));
      return [...blueMoonstones, ...bluePhosphors, ...blueMoonstoneq, ...bluePhosphos].filter(Boolean);
    })()
  },
  {
    id: 'green-harmony-balance',
    name: '綠色系和諧平衡',
    description: '東陵玉、藍月光與海藍寶的組合，帶來和諧與平衡',
    tags: ['和諧', '平衡'],
    color: '綠色系',
    size: 142, // 14.2cm
    price: 205,
    crystals: (() => {
      const blueMoonstone = crystals.find(c => c.name === '藍月光');
      const aquamarines = Array(1).fill().map(() => crystals.find(c => c.name === '海藍寶'));
      const donglingJades = Array(12).fill().map(() => crystals.find(c => c.name === '東陵玉'));
      const aquamarine = Array(1).fill().map(() => crystals.find(c => c.name === '海藍寶'));
      return [blueMoonstone, ...aquamarines, ...donglingJades, ...aquamarine].filter(Boolean);
    })()
  },
  {
    id: 'multicolor-love-harmony',
    name: '多色系愛與和諧',
    description: '綠紋石、東陵玉、藍月光和梅花碧璽的組合，帶來愛與和諧',
    tags: ['愛', '和諧'],
    color: '多色系',
    size: 147, // 14.7cm
    price: 561,
    crystals: (() => {
      const greenVeinStones3 = Array(4).fill().map(() => crystals.find(c => c.name === '綠紋石'));
      const donglingJade = crystals.find(c => c.name === '東陵玉');
      const greenVeinStones2 = Array(4).fill().map(() => crystals.find(c => c.name === '綠紋石'));
      const blueMoonstone = crystals.find(c => c.name === '藍月光');
      const greenVeinStones1 = Array(4).fill().map(() => crystals.find(c => c.name === '綠紋石'));
      const plumTourmaline = crystals.find(c => c.name === '梅花碧璽');
      return [...greenVeinStones3, donglingJade, ...greenVeinStones2, blueMoonstone, ...greenVeinStones1, plumTourmaline].filter(Boolean);
    })()
  },
  {
    id: 'orange-creativity-protection',
    name: '橙色系創造保護',
    description: '橙雪花幽靈與髮晶的組合，帶來創造力與保護',
    tags: ['創造力', '保護'],
    color: '橙色系',
    size: 149, // 14.9cm
    price: 1430,
    crystals: (() => {
      const orangeSnowflakePhantoms = Array(5).fill().map(() => crystals.find(c => c.name === '橙雪花幽靈'));
      const hairCrystals = Array(1).fill().map(() => crystals.find(c => c.name === '髮晶'));
      const orangeSnowflakePhantoms2 = Array(5).fill().map(() => crystals.find(c => c.name === '橙雪花幽靈'));
      const hairCrystals2 = Array(1).fill().map(() => crystals.find(c => c.name === '髮晶'));

      return [...orangeSnowflakePhantoms, ...hairCrystals, ...orangeSnowflakePhantoms2, ...hairCrystals2].filter(Boolean);
    })()
  },
];

// 新增價格和尺寸顯示
const PriceTag = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 13px;
  color: #666;
`;

const FilterIndicator = styled.div`
  background: #f5f5f5;
  padding: 10px 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ClearFilterButton = styled.button`
  background: none;
  border: none;
  color: #4a90e2;
  cursor: pointer;
  padding: 5px 10px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const EmptyMessage = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 40px;
  background: #f9f9f9;
  border-radius: 8px;
  color: #666;
`;

const InspirationTemplates = () => {
  const navigate = useNavigate();
  const { setCurrentDesign } = useDesign();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [filteredTemplates, setFilteredTemplates] = useState(templates);
  const [activeColorFilter, setActiveColorFilter] = useState('');
  
  // 修改 InspirationTemplates 組件中的篩選邏輯
  useEffect(() => {
    // 使用和 NumerologyCalculator 相同的鍵名
    const selectedColor = localStorage.getItem('crystal_color_filter');
    const timestamp = localStorage.getItem('filter_timestamp');
    
    console.log(`檢查顏色過濾器: ${selectedColor}, 時間戳: ${timestamp}`);
    console.log(`當前組件已載入，URL: ${window.location.href}`);
    
    if (selectedColor) {
      setActiveColorFilter(selectedColor); // 保存當前過濾顏色
      const filterColor = selectedColor.toLowerCase();
      
      console.log(`開始過濾 ${filterColor} 系水晶...`);
      
      // 更全面且更寬鬆的顏色映射
      const colorMap = {
        '紅色': ['紅色系', '紅', '紅色', '多色系'],
        '黑色': ['黑色系', '黑', '黑色', '多色系'],
        '白色': ['白色系', '白', '白色', '多色系'],
        '黃色': ['黃色系', '黃', '黃色', '橙色系', '橘色系', '多色系'],
        '橙色': ['橙色系', '橙', '橙色', '橘色系', '橘', '橘色', '黃色系', '多色系'],
        '藍色': ['藍色系', '藍', '藍色', '多色系'],
        '綠色': ['綠色系', '綠', '綠色', '多色系'],
        '粉紅': ['粉紅系', '粉紅', '粉紅色', '粉色系', '粉色', '粉紅', '多色系'],
        '紫色': ['紫色系', '紫', '紫色', '多色系']
      };
      
      // 列出所有可用模板的顏色，幫助調試
      console.log('可用模板顏色:');
      templates.forEach(t => console.log(`- ${t.name}: ${t.color}`));
      
      // 使用更寬鬆的匹配方式
      const filtered = templates.filter(template => {
        const templateColor = template.color.toLowerCase();
        
        // 檢查顏色是否匹配映射表中的任何一個顏色
        if (colorMap[filterColor]) {
          return colorMap[filterColor].some(c => 
            templateColor.includes(c.toLowerCase())
          );
        }
        
        // 直接檢查顏色名稱是否包含在模板顏色中
        return templateColor.includes(filterColor);
      });
      
      console.log(`過濾後找到 ${filtered.length} 個模板`);
      
      // 當沒有找到匹配的模板時，使用更寬鬆的方法
      if (filtered.length === 0) {
        console.log('沒有找到精確匹配，嘗試更寬鬆的匹配...');
        
        // 更寬鬆的匹配 - 檢查可能的顏色關聯
        const relatedTemplates = templates.filter(template => {
          const tColor = template.color.toLowerCase();
          
          // 檢查所有可能的相關顏色
          if (filterColor === '黃色' || filterColor === '橙色' || filterColor === '橘色') {
            return tColor.includes('黃') || tColor.includes('橙') || 
                   tColor.includes('橘') || tColor.includes('多色');
          }
          
          if (filterColor === '綠色' || filterColor === '藍色') {
            return tColor.includes('綠') || tColor.includes('藍') || 
                   tColor.includes('多色');
          }
          
          if (filterColor === '紅色' || filterColor === '粉紅' || filterColor === '紫色') {
            return tColor.includes('紅') || tColor.includes('粉') || 
                   tColor.includes('紫') || tColor.includes('多色');
          }
          
          // 默認包括多色系
          return tColor.includes('多色');
        });
        
        if (relatedTemplates.length > 0) {
          console.log(`找到 ${relatedTemplates.length} 個相關模板`);
          setFilteredTemplates(relatedTemplates);
        } else {
          console.log('沒有找到相關模板，顯示所有模板');
          setFilteredTemplates(templates);
        }
      } else {
        setFilteredTemplates(filtered);
      }
    } else {
      console.log('沒有找到顏色過濾條件，顯示所有模板');
      setFilteredTemplates(templates);
      setActiveColorFilter('');
    }
    
    // 清除篩選器標記以避免下次載入時仍然生效
    return () => {
      // 可選：僅在卸載組件時清除
      // localStorage.removeItem('crystal_color_filter');
      // localStorage.removeItem('filter_timestamp');
    };
  }, []);
  
  // 增加一個清除過濾器的功能
  const clearColorFilter = () => {
    localStorage.removeItem('crystal_color_filter');
    localStorage.removeItem('filter_timestamp');
    setFilteredTemplates(templates);
    setActiveColorFilter('');
  };
  
  // 監聽視窗大小變化
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // 更新計算水晶位置的函數，參考 SurpriseGenerator 的實現方式
  const calculateBeadPositions = (crystals) => {
    if (!crystals || crystals.length === 0) return [];
    
    const positions = [];
    const totalBeads = crystals.length;
    // 圓的半徑
    const baseRadius = 60;
    
    // 計算每個水晶的位置
    for (let i = 0; i < totalBeads; i++) {
      const crystal = crystals[i];
      
      // 計算基於水晶大小的顯示尺寸
      const sizeFactor = crystal.size / 8; // 相對於基準水晶大小(8mm)的比例
      let displaySize = 20 * sizeFactor; // 與手機版使用相同的比例
      
      // 限制大小範圍
      displaySize = Math.max(15, Math.min(displaySize, 25));
      
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
  
  const handleTemplateClick = (template) => {
    // 將選定的範本設置為當前設計
    const newDesign = {
      size: template.size || 160, // 使用範本指定的尺寸，或預設為16cm
      crystals: template.crystals.map(crystal => ({
        ...crystal,
        id: `${crystal.id}-${Date.now()}-${Math.random()}`
      }))
    };
    
    setCurrentDesign(newDesign);
    
    // 根據裝置類型決定導航目標
    if (isMobile) {
      // 手機版導航到個人頁面
      navigate('/profile');
    } else {
      // 桌面版導航到主編輯頁面
      navigate('/');
    }
  };
  
  return (
    <Container>
      <Title>來點靈感 - 水晶手鍊範本</Title>
      
      {/* 添加一個顯示當前過濾條件的區域 */}
      {activeColorFilter && (
        <FilterIndicator>
          <span>當前顯示: {activeColorFilter}系水晶</span>
          <ClearFilterButton onClick={clearColorFilter}>
            清除過濾
          </ClearFilterButton>
        </FilterIndicator>
      )}
      
      <TemplatesGrid>
        {filteredTemplates.map(template => {
          // 計算每個範本的水晶位置
          const beadPositions = calculateBeadPositions(template.crystals);
          
          return (
            <TemplateCard key={template.id} onClick={() => handleTemplateClick(template)}>
              <PreviewContainer>
                <PriceTag>${template.price}</PriceTag>
                <CirclePreviewContainer>
                  {beadPositions.map((bead, index) => (
                    <CircularCrystalBead 
                      key={`${template.id}-${index}`}
                      size={bead.displaySize}
                      angle={bead.angle}
                      radius={bead.radius}
                      index={index}
                    >
                      <BeadImage
                        src={bead.image}
                        alt={bead.name || `水晶 ${index + 1}`}
                        onError={(e) => {
                          e.target.src = 'default-crystal.png'; // 圖片載入失敗時的替代圖像
                        }}
                      />
                      <BeadGloss />
                    </CircularCrystalBead>
                  ))}
                </CirclePreviewContainer>
              </PreviewContainer>
              <TemplateInfo>
                <TemplateName>{template.name}</TemplateName>
                <DetailsRow>
                  <span>顏色: {template.color}</span>
                  <span>尺寸: {(template.size/10).toFixed(1)} cm</span>
                </DetailsRow>
                <TemplateDescription>{template.description}</TemplateDescription>
                <TagsContainer>
                  {template.tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagsContainer>
              </TemplateInfo>
            </TemplateCard>
          );
        })}
        
        {filteredTemplates.length === 0 && (
          <EmptyMessage>
            沒有找到符合 {activeColorFilter} 系的水晶範本。
          </EmptyMessage>
        )}
      </TemplatesGrid>
    </Container>
  );
};

export default InspirationTemplates; 