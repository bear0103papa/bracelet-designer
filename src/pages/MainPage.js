import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CategoryTabs from '../components/CategoryTabs';
import CategoryContent from '../components/CategoryContent';
import ProductDisplay from '../components/ProductDisplay';
import SavedDesigns from '../components/SavedDesigns';
import { useDesign } from '../contexts/DesignContext';
import CrystalPage from './CrystalPage';
import AccessoryPage from './AccessoryPage';
import HelperPage from './HelperPage';
import ProfilePage from './ProfilePage';
import MobileNavigation from '../components/MobileNavigation';
import { useNavigate } from 'react-router-dom';

const PageLayout = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
  min-height: calc(100vh - 60px);
  
  @media (min-width: 768px) {
    grid-template-columns: 400px 1fr;
  }
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding-bottom: 70px; /* 為底部導航留出空間 */
  }
`;

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (max-width: 767px) {
    display: ${props => props.isMobile && props.currentCategory !== 'profile' ? 'none' : 'flex'};
  }
`;

const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  max-height: calc(100vh - 100px);
  
  @media (max-width: 767px) {
    max-height: none;
  }
`;

const TabsContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const SavedDesignsWrapper = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 767px) {
    display: none;
  }
`;

const OrderSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const TotalPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
  text-align: right;
  color: #333;
`;

const OrderButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background: #45a049;
  }
`;

const OrderForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 100px;
`;

const MainPage = () => {
  const [currentCategory, setCurrentCategory] = useState('crystal');
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const { currentDesign } = useDesign();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    console.log('Current category changed to:', currentCategory);
  }, [currentCategory]);

  useEffect(() => {
    // 檢查是否需要重定向到 helper 頁面
    const redirectToHelper = localStorage.getItem('redirect_to_helper');
    const helperPage = localStorage.getItem('helper_page');
    
    console.log("檢查重定向需求:", redirectToHelper, helperPage);
    
    if (redirectToHelper === 'true') {
      // 清除重定向標記，防止循環
      localStorage.removeItem('redirect_to_helper');
      
      // 設置當前類別為 helper
      setCurrentCategory('helper');
      
      // 關鍵修改：直接使用 navigate 強制跳轉到正確的 URL
      // 使用 URL 參數來確保 HelperPage 可以獲取到正確的頁面參數
      if (helperPage) {
        const currentUrl = window.location.pathname;
        console.log("當前路徑:", currentUrl);
        
        // 避免循環重定向
        if (!currentUrl.includes('helper')) {
          const targetUrl = `/helper?page=${helperPage}`;
          console.log("嘗試在 MainPage 中重定向到:", targetUrl);
          navigate(targetUrl, { replace: true });
        }
        
        localStorage.removeItem('helper_page');
      }
      
      console.log("已重定向到 helper 頁面，頁面類型:", helperPage);
    }
  }, [navigate]);

  const calculateTotal = () => {
    if (!currentDesign || !currentDesign.crystals) {
      return 0;
    }
    return currentDesign.crystals.reduce((sum, crystal) => sum + crystal.price, 0);
  };

  const handleOrder = () => {
    setShowOrderForm(true);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // 這裡可以處理訂單提交邏輯
    setOrderSuccess(true);
    setShowOrderForm(false);
  };

  const handleCategoryChange = (category) => {
    console.log('Changing category to:', category);
    setCurrentCategory(category);
  };

  const renderMobileContent = () => {
    console.log('Rendering mobile content for category:', currentCategory);
    switch (currentCategory) {
      case 'profile':
        return <ProfilePage />;
      case 'crystal':
        return <CrystalPage />;
      case 'accessory':
        return <AccessoryPage />;
      case 'helper':
        return <HelperPage />;
      default:
        return <CrystalPage />;
    }
  };

  const renderDesktopContent = () => {
    console.log('Rendering desktop content for category:', currentCategory);
    switch (currentCategory) {
      case 'crystal':
        return <CrystalPage />;
      case 'accessory':
        return <AccessoryPage />;
      case 'helper':
        return <HelperPage />;
      default:
        return <CrystalPage />;
    }
  };

  return (
    <>
      <PageLayout>
        <LeftPanel isMobile={isMobile} currentCategory={currentCategory}>
          <ProductDisplay />
          <SavedDesignsWrapper>
            <SavedDesigns />
            <TotalPrice>
              總金額: NT$ {calculateTotal()}
            </TotalPrice>
            <OrderButton onClick={handleOrder}>
              下單
            </OrderButton>
            
            {showOrderForm && (
              <OrderForm onSubmit={handleSubmitOrder}>
                <Input 
                  name="name" 
                  placeholder="姓名" 
                  required 
                />
                <Input 
                  name="email" 
                  type="email" 
                  placeholder="Email" 
                  required 
                />
                <TextArea 
                  name="address" 
                  placeholder="送貨地址" 
                  required 
                />
                <OrderButton type="submit">
                  確認送出
                </OrderButton>
              </OrderForm>
            )}
            
            {orderSuccess && (
              <div style={{ 
                color: '#4CAF50', 
                textAlign: 'center', 
                marginTop: '10px' 
              }}>
                訂購成功！
              </div>
            )}
          </SavedDesignsWrapper>
        </LeftPanel>
        <RightPanel>
          {isMobile ? (
            renderMobileContent()
          ) : (
            <>
              <TabsContainer>
                <CategoryTabs 
                  currentCategory={currentCategory} 
                  onCategoryChange={handleCategoryChange} 
                />
              </TabsContainer>
              {renderDesktopContent()}
            </>
          )}
        </RightPanel>
      </PageLayout>
      
      {isMobile && (
        <MobileNavigation 
          currentCategory={currentCategory} 
          onCategoryChange={handleCategoryChange} 
        />
      )}
    </>
  );
};

export default MainPage; 