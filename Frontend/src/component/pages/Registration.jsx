import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const Registration = () => {
  let navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();

   
const data = {
  password :password,
  email:email,
}
navigate("/Login")

localStorage.setItem("data",JSON.stringify(data))
Swal.fire({
  icon: 'success',
  title: 'Registration in successfully!',
  showConfirmButton: false,
  timer: 3000, // 3 seconds
});

    // console.log('Name:', name);
    // console.log('Email:', email);
    // console.log('Password:', password);

    setErrorMessage('');
    
  };

  return (
    <div>
    <div className="form-outline mb-4 raw-2 text-center text-dark">
            <label className="form-label" htmlFor="loginName">Create Account</label>
          </div>
      <form onSubmit={handleSubmit}>
        <div className='container-sm'>
          <div className="form-outline mb-4">
          <label className="form-label" htmlFor="registerName">
              Name
            </label>
            <input
              type="text"
              id="registerName"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            
          </div>
          <div className="form-outline mb-4">
          <label className="form-label" htmlFor="registerEmail">
              Email
            </label>
            <input
              type="email"
              id="registerEmail"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
        
            
          </div>
          <div className="form-outline mb-4">
          <label className="form-label" htmlFor="registerPassword">
              Password
            </label>
            <input
              type="password"
              id="registerPassword"
              className="form-control"
              value={password}
              onChange={handlePasswordChange}
            />          
            
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-block col-4">
            Sign Up
            </button>
          </div>
          <div className="text-center">
            <p>
              Already a member? <a href="Login">Login</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
