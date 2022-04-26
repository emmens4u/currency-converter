import React from 'react'
import { useState } from 'react'
import FormForgot from './FormForgot'
import './Form.css'

const Forgot = () => {
    const[isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }
  return (
      <div>
        
        <div className= "form-container">
             {!isSubmitted ? (<FormForgot submitForm={submitForm}/>) : <FormSuccess/>}
        </div>
        
        
    </div>
  )
}

export default Forgot