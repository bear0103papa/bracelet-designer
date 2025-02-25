import styled from 'styled-components';
import { crystals } from '../../data/crystals';
import { useDesign } from '../../contexts/DesignContext';
import { useState } from 'react';

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
`;

const FilterSelect = styled.select`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 120px;
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
  const [filters, setFilters] = useState({
    color: '',
    size: '',
    power: '',
    price: ''
  });

  // 獲取所有唯一的篩選選項
  const filterOptions = {
    color: [...new Set(crystals.map(c => c.color))],
    power: [...new Set(crystals.map(c => c.power))],
    size: ['小(≤8mm)', '中(8-12mm)', '大(≥12mm)'],
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

  const filteredAndSortedCrystals = crystals
    .filter(crystal => {
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
    const usedLength = currentDesign.crystals.reduce((sum, crystal) => sum + crystal.size, 0);
    return Math.max(0, wristCircumference - usedLength);
  };

  const handleDragStart = (crystal) => (e) => {
    const remainingSpace = calculateRemainingSpace();
    if (remainingSpace < crystal.size) {
      e.preventDefault();
      return false;
    }
    e.dataTransfer.setData('crystal', JSON.stringify(crystal));
  };

  const handleCrystalClick = (crystal) => {
    const remainingSpace = calculateRemainingSpace();
    if (remainingSpace >= crystal.size) {
      setCurrentDesign(prev => ({
        ...prev,
        crystals: [...prev.crystals, crystal]
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
                            key === 'power' ? '能量' :
                            key === 'size' ? '尺寸' : '價格'}</option>
            {options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </FilterSelect>
        ))}
      </FilterContainer>

      <GridView>
        {filteredAndSortedCrystals.map(crystal => {
          const remainingSpace = calculateRemainingSpace();
          const isDisabled = remainingSpace < crystal.size;
          
          return (
            <CrystalCard
              key={crystal.id}
              onClick={() => !isDisabled && handleCrystalClick(crystal)}
              style={{
                opacity: isDisabled ? 0.5 : 1,
                cursor: isDisabled ? 'not-allowed' : 'pointer'
              }}
            >
              <CrystalImage
                src={crystal.image}
                alt={crystal.name}
                draggable={!isDisabled}
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