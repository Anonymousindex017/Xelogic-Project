import React from 'react'
// import { useform } from 'react-hook-form'
import '../css/SignUp.css'
import { RiLockPasswordFill } from "react-icons/ri";



const SignUp = () => {

  return (
    <>
      <div className='signup-mainpage'>
        <div className='signup-form'>
          <form>
            <h1 className='text-center fw-bold'>Sign Up</h1>
            <div className='signup-form-group'>
              <label htmlFor="username ">Username:</label>
              <input type="text" id="username" name="username" placeholder='Enter your username'/>
            </div>
            <div className='signup-form-group'>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder='Enter your email' />
            </div>
            <div className='signup-form-group'>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" placeholder='Enter your password'/><RiLockPasswordFill/>
            </div>
            <div className='signup-form-group'>
              <label htmlFor="confirm-password">Confirm Password:</label>
              <input type="password" id="confirm-password" name="confirm-password" placeholder='Confirm your password' />
            </div>
            <div className='signup-form-group'>
              <button type="submit"  className='btn btn-primary text-center'>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp
