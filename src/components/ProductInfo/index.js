import styled from 'styled-components';
import { useDesign } from '../../contexts/DesignContext';

const InfoContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 16px;
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  color: #666;
  margin-bottom: 8px;
`;

const PropertyList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PropertyItem = styled.li`
  margin-bottom: 8px;
  color: #333;
`;

const ProductInfo = () => {
  const { selectedCrystal } = useDesign();

  if (!selectedCrystal) {
    return null;
  }

  // 確保 description 存在，如果不存在則提供默認值
  const descriptions = selectedCrystal.description || [];

  return (
    <InfoContainer>
      <Title>{selectedCrystal.name}</Title>
      
      <Section>
        <SectionTitle>基本資訊</SectionTitle>
        <PropertyList>
          <PropertyItem>色系：{selectedCrystal.color}</PropertyItem>
          <PropertyItem>尺寸：{selectedCrystal.size} mm</PropertyItem>
          <PropertyItem>能量：{selectedCrystal.energy}</PropertyItem>
          <PropertyItem>價格：NT$ {selectedCrystal.price}</PropertyItem>
          {selectedCrystal.zodiac && (
            <PropertyItem>適合星座：{selectedCrystal.zodiac.join('、')}</PropertyItem>
          )}
          {selectedCrystal.chakra && (
            <PropertyItem>脈輪：{selectedCrystal.chakra}</PropertyItem>
          )}
        </PropertyList>
      </Section>

      {descriptions.length > 0 && (
        <Section>
          <SectionTitle>詳細說明</SectionTitle>
          <PropertyList>
            {descriptions.map((desc, index) => (
              <PropertyItem key={index}>{desc}</PropertyItem>
            ))}
          </PropertyList>
        </Section>
      )}
    </InfoContainer>
  );
};

export default ProductInfo; 