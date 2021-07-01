import React, { useState } from 'react'
import useForm from './UseForm'
import validate from './validateForm'
import './Form.css'

const FormSignup = ({submitForm,getUserName}) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);
    // const [username,setUserName] = useState();
    getUserName(values)

    return (
        <div className="form-content">
            <form className="form" onSubmit={handleSubmit}>
                <h1>A lightweight and simple sign-up form</h1>
                <div className="form-inputs ic1">
                        <input id="username" type="text" name="username" className="form-inputs" placeholder="Username" 
                        value={values.username} onChange={handleChange} />
                        {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs ic2">
                        <input id="email" type="text" name="email" className="form-inputs" placeholder="Email" 
                        value={values.email} onChange={handleChange} />
                        {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs ic2">
                        <input id="password" autoComplete="off" type="password" name="password" className="form-inputs" placeholder="Password" 
                        value={values.password} onChange={handleChange} />
                        {errors.password && <p>{errors.password}</p>}
                </div>
                <button className="form-input-btn" type="submit">Register</button>
            </form>
        </div>

    )
}

export default FormSignup
