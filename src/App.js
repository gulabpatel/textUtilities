// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
function App() {
  return (
    <>
      <Navbar title="Navbar"/>
      <div className="container">
        <TextForm messege="Enter your text here" output="Your result here"/>
        </div>

        <div className='container'>
        <About/>
        </div>
      
      
    </>

  );
}

export default App;
