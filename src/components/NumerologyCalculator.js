import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDesign } from '../contexts/DesignContext';
// --- 匯入 JSON 檔案 ---
import numerologyDescriptions from '../data/NumerologyCalculator.json'; // 匯入 JSON 資料
// --- 匯入水晶資料 ---
import { crystals } from '../data/crystals'; // 匯入 crystals 陣列

// 引入 react-datepicker 及相關功能
import DatePicker, { registerLocale } from 'react-datepicker'; // 修改：同時匯入 registerLocale
import "react-datepicker/dist/react-datepicker.css";
// 引入 date-fns 的繁體中文語系檔
import { zhTW } from 'date-fns/locale'; // 新增：匯入語系檔

// --- 註冊語系 ---
registerLocale('zh-TW', zhTW); // 新增：註冊繁體中文

// --- 新增：定義全域日曆樣式 ---
const GlobalDatePickerStyle = createGlobalStyle`
  /* 主容器 */
  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle {
    /* 隱藏預設的小三角形 */
    display: none;
  }

  .custom-calendar.react-datepicker {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; /* 保持字體一致 */
    border: 1px solid #ddd; /* 淺灰色邊框 */
    border-radius: 12px; /* 圓角 */
    box-shadow: 0 5px 15px rgba(0,0,0,0.1); /* 添加陰影 */
    padding: 5px; /* 內部留白 */
    background-color: #fff; /* 白色背景 */
  }

  /* 頂部標頭 */
  .custom-calendar .react-datepicker__header {
    background-color: #f8f8f8; /* 淺灰色背景 */
    border-bottom: 1px solid #eee;
    border-top-left-radius: 10px; /* 匹配外容器圓角 */
    border-top-right-radius: 10px;
    padding-top: 10px;
  }

  /* 月份和年份下拉選單 */
  .custom-calendar .react-datepicker__year-select,
  .custom-calendar .react-datepicker__month-select {
    padding: 5px 8px;
    border-radius: 15px; /* 圓角 */
    border: 1px solid #ccc;
    background-color: #fff;
    margin: 0 3px;
    font-size: 0.9em;
    cursor: pointer;
    transition: border-color 0.2s;

    &:focus {
      outline: none;
      border-color: #4a90e2; /* Focus 時的邊框顏色 */
    }
  }

  /* 導航按鈕 (上/下個月) */
  .custom-calendar .react-datepicker__navigation {
    top: 12px; /* 調整垂直位置 */
  }
  .custom-calendar .react-datepicker__navigation--previous {
     border-right-color: #aaa; /* 箭頭顏色 */
     left: 12px; /* 調整水平位置 */
     &:hover { border-right-color: #333; }
  }
  .custom-calendar .react-datepicker__navigation--next {
     border-left-color: #aaa; /* 箭頭顏色 */
     right: 12px; /* 調整水平位置 */
     &:hover { border-left-color: #333; }
  }

  /* 星期標題 */
  .custom-calendar .react-datepicker__day-name {
    color: #666; /* 稍深的灰色 */
    font-weight: bold;
    font-size: 0.8em;
    width: 2.2rem; /* 調整寬度以適應 */
    line-height: 2.2rem;
    margin: 0.1rem; /* 微調間距 */
  }

  /* 日期格子 */
  .custom-calendar .react-datepicker__day {
    color: #333;
    width: 2.2rem;
    line-height: 2.2rem;
    margin: 0.1rem;
    border-radius: 50%; /* 圓形格子 */
    transition: background-color 0.2s, color 0.2s;

    &:hover {
      background-color: #f0f0f0; /* 淺灰色 hover 背景 */
      border-radius: 50%; /* 保持圓形 */
    }
  }

  /* 當前月份以外的日期 */
  .custom-calendar .react-datepicker__day--outside-month {
    color: #ccc; /* 淺灰色 */
  }

  /* 今天 */
  .custom-calendar .react-datepicker__day--today {
    font-weight: bold;
    border: 1px solid #4a90e2; /* 藍色邊框 */
  }

  /* 選中的日期 */
  .custom-calendar .react-datepicker__day--selected {
    background-color: #4a90e2; /* 藍色背景 */
    color: white; /* 白色文字 */
    border-radius: 50%;
    &:hover {
        background-color: #3a80d2; /* Hover 時稍深的藍色 */
    }
  }

  /* 清除按鈕 (如果 isClearable 為 true) */
  .react-datepicker__close-icon {
    padding-right: 10px; /* 給清除圖標一些空間 */
    &::after {
      background-color: #aaa; /* 預設叉叉顏色 */
      font-size: 16px;
      height: 18px; /* 調整大小 */
      width: 18px;
      line-height: 18px;
      padding: 0;
      border-radius: 50%;
      text-align: center;
      top: 50%;
      transform: translateY(-50%);
    }
     &:hover::after {
       background-color: #f00; /* Hover 時變紅色 */
     }
  }
`;
// --- 結束：定義樣式 ---

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

