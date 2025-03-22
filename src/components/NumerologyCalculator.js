import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDesign } from '../contexts/DesignContext';

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
  const navigate = useNavigate();
  const { setCurrentDesign } = useDesign();
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
      1: {
        title: '「１」的密碼｜第一、起始、唯一',
        description: [
          '「1」代表「最初、開始、起源」，由此還可以延伸出「前進、發展、起點、頂點、第一」等含義，這個數字代表的是「跨出第一步、最初播下的種子」。',
          '此外，還象徵了「將事物整合、彙集、統合唯一」的領導能力。',
          '「1」的角色就是「決定方向並展開行動」。不管做或是不做某件事，「我要做」或」「我不要做」的意志最為重要，如果沒有決心，任何事都無法開始。',
          '除了下定決心，還要朝著決定的方向邁出強而有力的一部，將腦中的想法付諸實現，化為具體的行動。'
        ],
        role: '領袖',
        thinking: '感性派',
        colors: ['紅色', '黑色']
      },
      2: {
        title: '「２」的密碼｜包容、和諧、平衡',
        description: [
          '「2」意味著兩個極端的共存。像是「男與女」、「光明與黑暗」、「陰與陽」、「正與反」等等。',
          '相較於「1」勇往直前的特質，「2」象徵著調節相反兩極並維持平衡，代表「包容、認可、和諧、接納」這類被動要素較強的特質。',
          '「2」的角色是「連結」。相反兩極的事物，往往是一體兩面，需要互相認可、接納、連結。',
          '「2」這個數字的表的是容納並接受相反事物的包容力，也辦法著聯繫雙方的橋樑。此外，身處相反的兩極之地，不是選邊站，而是跟兩方都能好好相處，進行雙方的調節及統合。'
        ],
        role: '輔佐',
        thinking: '理性派',
        colors: ['白色']
      },
      3: {
        title: '「３」的密碼｜創造、歡笑、孩子',
        description: [
          '「3」蘊含了新事物的能量，是代表創造的數字，象徵著和諧與安定中蘊藏的變化的可能性。',
          '「3」這個數字源自「1」的動力與「2」的平衡，內含帶來新變化的「創造力」與「新能力」。以樹木的成長舉例，正是枝枒冒出嫩葉的狀態。',
          '「3」的功能在於其存在感與躍動感，蘊含著新發展、新變動新節奏的可能性。此外，「3」是象徵孩子的數字，它無法乖乖坐著不動，具備了「歡笑」與「輕快節奏」等取悅眾人的娛樂要素。',
          '「3」就是維繫相反的兩極，穩定兩者關係的角色。'
        ],
        role: '開心果',
        thinking: '感性派',
        colors: ['黃色']
      },
      4: {
        title: '「４」的密碼｜穩定、持續、成形',
        description: [
          '「4」意味著物質世界的誕生，是象徵「固定」或「安定」的穩固數字，正如四輪、四角等穩定狀態，有著扎根大地，四平八穩的安定感。',
          '此外，「4」還具備了「持續性」、「屹立不搖」等含義，代表物質世界本身，是非常強而有力的數字。',
          '「4」的角色是「打穩地基」。正如建築中打樁等基礎步驟，這個數字擔負著重要任務。',
          '此外，由於象徵固定、安定，「4」也具備了「安定事物」、「培養實力」等含義。以樹木的成長舉例，相當於除草、整地的階段。排除所有阻礙成長的因素，為將來做好準備、養精蓄銳。'
        ],
        role: '輔佐',
        thinking: '理性派',
        colors: ['藍色']
      },
      5: {
        title: '「５」的密碼｜自由、變化、連結',
        description: [
          '「5」代表的是人類本身，意味著「自由、行動力、溝通」等人類的特性，是極富行動力的數字。以樹木的成長舉例，就是成長與變化的時期。',
          '此外，「5」也象徵了不斷變化、搖擺不定、載浮載沉等，代表自由又不安定的狀態。',
          '「5」是能夠增幅並放大人類特徵（無論是正面或負面）的數字。'
        ],
        role: '開心果',
        thinking: '感性派',
        colors: ['綠色']
      },
      6: {
        title: '「６」的密碼｜愛、美、母性',
        description: [
          '「6」被稱為孕婦數字，因為孕育著領一個生命、另一個宇宙，所以擁有創造新生命的強大能量。以樹木的成長舉例，正是開花的時期。',
          '「6」是象徵創造力的「3」的倍數，也意味著精神與肉體、物質與心靈等回然不同的兩股創造性能量的完全整合。',
          '「6」的創造性能量，無疑是真正的愛、美、和諧與平衡。',
          '「6」擁有調節全體平衡的功能，完美的均衡象徵了真正的「愛」、「美」與「和諧」。'
        ],
        role: '領袖',
        thinking: '感性派',
        colors: ['粉紅']
      },
      7: {
        title: '「７」的密碼｜完成、自立、獨自一人',
        description: [
          '「7」代表一個週期的結束，是象徵「完成」的數字。「7」自古以來不論在東西方，均象徵著祝福與勝利，是被人熟知的幸運數字。以樹木的成長舉例，相當於修整枝葉的時期。',
          '對自己課以嚴格的修行，排除不需要的多餘事物，等確立自己的風格獨立以後，將迎來真正的幸運。',
          '正如一週天日、七大脈輪等，數字「7」代表的是事物的完結、一個週期的結束。意味著憑一己之力完成某事物，不流於俗，堅持貫徹自身強烈個人風格。',
          '為了獨立開拓全新的世界，即使遭到孤立也不害怕，依舊堅持自己的生存之道，尋求屬於自己的祝福與勝利。'
        ],
        role: '輔佐',
        thinking: '理性派',
        colors: ['藍色']
      },
      8: {
        title: '「８」的密碼｜熱情、無限、富足',
        description: [
          '「8」代表的是「物質與精神」等兩個世界的整合、均衡、循環與平衡。「8」的形狀如同無限的符號一樣，象徵繁榮、榮耀、財富、富足，具備讓事物無限增幅的強大力量。',
          '「8」的功能在於增幅、擴大現實的能量。以樹木的成長舉例，正是結實累累的收穫時期。',
          '此外，也具備了連結、統合現實世界和靈性世界，在調節雙方平衡的同時，使其無限循環的功能。'
        ],
        role: '開心果',
        thinking: '感性派',
        colors: ['橙色']
      },
      9: {
        title: '「９」的密碼｜終結、智慧、放下',
        description: [
          '「9」位於數字的最後，包含所有數字要素在內的終結、結束與統合，代表包含現實世界與另一個世界在內的宇宙全體循環，象徵了「智慧」與「真理」。',
          '「9」的角色是整合全體的最後一棒，因此，數字「9」具備具備了強化並輔助其鄰近數字的功能。以樹木的成長舉例，正式回歸大地的時期。',
          '這個數字代表施展目前為止累積的所有智慧、經驗來整合全體，無私奉獻社會，為全人類付出。',
          '你的力量來自於無條件的愛和奉獻，以及將個人經驗轉化為集體智慧的能力。'
        ],
        role: '領袖',
        thinking: '理性派',
        colors: ['紫色']
      }
    };
    
    return meanings[number] || {
      title: '無法解析此生命靈數',
      description: ['請確認您輸入的生日是否正確'],
      role: '',
      thinking: '',
      colors: []
    };
  };

  const handleColorCrystalClick = (color) => {
    // 保存篩選顏色和時間戳
    localStorage.setItem('crystal_color_filter', color);
    localStorage.setItem('filter_timestamp', Date.now().toString());
    
    console.log(`選擇了 ${color} 系水晶，即將跳轉...`);
    
    try {
      // 直接使用導航到 HelperPage 並顯式設置 URL 參數
      const baseUrl = window.location.origin + (process.env.PUBLIC_URL || '');
      // 使用完整 URL 確保正確導航
      const targetUrl = `${baseUrl}/helper?page=inspiration`;
      console.log("跳轉目標URL:", targetUrl);
      
      // 保存當前狀態以備重定向失敗時使用
      localStorage.setItem('redirect_to_helper', 'true');
      localStorage.setItem('helper_page', 'inspiration');
      
      // 強制重新加載頁面以確保狀態重置
      window.location.href = targetUrl;
    } catch (error) {
      console.error("跳轉失敗:", error);
      // 回退方案: 使用 navigate
      navigate('/helper?page=inspiration');
    }
  };

  return (
    <>
      <PageTitle>開始探索生命靈數</PageTitle>
      
      <InputContainer>
        <InputRow>
          <InputField 
            type="number" 
            placeholder="年" 
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
          <ResultTitle>您的生命靈數是</ResultTitle>
          <h1 style={{ fontSize: '60px', margin: '10px 0' }}>{result}</h1>
          <div style={{ margin: '20px 0', fontWeight: 'bold' }}>
            {getLifeNumberMeaning(result).title.split('｜')[1] || ''}
          </div>
          
          <ResultText>{getLifeNumberMeaning(result).title}</ResultText>
          
          {getLifeNumberMeaning(result).description.map((paragraph, index) => (
            <ResultText key={index}>{paragraph}</ResultText>
          ))}
          
          <div style={{ margin: '30px 0' }}>
            <div>角色：{getLifeNumberMeaning(result).role}</div>
            <div>思考：{getLifeNumberMeaning(result).thinking}</div>
            <div>顏色：{getLifeNumberMeaning(result).colors.join('、')}</div>
          </div>
          
          {getLifeNumberMeaning(result).colors.map((color, index) => (
            <div key={index} style={{ margin: '10px 0' }}>
              <a 
                onClick={() => handleColorCrystalClick(color)}
                style={{ 
                  display: 'inline-block',
                  padding: '10px 20px',
                  border: '1px solid #ddd',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  color: '#333',
                  cursor: 'pointer'
                }}
              >
                查看{color}系相關水晶飾品
              </a>
            </div>
          ))}
        </ResultContainer>
      )}
    </>
  );
};

export default NumerologyCalculator; 