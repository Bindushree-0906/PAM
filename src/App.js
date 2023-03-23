import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import LandingPage from './Components/LandingPage';
import Login from './Login/Login';
import {  Routes,Route, BrowserRouter } from "react-router-dom";
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      
        
      
          <Routes>
            
  <Route path='/Login' element={<Login/>} />

  
            </Routes>
            
      <NavBar/>
      <LandingPage/> 
      <Footer/>
       
      
      
      
  
      
    
    
    </div>
  );
}

export default App;
