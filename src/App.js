import './App.css';
import React, { useState } from 'react';
// import About from './components/About';
import Nevbar from './components/Nevbar';
import TextForms from './components/TextForms';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=> {
      setAlert(null)
    },3000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.background = '#053e64ff';
      showAlert('Dark mode has been enabled', 'success')
      document.title = 'TextUtil - Dark Mode';
    }else{
      setMode('light')
      document.body.style.background = 'white';
      showAlert('Light mode has been enabled', 'success')
      document.title = 'TextUtil - Light Mode';
    }
  }
  return (
    <>
    {/* <Router> */}
      <Nevbar title = "TextUtils" mode = {mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-10">
        {/* <Switch>
          <Route path="/About">
            <About />
          </Route> */}
          {/* <Route path="/"> */}
            <TextForms showAlert = {showAlert} Heading = "Enter the text to Analyze." mode = {mode}/>
          {/* </Route> */}
        {/* </Switch>  */}
        </div>
      {/* </Router> */}
     </>
  );
}

export default App;
