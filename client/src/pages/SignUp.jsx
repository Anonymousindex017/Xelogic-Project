import React from 'react'
// import { useform } from 'react-hook-form'
import '../Style/SignUp.css'
import { Link, Links } from "react-router";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { useForm } from 'react-hook-form'



const SignUp = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <div className='signup-mainpage'>
        <div className='signup-form'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-center fw-bold'>Sign Up</h1>
            <div className='signup-form-group'>
              <label htmlFor="username "> <FaUserAlt /> Username :</label>
              <input type="text" id="username" name="username" placeholder='Enter your username'{...register('username', { required: true, minLength: { value: 3, message: "Username must be at least 3 characters" }, maxLength: { value: 20, message: "Username must be at most 20 characters" } })} />
              {errors.username && <p className='error-msg'>{errors.username.message}</p>}
            </div>
            <div className='signup-form-group'>
              <label htmlFor="email"> <IoMail /> Email :</label>
              <input type="email" id="email" name="email" placeholder='Enter your email'{...register('email', { required: true, pattern: { value: /^\S+@\S+$/i, message: "Invalid Email Format" } })} />
              {errors.email && <p className='error-msg'>{errors.email.message}</p>}
            </div>
            <div className='signup-form-group'>
              <label htmlFor="password"><RiLockPasswordFill />  Password :</label>
              <input type="password" id="password" name="password" placeholder='Enter your password'{...register('password',
                {required: true, minLength:{ value: 8, message: "Password must be at least 8 characters" }, maxLength:{ value: 20, message: "Password must be at most 20 characters" },
                pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character" } })} />
              {errors.password && <p className='error-msg'>{errors.password.message}</p>}
            </div>
            <div className='signup-form-group'>
              <label htmlFor="confirm-password">Confirm Password :</label>
              <input type="password" id="confirm-password" name="confirm-password" placeholder='Confirm your password'{...register('confirm-password', { required: true, validate: (value) => value === watch('password') || "Passwords do not match" })} />
              {errors['confirm-password'] && <p className='error-msg'>{errors['confirm-password'].message}</p>}
            </div>
            <div className='signup-form-group'>
              <button type="submit" className='btn btn-primary text-center mt-3 fw-bold'>Sign Up</button>
              <p className='text-center mt-3'>Already have an account? <Link to="/login" className='fw-bold'>Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp