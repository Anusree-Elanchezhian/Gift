import { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import '../assets/css/signup.css';
import { Link } from 'react-router-dom';
import { FaUser, FaPhone, FaEnvelope, FaLock } from 'react-icons/fa'; // Importing icons from Font Awesome

function Signup() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roles, setRole] = useState('user'); // Default role is set to 'user'
  const [errorMessage, setErrorMessage] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // State variable to track registration success

  const handleCreateAccount = async (event) => {
    event.preventDefault();
  
    if (!name || !phoneNumber || !email || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
  
    if (!/^\d+$/.test(phoneNumber) || phoneNumber.length !== 10) {
      setErrorMessage('Phone number should be 10 digits long and contain only numbers.');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:8181/products/new', {
        name: name,
        email: email,
        password: password,
        roles: roles, // Ensure that 'role' is sent in the request payload
      });
      console.log('Response:', response.data); // Log response data for debugging
      setRegistrationSuccess(true);
    } catch (error) {
      console.error('Error creating account:', error);
      setErrorMessage('An error occurred while creating the account.');
    }
  };
  
  useEffect(() => {
    if (registrationSuccess) {
      // Redirect to home page after successful registration
      window.location.href = '/';
    }
  }, [registrationSuccess]);

  return (
    <div className='register-all'>
      <div className='register-container'>
        <h1>Register</h1>
        <br />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleCreateAccount}>
          <div className='register-fields'>
            <div className='input-field'>
              <FaUser className='input-icon' style={{ margin: '7px 5px' }} />
              <input type='text' placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='input-field'>
              <FaPhone className='input-icon' style={{ margin: '7px 5px' }} />
              <input type='tel' placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <div className='input-field'>
              <FaEnvelope className='input-icon' style={{ margin: '7px 5px' }} />
              <input type='email' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='input-field'>
              <FaLock className='input-icon' style={{ margin: '7px 5px' }} />
              <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='input-field'>
              <label htmlFor='role'></label>
              <select id='role' value={roles} onChange={(e) => setRole(e.target.value)}>
                <option value='user'>User</option>
                <option value='admin'>Admin</option>
              </select>
            </div>
            <button type="submit">Create Account</button>
          </div>
        </form>
        <p>Already have an account? <Link to="/">Login</Link></p>
      </div>
    </div>
  );
}

export default Signup;
