import styled from 'styled-components';
import { crystals } from '../../data/crystals';
import { useDesign } from '../../contexts/DesignContext';

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

const CrystalTable = () => {
  const { currentDesign, setCurrentDesign } = useDesign();

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
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>顯示</Th>
            <Th>名稱</Th>
            <Th>色系</Th>
            <Th>尺寸(MM)</Th>
            <Th>能量</Th>
            <Th>單價(NT$)</Th>
          </tr>
        </thead>
        <tbody>
          {crystals.map(crystal => {
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
  );
};

export default CrystalTable; 