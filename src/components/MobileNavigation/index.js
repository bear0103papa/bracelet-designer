import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDesign } from '../../contexts/DesignContext';
import userIcon from '../../assets/Logo/user.png';
import crystalIcon from '../../assets/Logo/freeze.png';
import accessoryIcon from '../../assets/Logo/jewel.png';
import helperIcon from '../../assets/Logo/witch.png';

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
  border-top: 3px solid ${props => props.active ? '#4a90e2' : 'transparent'};
  
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

// 預覽容器，直接放在導航欄中間
const PreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin-top: -40px; // 向上偏移，使其部分顯示在導航欄上方
  background: white;
  border-radius: 50%;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.1);
  z-index: 1001;
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  position: ${props => props.show ? 'relative' : 'absolute'};
  flex: ${props => props.show ? 1 : 'none'};
`;

const MiniPreviewContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px dashed #ccc;
`;

const MiniCrystalBead = styled.img`
  position: absolute;
  width: ${props => props.displaySize * 0.45}px;
  height: ${props => props.displaySize * 0.45}px;
  border-radius: 50%;
  transform-origin: center;
  left: 50%;
  top: 50%;
  object-fit: cover;
`;

const MobileNavigation = ({ currentCategory, onCategoryChange }) => {
  const { currentDesign } = useDesign();
  const [beadPositions, setBeadPositions] = useState([]);

  // 根據當前類別決定是否顯示預覽
  const showPreview = currentCategory === 'crystal' || currentCategory === 'accessory';

  useEffect(() => {
    if (currentDesign.crystals.length > 0) {
      const MM_TO_PIXEL = 3.5;
      
      // 使用圓形排列方式，計算每個水晶的位置
      const positions = currentDesign.crystals.map((crystal, index) => {
        // 計算每個水晶的角度位置 - 從頂部開始順時針排列
        const angle = ((index / currentDesign.crystals.length) * 360) - 90;
        
        // 計算顯示尺寸
        const displaySize = crystal.size * MM_TO_PIXEL;

        return {
          ...crystal,
          angle,
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

  return (
    <NavContainer>
      <NavItems>
      <NavItem 
          active={currentCategory === 'profile'} 
          onClick={() => onCategoryChange('profile')}
        >
          <UserIcon active={currentCategory === 'profile'}>
            <img src={userIcon} alt="個人" />
          </UserIcon>
          <Label>個人</Label>
        </NavItem>
        
        <NavItem 
          active={currentCategory === 'crystal'} 
          onClick={() => onCategoryChange('crystal')}
        >
          <CrystalIcon active={currentCategory === 'crystal'}>
            <img src={crystalIcon} alt="水晶" />
          </CrystalIcon>
          <Label>水晶</Label>
        </NavItem>
                
        <PreviewContainer show={showPreview}>
          <MiniPreviewContainer>
            {beadPositions.map((bead, index) => {
              const position = calculateMiniBeadPosition(
                index,
                beadPositions.length,
                30
              );
              
              return (
                <MiniCrystalBead
                  key={`mini-${bead.id}-${index}`}
                  src={bead.image}
                  displaySize={bead.displaySize}
                  angle={position.angle}
                  radius={30}
                  alt={bead.name}
                  style={{
                    transform: `
                      translate(-50%, -50%)
                      rotate(${position.angle}deg)
                      translateX(30px)
                    `
                  }}
                />
              );
            })}
          </MiniPreviewContainer>
        </PreviewContainer>
        <NavItem 
          active={currentCategory === 'accessory'} 
          onClick={() => onCategoryChange('accessory')}
        >
          <AccessoryIcon active={currentCategory === 'accessory'}>
            <img src={accessoryIcon} alt="配件" />
          </AccessoryIcon>
          <Label>配件</Label>
        </NavItem>

        
        <NavItem 
          active={currentCategory === 'helper'} 
          onClick={() => onCategoryChange('helper')}
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