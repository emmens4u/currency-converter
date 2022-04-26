import React from 'react'
import { useState } from 'react'
import FormLogin from './FormLogin'
import './Form.css'

const Login = () => {
    const[isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }
  return (
      <div>
        
        <div className= "form-container">
             {!isSubmitted ? (<FormLogin submitForm={submitForm}/>) : <FormSuccess/>}
        </div>
        
        
    </div>
  )
}