import {Food_Logo} from '../utils/Constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">AboutUs</Link></li>
                        <li><Link to="/contact">ContactUs</Link></li>
                        <li>Cart</li>
                        <Link to="/login"><button className="login" onClick={toggleState}>{isLogin}</button></Link>
                    </ul>
            </div>
        </div>
    )
}
export default Header;