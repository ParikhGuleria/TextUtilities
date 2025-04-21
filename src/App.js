import React, { useState } from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("success", "! Dark Mode has been enabled")
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "! Light Mode has been enabled")
    }
  }
  return (

    <BrowserRouter>
      <Navbar  btnvalue="Search" mode={mode} changeMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="About/" element={<About mode={mode}/>} />
          <Route path="/" element={<TextForms showAlert={showAlert} heading="Enter The Text" mode={mode} />
          }>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App