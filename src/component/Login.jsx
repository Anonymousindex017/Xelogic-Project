import React from 'react'
import '../css/Login.css'


const Login = () => {
    return (
        <>
        <div className='login-container'>
          <div className='login-form'>
            <h1 className='text-center fw-bold'>Login</h1>
            <form>
                <div className='form-group mt-5 d-flex'>
                    <label htmlFor='email'>Email :</label>
                    <input type='email' id='#email' name='email' placeholder='Enter Your Email' required />
                </div>
                <div className='form-group mt-5'>
                    <label htmlFor='password'>Password :</label>
                    <input type='password' id='#password' name='password' placeholder='Enter Your Password' required />
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                  <button className='btn btn-primary ms-5' type='submit'>Login</button>
                <p className='text-center ps-5'>Forget Password ?</p>
                </div>
            </form>
            </div>
        </div>
            
        </>
    )
}

export default Login
