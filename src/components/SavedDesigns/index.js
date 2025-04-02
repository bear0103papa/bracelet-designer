import styled from 'styled-components';
import { useDesign } from '../../contexts/DesignContext';

const SavedContainer = styled.div`
  padding: 16px;
  background: #f9f9f9;
  border-radius: 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin-bottom: 16px;
  font-size: 18px;
  color: #333;
  text-align: center;
  flex-shrink: 0;
`;

const SavedList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
  overflow-y: auto;
  flex-grow: 1;
  padding: 4px;
`;

const SavedItem = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #eee;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #ddd;
  }
`;

const PreviewContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const BraceletPreview = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
`;

const PreviewBead = styled.img`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform-origin: center;
  object-fit: cover;
  transform: ${props => `
    translate(-50%, -50%)
    rotate(${props.angle}deg)
    translateX(${props.radius}px)
    rotate(${-props.angle}deg)
  `};
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s, background-color 0.2s;
  padding: 0;
  font-size: 14px;
  line-height: 1;

  ${SavedItem}:hover & {
    opacity: 1;
  }

  &:hover {
    background: rgba(255, 0, 0, 0.8);
  }
`;

const EmptyMessage = styled.div`
  text-align: center;
  color: #888;
  padding: 30px;
  font-size: 14px;
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
    if (!design || !design.crystals || design.crystals.length === 0) {
      return null;
    }
    const PREVIEW_RADIUS = 60;
    const MAX_BEAD_SIZE = 32;
    const MIN_BEAD_SIZE = 22;

    const totalBeads = design.crystals.length;

    return design.crystals.map((crystal, index) => {
      const angle = (index / totalBeads) * 360;

      const scaleFactor = Math.min(1, crystal.size / 10);
      const beadDisplaySize = MIN_BEAD_SIZE + (MAX_BEAD_SIZE - MIN_BEAD_SIZE) * scaleFactor;

      return (
        <PreviewBead
          key={`${crystal.id || index}-${index}`}
          src={crystal.image}
          size={beadDisplaySize}
          angle={angle}
          radius={PREVIEW_RADIUS}
          alt={crystal.name || 'bead'}
          onError={(e) => {
            e.target.src = '/placeholder.jpg';
          }}
        />
      );
    });
  };

  return (
    <SavedContainer>
      <Title>已儲存設計</Title>
      {savedDesigns && savedDesigns.length > 0 ? (
        <SavedList>
          {savedDesigns.map(design => (
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
      ) : (
        <EmptyMessage>尚無儲存的設計</EmptyMessage>
      )}
    </SavedContainer>
  );
};

export default SavedDesigns; 