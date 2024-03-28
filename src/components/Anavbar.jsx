import { FaBars } from "react-icons/fa";
import "../assets/css/navbar.css";

function Anavbar() {
    return (
        <div className="navbar">
            <button className="menu-icon" >
                <FaBars />   
            </button>
            <div className="nav-links">
                <a href="/">Logout</a>
            </div>
        </div>
    );
}

export default Anavbar;
