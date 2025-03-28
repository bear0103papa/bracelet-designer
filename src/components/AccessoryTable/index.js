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

const AccessoryCard = styled.div`
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

const AccessoryImage = styled.img`
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

const AccessoryName = styled.div`
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
`;

const AccessoryInfo = styled.div`
  font-size: 10px;
  color: #666;
  text-align: center;
`;

const AccessoryTable = () => {
  const { currentDesign, setCurrentDesign, setSelectedCrystal } = useDesign();
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [filters, setFilters] = useState(() => {
    // 從 localStorage 讀取保存的篩選條件
    const savedFilters = localStorage.getItem('accessoryFilters');
    return savedFilters ? JSON.parse(savedFilters) : {
      color: '',
      type: '',
      material: '',
      price: ''
    };
  });

  // 當篩選條件變化時，保存到 localStorage
  useEffect(() => {
    localStorage.setItem('accessoryFilters', JSON.stringify(filters));
  }, [filters]);

  // 篩選出所有配件
  const accessories = crystals.filter(item => item.category === 'accessory');

  // 獲取所有唯一的篩選選項
  const filterOptions = {
    color: [...new Set(accessories.map(a => a.color))],
    type: [...new Set(accessories.map(a => a.type).filter(Boolean))],
    material: [...new Set(accessories.map(a => a.material).filter(Boolean))],
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
      type: '',
      material: '',
      price: ''
    };
    setFilters(emptyFilters);
    localStorage.setItem('accessoryFilters', JSON.stringify(emptyFilters));
  };

  // 篩選及排序配件
  const filteredAndSortedAccessories = accessories
    .filter(accessory => {
      return (
        (!filters.color || accessory.color === filters.color) &&
        (!filters.type || accessory.type === filters.type) &&
        (!filters.material || accessory.material === filters.material) &&
        (!filters.price || (
          filters.price === '0-10' ? accessory.price <= 10 :
          filters.price === '11-15' ? (accessory.price > 10 && accessory.price <= 15) :
          accessory.price > 15
        ))
      );
    })
    .sort((a, b) => {
      if (!sortField) return 0;
      const direction = sortDirection === 'asc' ? 1 : -1;
      return a[sortField] > b[sortField] ? direction : -direction;
    });

  const handleDragStart = (accessory) => (e) => {
    e.dataTransfer.setData('crystal', JSON.stringify(accessory));
  };

  const handleAccessoryClick = (accessory) => {
    // 首先設置選中的配件
    setSelectedCrystal(accessory);
    
    // 然後添加到設計中
    setCurrentDesign(prev => ({
      ...prev,
      crystals: [...prev.crystals, accessory]
    }));
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
            key === 'type' ? '類型' :
            key === 'material' ? '材質' :
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
        {filteredAndSortedAccessories.map(accessory => {
          return (
            <AccessoryCard
              key={accessory.id}
              onClick={() => handleAccessoryClick(accessory)}
            >
              <AccessoryImage
                src={accessory.image}
                alt={accessory.name}
                draggable={true}
                onDragStart={handleDragStart(accessory)}
                onError={(e) => {
                  e.target.src = '/placeholder.jpg';
                }}
              />
              <AccessoryName>{accessory.name}</AccessoryName>
              <AccessoryInfo>{accessory.color} | {accessory.material || ''} | {accessory.price}元</AccessoryInfo>
            </AccessoryCard>
          );
        })}
      </GridView>
    </>
  );
};

export default AccessoryTable; 