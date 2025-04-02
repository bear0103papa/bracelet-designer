import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDesign } from '../contexts/DesignContext';
// --- 匯入 JSON 檔案 ---
import numerologyDescriptions from '../data/NumerologyCalculator.json'; // 匯入 JSON 資料
// --- 匯入水晶資料 ---
import { crystals } from '../data/crystals'; // 匯入 crystals 陣列

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
  max-width: 600px;
  text-align: left;
  background: #f9f9f9;
  padding: 25px;
  border-radius: 15px;
  margin-top: 30px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
`;

const ResultTitle = styled.h3`
  margin-bottom: 20px;
  color: #333;
  text-align: center;
  font-size: 1.5em;
`;

const ResultGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 15px;
  margin-bottom: 25px;
  text-align: center;
`;

const ResultItem = styled.div`
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
`;

const ResultItemLabel = styled.div`
  font-size: 0.9em;
  color: #666;
  margin-bottom: 5px;
`;

const ResultItemValue = styled.div`
  font-size: 1.8em;
  font-weight: bold;
  color: #4a90e2;
`;

const ExplanationSection = styled.div`
  margin-bottom: 25px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
`;

const SectionTitle = styled.h4`
  color: #555;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
`;

const ResultText = styled.p`
  margin-bottom: 15px;
  color: #555;
  line-height: 1.7;
  white-space: pre-wrap;
`;

// --- 新增：可點擊水晶的樣式 ---
const ClickableCrystal = styled.span`
  display: inline-block;
  background-color: #e0eafc; // 淡藍色背景
  color: #4a69bd; // 稍深的藍色文字
  padding: 4px 10px;
  border-radius: 15px; // 圓角
  margin: 3px 5px 3px 0; // 外邊距
  font-size: 0.95em;
  cursor: pointer;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid #c9d9f8; // 邊框

  &:hover {
    background-color: #d0dff8; // 懸停時稍深的背景
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); // 輕微陰影
  }
`;
// --- 結束：新增樣式 ---

