import React from 'react';
import styled from 'styled-components';
import SavedDesigns from '../components/SavedDesigns';
import { useDesign } from '../contexts/DesignContext';
import SizeSelector from '../components/SizeSelector';
import { useState } from 'react';

const ProfileContainer = styled.div`
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
  color: #333;
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
`;

const ProfilePage = () => {
  const { currentDesign } = useDesign();
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const calculateTotal = () => {
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

  return (
    <ProfileContainer>
      <Section>
        <SavedDesigns />
      </Section>
      
      <Section>
        <Title>訂購資訊</Title>
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
      </Section>
    </ProfileContainer>
  );
};

export default ProfilePage; 