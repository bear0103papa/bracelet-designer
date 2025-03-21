import styled from 'styled-components';
import { crystals } from '../../data/crystals';
import { useDesign } from '../../contexts/DesignContext';
import { useState, useEffect } from 'react';

const TableContainer = styled.div`
  overflow-y: auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 16px;
  padding: 16px;
`;

const CrystalCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`;

const CrystalImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  align-items: center;
`;

const FilterSelect = styled.select`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 120px;
`;

const ClearFilterButton = styled.button`
  padding: 8px 16px;
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #e0e0e0;
  }
`;

const CrystalName = styled.div`
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
`;

const CrystalInfo = styled.div`
  font-size: 10px;
  color: #666;
  text-align: center;
`;

const CrystalTable = () => {
  const { currentDesign, setCurrentDesign } = useDesign();
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [filters, setFilters] = useState(() => {
    // 從 localStorage 讀取保存的篩選條件
    const savedFilters = localStorage.getItem('crystalFilters');
    return savedFilters ? JSON.parse(savedFilters) : {
      color: '',
      size: '',
      energy: '',
      price: ''
    };
  });

  // 當篩選條件變化時，保存到 localStorage
  useEffect(() => {
    localStorage.setItem('crystalFilters', JSON.stringify(filters));
  }, [filters]);

  // 獲取所有唯一的篩選選項
  const filterOptions = {
    color: [...new Set(crystals.map(c => c.color))],
    size: ['小(≤8mm)', '中(8-12mm)', '大(≥12mm)'],
    energy: [...new Set(crystals.map(c => c.energy))],
    price: ['0-10', '11-15', '16-20']
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // 清除所有篩選條件
  const handleClearFilters = () => {
    const emptyFilters = {
      color: '',
      size: '',
      power: '',
      price: ''
    };
    setFilters(emptyFilters);
    localStorage.setItem('crystalFilters', JSON.stringify(emptyFilters));
  };

  // 計算目前已使用的長度
  const calculateUsedLength = () => {
    return currentDesign.crystals.reduce((sum, crystal) => sum + crystal.size, 0);
  };

  // 檢查是否超出最大限制 (30cm = 300mm)
  const isExceedingMaxLimit = () => {
    const usedLength = calculateUsedLength();
    return usedLength >= 300; // 30cm 轉換為 mm
  };

  // 檢查添加特定水晶後是否會超出最大限制
  const wouldExceedMaxLimit = (crystal) => {
    const usedLength = calculateUsedLength();
    return usedLength + crystal.size > 300; // 30cm 轉換為 mm
  };

  const filteredAndSortedCrystals = crystals
    .filter(crystal => {
      // 首先檢查是否會超出最大限制
      if (wouldExceedMaxLimit(crystal)) {
        return false;
      }
      
      // 然後應用其他篩選條件
      return (
        (!filters.color || crystal.color === filters.color) &&
        (!filters.power || crystal.power === filters.power) &&
        (!filters.size || (
          filters.size === '小(≤8mm)' ? crystal.size <= 8 :
          filters.size === '中(8-12mm)' ? (crystal.size > 8 && crystal.size < 12) :
          crystal.size >= 12
        )) &&
        (!filters.price || (
          filters.price === '0-10' ? crystal.price <= 10 :
          filters.price === '11-15' ? (crystal.price > 10 && crystal.price <= 15) :
          crystal.price > 15
        ))
      );
    })
    .sort((a, b) => {
      if (!sortField) return 0;
      const direction = sortDirection === 'asc' ? 1 : -1;
      return a[sortField] > b[sortField] ? direction : -direction;
    });

  const calculateRemainingSpace = () => {
    const wristCircumference = currentDesign.size;
    const usedLength = calculateUsedLength();
    return Math.max(0, wristCircumference - usedLength);
  };

  const handleDragStart = (crystal) => (e) => {
    e.dataTransfer.setData('crystal', JSON.stringify(crystal));
  };

  const handleCrystalClick = (crystal) => {
    const currentCrystals = [...currentDesign.crystals, crystal];
    const totalLength = currentCrystals.reduce((sum, c) => sum + c.size, 0);
    
    // 增加 30cm (300mm) 的最大限制
    const MAX_SIZE = 300; // 30cm 轉換為 mm
    
    // 如果總長度超過最大限制，則不添加水晶
    if (totalLength > MAX_SIZE) {
      return; // 超過最大限制，不執行任何操作
    }
    
    // 如果總長度超過當前手圍尺寸但未超過最大限制
    if (totalLength > currentDesign.size) {
      setCurrentDesign(prev => ({
        ...prev,
        size: totalLength,
        crystals: currentCrystals
      }));
    } 
    // 如果沒有超過當前手圍尺寸，則正常添加水晶
    else {
      setCurrentDesign(prev => ({
        ...prev,
        crystals: currentCrystals
      }));
    }
  };

  return (
    <>
      <FilterContainer>
        {Object.entries(filterOptions).map(([key, options]) => (
          <FilterSelect
            key={key}
            value={filters[key]}
            onChange={(e) => setFilters({...filters, [key]: e.target.value})}
          >
            <option value="">{key === 'color' ? '色系' : 
            key === 'size' ? '尺寸' :
            key === 'energy' ? '能量' :
            '價格'}</option>
            {options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </FilterSelect>
        ))}
        <ClearFilterButton onClick={handleClearFilters}>
          清除篩選
        </ClearFilterButton>
      </FilterContainer>

      <GridView>
        {filteredAndSortedCrystals.map(crystal => {
          const remainingSpace = calculateRemainingSpace();
          
          return (
            <CrystalCard
              key={crystal.id}
              onClick={() => handleCrystalClick(crystal)}
              style={{
                opacity: 1,
                cursor: 'pointer'
              }}
            >
              <CrystalImage
                src={crystal.image}
                alt={crystal.name}
                draggable={true}
                onDragStart={handleDragStart(crystal)}
                onError={(e) => {
                  e.target.src = '/placeholder.jpg';
                }}
              />
              <CrystalName>{crystal.name}</CrystalName>
              <CrystalInfo>{crystal.color} | {crystal.size}mm | {crystal.price}元</CrystalInfo>
            </CrystalCard>
          );
        })}
      </GridView>
    </>
  );
};

export default CrystalTable; 