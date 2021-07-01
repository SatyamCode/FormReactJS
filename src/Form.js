import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './Form.css';
 

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [value,setValue] = useState({});

    function submitForm(){
        setIsSubmitted(true);
    }
    const getUserName =(value)=>{
        if(value!==undefined){setValue(value)}
        
    }
    console.log(value)
    
    return (
        <div>
            {!isSubmitted ? <FormSignup submitForm={submitForm} getUserName={getUserName}/> : (<FormSuccess submitForm={submitForm} getUserName={getUserName} value={value}/>) }
        </div>
    )
}

export default Form
