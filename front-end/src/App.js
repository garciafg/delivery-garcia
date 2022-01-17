
import React from 'react';
import GlobalStyles from './assets/styles/GlobalStyles';
import Routes from './routes/';
import { Router } from 'react-router-dom'
import history from './services/history';
import MobileGlobalStyle from './assets/styles/MobileGlobalStyle';
import Header from './components/header/';

function App() {
  return (

      <>
        
          <Router history={history}>
            <Header/>
              <Routes />
              <GlobalStyles/>
              <MobileGlobalStyle/>
          </Router>

      </>

  );
}

export default App;
