import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import LandingPage from './Components/LandingPage';
import Login from './Login/Login';
//import { Routes,Route, BrowserRouter } from "react-router-dom";
import {BrowserRouter as Router , Route,Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import { useEffect} from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons'
import { LoginSocialGoogle } from 'reactjs-social-login';
import AdminDashboard from './Components/Dashboard/Admin/AdminDashboard';
import Read from './Components/Dashboard/Admin/Read/Read';
import Create from './Components/Dashboard/Admin/Create/Create';
import Update from './Components/Dashboard/Admin/Update/Update';
import Roles from './Components/Dashboard/Roles/Roles';
import appStore from './Store/Projects/Index';
import { Provider } from 'react';
// import AppRouter from './Components/Router/AppRouter';




// const clientId= "http://840665959732-ip9sm2ea6l7ds2vbgooum6ec08fl8k3v.apps.googleusercontent.com/"

function App() {
 
  return (

    <Provider store={appStore}>
    <Router>
   
    <div className="App">
      {/* <AppRouter/>  */}
      
  
    <div>
   <Routes>
   <Route exact path='/AdminDashboard' Component={AdminDashboard}/>
   </Routes>
   </div>
  
   <div>
   <Routes>
   <Route exact path='/' Component={LandingPage}/>
   </Routes>
   </div>
 
  
 
      <div>
   
      <Routes><Route exact path='/Create' Component={Create}/></Routes>
       
     </div>
     <div>
  
      <Routes><Route exact path='/Read' Component={Read}/></Routes>
     </div>
     <div>
 <Routes>
    <Route exact path='/Update' Component={Update}/>
     
     </Routes>
     </div>

    </div>

    <div>
      <Routes>
      <Route exact path='/Roles' Component={Roles}/>
       </Routes>
    </div>
   
    
    
      
        
<Routes>
            
  <Route exact path='/Login' element={<Login/>} />

  
           </Routes> 
            
      {/* // <NavBar/>
      // <LandingPage/> 
      // <Footer/> */}

      
        {/* <AdminDashboard/>   */}
       
        
       

      
      
      
  
      
    
   
    </Router>
    </Provider>
  );
}

export default App;
