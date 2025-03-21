import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDesign } from '../contexts/DesignContext';
import { crystals } from '../data/crystals';

// 樣式定義
const AdvisorContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 15px;
  color: #333;
  text-align: center;
`;

const Description = styled.p`
  margin-bottom: 25px;
  color: #666;
  text-align: center;
  font-size: 14px;
  line-height: 1.5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #444;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  min-height: 100px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 12px;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #3a80d2;
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`;

const LoadingIndicator = styled.div`
  text-align: center;
  margin: 20px 0;
  color: #666;
`;

const ResultsContainer = styled.div`
  margin-top: 30px;
`;

const ResultsTitle = styled.h3`
  margin-bottom: 15px;
  color: #333;
  text-align: center;
`;

const RecommendationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const CrystalCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  }
`;

const CrystalImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const CrystalName = styled.h4`
  font-size: 16px;
  color: #333;
  margin: 0 0 5px 0;
  text-align: center;
`;

const CrystalProperty = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 5px 0;
  text-align: center;
`;

const CrystalDescription = styled.p`
  font-size: 12px;
  color: #888;
  text-align: center;
  margin-top: 5px;
`;

const SelectButton = styled(SubmitButton)`
  width: 100%;
  margin-top: 15px;
`;

// 添加手圍尺寸選擇器相關樣式
const SizeContainer = styled.div`
  margin: 15px 0;
  text-align: center;
`;

const SizeTitle = styled.h3`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UnitLabel = styled.span`
  font-size: 14px;
  color: #666;
  margin-left: 5px;
  font-weight: normal;
`;

const SizeOptions = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
`;

const SizeButton = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${props => props.active ? '#666' : '#fff'};
  color: ${props => props.active ? '#fff' : '#333'};
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: 16px;
  
  &:hover {
    background: ${props => props.active ? '#666' : '#f0f0f0'};
  }
`;

const CustomButton = styled(SizeButton)`
  width: 70px;
  height: 45px;
  border-radius: 22.5px;
  padding: 0 15px;
`;

const CustomInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const CustomInput = styled.input`
  width: 80px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
`;

const Unit = styled.span`
  margin-left: 8px;
  color: #666;
  font-size: 14px;
`;

// 新增方案卡片相關樣式
const PlanContainer = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  }
`;

const PlanTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
`;

const PlanDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
  line-height: 1.5;
`;

const TestimonialContainer = styled.div`
  margin-top: 15px;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 8px;
  border-left: 3px solid #4a90e2;
`;

const TestimonialTitle = styled.h4`
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
`;

const TestimonialText = styled.p`
  font-size: 14px;
  color: #666;
  font-style: italic;
  line-height: 1.5;
`;

const CrystalPreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 15px 0;
`;

const CrystalPreviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
`;

const CrystalPreviewImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

const CrystalPreviewName = styled.span`
  font-size: 12px;
  color: #666;
  text-align: center;
  margin-top: 5px;
`;

const PlanSelectButton = styled(SubmitButton)`
  width: 100%;
  margin-top: 15px;
`;

// 添加 CrystalTotalLength 組件
const CrystalTotalLength = styled.p`
  font-size: 14px;
  color: #666;
  margin: 10px 0;
  text-align: center;
  font-weight: bold;
`;

// 添加 Testimonial 相關組件
const Testimonial = styled.div`
  margin-top: 10px;
  padding: 10px;
  background: #f9f9f9;
  border-radius: 8px;
  border-left: 3px solid #4a90e2;
`;

const TestimonialName = styled.h5`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
`;

const TestimonialStory = styled.p`
  font-size: 12px;
  color: #666;
  font-style: italic;
  line-height: 1.4;
`;

// 添加缺少的 ErrorMessage 組件定義（放在其他樣式定義的地方）
const ErrorMessage = styled.div`
  color: #e74c3c;
  text-align: center;
  margin: 20px 0;
  padding: 10px;
  background: #fdeaea;
  border-radius: 4px;
