import {Food_Logo} from '../utils/Constants';
import { useState } from 'react';
const Header = () =>{

    const [isLogin, setisLogin] = useState("Login");

    const toggleState = () =>{
        console.log("Toggling Login Logout")
        isLogin == "Login" ? setisLogin("Logout") : setisLogin("Login"); 
    }
    return(
        <div className="Header">
            <div>
                    <img className="logo" 
                    src={Food_Logo} 
                    alt="Kalyan's Corner"/>
            </div>
            
            <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                        <button className="login" onClick={toggleState}>{isLogin}</button>
                    </ul>
            </div>
        </div>
    )
}
export default Header;