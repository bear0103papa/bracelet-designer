import styled from 'styled-components';
import { useDesign } from '../../contexts/DesignContext';

const SizeSelectorContainer = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h3`
  margin-bottom: 12px;
  font-size: 16px;
  color: #333;
`;

const SizeOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SizeButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.active ? '#D4C4B4' : '#fff'};
  color: ${props => props.active ? '#fff' : '#333'};
  border: 1px solid ${props => props.active ? '#D4C4B4' : '#ddd'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#333' : '#e0e0e0'};
  }
`;

const CustomInput = styled.input`
  width: 80px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
`;

const Unit = styled.span`
  margin-left: 4px;
  color: #666;
  font-size: 14px;
`;

const SizeSelector = () => {
  const { currentDesign, setCurrentDesign } = useDesign();
  // 手圍尺寸（cm）
  const sizesInCm = [14.0, 15.0, 16.0, 17.0, 18.0];
  
  // 將 mm 轉換為 cm 顯示
  const currentSizeInCm = currentDesign.size / 10;

  const handleSizeChange = (sizeInCm) => {
    // 將 cm 轉換為 mm 儲存
    setCurrentDesign(prev => ({
      ...prev,
      size: sizeInCm * 10
    }));
  };

  const handleCustomSize = (e) => {
    const valueInCm = parseFloat(e.target.value);
    if (!isNaN(valueInCm) && valueInCm >= 0 && valueInCm <= 30) {
      handleSizeChange(valueInCm);
    }
  };

  return (
    <SizeSelectorContainer>
      <Title>手圍尺寸</Title>
      <SizeOptions>
        {sizesInCm.map(size => (
          <SizeButton
            key={size}
            active={currentSizeInCm === size}
            onClick={() => handleSizeChange(size)}
          >
            {size}
          </SizeButton>
        ))}
        <CustomInput
          type="number"
          step="0.1"
          min="0"
          max="30"
          value={currentSizeInCm}
          onChange={handleCustomSize}
          placeholder="自訂"
        />
        <Unit>cm</Unit>
      </SizeOptions>
    </SizeSelectorContainer>
  );
};

export default SizeSelector; 