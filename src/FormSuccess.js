import React from 'react' 
import useForm from './UseForm';

function FormSuccess (props)  {
    const {submitForm, validate , value} = props;
    const { values} = useForm(submitForm, validate);
    // document.querySelector('#username').addEventListener("keyup", function(){
    //     document.querySelector('.read-username').innerText = document.querySelector('#username').value;
    // });
    console.log(value);
    return (
        <div className="form-content">
            <div className="form-success">
            <p className="read-username">Hello {value.username}!<br></br></p>
            Welcome to my website.
            Here you can explore tech, games, etc. Have fun.            
            </div>
            
        </div>
    )

}

export default FormSuccess
