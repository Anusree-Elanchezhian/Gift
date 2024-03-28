import { Link } from 'react-router-dom';
import { FaPlus, FaSignOutAlt } from 'react-icons/fa'; // Added FaSignOutAlt icon
import '../assets/css/sidebar.css';

const Asidebar = () => {
    return (
        <div className="sidebar">
            <div className="let">
                <div>
                    <a href="/Adminhome">
                        <img src='https://res.cloudinary.com/ddlw9iej1/image/upload/v1709196577/logo_kbxadb.jpg' width="180px" alt="Logo" />
                    </a>
                </div>
            </div>
            <ul className="sidebar-links">
                <li>
                    <Link to="/Abirthday">
                        <FaPlus className="plus-icon" />
                        Birthday
                    </Link>
                </li>
                <li>
                    <Link to="/Aanniversary">
                        <FaPlus className="plus-icon" />
                        Anniversary
                    </Link>
                </li>
                <li>
                    <Link to="/Abirthday">
                        <FaPlus className="plus-icon" />
                        Occasions
                    </Link>
                </li>
                <li>
                    <Link to="/Abirthday">
                        <FaPlus className="plus-icon" />
                        Customized
                    </Link>
                </li>
                <li>
                    <a href='/'>
                        <FaSignOutAlt className="logout-icon" />
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Asidebar;
