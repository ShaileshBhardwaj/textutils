
import React, { useState }from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/textform";
import Alert from './components/Alert';
import About from "./components/About";
import Contact from './components/Contact';
import {Routes, Route} from 'react-router-dom';

function App() {
  const [mode , setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
          setAlert({
            msg: message,
            type: type
          })
          setTimeout(()=>{
            setAlert(null)
          }, 2000)
  }
  const toogleMode = ()=>{
      if(mode==='light'){
        setMode('dark')
        document.body.style.backgroundColor='#00052a';
        showAlert('Dark mode has been enabled', 'success')
        // setInterval(() => {
        //   document.title = 'Textutils - Dark Mode';
        // }, 2000);
        // setInterval(() => {
        //   document.title = 'Install Textutils - Light Mode';
        // }, 1500);
      }
      else{
        setMode('light')
        document.body.style.backgroundColor='white';
        showAlert('Light mode has been enabled', 'success')
        document.title = 'Textutils - Light Mode';
      }
  }
  return (
    <>
     <Navbar title="TextUtils" Textutilsabout="About TextUtils" contact="Contact us" mode={mode} toogleMode={toogleMode}/>
     <Alert alert={alert}/>
    <Routes>
      <Route path='/' element={<TextArea heading="Text Analyser" mode={mode} showAlert={showAlert}/> }  />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>}/>
    </Routes>
      
        
      </>
  );
}

export default App;