// 可以調整 DatePicker 的樣式
const StyledDatePicker = styled(DatePicker)`
  padding: 12px 15px;
  border-radius: 30px;
  border: 1px solid #ddd;
  width: 100%; /* 讓它填滿容器寬度 */
  font-size: 16px;
  text-align: center;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

const DatePickerWrapper = styled.div`
  width: 100%; // 讓包裝器填滿寬度
  margin-bottom: 20px; // 與按鈕的間距
  display: flex;
  justify-content: center; // 水平置中
`;

const NumerologyCalculator = () => {
  const navigate = useNavigate();
  const { currentDesign, setCurrentDesign } = useDesign();
  // 移除 year, month, day 的 state
  // const [year, setYear] = useState('');
  // const [month, setMonth] = useState('');
  // const [day, setDay] = useState('');

  // 新增 state 來管理選中的日期
  const [selectedDate, setSelectedDate] = useState(null); // 初始值設為 null

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
    // 修改檢查邏輯，現在檢查 selectedDate
    if (!selectedDate) {
      alert('請選擇您的出生日期');
      return;
    }

    // 從 selectedDate 物件獲取年、月、日
    const y = selectedDate.getFullYear();
    // getMonth() 返回 0-11，所以需要 +1
    const m = selectedDate.getMonth() + 1;
    const d = selectedDate.getDate();

    // 計算邏輯保持不變
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
      {/* 將全域樣式應用到元件中 */}
      <GlobalDatePickerStyle />

      <PageTitle>探索你的生命靈數組合</PageTitle>
      
      <InputContainer>
        {/* 加入 DatePicker */}
        <DatePickerWrapper>
          <StyledDatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy/MM/dd"
            placeholderText="請選擇出生日期"
            showYearDropdown // 保留年份下拉
            showMonthDropdown // 保留月份下拉
            dropdownMode="select" // 保留 select 模式
            maxDate={new Date()}
            locale="zh-TW"
            isClearable
            peekNextMonth
            scrollableYearDropdown // 暫時保留
            yearDropdownItemNumber={100} // 暫時保留
            calendarClassName="custom-calendar"
            popperPlacement="bottom-start"
          />
        </DatePickerWrapper>
        
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
              <div>
                {resultDetails.crystalSuggestion.split(/[、,，\s]+/)
                  .map(name => name.trim())
                  .filter(name => name)
                  .map((crystalName, index) => {
                    const foundCrystal = crystals.find(c => c.name === crystalName);
                    if (foundCrystal) {
                      return (
                        <ClickableCrystal
                          key={`${foundCrystal.id}-${index}`}
                          onClick={() => handleCrystalClick(foundCrystal)}
                          title={`點擊將 ${foundCrystal.name} (${foundCrystal.size}mm) 加入設計`}
                        >
                          {crystalName}
                        </ClickableCrystal>
                      );
                    } else {
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