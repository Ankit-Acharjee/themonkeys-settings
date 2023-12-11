
import React from 'react';



import './App.css';
import { BrowserRouter , Router, Link, Route, Routes } from 'react-router-dom';

import Account from './pages/Account '
import Sidebar from './components/SideBarSection/Sidebar';




const App = () => {
  const activeMenu = false
  return ( 
  <BrowserRouter>
    <div className="App" style={{ backgroundImage: "url(./circle.jpg)" }}>
      
      <Routes>
        <Route exact path="/" element={<Sidebar/>} />
       
       
      </Routes>
    </div>
    
  </BrowserRouter>
);
}
   
  
export default App