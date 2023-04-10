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
import Roles from './Components/Dashboard/Roles/Roles'
import pmRead from './Components/Dashboard/Admin/PMs/pmRead';
import PmCreate from './Components/Dashboard/Admin/PMs/pmCreate';
import userRead from './Components/Dashboard/Admin/Users/userRead';

// import CreateAction from './Store/Projects/Actions/CreateAction';
// import store from './Store/store';
// import CreateReducer from './Store/Projects/Reducers/CreateReducer';
// import { Provider } from 'react-redux';

function App() {
 
  return (

    // <Provider store={store}>
    <Router>
   
    <div className="App">
    
   <Routes>
   <Route exact path='/AdminDashboard' Component={AdminDashboard}/> 
   <Route exact path='/' Component={LandingPage}/>
   <Route exact path='/Create' Component={Create}/>
    <Route exact path='/Read' Component={Read}/>
    <Route exact path='/Update' Component={Update}/>
      <Route exact path='/Roles' Component={Roles}/>
      <Route exact path='/pmRead' Component={pmRead}/>
      <Route exact path='/pmCreate' Component={PmCreate}/>
      <Route exact path='/userRead' Component={userRead}/>
       </Routes>
    </div>
   
    
    
      
        
<Routes>
            
  <Route exact path='/Login' element={<Login/>} />
</Routes> 
    
    </Router>
    // </Provider>
  );
}

export default App;