const NumerologyCalculator = () => {
  const navigate = useNavigate();
  const { currentDesign, setCurrentDesign } = useDesign();
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [numerologyResult, setNumerologyResult] = useState(null);
  const [resultDetails, setResultDetails] = useState(null);

  const reduceToOneDigit = (input) => {
    let num = 0;
    String(input).split('').forEach(digit => {
      num += parseInt(digit, 10);
    });

    while (num > 9) {
      let tempSum = 0;
      String(num).split('').forEach(digit => {
        tempSum += parseInt(digit, 10);
      });
      num = tempSum;
    }
    return num;
  };

  const calculateLifeNumber = () => {
    if (!year || !month || !day || isNaN(parseInt(year)) || isNaN(parseInt(month)) || isNaN(parseInt(day))) {
      alert('請填寫有效的數字格式出生日期');
      return;
    }

    const y = parseInt(year);
    const m = parseInt(month);
    const d = parseInt(day);

    if (m < 1 || m > 12 || d < 1 || d > 31) {
        alert('請輸入有效的月份 (1-12) 和日期 (1-31)');
        return;
    }

    const fateNumber = reduceToOneDigit(d);
    const destinyNumber = reduceToOneDigit(`${y}${m}${d}`);
    const missionNumber = reduceToOneDigit(`${m}${d}`);
    const ultimateNumber = reduceToOneDigit(fateNumber + destinyNumber + missionNumber);

    const result = {
      fateNumber,
      destinyNumber,
      missionNumber,
      ultimateNumber,
    };
    setNumerologyResult(result);

    const resultKey = `${fateNumber}-${destinyNumber}-${missionNumber}-${ultimateNumber}`;
    const details = numerologyDescriptions.find(item => item.key === resultKey);

    if (details) {
      setResultDetails(details);
    } else {
      setResultDetails({
        key: resultKey,
        explanation: '抱歉，找不到對應的生命靈數組合解說。請檢查您的輸入或確認解說資料庫是否完整。',
        crystalSuggestion: 'N/A',
        designLanguage: 'N/A'
      });
      console.warn(`找不到 key 為 ${resultKey} 的解說資料`);
    }
  };

  // --- 新增：處理水晶點擊的函數 ---
  const handleCrystalClick = (crystalToAdd) => {
    if (!crystalToAdd) return;

    // 計算目前已使用的長度 (參考 CrystalTable)
    const currentLength = currentDesign.crystals.reduce((sum, crystal) => sum + crystal.size, 0);
    const maxLength = 300; // 最大長度 30cm = 300mm

    // 檢查添加後是否會超出最大限制
    if (currentLength + crystalToAdd.size > maxLength) {
      alert(`新增此水晶 (${crystalToAdd.name} - ${crystalToAdd.size}mm) 會超過最大長度限制 (${maxLength / 10}cm)。`);
      return; // 不添加水晶
    }

    // 更新 currentDesign
    setCurrentDesign({
      ...currentDesign,
      crystals: [...currentDesign.crystals, crystalToAdd]
    });

    // 可以選擇性地給予使用者提示
    console.log(`已將 ${crystalToAdd.name} 加入設計中。`);
    // 或者使用更明顯的提示方式，例如 toast notification
  };
  // --- 結束：新增函數 ---

  return (
    <>
      <PageTitle>探索你的生命靈數組合</PageTitle>
      
      <InputContainer>
        <InputRow>
          <InputField 
            type="number" 
            placeholder="出生 西元年 (例: 1990)" 
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </InputRow>
        
        <InputRow>
          <InputField 
            type="number" 
            placeholder="出生 月份 (例: 8)" 
            min="1" 
            max="12"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </InputRow>
        
        <InputRow>
          <InputField 
            type="number" 
            placeholder="出生 日期 (例: 15)" 
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
      
      {numerologyResult && resultDetails && (
        <ResultContainer>
          <ResultTitle>您的生命靈數組合</ResultTitle>
          <ResultGrid>
            <ResultItem>
              <ResultItemLabel>宿命數</ResultItemLabel>
              <ResultItemValue>{numerologyResult.fateNumber}</ResultItemValue>
            </ResultItem>
            <ResultItem>
              <ResultItemLabel>命運數</ResultItemLabel>
              <ResultItemValue>{numerologyResult.destinyNumber}</ResultItemValue>
            </ResultItem>
            <ResultItem>
              <ResultItemLabel>使命數</ResultItemLabel>
              <ResultItemValue>{numerologyResult.missionNumber}</ResultItemValue>
            </ResultItem>
            <ResultItem>
              <ResultItemLabel>天命數</ResultItemLabel>
              <ResultItemValue>{numerologyResult.ultimateNumber}</ResultItemValue>
            </ResultItem>
          </ResultGrid>
          <ExplanationSection>
            <SectionTitle>📜 完整命定解說</SectionTitle>
            <ResultText>{resultDetails.explanation}</ResultText>
          </ExplanationSection>
          {resultDetails.crystalSuggestion && resultDetails.crystalSuggestion !== 'N/A' && (
            <ExplanationSection>
              <SectionTitle>💎 命定水晶搭配建議</SectionTitle>
              <div> {/* 使用 div 包裹，以便處理多個水晶 */}
                {resultDetails.crystalSuggestion.split(/[、,，\s]+/) // 使用正則表達式分割多種分隔符
                  .map(name => name.trim()) // 去除前後空白
                  .filter(name => name) // 過濾掉空字串
                  .map((crystalName, index) => {
                    // 在 crystals 陣列中查找對應的水晶物件
                    const foundCrystal = crystals.find(c => c.name === crystalName);
                    if (foundCrystal) {
                      // 如果找到，渲染可點擊的水晶
                      return (
                        <ClickableCrystal
                          key={`${foundCrystal.id}-${index}`} // 使用唯一 key
                          onClick={() => handleCrystalClick(foundCrystal)}
                          title={`點擊將 ${foundCrystal.name} (${foundCrystal.size}mm) 加入設計`} // 添加提示文字
                        >
                          {crystalName}
                        </ClickableCrystal>
                      );
                    } else {
                      // 如果找不到，只渲染文字 (並在 console 中提示)
                      console.warn(`在 crystals.js 中找不到名為 "${crystalName}" 的水晶`);
                      return <span key={`notfound-${index}`} style={{ marginRight: '5px' }}>{crystalName}</span>;
                    }
                  })}
              </div>
            </ExplanationSection>
          )}
          {resultDetails.designLanguage && resultDetails.designLanguage !== 'N/A' && (
            <ExplanationSection>
              <SectionTitle>✨ 手鍊設計語言</SectionTitle>
              <ResultText>{resultDetails.designLanguage}</ResultText>
            </ExplanationSection>
          )}
        </ResultContainer>
      )}
    </>
  );
};

export default NumerologyCalculator; 