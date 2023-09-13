
import { useState } from 'react';
import React from "react";

import './App.css';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Alert from './components/Alert';
import About from './components/About';
import Forms from './components/Forms';
import Navbar from './components/Navbar';

function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);
const showAlert =(message,type)=>{
 setAlert(
   {
    message:message,
    type:type
   }

 )
 setTimeout(() => {
    setAlert(null);
}, 2000);
}

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#040e2e';
      showAlert("DarkMode Enabled","Success");
    }
  else{
    setMode('light');
    document.body.style.backgroundColor= '#e1dfdf';
    showAlert("LightkMode Enabled","Success");
  }
  }
  return (
    <>
  <Router>
   <Navbar  title="TryText" mode={mode} toggleMode={toggleMode}/>
    <Alert  alert={alert}/>
   <div className="container">
   <Routes>
          <Route exact path="/about" element={ <About  mode={mode}/>}/>
          <Route exact path="/" element={<Forms  title="Enter the Text below" mode={mode} showAlert={showAlert}/>}/>
        </Routes>
   </div>
   </Router>
    </>
  );
}

export default App;
