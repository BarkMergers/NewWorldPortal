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


    };                                                      





    return (
        <>


            <div>
                {accounts.length > 0 ? (                                      
                    <div>                                                                    
                        <button className="btn btn-primary" onClick={handleLogout}>Logout</button>        

                        <div style={{ padding: "30px" }} >
                            Welcome, {accounts[0].username}! Here are you portal apps.
                        </div>

                    </div>                                                       
                ) : (     
                    <div>
                        <button className="btn btn-primary" onClick={handleLogin}> Login with Azure</button>   

                        <div style={{ padding: "30px"}} >
                            Here are you portal apps. Ensure you are logged in before trying to acces them
                        </div>
                    </div>
                )}                                                            
            </div >



            <div className="portalHolder">

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

            </div>

        </>
    );
};

export default App;