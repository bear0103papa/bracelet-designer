import styled from 'styled-components';
import { useDesign } from '../../contexts/DesignContext';

const SavedContainer = styled.div`
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Title = styled.h3`
  margin-bottom: 12px;
  font-size: 16px;
  color: #333;
`;

const SavedList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const SavedItem = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const PreviewContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BraceletPreview = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border: 1px dashed #ccc;
  border-radius: 50%;
`;

const PreviewBead = styled.img`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  transform-origin: ${props => `${-props.radius}px ${0}px`};
  transform: ${props => `
    translate(-50%, -50%)
    rotate(${props.angle}deg)
  `};
  left: 100%;
  top: 50%;
  object-fit: cover;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(255, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;

  ${SavedItem}:hover & {
    opacity: 1;
  }
`;

const SavedDesigns = () => {
  const { 
    currentDesign, 
    setCurrentDesign, 
    savedDesigns = [], 
    setSavedDesigns 
  } = useDesign();

  const handleLoad = (design) => {
    setCurrentDesign({
      ...design,
    });
  };

  const handleDelete = (e, designId) => {
    e.stopPropagation();
    const updatedDesigns = savedDesigns.filter(design => design.id !== designId);
    setSavedDesigns(updatedDesigns);
    localStorage.setItem('savedDesigns', JSON.stringify(updatedDesigns));
  };

  const renderBraceletPreview = (design) => {
    const PREVIEW_DIAMETER = 80;
    const wristCircumference = design.size;

    return design.crystals.map((crystal, index) => {
      let accumulatedLength = design.crystals
        .slice(0, index)
        .reduce((sum, c) => sum + c.size, 0);
      
      const angle = (accumulatedLength / wristCircumference) * 360;
      const beadDisplaySize = (crystal.size / wristCircumference) * PREVIEW_DIAMETER * Math.PI;
      const radius = (PREVIEW_DIAMETER - beadDisplaySize) / 2;
      
      return (
        <PreviewBead
          key={`${crystal.id}-${index}`}
          src={crystal.image}
          size={beadDisplaySize}
          angle={angle}
          radius={radius}
          alt={crystal.name}
          onError={(e) => {
            e.target.src = '/assets/placeholder.jpg';
          }}
        />
      );
    });
  };

  return (
    <SavedContainer>
      <Title>已儲存設計</Title>
      <SavedList>
        {(savedDesigns || []).map(design => (
          <SavedItem 
            key={design.id}
            onClick={() => handleLoad(design)}
          >
            <PreviewContainer>
              <BraceletPreview>
                {renderBraceletPreview(design)}
              </BraceletPreview>
            </PreviewContainer>
            <DeleteButton 
              onClick={(e) => handleDelete(e, design.id)}
            >
              ×
            </DeleteButton>
          </SavedItem>
        ))}
      </SavedList>
    </SavedContainer>
  );
};

export default SavedDesigns; 