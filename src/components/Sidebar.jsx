import { Link } from 'react-router-dom';
import '../assets/css/sidebar.css';
import logo from  "../assets/images/logo.png";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="let">
        <div style={{marginLeft:'-20px'}}>
      <img src='https://res.cloudinary.com/ddlw9iej1/image/upload/v1709196577/logo_kbxadb.jpg' width="180px"/>
      </div>
      </div>
      <ul className="sidebar-links">
        <li>
          <Link to="/birthday">Birthday</Link>
        </li>
        <li>
          <Link to="/anniversary">Anniversary</Link>
        </li>
        <li>
          <Link to="/occastinal">Occasions</Link>
        </li>
        <li>
          <Link to="/customized">Customized</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;