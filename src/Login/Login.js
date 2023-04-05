
import { Link } from 'react-router-dom'
import {GoogleLogin} from 'react-google-login'

// // const clientId="http://840665959732-ip9sm2ea6l7ds2vbgooum6ec08fl8k3v.apps.googleusercontent.com/"

// function Login(){

// import React from 'react';
// import { useEffect } from 'react';
// function Test() {
//   function fn(response){
//     console.log(response.credential)
//   }
//   useEffect(() => {
//     window.google.accounts.id.initialize({
//       client_id: "692555571191-q14fs5nld3qfbjse8eh385ot1alb20jh.apps.googleusercontent.com",
//       callback: fn
//     });
//     window.google.accounts.id.renderButton(
//       document.getElementById("signIn") || document.createElement("div"),
//       { theme: "outline", size: "large" }
//     );
//   }, []);
//   return (
//     <div id="signIn">
//     </div> )
// }

//   // const onSuccess = (res) => {
//   //   console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
//   // }

//   // const onFailure = (res) => {
//   //   console.log("LOGIN FAILED! res:", res);
//   // }
 

//   // return(
//   //   <div id="signInButton">
//   //     <GoogleLogin
//   //         clientId={clientId}
//   //         buttonText="Login"
//   //         onSuccess={onSuccess}
//   //         onFailure={onFailure}
//   //         cookiePolicy={'single_host_origin'}
//   //         isSignedIn={true}
//   //         />
//   //   </div>
//   // )

// }
// // export default class Login extends Component {
// //   render() {
// //     return (
// //       <h1>hi</h1>
        
// //     )
// //   }        
// // }
// export default Login;
import React from 'react';
import { useEffect } from 'react';
function Test() {
  function fn(response){
    console.log(response.credential)
  }
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: "840665959732-ip9sm2ea6l7ds2vbgooum6ec08fl8k3v.apps.googleusercontent.com",
      callback: fn
    });
    window.google.accounts.id.renderButton(
      document.getElementById("signIn") || document.createElement("div"),
      { theme: "outline", size: "large" }
    );
  }, []);
  return (
    <div>
    <div id="signIn">
     <h2>Login</h2>
     </div>
    </div>
  );
}
export default Test;