import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { DesignProvider } from './contexts/DesignContext';
import MainPage from './pages/MainPage';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  
  @media (max-width: 767px) {
    padding: 10px;
  }
`;

function App() {
  return (
    <Router>
      <DesignProvider>
        <AppContainer>
          <MainPage />
        </AppContainer>
      </DesignProvider>
    </Router>
  );
}

export default App;
