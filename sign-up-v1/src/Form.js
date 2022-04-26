import React from 'react'
import { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css'

const Form = () => {
    const[isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }
  return (
      <div>
        
        <div className= "form-container">
             {!isSubmitted ? (<FormSignup submitForm={submitForm}/>) : <FormSuccess/>}
        </div>
        
        
    </div>
  )
}

export default Form