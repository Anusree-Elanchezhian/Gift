import "../assets/css/navbar.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AccountCircle, Person, ExitToApp } from '@material-ui/icons'; // Import ShoppingCart icon

function Navbar() {
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    return (
        <div className="navbar">
            <div>
                <a href="/Home">
                    <img src='https://res.cloudinary.com/ddlw9iej1/image/upload/v1709196577/logo_kbxadb.jpg' width="180px" alt="Logo" />
                </a>
            </div>
            <div className="nav-links">
                <Link to="/birthday">Birthday</Link>
                <Link to="/anniversary">Anniversary</Link>
                <Link to="/occastinal">Occasions</Link>
                <Link to="/customized">Customized</Link>
                {/* Add cart icon and link to cart page */}
                {/* <Link to="/cart" className="cart-icon">
                    <ShoppingCart />
                </Link> */}
                <div className="profile-dropdown">
                    <div className="profile-icon" onClick={toggleOptions}>
                        <span><AccountCircle /></span>
                    </div>
                    {showOptions && (
                        <div className="profile-options">
                            <Link to="/profile">
                                <span style={{marginLeft:'-10%',padding:'5%'}}><Person /></span>
                                Profile
                            </Link>
                            <a href="/">
                                <span style={{marginLeft:'-10%',padding:'5%'}}><ExitToApp /></span>
                                Logout
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
