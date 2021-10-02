import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import {Navbar} from './components/common';
import {NAV_DATA} from './constants';

function App() {
  return (
    <Router>
      <Navbar navData={NAV_DATA} />
    </Router>
    
  );
}

export default App;
