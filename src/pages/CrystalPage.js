import styled from 'styled-components';
import CrystalTable from '../components/CrystalTable';

const PageContainer = styled.div`
  padding: 20px;
`;

const PageTitle = styled.h2`
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const CrystalPage = () => {
  return (
    <PageContainer>
      <PageTitle>精選水晶，能量加持</PageTitle>
      <CrystalTable />
    </PageContainer>
  );
};

export default CrystalPage; 