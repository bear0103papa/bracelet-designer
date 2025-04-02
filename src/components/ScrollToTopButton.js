import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// 可以使用向上箭頭圖標，或者直接用文字
// import upArrowIcon from '../../assets/icons/up-arrow.png'; 

const Button = styled.button`
  display: none; // 預設隱藏
  position: fixed;
  bottom: 100px; // 顯示在底部導航上方
  right: 20px;
  background-color: rgba(74, 144, 226, 0.8); // 半透明藍色
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px; // 調整箭頭或文字大小
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 999; // 確保在其他元素之上，但在 Modal 之下
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  opacity: ${props => props.visible ? 1 : 0};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};

  &:hover {
    background-color: rgba(58, 128, 210, 0.9); // Hover 時加深顏色
  }

  @media (max-width: 767px) {
    display: block; // 只在手機版顯示 block
  }
`;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 監聽滾動事件
  useEffect(() => {
    const toggleVisibility = () => {
      // 當滾動超過一定高度時顯示按鈕 (例如 300px)
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // 清除監聽器
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // 滾動到頂部的函數
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 平滑滾動效果
    });
  };

  return (
    <Button onClick={scrollToTop} visible={isVisible}>
      {/* 可以使用圖標 <img src={upArrowIcon} alt="Top" /> 或文字 */}
      ↑
    </Button>
  );
};

export default ScrollToTopButton; 