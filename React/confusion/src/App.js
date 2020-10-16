import React from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter} from 'react-router-dom';

/*import { useState } from 'react';*/


function App() {

  return (
    <BrowserRouter>
      <div>
        <Main/>
      </div>
    </BrowserRouter>
  );
}

export default App;
