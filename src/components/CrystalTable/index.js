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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background: #f5f5f5;
  padding: 12px;
  text-align: left;
  position: sticky;
  top: 0;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #eee;
`;

const CrystalImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const ViewToggle = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
`;

const ToggleButton = styled.button`
  padding: 8px 16px;
  background: ${props => props.active ? '#4a90e2' : '#fff'};
  color: ${props => props.active ? '#fff' : '#333'};
  border: 1px solid #4a90e2;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#357abd' : '#f5f5f5'};
  }
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

const CrystalTable = () => {
  const { currentDesign, setCurrentDesign } = useDesign();
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'grid'
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
      <ViewToggle>
        <ToggleButton 
          active={viewMode === 'table'} 
          onClick={() => setViewMode('table')}
        >
          表格檢視
        </ToggleButton>
        <ToggleButton 
          active={viewMode === 'grid'} 
          onClick={() => setViewMode('grid')}
        >
          圖片檢視
        </ToggleButton>
      </ViewToggle>

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

      {viewMode === 'table' ? (
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <Th>顯示</Th>
                <Th onClick={() => handleSort('name')}>名稱 {sortField === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}</Th>
                <Th onClick={() => handleSort('color')}>色系 {sortField === 'color' && (sortDirection === 'asc' ? '↑' : '↓')}</Th>
                <Th onClick={() => handleSort('size')}>尺寸(MM) {sortField === 'size' && (sortDirection === 'asc' ? '↑' : '↓')}</Th>
                <Th onClick={() => handleSort('power')}>能量 {sortField === 'power' && (sortDirection === 'asc' ? '↑' : '↓')}</Th>
                <Th onClick={() => handleSort('price')}>單價(NT$) {sortField === 'price' && (sortDirection === 'asc' ? '↑' : '↓')}</Th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedCrystals.map(crystal => {
                const remainingSpace = calculateRemainingSpace();
                const isDisabled = remainingSpace < crystal.size;
                
                return (
                  <tr key={crystal.id}>
                    <Td>
                      <CrystalImage
                        src={crystal.image}
                        alt={crystal.name}
                        draggable={!isDisabled}
                        onDragStart={handleDragStart(crystal)}
                        onClick={() => handleCrystalClick(crystal)}
                        onError={(e) => {
                          e.target.src = '/placeholder.jpg';
                        }}
                        style={{
                          opacity: isDisabled ? 0.5 : 1,
                          cursor: isDisabled ? 'not-allowed' : 'pointer'
                        }}
                      />
                    </Td>
                    <Td>{crystal.name}</Td>
                    <Td>{crystal.color}</Td>
                    <Td>{crystal.size}</Td>
                    <Td>{crystal.power}</Td>
                    <Td>{crystal.price}</Td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </TableContainer>
      ) : (
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
                <div>{crystal.name}</div>
                <div>{crystal.size}mm</div>
                <div>NT${crystal.price}</div>
              </CrystalCard>
            );
          })}
        </GridView>
      )}
    </>
  );
};

export default CrystalTable; 