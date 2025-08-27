import { useMsal } from '@azure/msal-react';                
import { loginRequest } from './authConfig';                

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
            <div>First make sure you are logged in</div>

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

            <div>Then this link should be able to take you straight to the other website and you will be logged in</div>

            <a href="https://www.admin.nice-beach-erikson.autos/">admin.nice-beach-erikson.autos</a>

        </>
    );
};

export default App;