`;

// 主組件
const OpenAICrystalAdvisor = () => {
  const navigate = useNavigate();
  const { setCurrentDesign } = useDesign();
  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    zodiacSign: '',
    purpose: '',
    preferences: '',
    concerns: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // 修改為三個方案的狀態
  const [crystalPlans, setCrystalPlans] = useState([]);
  
  // 添加手圍尺寸相關狀態
  const sizesInCm = [14, 15, 16, 17, 18];
  const [selectedSize, setSelectedSize] = useState(15); // 預設 15 cm
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customValue, setCustomValue] = useState('15');

  // 處理表單輸入變化
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 處理手圍尺寸變化
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  // 處理自定義尺寸
  const handleCustomSize = (e) => {
    setCustomValue(e.target.value);
  };

  const handleCustomSubmit = () => {
    const valueInCm = parseFloat(customValue);
    if (!isNaN(valueInCm) && valueInCm >= 8 && valueInCm <= 30) {
      setSelectedSize(valueInCm);
    }
    setShowCustomInput(false);
  };

  const handleCustomClick = () => {
    setShowCustomInput(true);
    setCustomValue(selectedSize.toString());
  };

  // 處理表單提交
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // 調用 OpenAI API 獲取三個方案
      const plans = await callOpenAIAPI();
      setCrystalPlans(plans);
    } catch (err) {
      setError('抱歉，無法獲取推薦。請稍後再試。');
      console.error('Error fetching recommendations:', err);
    } finally {
      setLoading(false);
    }
  };

  // 調用 OpenAI API
  const callOpenAIAPI = async () => {
    // 準備發送給 OpenAI 的提示
    const prompt = generatePrompt();
    
    try {
      // 使用環境變數中的 API 密鑰
      const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
      
      // 調試信息
      console.log('API Key 是否設置:', apiKey ? '已設置' : '未設置');
      console.log('API Key 前10個字符:', apiKey ? apiKey.substring(0, 10) + '...' : '無');
      
      if (!apiKey) {
        throw new Error('OpenAI API 密鑰未設置。請在環境變數中設置 REACT_APP_OPENAI_API_KEY。');
      }
      
      // 調用 OpenAI API
      console.log('正在調用 OpenAI API...');
      
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            {
              role: 'system',
              content: '你是一位專業的水晶顧問，根據用戶的需求和偏好推薦最適合的水晶組合。'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.7,
          max_tokens: 2000
        })
      });

      // 檢查響應狀態
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API 響應錯誤:', response.status, errorData);
        throw new Error(`API 請求失敗: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('API 響應成功:', data);
      
      const aiResponse = data.choices[0].message.content;
      
      // 解析 AI 回應，獲取三個推薦方案
      const plans = parseAIResponse(aiResponse);
      
      // 如果沒有找到推薦的方案，使用備用方法
      if (plans.length === 0) {
        console.log('未找到推薦的方案，使用備用方法');
        return generateFallbackPlans();
      }
      
      return plans;
    } catch (error) {
      console.error('OpenAI API 調用失敗:', error);
      // 如果 API 調用失敗，使用備用方法
      return generateFallbackPlans();
    }
  };

  // 修改 selectCrystalsForPlan 函數，使其選擇更多水晶填滿手圍尺寸
  const selectCrystalsForPlan = (sortedCrystals, maxLength, priorityFilter) => {
    const selectedCrystals = [];
    let totalLength = 0;
    
    // 首先添加符合優先條件的水晶
    for (const crystal of sortedCrystals) {
      if (priorityFilter(crystal) && totalLength + crystal.size <= maxLength * 0.95) {
        selectedCrystals.push(crystal);
        totalLength += crystal.size;
      }
    }
    
    // 如果還有空間，添加其他高分水晶
    // 使用貪心算法盡可能填滿手圍空間
    const remainingCrystals = sortedCrystals.filter(crystal => !selectedCrystals.includes(crystal));
    
    // 按大小排序，先嘗試添加較小的水晶，以便更好地填充空間
    const sortedBySizeCrystals = [...remainingCrystals].sort((a, b) => a.size - b.size);
    
    for (const crystal of sortedBySizeCrystals) {
      if (totalLength + crystal.size <= maxLength * 0.95) {
        selectedCrystals.push(crystal);
        totalLength += crystal.size;
      }
    }
    
    // 如果還有空間，嘗試用更小的水晶填充
    const smallCrystals = sortedCrystals.filter(crystal => crystal.size <= 6); // 6mm 以下的小水晶
    
    for (const crystal of smallCrystals) {
      if (!selectedCrystals.includes(crystal) && totalLength + crystal.size <= maxLength * 0.98) {
        selectedCrystals.push(crystal);
        totalLength += crystal.size;
      }
    }
    
    return selectedCrystals;
  };

  // 修改 generatePrompt 函數，強調需要填滿手圍空間
  const generatePrompt = () => {
    // 將水晶數據轉換為簡潔的格式，以便包含在提示中
    const crystalData = crystals.map(crystal => ({
      id: crystal.id,
      name: crystal.name,
      power: crystal.power,
      color: crystal.color,
      zodiac: crystal.zodiac,
      chakra: crystal.chakra,
      healing: crystal.healing,
      energy: crystal.energy,
      size: crystal.size
    }));
    
    return `
我需要根據用戶的信息和偏好，從以下水晶列表中推薦三種不同的完整水晶手串方案。

用戶信息:
- 姓名: ${formData.name}
- 出生日期: ${formData.birthdate}
- 星座: ${formData.zodiacSign}
- 尋找水晶的目的: ${formData.purpose}
- 偏好: ${formData.preferences}
- 希望改善的方面: ${formData.concerns}
- 手圍尺寸: ${selectedSize} cm

可用的水晶列表:
${JSON.stringify(crystalData, null, 2)}

請根據用戶的星座、目的、偏好和需求，推薦三種不同的完整水晶手串方案。每種方案應該有不同的主題和能量焦點。
每個方案需要包含：
1. 方案名稱
2. 方案描述（解釋為什麼這個組合適合用戶）
3. 水晶組合（水晶ID列表）
4. 一個見證人故事（描述一個使用類似水晶組合的人獲得的效果）

非常重要：每個手串必須是完整的，總長度應該接近但不超過用戶的手圍尺寸 (${selectedSize} cm)。請盡可能選擇多個水晶填滿整個手圍空間，而不是只選擇幾個水晶。
請考慮水晶的能量互補性，確保整體能量平衡。

請以JSON格式返回三個方案，格式如下：
[
  {
    "name": "方案名稱1",
    "description": "方案描述1",
    "crystalIds": ["c3", "c10", "c11", "c14", "c5", "c7", "c9", "c12"],
    "testimonial": {
      "name": "見證人姓名",
      "story": "見證人故事"
    }
  },
  {
    "name": "方案名稱2",
    "description": "方案描述2",
    "crystalIds": ["c15", "c17", "c20", "c2", "c4", "c8", "c13"],
    "testimonial": {
      "name": "見證人姓名",
      "story": "見證人故事"
    }
  },
  {
    "name": "方案名稱3",
    "description": "方案描述3",
    "crystalIds": ["c12", "c13", "c18", "c19", "c1", "c6", "c16"],
    "testimonial": {
      "name": "見證人姓名",
      "story": "見證人故事"
    }
  }
]
`;
  };

  // 修改 parseAIResponse 函數，增加對水晶總長度的檢查
  const parseAIResponse = (response) => {
    try {
      // 嘗試直接解析 JSON
      const match = response.match(/\[[\s\S]*\]/);
      if (match) {
        const jsonData = JSON.parse(match[0]);
        
        // 處理每個方案，將水晶ID轉換為實際的水晶對象
        return jsonData.map(plan => {
          const planCrystals = plan.crystalIds
            .map(id => crystals.find(crystal => crystal.id === id))
            .filter(crystal => crystal !== undefined);
          
          // 計算總長度 - 將 const 改為 let
          let totalLength = planCrystals.reduce((sum, crystal) => sum + crystal.size, 0);
          const maxLengthMm = selectedSize * 10;
          
          // 如果總長度不足手圍尺寸的80%，嘗試添加更多水晶
          if (totalLength < maxLengthMm * 0.8) {
            const additionalCrystals = crystals.filter(crystal => 
              !planCrystals.includes(crystal) && 
              totalLength + crystal.size <= maxLengthMm * 0.95
            ).sort((a, b) => a.size - b.size);
            
            for (const crystal of additionalCrystals) {
              if (totalLength + crystal.size <= maxLengthMm * 0.95) {
                planCrystals.push(crystal);
                totalLength += crystal.size;
              }
            }
          }
          
          return {
            ...plan,
            crystals: planCrystals
          };
        });
      }
      
      // 如果無法解析，返回空數組
      return [];
    } catch (error) {
      console.error('解析 AI 回應失敗:', error);
      return [];
    }
  };

  // 修改 generateFallbackPlans 函數中的方案描述，強調完整手串
  const generateFallbackPlans = () => {
    // 簡單的匹配算法
    const userPreferences = formData.preferences.toLowerCase();
    const userConcerns = formData.concerns.toLowerCase();
    const userPurpose = formData.purpose.toLowerCase();
    const userZodiac = formData.zodiacSign;
    
    const scoredCrystals = crystals.map(crystal => {
      let score = 0;
      
      // 根據能量屬性匹配
      if (crystal.power && userPurpose.includes(crystal.power)) score += 3;
      if (crystal.energy && userPurpose.includes(crystal.energy)) score += 2;
      
      // 根據顏色偏好匹配
      if (crystal.color && userPreferences.includes(crystal.color)) score += 2;
      
      // 根據治療屬性匹配
      if (crystal.healing && userConcerns.includes(crystal.healing)) score += 3;
      
      // 根據星座匹配
      if (crystal.zodiac && userZodiac && crystal.zodiac.includes(userZodiac)) score += 2;
      
      return { ...crystal, score };
    });
    
    // 排序水晶
    const sortedCrystals = scoredCrystals.sort((a, b) => b.score - a.score);
    
    // 生成三個不同主題的方案
    const maxLengthMm = selectedSize * 10; // 轉換為毫米
    
    // 方案1：基於主要目的
    const plan1Crystals = selectCrystalsForPlan(sortedCrystals, maxLengthMm, crystal => 
      crystal.power === userPurpose || crystal.energy === userPurpose
    );
    
    // 方案2：基於星座
    const plan2Crystals = selectCrystalsForPlan(sortedCrystals, maxLengthMm, crystal => 
      crystal.zodiac && crystal.zodiac.includes(userZodiac)
    );
    
    // 方案3：基於顏色偏好
    const colorPreference = userPreferences.includes('藍色') ? '藍色系' : 
                           userPreferences.includes('綠色') ? '綠色系' : 
                           userPreferences.includes('紅色') ? '紅色系' : 
                           userPreferences.includes('紫色') ? '紫色系' : 
                           userPreferences.includes('黃色') ? '黃色系' : '多色系';
    
    const plan3Crystals = selectCrystalsForPlan(sortedCrystals, maxLengthMm, crystal => 
      crystal.color === colorPreference
    );
    
    // 創建三個方案
    return [
      {
        name: `${userPurpose}能量完整手串`,
        description: `這個完整手串組合專注於${userPurpose}能量，幫助您實現${userPurpose}的目標。每顆水晶都經過精心挑選，確保能量互補，為您帶來最佳效果。總共包含${plan1Crystals.length}顆水晶，完美貼合您的手圍尺寸。`,
        crystals: plan1Crystals,
        testimonial: {
          name: "小美",
          story: `我一直在尋找能幫助我${userPurpose}的方法。自從使用了這個完整水晶手串後，我感覺到能量明顯提升，生活中的${userPurpose}機會也增加了。這個手串剛好環繞我的手腕一圈，非常舒適且能量充沛！`
        }
      },
      {
        name: `${userZodiac}星座專屬完整手串`,
        description: `這個完整手串組合專為${userZodiac}星座設計，充分考慮了您星座的特性和需求。這些水晶能夠增強您的星座優勢，同時平衡可能的弱點。總共包含${plan2Crystals.length}顆水晶，完美貼合您的手圍尺寸。`,
        crystals: plan2Crystals,
        testimonial: {
          name: "小華",
          story: `作為一個${userZodiac}，我總是感到某些方面需要加強。這個專為我星座設計的完整水晶手串真的很神奇，它幫助我更好地發揮自己的優勢，同時也讓我更加平衡。手串剛好環繞我的手腕一圈，佩戴起來非常舒適！`
        }
      },
      {
        name: `${colorPreference.replace('系', '')}系療癒完整手串`,
        description: `這個完整手串組合以${colorPreference.replace('系', '')}色系水晶為主，不僅符合您的審美偏好，還能帶來特定的能量和療癒效果。${colorPreference.replace('系', '')}色系水晶通常與特定的脈輪和能量相關聯。總共包含${plan3Crystals.length}顆水晶，完美貼合您的手圍尺寸。`,
        crystals: plan3Crystals,
        testimonial: {
          name: "小龍",
          story: `我一直被${colorPreference.replace('系', '')}色系的水晶所吸引，感覺它們能與我產生共鳴。使用這個完整手串後，我感到更加平靜和專注，生活中的壓力似乎減輕了很多。這個手串剛好環繞我的手腕一圈，佩戴起來非常舒適且美觀！`
        }
      }
    ];
  };

  // 處理選擇方案
  const handleSelectPlan = (plan) => {
    // 將選中方案的水晶添加到當前設計中
    setCurrentDesign(prev => ({
      ...prev,
      size: selectedSize * 10, // 轉換為毫米
      crystals: plan.crystals
    }));
    
    // 導航到設計頁面
    navigate('/design');
  };

  // 計算方案中水晶的總長度
  const calculatePlanLength = (plan) => {
    if (!plan || !plan.crystals || plan.crystals.length === 0) return 0;
    
    const totalLengthMm = plan.crystals.reduce((sum, crystal) => sum + crystal.size, 0);
    return (totalLengthMm / 10).toFixed(1); // 轉換為厘米並保留一位小數
  };

  return (
    <AdvisorContainer>
      <Title>OpenAI 水晶顧問</Title>
      <Description>
        歡迎使用 OpenAI 水晶顧問！請填寫以下表單，我們將根據您的需求和偏好，為您推薦最適合的水晶組合。
      </Description>
      
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">姓名</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="birthdate">出生日期</Label>
          <Input
            type="date"
            id="birthdate"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="zodiacSign">星座</Label>
          <Select
            id="zodiacSign"
            name="zodiacSign"
            value={formData.zodiacSign}
            onChange={handleInputChange}
            required
          >
            <option value="">請選擇</option>
            <option value="牡羊座">牡羊座</option>
            <option value="金牛座">金牛座</option>
            <option value="雙子座">雙子座</option>
            <option value="巨蟹座">巨蟹座</option>
            <option value="獅子座">獅子座</option>
            <option value="處女座">處女座</option>
            <option value="天秤座">天秤座</option>
            <option value="天蠍座">天蠍座</option>
            <option value="射手座">射手座</option>
            <option value="摩羯座">摩羯座</option>
            <option value="水瓶座">水瓶座</option>
            <option value="雙魚座">雙魚座</option>
          </Select>
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="purpose">尋找水晶的目的</Label>
          <TextArea
            id="purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="preferences">偏好</Label>
          <TextArea
            id="preferences"
            name="preferences"
            value={formData.preferences}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="concerns">希望改善的方面</Label>
          <TextArea
            id="concerns"
            name="concerns"
            value={formData.concerns}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        
        <SizeContainer>
          <SizeTitle>
            手圍尺寸
            <UnitLabel>(cm)</UnitLabel>
          </SizeTitle>
          <SizeOptions>
            {sizesInCm.map(size => (
              <SizeButton
                key={size}
                onClick={() => handleSizeChange(size)}
                active={size === selectedSize}
              >
                {size}
              </SizeButton>
            ))}
            <SizeButton onClick={handleCustomClick}>
              自定義
            </SizeButton>
          </SizeOptions>
          {showCustomInput && (
            <CustomInputContainer>
              <Input
                type="number"
                value={customValue}
                onChange={handleCustomSize}
                min="8"
                max="30"
              />
              <SubmitButton onClick={handleCustomSubmit}>確定</SubmitButton>
            </CustomInputContainer>
          )}
        </SizeContainer>
        
        <SubmitButton type="submit" disabled={loading}>
          {loading ? '正在獲取推薦...' : '獲取推薦'}
        </SubmitButton>
      </Form>
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      {crystalPlans.length > 0 && (
        <ResultsContainer>
          <ResultsTitle>推薦的水晶組合</ResultsTitle>
          {crystalPlans.map((plan, index) => (
            <PlanContainer key={index}>
              <PlanTitle>{plan.name}</PlanTitle>
              <PlanDescription>{plan.description}</PlanDescription>
              
              <CrystalPreview>
                {plan.crystals.map(crystal => (
                  <CrystalPreviewItem key={crystal.id}>
                    <CrystalPreviewImage src={crystal.image} alt={crystal.name} />
                    <CrystalPreviewName>{crystal.name}</CrystalPreviewName>
                  </CrystalPreviewItem>
                ))}
              </CrystalPreview>
              
              <CrystalProperty>總長度: {calculatePlanLength(plan)} cm</CrystalProperty>
              
              <TestimonialContainer>
                <TestimonialTitle>使用者 {plan.testimonial.name} 的體驗</TestimonialTitle>
                <TestimonialText>"{plan.testimonial.story}"</TestimonialText>
              </TestimonialContainer>
              
              <PlanSelectButton onClick={() => handleSelectPlan(plan)}>
                選擇此方案
              </PlanSelectButton>
            </PlanContainer>
          ))}
        </ResultsContainer>
      )}
    </AdvisorContainer>
  );
};

export default OpenAICrystalAdvisor; 