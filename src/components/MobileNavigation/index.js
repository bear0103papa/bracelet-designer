import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDesign } from '../../contexts/DesignContext';
import userIcon from '../../assets/Logo/user.png';
import crystalIcon from '../../assets/Logo/freeze.png';
import accessoryIcon from '../../assets/Logo/jewel.png';
import helperIcon from '../../assets/Logo/witch.png';
import { useNavigate } from 'react-router-dom';

const NavContainer = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
  z-index: 1000;
  
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

const NavItems = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  position: relative;
`;

const NavItem = styled.div`
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  flex: 1;
  color: ${props => props.active ? '#4a90e2' : '#666'};
  border-top: none;
  
  &:hover {
    color: #4a90e2;
  }
`;

const CrystalIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  &:hover img {
    fill: #4a90e2;
  }
`;

const AccessoryIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  &:hover img {
    fill: #4a90e2;
  }
`;

const HelperIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  &:hover img {
    fill: #4a90e2;
  }
`;

const UserIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  &:hover img {
    fill: #4a90e2;
  }
`;

const Label = styled.div`
  font-size: 12px;
`;

const PreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  margin-top: -30px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.1);
  z-index: 1001;
  position: relative;
  flex: none;
  order: 2;
`;

const MiniPreviewContainer = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px dashed #ccc;
`;

const MiniCrystalBead = styled.img`
  position: absolute;
  width: ${props => props.displaySize * 0.35}px;
  height: ${props => props.displaySize * 0.35}px;
  border-radius: 50%;
  transform-origin: center;
  left: 50%;
  top: 50%;
  object-fit: cover;
`;

const MobileNavigation = ({ currentCategory, onCategoryChange }) => {
  const { currentDesign } = useDesign();
  const [beadPositions, setBeadPositions] = useState([]);

  useEffect(() => {
    if (currentDesign.crystals && currentDesign.crystals.length > 0) {
      const MM_TO_PIXEL = 3.5;
      
      const positions = currentDesign.crystals.map((crystal, index) => {
        const displaySize = crystal.size * MM_TO_PIXEL;
        return {
          ...crystal,
          displaySize
        };
      });
      
      setBeadPositions(positions);
    } else {
      setBeadPositions([]);
    }
  }, [currentDesign]);

  const calculateMiniBeadPosition = (index, total, radius) => {
    const angle = ((index / total) * 360) - 90;
    return { angle };
  };

  const handleCategoryChange = (category) => {
    if (category === 'helper') {
      localStorage.removeItem('crystal_color_filter');
      localStorage.removeItem('filter_timestamp');
      localStorage.removeItem('redirect_to_helper');
      localStorage.removeItem('helper_page');
    }
    
    onCategoryChange(category);
  };

  useEffect(() => {
    window.setMobileCategory = (category) => {
      onCategoryChange(category);
    };
    
    const fromTemplate = localStorage.getItem('fromTemplate');
    const templateTime = localStorage.getItem('template_selected_time');
    
    if (fromTemplate === 'true' && templateTime) {
      const now = Date.now();
      const selectTime = parseInt(templateTime, 10);
      if (now - selectTime < 5 * 60 * 1000) {
        onCategoryChange('profile');
        localStorage.removeItem('fromTemplate');
        localStorage.removeItem('template_selected_time');
      }
    }
    
    return () => {
      delete window.setMobileCategory;
    };
  }, [onCategoryChange]);

  return (
    <NavContainer>
      <NavItems>
        <NavItem 
          active={currentCategory === 'profile'} 
          onClick={() => onCategoryChange('profile')}
          style={{ order: 1 }}
        >
          <UserIcon active={currentCategory === 'profile'}>
            <img src={crystalIcon} alt="好設計" />
          </UserIcon>
          <Label>好設計</Label>
        </NavItem>
        
        <PreviewContainer style={{ order: 2 }}>
          <MiniPreviewContainer>
            {beadPositions.map((bead, index) => {
              const radius = 30;
              const position = calculateMiniBeadPosition(
                index,
                beadPositions.length,
                radius
              );
              
              return (
                <MiniCrystalBead
                  key={`mini-${bead.id}-${index}`}
                  src={bead.image}
                  displaySize={bead.displaySize}
                  alt={bead.name}
                  style={{
                    transform: `
                      translate(-50%, -50%)
                      rotate(${position.angle}deg)
                      translateX(${radius}px)
                    `
                  }}
                />
              );
            })}
          </MiniPreviewContainer>
        </PreviewContainer>
        <NavItem 
          active={currentCategory === 'helper'} 
          onClick={() => handleCategoryChange('helper')}
          style={{ order: 3 }}
        >
          <HelperIcon active={currentCategory === 'helper'}>
            <img src={helperIcon} alt="小幫手" />
          </HelperIcon>
          <Label>小幫手</Label>
        </NavItem>
      </NavItems>
    </NavContainer>
  );
};

export default MobileNavigation; 