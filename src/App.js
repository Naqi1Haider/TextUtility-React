
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,//Switch
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode]=useState("light") //WHETHER DARK MODE IS ENABLED OR NOT
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor = '#042743'
      showAlert(": Dark mode has been enabled","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert(": Light mode has been enabled","success")
    }
  }   

  //dark mode colour change function  
  const handleColorChange = (color) => {
    if (mode==="dark"){
    setBackgroundColor(color.hex);
    // Apply the selected color as the background color of the body
    document.body.style.backgroundColor = color.hex;
  }
  };
  
 //Alert
  const [alert, setAlert]=useState("null") 
  const showAlert = (message, type) => {
     setAlert({
          msg: message,
          type: type

     })
     setTimeout(() => {
       setAlert(null)
     }, 1500);

  }

   
  return (
   <>
      <Router>

      <Navbar title="TextUtils" About="About Utils" mode={mode} toggleMode={toggleMode} selectedColor={backgroundColor}
        onColorChange={handleColorChange}/>
      <Alert alert = {alert}/>  

      <div className="container my-3">
      <Routes> 


        
          <Route exact path="/" element={<TextForm heading="Enter text to analyze" showAlert={showAlert} mode={mode}/>} />

          <Route exact path="/about" element={<About/>} />

         
      </Routes>
      </div>

   
    </Router>
     
   </>
  );
}

export default App;
