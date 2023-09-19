import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TextBox from './components/TextBox/TextBox';
import Alert from './components/Alert/Alert';
import About from './components/About/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = React.useState('light');
  const [themeColor, setThemeColor] = React.useState('#606060');
  const [alertMsg, setAlertMsg] = React.useState(null);
  const [alertType, setAlertType] = React.useState(null);


  const showAlert = (msg, type) => {
    setAlertMsg(msg)
    setAlertType(type)
    setTimeout(() => {
      setAlertMsg(null)
      setAlertType(null)
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
      setThemeColor('#606060');
    }
    showAlert(`${mode === 'light' ? 'Dark' : 'Light'}mode has been enabled!`, "primary")
  }

  const changeThemeColor = (color) => {
    setThemeColor(color);
  }

  return (
    <BrowserRouter>

      <div style={{ backgroundColor: mode === 'light' ? 'white' : themeColor + '80', minHeight: '100vh' }}>
        <Navbar
          title='TextUtils'
          themeMode={mode}
          themeColor={themeColor}
          toggleMode={toggleMode}
          changeThemeColor={changeThemeColor}
          showAlert={showAlert}
        />
        <div className="container" >
          {!alertMsg && <div style={{ height: '49.5px' }}></div>}
          {alertMsg && <Alert type={alertType} msg={alertMsg} />}
          <Routes>
            <Route exact path='/' element={<TextBox themeMode={mode} themeColor={themeColor} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About themeMode={mode} themeColor={themeColor} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
