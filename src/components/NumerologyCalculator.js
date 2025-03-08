import React, { useState } from 'react';
import styled from 'styled-components';

const PageTitle = styled.h2`
  margin-bottom: 30px;
  color: #333;
  text-align: center;
`;

const InputContainer = styled.div`
  background: #f5f5f5;
  border-radius: 20px;
  padding: 30px;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  padding: 12px 15px;
  border-radius: 30px;
  border: 1px solid #ddd;
  width: 100%;
  font-size: 16px;
  text-align: center;
  background: white;
  
  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

const CalculateButton = styled.button`
  padding: 12px 20px;
  background: #f0f0f0;
  color: #333;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e0e0e0;
  }
`;

const ResultContainer = styled.div`
  width: 100%;
  max-width: 500px;
  text-align: center;
`;

const ResultTitle = styled.h3`
  margin-bottom: 15px;
  color: #333;
`;

const ResultText = styled.p`
  margin-bottom: 15px;
  color: #666;
  line-height: 1.6;
`;

const NumerologyCalculator = () => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [result, setResult] = useState(null);

  const calculateLifeNumber = () => {
    if (!year || !month || !day) {
      alert('請填寫完整的出生日期');
      return;
    }

    // 將年月日的每一位數字相加
    const dateString = `${year}${month}${day}`;
    let sum = 0;
    
    for (let i = 0; i < dateString.length; i++) {
      sum += parseInt(dateString[i]);
    }
    
    // 如果結果是兩位數，繼續相加直到得到一位數
    while (sum > 9) {
      let tempSum = 0;
      sum.toString().split('').forEach(digit => {
        tempSum += parseInt(digit);
      });
      sum = tempSum;
    }
    
    setResult(sum);
  };

  const getLifeNumberMeaning = (number) => {
    const meanings = {
      1: '獨立、創造力、領導力。你是個有創意的領導者，喜歡開創新事物。',
      2: '和諧、合作、敏感。你擅長與人合作，有很強的直覺力。',
      3: '表達、創意、社交。你有很強的創造力和表達能力，喜歡社交活動。',
      4: '穩定、實際、組織。你是個務實的人，喜歡有條理的生活和工作。',
      5: '自由、變化、冒險。你喜歡自由和變化，渴望新的體驗。',
      6: '責任、關愛、和諧。你很有責任感，關心他人，追求和諧。',
      7: '分析、智慧、靈性。你有很強的分析能力和智慧，喜歡探索生命的意義。',
      8: '權力、成就、物質。你有很強的事業心，追求成功和物質豐富。',
      9: '人道、同情、智慧。你關心全人類，有很強的同情心和智慧。'
    };
    
    return meanings[number] || '無法解析此生命靈數';
  };

  return (
    <>
      <PageTitle>開始探索生命靈數</PageTitle>
      
      <InputContainer>
        <InputRow>
          <InputField 
            type="number" 
            placeholder="我的出生年" 
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </InputRow>
        
        <InputRow>
          <InputField 
            type="number" 
            placeholder="月" 
            min="1" 
            max="12"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </InputRow>
        
        <InputRow>
          <InputField 
            type="number" 
            placeholder="日" 
            min="1" 
            max="31"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </InputRow>
        
        <CalculateButton onClick={calculateLifeNumber}>
          開始計算
        </CalculateButton>
      </InputContainer>
      
      {result && (
        <ResultContainer>
          <ResultTitle>生命靈數相信</ResultTitle>
          <ResultText>
            一個人生日的「數字」裡<br/>
            隱藏著其人生劇本的「數字密碼」
          </ResultText>
          <ResultText>
            一旦掌握這個密碼<br/>
            便可以明白這一世的我們「從哪裡來」、「經過哪裡」<br/>
            及「往哪裡去」
          </ResultText>
          <ResultText>
            並透過對應的水晶去補強<br/>
            讓這段旅程走得更加愉悅且圓滿。
          </ResultText>
          
          <ResultTitle>您的生命靈數是: {result}</ResultTitle>
          <ResultText>{getLifeNumberMeaning(result)}</ResultText>
        </ResultContainer>
      )}
    </>
  );
};

export default NumerologyCalculator; 