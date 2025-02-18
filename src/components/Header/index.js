import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 20px 0;
  border-bottom: 1px solid #eee;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin: 8px 0 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>卡比樂活</Title>
      <Subtitle>線上設計專屬於妳的手鍊</Subtitle>
    </HeaderContainer>
  );
};

export default Header; 