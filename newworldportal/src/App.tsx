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

        setLogout1("https://www.admin.nice-beach-erikson.autos/logout");
        setLogout2("https://www.company1.nice-beach-erikson.autos/logout");

    };                                                      

    const [logout1, setLogout1] = useState("");
    const [logout2, setLogout2] = useState("");



    return (
        <>
            <div>Here are your portal programs. IF you are not logged in, you wont be able to access them!</div>

            <iframe src={logout1}></iframe>
            <iframe src={logout2}></iframe>




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