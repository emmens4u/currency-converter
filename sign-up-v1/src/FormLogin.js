import React from 'react'
import useLogin from './useLogin'
import validate from './validateLogin'
import  './Form.css'
import { Link } from 'react-router-dom'


const FormLogin = (submitForm) => {
  const {handleChange, values, handleSubmit, errors} = useLogin(submitForm, validate);
  return (
    <div className='form-content-right' onSubmit={handleSubmit}>
        <form className='form'>
          <h1>Login</h1>
          <div className='form-inputs'>
            <label htmlFor='username' className='form-label'>
              Username
            </label>
            <input id='username' type='text' className='form-input' name='username' placeholder='Enter your username'
              value={values.username} onChange={handleChange} />
                         {errors.username && <p>{errors.username}</p>}
          </div>

          <div className='form-inputs'>
            <label htmlFor='password' className='form-label'>
              Email
            </label>
            <input id='password' type='password' className='form-input' name='password' placeholder='Enter your password'
                value={values.password} onChange={handleChange} />
                         {errors.password && <p>{errors.password}</p>}
          </div>
          <button className='form-input-btn' type='submit'>
            Login
          </button>

          <span className='form-input-login'>
            <Link to= '/formforgot'>Forgot Password?</Link>
          </span>
        </form>
    </div>
  )
}

export default FormLogin