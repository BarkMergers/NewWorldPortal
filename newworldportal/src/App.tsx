import { useMsal } from '@azure/msal-react';                
import { loginRequest } from './authConfig';                
import './app.css'



const App = () => {
    const { instance, accounts } = useMsal();               

    const handleLogin = () => {                            
        instance.loginPopup(loginRequest).catch(e => {      
            console.error(e);                               
        });                                                 
    };                                                      

    const handleLogout = () => {                            
        instance.logoutPopup();                             
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


            <span className="portalLink">
                   admin.nice-beach-erikson.autos
            </span> 

                </a>

        </>
    );
};

export default App;