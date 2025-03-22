import React from 'react';
import { HashRouter, Routes, Route, useRoutes } from 'react-router-dom';
import styled from 'styled-components';
import { DesignProvider } from './contexts/DesignContext';
import routes from './routes';
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

function AppRoutes() {
  return useRoutes(routes);
}

function App() {
  return (
    <HashRouter>
      <DesignProvider>
        <AppContainer>
          <Header />
          <ContentContainer>
            <AppRoutes />
          </ContentContainer>
        </AppContainer>
      </DesignProvider>
    </HashRouter>
  );
}

export default App;
