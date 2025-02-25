import styled from 'styled-components';
import { useDesign } from '../../contexts/DesignContext';
import { useState } from 'react';

const SizeSelectorContainer = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h3`
  margin-bottom: 12px;
  font-size: 16px;
  color: #333;
  display: flex;
  align-items: center;
`;

const UnitLabel = styled.span`
  font-size: 14px;
  color: #666;
  margin-left: 5px;
  font-weight: normal;
`;

const SizeOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SizeButton = styled.button`
  width: 50px;
  height: 50px;
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

const CustomButton = styled(SizeButton)`
  width: 80px;
  height: 50px;
  border-radius: 25px;
  padding: 0 15px;
`;

const CustomInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const CustomInput = styled.input`
  width: 80px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
`;

const Unit = styled.span`
  margin-left: 8px;
  color: #666;
  font-size: 14px;
`;

const SizeSelector = () => {
  const { currentDesign, setCurrentDesign } = useDesign();
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customValue, setCustomValue] = useState('');
  
  // 手圍尺寸（cm）
  const sizesInCm = [14, 15, 16, 17, 18];
  
  // 將 mm 轉換為 cm 顯示
  const currentSizeInCm = currentDesign.size / 10;

  const handleSizeChange = (sizeInCm) => {
    // 將 cm 轉換為 mm 儲存
    setCurrentDesign(prev => ({
      ...prev,
      size: sizeInCm * 10
    }));
    setShowCustomInput(false);
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

  return (
    <SizeSelectorContainer>
      <Title>
        手圍尺寸
        <UnitLabel>(cm)</UnitLabel>
      </Title>
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
        
        <CustomButton onClick={handleCustomClick}>
          自訂
        </CustomButton>
      </SizeOptions>
      
      {showCustomInput && (
        <CustomInputContainer>
          <CustomInput
            type="number"
            step="0.1"
            min="8"
            max="30"
            value={customValue}
            onChange={handleCustomSize}
            onBlur={handleCustomSubmit}
            autoFocus
          />
          <Unit>cm</Unit>
        </CustomInputContainer>
      )}
    </SizeSelectorContainer>
  );
};

export default SizeSelector; 