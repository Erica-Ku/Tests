import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Test2/Header';
import Main from './Test2/Main';

function App() {
  return (
    <Router>
      <Header />
      <Main />
    </Router>
  );
}

export default App;