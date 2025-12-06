import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './containers/Home';

function App() {
  return (
    <div>
       <BrowserRouter basename={process.env.PUBLIC_URL}>
       <Routes>
        <Route path="/" element={<Home />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
