import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { DesignProvider } from './contexts/DesignContext';
import MainPage from './pages/MainPage';
import Header from './components/Header';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #fff;
`;

const ContentContainer = styled.div`
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
          <Header />
          <ContentContainer>
            <MainPage />
          </ContentContainer>
        </AppContainer>
      </DesignProvider>
    </Router>
  );
}

export default App;
