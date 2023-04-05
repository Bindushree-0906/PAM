import {GoogleLogout} from "react-google-login";

const clientId = "664601673419-hiir2173k5usfrm159r3ttg9108cpuhi.apps.googleusercontent.com"

function Logout(){
    const onSuccess = () => {
        console.log("Log out Successful!");
    }
    return(
        <div id ="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;