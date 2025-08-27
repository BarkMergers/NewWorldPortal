import { useMsal } from '@azure/msal-react';                
import { loginRequest } from './authConfig';                
import './App.css'
import { useState } from 'react';



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
            window.open(url, "_blank", "width=400,height=400");
        });




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