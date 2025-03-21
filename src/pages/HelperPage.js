import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 導入圖標
import numerologyIcon from '../assets/Logo/numerology.png';
import crystalBallIcon from '../assets/Logo/crystal-ball.png';
import solutionIcon from '../assets/Logo/solution (1).png';
import surpriseBoxIcon from '../assets/Logo/surprise-box.png';
import aiIcon from '../assets/Logo/ai.svg';

// 導入生命靈數計算器組件
import NumerologyCalculator from '../components/NumerologyCalculator';

const PageContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.h2`
  margin-bottom: 10px;
  color: #333;
  text-align: center;
`;

const PageSubtitle = styled.p`
  margin-bottom: 30px;
  color: #666;
  text-align: center;
  font-size: 14px;
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 500px;
`;

const OptionCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  }
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const OptionTitle = styled.h3`
  font-size: 16px;
  color: #333;
  margin: 0;
  text-align: center;
`;

const BackButton = styled.button`
  padding: 8px 16px;
  background: #f0f0f0;
  border: none;
  border-radius: 4px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    background: #e0e0e0;
  }
`;

const HelperPage = () => {
  const navigate = useNavigate();
  const [currentOption, setCurrentOption] = useState(null);
  
  const handleOptionClick = (option) => {
    setCurrentOption(option);
  };
  
  const renderContent = () => {
    switch(currentOption) {
      case 'numerology':
        return <NumerologyCalculator />;
      case 'guidance':
        return <div>引導方向內容</div>;
      case 'inspiration':
        return <div>來點靈感內容</div>;
      case 'surprise':
        return <div>來些驚喜內容</div>;
      case 'ai-advisor':
        return <div>功能開發中，敬請期待</div>;
      default:
        return (
          <>
            <PageTitle>讓小幫手引導我們找到心之所向</PageTitle>
            <PageSubtitle>選擇一個選項開始您的探索之旅</PageSubtitle>
            
            <OptionsGrid>
              <OptionCard onClick={() => handleOptionClick('numerology')}>
                <IconContainer>
                  <Icon src={numerologyIcon} alt="生命靈數" />
                </IconContainer>
                <OptionTitle>生命靈數</OptionTitle>
              </OptionCard>
              
              <OptionCard onClick={() => handleOptionClick('guidance')}>
                <IconContainer>
                  <Icon src={crystalBallIcon} alt="引導方向" />
                </IconContainer>
                <OptionTitle>引導方向</OptionTitle>
              </OptionCard>
              
              <OptionCard onClick={() => handleOptionClick('inspiration')}>
                <IconContainer>
                  <Icon src={solutionIcon} alt="來點靈感" />
                </IconContainer>
                <OptionTitle>來點靈感</OptionTitle>
              </OptionCard>
              
              <OptionCard onClick={() => handleOptionClick('surprise')}>
                <IconContainer>
                  <Icon src={surpriseBoxIcon} alt="來些驚喜" />
                </IconContainer>
                <OptionTitle>來些驚喜</OptionTitle>
              </OptionCard>
            </OptionsGrid>
          </>
        );
    }
  };
  
  return (
    <PageContainer>
      {currentOption && (
        <BackButton onClick={() => setCurrentOption(null)}>
          返回
        </BackButton>
      )}
      {renderContent()}
    </PageContainer>
  );
};

export default HelperPage; 