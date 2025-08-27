import { useMsal } from '@azure/msal-react';                
import { loginRequest } from './authConfig';                
import './App.css'


const App = () => {
    const { instance, accounts } = useMsal();               

    const handleLogin = () => {                            
        instance.loginPopup(loginRequest).catch(e => {      
            console.error(e);                               
        });                                                 
    };                                                      

    const handleLogout = () => {                            
        instance.logoutPopup();     

        const childSites = [
            "https://www.admin.nice-beach-erikson.autos/logout",
            "https://www.company1.nice-beach-erikson.autos/logout"
        ];

        // Open logout tabs
        childSites.forEach(url => {
            window.open(url, "_blank", "width=400,height=200");
        });


        window.location.href =
            "https://login.microsoftonline.com/3fdf479e-e456-4ae5-9431-657da2d108ec/oauth2/v2.0/logout?post_logout_redirect_uri=https://nice-island-0b76a3f1e.2.azurestaticapps.net/";


    };                                                      





    return (
        <>
            <div>Here are your portal programs. IF you are not logged in, you wont be able to access them!</div>





            <div>
                {accounts.length > 0 ? (                                      
                    <>                                                        
                        <p>Welcome, {accounts[0].username}</p>                
                        <button className="btn btn-primary" onClick = { handleLogout } > Logout</button>        
                    </>                                                       
                ) : (                                                         
                        <button className="btn btn-primary" onClick = { handleLogin }> Login with Azure</button>   
                )}                                                            
            </div >


            <a href="https://www.admin.nice-beach-erikson.autos/" target="_blank">
                <div className="portalLink">
                       admin.nice-beach-erikson.autos
                </div> 
            </a>

            <a href="https://www.company1.nice-beach-erikson.autos/" target="_blank">
                <div className="portalLink">
                    company1.nice-beach-erikson.autos
                </div>
            </a>

        </>
    );
};

export default App;