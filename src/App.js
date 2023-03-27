// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [btnText, setbtnText] = useState('Enable Dark Mode')
  const [alert, setAlert] = useState(null)

  const showAlert = (messege, type) => {
    setAlert({
      msg: messege,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#271954';
      setbtnText('Enable light Mode');
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);

      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now';
      // },1500)
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setbtnText('Enable Dark Mode');
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    <Router>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} texxtmode={btnText} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About/>} />     
          <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} messege="Enter your text here" output="Your result here" />} />
        </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;
