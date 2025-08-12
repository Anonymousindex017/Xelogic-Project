import React from 'react'
import '../css/signup.css'
import { useState } from 'react';

const SignUp = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    console.log(e.target.id, e.target.value)
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Password:', formData.password);
    console.log('Confirm Password:', formData.confirmPassword);
  };

  return (
    <>
      <div className='signup-container container mb-5'>
        <div className='signup-form'>
          <h1 className='text-center fw-bolder'> Sign Up </h1>
          <form action="">
            <div className='signup-form-group'>
              <label htmlFor="name">User Name </label>
              <input type="text" id="name" placeholder='Enter Your Name'value={formData.name} onChange={handleChange}/>
            </div>
            <div className='signup-form-group'>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder='Enter Your Email' value={formData.email} onChange={handleChange} required/>
            </div>
            <div className='signup-form-group'>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder='Enter Your Password' value={formData.password} onChange={handleChange} required/>
            </div>
            <div className='signup-form-group'>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" placeholder='Confirm Your Password'value={formData.confirmPassword} onChange={handleChange} required/>
            </div>
          </form>
          <button className='btn btn-primary w-100' onClick={handleSubmit}>Sign Up</button>
        </div>
      </div>
    </>
  )
}

export default SignUp
