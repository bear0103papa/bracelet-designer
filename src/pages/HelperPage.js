import styled from 'styled-components';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// 導入圖標
import numerologyIcon from '../assets/Logo/numerology.png';
import crystalBallIcon from '../assets/Logo/crystal-ball.png';
import solutionIcon from '../assets/Logo/solution (1).png';
import surpriseBoxIcon from '../assets/Logo/surprise-box.png';
import SurpriseGenerator from '../components/SurpriseGenerator';


// 導入生命靈數計算器組件
import NumerologyCalculator from '../components/NumerologyCalculator';

// 導入靈感範本組件
import InspirationTemplates from '../components/InspirationTemplates';

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
  const location = useLocation();
  
  // 先從 URL 獲取參數
  const getPageFromURL = () => {
    // 直接從 URL 獲取參數
    const currentURL = window.location.href;
    console.log("完整URL:", currentURL);
    
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
    console.log("URL 參數中的頁面:", page);
    
    return page;
  };
  
  // 三種來源的優先順序: URL 參數 > localStorage > null
  const [selectedOption, setSelectedOption] = useState(() => {
    const urlPage = getPageFromURL();
    if (urlPage) {
      console.log("從 URL 取得頁面類型:", urlPage);
      return urlPage;
    }
    
    const savedPage = localStorage.getItem('helper_page');
    if (savedPage) {
      // 用完即刪
      localStorage.removeItem('helper_page');
      console.log("從 localStorage 取得頁面類型:", savedPage);
      return savedPage;
    }
    
    console.log("無法確定頁面類型，使用默認值 null");
    return null;
  });
  
  // 當 URL 變化時更新選項
  useEffect(() => {
    const urlPage = getPageFromURL();
    if (urlPage && urlPage !== selectedOption) {
      console.log("URL 參數變化，更新頁面類型:", urlPage);
      setSelectedOption(urlPage);
    }
  }, [location.search]);
  
  // 重置選擇的選項
  const resetSelectedOption = useCallback(() => {
    setSelectedOption(null);
    // 清除相關的 localStorage 項目
    localStorage.removeItem('crystal_color_filter');
    localStorage.removeItem('filter_timestamp');
    localStorage.removeItem('redirect_to_helper');
    localStorage.removeItem('helper_page');
  }, []);
  
  // 監聽 URL 變化
  useEffect(() => {
    const path = location.pathname;
    const search = location.search;
    
    // 當 URL 是純 /helper 沒有參數時，重置選項
    if (path === '/helper' && !search) {
      resetSelectedOption();
    }
  }, [location, resetSelectedOption]);
  
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  
  const renderContent = () => {
    console.log("渲染 HelperPage 內容，當前選項:", selectedOption);
    
    switch (selectedOption) {
      case 'numerology':
        return <NumerologyCalculator />;
      case 'guidance':
        return <div>引導方向內容</div>;
      case 'inspiration':
        return <InspirationTemplates />;
      case 'surprise':
        return <SurpriseGenerator />;
      case 'ai-advisor':
        return <div>功能開發中，敬請期待</div>;
      default:
        return null; // 或顯示選項選擇介面
    }
  };
  
  const handleBackClick = () => {
    resetSelectedOption();
    navigate('/helper', { replace: true });
  };
  
  return (
    <PageContainer>
      <PageTitle>設計助手</PageTitle>
      <PageSubtitle>選擇一種方式來幫助您設計完美的水晶手鍊</PageSubtitle>
      
      {selectedOption ? (
        <>
          <BackButton onClick={handleBackClick}>返回選項</BackButton>
          {renderContent()}
        </>
      ) : (
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
      )}
    </PageContainer>
  );
};

export default HelperPage; 