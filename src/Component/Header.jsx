import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () =>
    <img className="logo" src="https://images.unsplash.com/photo-1538377557518-6d3de7a5777e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
const Header = () =>{
const isOnline = useOnline();
return(    <div className='header'>
        {Title()}
        <div className='nav-items'>
            <ul>
                <Link to="/"> <li>Home</li></Link>
                <Link to="/about"> <li>About Us</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/cart"><li>Cart</li></Link>
                <Link to="/instamart"><li>Instamart</li></Link>
                <Link to="/"><li>{isOnline? <p style={{color:"green"}}>✔</p>:<p style={{color:"red"}}>🔴 </p>}</li></Link>
            </ul>
            
        </div>
    </div>);
}
    export default Header;
