import styled from 'styled-components';
import { useState } from 'react';
import { categories } from '../../data/crystals';
import { useNavigate } from 'react-router-dom';

const TabContainer = styled.div`
  margin-bottom: 20px;
`;

const TabList = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid #eee;
  padding-bottom: 16px;
`;

const Tab = styled.button`
  padding: 8px 24px;
  border-radius: 20px;
  background: ${props => props.$active ? '#D4C4B4' : '#f0f0f0'};
  color: ${props => props.$active ? '#fff' : '#333'};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.$active ? '#D4C4B4' : '#e0e0e0'};
  }
`;

const CategoryTabs = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('crystal');

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    switch(categoryId) {
      case 'toolbox':
        navigate('/');
        break;
      case 'crystal':
        navigate('/crystal');
        break;
      case 'accessory':
        navigate('/accessory');
        break;
      case 'helper':
        navigate('/helper');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <TabContainer>
      <TabList>
        {categories.map(category => (
          <Tab
            key={category.id}
            $active={activeCategory === category.id}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.name}
          </Tab>
        ))}
      </TabList>
    </TabContainer>
  );
};

export default CategoryTabs; 