import { useState, useEffect, useRef } from 'react';
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
import { Route } from 'react-router-dom';
import ScrollToTopButton from '../components/ScrollToTopButton';

const PageLayout = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
  min-height: calc(100vh - 60px);
  
  @media (min-width: 768px) {
    grid-template-columns: 400px 1fr;
  }
  
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 80px;
    min-height: calc(100vh - 80px);
  }
`;

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (max-width: 767px) {
    order: 1;
  }
`;

const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  max-height: calc(1280px);
  
  @media (max-width: 1024px) {
    max-height: none;
    order: 3;
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

const OrderSectionContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 767px) {
    order: 2;
    margin-bottom: 20px;
  }
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
  margin-top: 20px;
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
  resize: vertical;
`;

const SuccessMessage = styled.div`
  color: #4CAF50;
  text-align: center;
  margin-top: 15px;
  padding: 10px;
  background-color: #e8f5e9;
  border-radius: 4px;
`;

const MobileInstructionText = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 10px;
  padding: 0 15px;
`;

const MainPage = () => {
  const [currentCategory, setCurrentCategory] = useState('crystal');
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const { currentDesign, selectedCrystal, setCurrentDesign: updateCurrentDesign } = useDesign();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const navigate = useNavigate();
  const rightPanelRef = useRef(null);

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
    const redirectToHelper = localStorage.getItem('redirect_to_helper');
    const helperPage = localStorage.getItem('helper_page');
    
    if (redirectToHelper === 'true') {
      localStorage.removeItem('redirect_to_helper');
      
      setCurrentCategory('helper');
      
      console.log("已切換到 helper 頁面，頁面類型:", helperPage);
    }
  }, []);

  const calculateTotal = () => {
    if (!currentDesign || !currentDesign.crystals) {
      return 0;
    }
    const accessoryTotal = currentDesign.accessories?.reduce((sum, acc) => sum + acc.price, 0) || 0;
    const crystalTotal = currentDesign.crystals.reduce((sum, crystal) => sum + crystal.price, 0);
    return crystalTotal + accessoryTotal;
  };

  const handleOrder = () => {
    setShowOrderForm(true);
    setOrderSuccess(false);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Order Submitted:', Object.fromEntries(formData));
    setOrderSuccess(true);
    setShowOrderForm(false);
  };

  const handleCategoryChange = (category) => {
    console.log('Changing category to:', category);
    setCurrentCategory(category);
    if (category === 'helper') {
      localStorage.removeItem('crystal_color_filter');
      localStorage.removeItem('filter_timestamp');
      localStorage.removeItem('redirect_to_helper');
      localStorage.removeItem('helper_page');
    }
    if (category === 'profile') {
      // ... 可能的清理 ...
    }
  };

  useEffect(() => {
    if (isMobile && (currentCategory === 'helper' || currentCategory === 'crystal' || currentCategory === 'accessory' || currentCategory === 'profile')) {
      setTimeout(() => {
        rightPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    }
  }, [currentCategory, isMobile]);

  const renderMobileContent = () => {
    console.log('Rendering mobile content for category:', currentCategory);
    switch (currentCategory) {
      case 'profile':
        return <SavedDesigns />;
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
    <PageLayout>
      <LeftPanel isMobile={isMobile} currentCategory={currentCategory}>
        <ProductDisplay onCrystalClick={() => {}} />

        <OrderSectionContainer>
          <h3>訂購資訊</h3>
          <TotalPrice>總金額: NT$ {calculateTotal()}</TotalPrice>

          {!showOrderForm && !orderSuccess && (
             <OrderButton onClick={handleOrder}>下單</OrderButton>
          )}

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
            <SuccessMessage>
              訂購成功！感謝您的訂購。
            </SuccessMessage>
          )}
        </OrderSectionContainer>

        <SavedDesignsWrapper>
          <SavedDesigns />
        </SavedDesignsWrapper>
      </LeftPanel>

      <RightPanel ref={rightPanelRef}>
        {isMobile && (
          <MobileInstructionText>
            點擊下方頁籤切換選擇水晶或配件
          </MobileInstructionText>
        )}
        <TabsContainer>
          <CategoryTabs 
            currentCategory={currentCategory} 
            onCategoryChange={handleCategoryChange} 
            isMobile={isMobile}
          />
        </TabsContainer>
        {!isMobile && renderDesktopContent()}
        {isMobile && renderMobileContent()}
      </RightPanel>

      {isMobile && (
        <MobileNavigation 
          currentCategory={currentCategory} 
          onCategoryChange={handleCategoryChange} 
        />
      )}

      <ScrollToTopButton />
    </PageLayout>
  );
};

export default MainPage; 