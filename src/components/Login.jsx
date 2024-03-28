import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
// import Cookies from 'js-cookie';
import axios from 'axios';
import '../assets/css/login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginSuccess,setLoginSuccess] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Please fill in all fields.');
    }
    try {
      const response = await axios.post('http://localhost:8181/products/authenticate', {
        username: username,
        password: password,
      });
  
      console.log('Login Response:', response.data); // Debug log the entire response
  
      // const { token, roles } = response.data; // Assuming the response contains the user's role
        const token=response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      console.log('Login Success:', response.data);
      if(response.status==200){
        if(username === 'priya'){
                  window.location.href = '/Adminhome'; // Redirect to admin page if role is admin
        }else{
          window.location.href = '/home'; // Redirect to admin page if role is admin
  
        }
      }
  
      // if (roles === 'admin') {
      //   window.location.href = '/Adminhome'; // Redirect to admin page if role is admin
      // } else if (roles === 'user') {
      //   setLoginSuccess(true); // Set login success to true if role is user
      // } else {
      //   setError('Unknown role'); // Handle unknown roles
      // }
    } catch (error) {
      console.error('Login Error:', error);
    }
  };
  
  useEffect(() => {
    if (loginSuccess) {
      window.location.href = '/home';
    }
  }, [loginSuccess]);

  return (
    <div className='full'>
      <div className="containerl">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="input-field">
          <FaUser className='input-icon' style={{ margin: '7px 5px' }} />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-field">
          <FaLock className='input-icon' style={{ margin: '7px 5px' }} />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        <p style={{fontFamily:'revert-layer',paddingBottom:'5%'}}>Forget Password? <a href="/forget">Click here</a></p>
        <p style={{fontFamily:'revert-layer',paddingBottom:'5%'}}>Don't have an account? <Link to="/signup">Create an account</Link></p>
      </div>
    </div>
  );
}

export default Login;
