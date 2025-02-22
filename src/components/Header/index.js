import styled from 'styled-components';
import logo from '../../assets/Logo/Logo.jpg';

const HeaderContainer = styled.header`
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
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

const Logo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LeftSection>
        <Title>卡比樂活</Title>
        <Subtitle>線上設計專屬於妳的手鍊</Subtitle>
      </LeftSection>
      <Logo src={logo} alt="卡比樂活" />
    </HeaderContainer>
  );
};

export default Header; 