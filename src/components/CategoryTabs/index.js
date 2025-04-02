import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Tab = styled.div`
  flex: 1;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  background: ${props => props.active ? '#f0f0f0' : 'white'};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  border-bottom: 2px solid ${props => props.active ? '#4a90e2' : 'transparent'};
  transition: all 0.3s ease;
  
  &:hover {
    background: #f5f5f5;
  }
`;

const CategoryTabs = ({ currentCategory, onCategoryChange, isMobile }) => {
  const handleTabClick = (category) => {
    if (category === 'helper') {
      localStorage.removeItem('crystal_color_filter');
      localStorage.removeItem('filter_timestamp');
      localStorage.removeItem('redirect_to_helper');
      localStorage.removeItem('helper_page');
    }
    
    onCategoryChange(category);
  };
  
  return (
    <TabsContainer>
      <Tab 
        active={currentCategory === 'crystal'} 
        onClick={() => handleTabClick('crystal')}
      >
        水晶
      </Tab>
      <Tab 
        active={currentCategory === 'accessory'} 
        onClick={() => handleTabClick('accessory')}
      >
        配件
      </Tab>
      {!isMobile && (
        <Tab 
          active={currentCategory === 'helper'} 
          onClick={() => handleTabClick('helper')}
        >
          小幫手
        </Tab>
      )}
    </TabsContainer>
  );
};

export default CategoryTabs; 