import {Food_Logo} from '../utils/Constants';
const Header = () =>{
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
                    </ul>
            </div>
        </div>
    )
}
export default Header;