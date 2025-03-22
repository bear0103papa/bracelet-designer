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

// 添加篩選相關樣式組件
const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  padding: 15px;
  background: #f5f5f5;
  border-radius: 8px;
  
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex: 1;
    min-width: 120px;
  }
`;

const FilterLabel = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
  font-weight: bold;
`;

const FilterSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

const ClearAllButton = styled.button`
  background: #f0f0f0;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  margin-top: auto; /* 將按鈕推到底部 */
  align-self: flex-start;
  
  &:hover {
    background: #e0e0e0;
  }
  
  @media (max-width: 767px) {
    align-self: stretch;
    text-align: center;
  }
`;

const TagsSelect = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 5px;
  max-height: 80px;
  overflow-y: auto;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
`;

const TagOption = styled.div`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  cursor: pointer;
  background: ${props => props.selected ? '#4a90e2' : '#f0f0f0'};
  color: ${props => props.selected ? 'white' : '#666'};
  
  &:hover {
    background: ${props => props.selected ? '#3a80d2' : '#e0e0e0'};
  }
`;

const FilteredCount = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
`;

const InspirationTemplates = () => {
  const navigate = useNavigate();
  const { setCurrentDesign } = useDesign();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [filteredTemplates, setFilteredTemplates] = useState(templates);
  const [activeColorFilter, setActiveColorFilter] = useState('');
  
  // 添加篩選狀態
  const [filters, setFilters] = useState({
    color: '',
    size: '',
    tag: '', // 能量標籤
    price: ''
  });
  
  // 提取所有可用的篩選選項
  const filterOptions = {
    color: [...new Set(templates.map(t => t.color))],
    size: ['14cm以下', '14-15cm', '15cm以上'],
    tags: [...new Set(templates.flatMap(t => t.tags))],
    price: ['1000元以下', '1000-1500元', '1500元以上']
  };
  
  // 處理篩選變更
  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value
    });
  };
  
  // 處理標籤篩選
  const handleTagFilter = (e) => {
    // 直接使用 e.target.value 作為選定的標籤值
    setFilters({
      ...filters,
      tag: e.target.value
    });
  };
  
  // 清除所有篩選條件
  const clearAllFilters = () => {
    setFilters({
      color: '',
      size: '',
      tag: '',
      price: ''
    });
    
    localStorage.removeItem('crystal_color_filter');
    localStorage.removeItem('filter_timestamp');
    setActiveColorFilter('');
  };
  
  // 添加缺失的 clearColorFilter 函數
  const clearColorFilter = () => {
    localStorage.removeItem('crystal_color_filter');
    localStorage.removeItem('filter_timestamp');
    setFilteredTemplates(templates);
    setActiveColorFilter('');
  };
  
  // 從 localStorage 更新顏色篩選器
  useEffect(() => {
    const selectedColor = localStorage.getItem('crystal_color_filter');
    
    if (selectedColor) {
      setActiveColorFilter(selectedColor);
      setFilters(prev => ({
        ...prev,
        color: selectedColor + '系' // 添加"系"字以匹配下拉選項
      }));
    }
  }, []);
  
  // 應用篩選器
  useEffect(() => {
    let results = [...templates];
    
    // 篩選顏色
    if (filters.color) {
      const colorToFilter = filters.color.toLowerCase();
      results = results.filter(template => {
        const templateColor = template.color.toLowerCase();
        return templateColor.includes(colorToFilter);
      });
    }
    
    // 篩選尺寸
    if (filters.size) {
      switch(filters.size) {
        case '14cm以下':
          results = results.filter(t => t.size < 140);
          break;
        case '14-15cm':
          results = results.filter(t => t.size >= 140 && t.size <= 150);
          break;
        case '15cm以上':
          results = results.filter(t => t.size > 150);
          break;
        default:
          break;
      }
    }
    
    // 篩選標籤（能量）
    if (filters.tag) {
      results = results.filter(t => 
        t.tags.some(tag => tag.toLowerCase() === filters.tag.toLowerCase())
      );
    }
    
    // 篩選價格
    if (filters.price) {
      switch(filters.price) {
        case '1000元以下':
          results = results.filter(t => t.price < 1000);
          break;
        case '1000-1500元':
          results = results.filter(t => t.price >= 1000 && t.price <= 1500);
          break;
        case '1500元以上':
          results = results.filter(t => t.price > 1500);
          break;
        default:
          break;
      }
    }
    
    setFilteredTemplates(results);
  }, [filters]);
  
  // 原有的顏色篩選邏輯
  useEffect(() => {
    const selectedColor = localStorage.getItem('crystal_color_filter');
    const timestamp = localStorage.getItem('filter_timestamp');
    
    if (selectedColor && !filters.color) {
      // 只在沒有其他篩選條件時應用從其他頁面帶來的篩選條件
      const filterColor = selectedColor.toLowerCase();
      
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
      
      const filtered = templates.filter(template => {
        const templateColor = template.color.toLowerCase();
        
        if (colorMap[filterColor]) {
          return colorMap[filterColor].some(c => 
            templateColor.includes(c.toLowerCase())
          );
        }
        
        return templateColor.includes(filterColor);
      });
      
      if (filtered.length === 0) {
        const relatedTemplates = templates.filter(template => {
          const tColor = template.color.toLowerCase();
          
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
          
          return tColor.includes('多色');
        });
        
        if (relatedTemplates.length > 0) {
          setFilteredTemplates(relatedTemplates);
        } else {
          setFilteredTemplates(templates);
        }
      } else {
        setFilteredTemplates(filtered);
      }
    }
    
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
      
      {/* 篩選器控制面板 */}
      <FiltersContainer>
        <FilterGroup>
          <FilterLabel>色系</FilterLabel>
          <FilterSelect 
            value={filters.color}
            onChange={(e) => handleFilterChange('color', e.target.value)}
          >
            <option value="">所有色系</option>
            {filterOptions.color.map(color => (
              <option key={color} value={color}>{color}</option>
            ))}
          </FilterSelect>
        </FilterGroup>
        
        <FilterGroup>
          <FilterLabel>尺寸</FilterLabel>
          <FilterSelect 
            value={filters.size}
            onChange={(e) => handleFilterChange('size', e.target.value)}
          >
            <option value="">所有尺寸</option>
            {filterOptions.size.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </FilterSelect>
        </FilterGroup>
        
        <FilterGroup>
          <FilterLabel>能量</FilterLabel>
          <FilterSelect 
            value={filters.tag}
            onChange={handleTagFilter}
          >
            <option value="">所有能量</option>
            {filterOptions.tags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </FilterSelect>
        </FilterGroup>
        
        <FilterGroup>
          <FilterLabel>價格</FilterLabel>
          <FilterSelect 
            value={filters.price}
            onChange={(e) => handleFilterChange('price', e.target.value)}
          >
            <option value="">所有價格</option>
            {filterOptions.price.map(price => (
              <option key={price} value={price}>{price}</option>
            ))}
          </FilterSelect>
        </FilterGroup>
        
        <FilterGroup>
          <ClearAllButton onClick={clearAllFilters}>
            清除所有篩選
          </ClearAllButton>
        </FilterGroup>
      </FiltersContainer>
      
      {/* 顯示篩選結果計數 */}
      <FilteredCount>
        找到 {filteredTemplates.length} 個符合條件的範本
      </FilteredCount>
      
      {/* 已經存在的顏色篩選指示器，當來自其他頁面的篩選活躍時顯示 */}
      {activeColorFilter && !filters.color && (
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
            沒有找到符合篩選條件的水晶範本。
          </EmptyMessage>
        )}
      </TemplatesGrid>
    </Container>
  );
};

export default InspirationTemplates; 