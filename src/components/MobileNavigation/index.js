import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDesign } from '../../contexts/DesignContext';

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

const IconWrapper = styled.div`
  font-size: 24px;
  margin-bottom: 4px;
`;

const CrystalIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  
  svg {
    width: 100%;
    height: 100%;
    fill: ${props => props.active ? '#4a90e2' : '#666'};
  }
  
  &:hover svg {
    fill: #4a90e2;
  }
`;

const AccessoryIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  
  svg {
    width: 100%;
    height: 100%;
    fill: ${props => props.active ? '#4a90e2' : '#666'};
  }
  
  &:hover svg {
    fill: #4a90e2;
  }
`;

const HelperIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  
  svg {
    width: 100%;
    height: 100%;
    fill: ${props => props.active ? '#4a90e2' : '#666'};
  }
  
  &:hover svg {
    fill: #4a90e2;
  }
`;

const UserIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  
  svg {
    width: 100%;
    height: 100%;
    fill: ${props => props.active ? '#4a90e2' : '#666'};
  }
  
  &:hover svg {
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
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M256 112c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm0 160c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z"/>
              <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480c-123.7 0-224-100.3-224-224S132.3 32 256 32s224 100.3 224 224-100.3 224-224 224zm0-272c-79.5 0-144 64.5-144 144 0 24.9 6.3 48.3 17.4 68.7 4.5-10.8 9.9-21.2 16.2-30.9 6.5-10.2 14-19.8 22.3-28.5 8.4-8.7 17.7-16.5 27.7-23.4 10-6.8 20.9-12.6 32.2-17.1 11.3-4.5 23.4-8 35.9-10.2 12.5-2.2 25.3-3.4 38.4-3.4 13.1 0 25.9 1.1 38.4 3.4 12.5 2.2 24.6 5.7 35.9 10.2 11.3 4.5 22.2 10.3 32.2 17.1 10 6.8 19.3 14.7 27.7 23.4 8.4 8.7 15.8 18.3 22.3 28.5 6.3 9.7 11.7 20.1 16.2 30.9 11.1-20.4 17.4-43.8 17.4-68.7 0-79.5-64.5-144-144-144z"/>
            </svg>
          </UserIcon>
          <Label>個人</Label>
        </NavItem>
        
        <NavItem 
          active={currentCategory === 'crystal'} 
          onClick={() => onCategoryChange('crystal')}
        >
          <CrystalIcon active={currentCategory === 'crystal'}>
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M177.1 49.9L99.5 177.6l77.6-25.4V49.9zm157.8 0v102.3l77.6 25.4-77.6-127.7zm-77.6 26.3l-77.6 127.7h155.2l-77.6-127.7zm155.2 127.7l-77.6 127.7 155.2-76.3-77.6-51.4zm-310.4 0l-77.6 51.4 155.2 76.3-77.6-127.7zm77.6 127.7l-77.6 127.7h155.2l-77.6-127.7zm155.2 0l-77.6 127.7 77.6-25.4v-102.3zm-232.8 0L99.5 331.6l77.6 25.4v-102.3z"/>
            </svg>
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
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M256 64c-17.7 0-32 14.3-32 32v32h64V96c0-17.7-14.3-32-32-32zm32 64h-64v32h64v-32zm0 64h-64c0 35.3-28.7 64-64 64v64c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64v-64c-35.3 0-64-28.7-64-64zm-96 128v-64h-32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h32v-64zm192 0v64h32c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-32v64zm-96 64c-17.7 0-32-14.3-32-32v-64h64v64c0 17.7-14.3 32-32 32zm0-128c-17.7 0-32-14.3-32-32v-32h64v32c0 17.7-14.3 32-32 32z"/>
            </svg>
          </AccessoryIcon>
          <Label>配件</Label>
        </NavItem>

        
        <NavItem 
          active={currentCategory === 'saved'} 
          onClick={() => onCategoryChange('saved')}
        >
          <HelperIcon active={currentCategory === 'saved'}>
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M256 48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16s16-7.2 16-16V64c0-8.8-7.2-16-16-16zm-80 112c0-44.2 35.8-80 80-80s80 35.8 80 80c0 5.5-.6 10.8-1.6 16h-22.4c-12.3 0-22.4 10.1-22.4 22.4 0 5.5 4.5 10 10 10h8c5.5 0 10 4.5 10 10v8c0 5.5-4.5 10-10 10h-8c-5.5 0-10 4.5-10 10v8c0 5.5 4.5 10 10 10h8c5.5 0 10 4.5 10 10v8c0 5.5-4.5 10-10 10h-8c-5.5 0-10 4.5-10 10v8c0 5.5 4.5 10 10 10h22.4c1 5.2 1.6 10.5 1.6 16 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-5.5.6-10.8 1.6-16h22.4c5.5 0 10-4.5 10-10v-8c0-5.5-4.5-10-10-10h-8c-5.5 0-10-4.5-10-10v-8c0-5.5 4.5-10 10-10h8c5.5 0 10-4.5 10-10v-8c0-5.5-4.5-10-10-10h-8c-5.5 0-10-4.5-10-10v-8c0-5.5 4.5-10 10-10h8c5.5 0 10-4.5 10-10 0-12.3-10.1-22.4-22.4-22.4h-22.4c-1-5.2-1.6-10.5-1.6-16zm-112 0c0 13.8 2.3 27 6.3 39.4-7.3 4.8-12.3 13-12.3 22.6 0 14.9 12.1 27 27 27v18c-14.9 0-27 12.1-27 27s12.1 27 27 27v18c-14.9 0-27 12.1-27 27s12.1 27 27 27v18c-14.9 0-27 12.1-27 27 0 9.6 5 17.8 12.3 22.6-4 12.4-6.3 25.6-6.3 39.4 0 70.7 57.3 128 128 128s128-57.3 128-128c0-13.8-2.3-27-6.3-39.4 7.3-4.8 12.3-13 12.3-22.6 0-14.9-12.1-27-27-27v-18c14.9 0 27-12.1 27-27s-12.1-27-27-27v-18c14.9 0 27-12.1 27-27s-12.1-27-27-27v-18c14.9 0 27-12.1 27-27 0-9.6-5-17.8-12.3-22.6 4-12.4 6.3-25.6 6.3-39.4 0-70.7-57.3-128-128-128S64 89.3 64 160zm192 96c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h64z"/>
            </svg>
          </HelperIcon>
          <Label>小幫手</Label>
        </NavItem>
      </NavItems>
    </NavContainer>
  );
};

export default MobileNavigation; 