import styled from 'styled-components';
import CrystalTable from '../components/CrystalTable';

const PageContainer = styled.div`
  padding: 20px;
`;

const CrystalPage = () => {
  return (
    <PageContainer>
      <CrystalTable />
    </PageContainer>
  );
};

export default CrystalPage; 