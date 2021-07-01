export default function validateForm(values) {
    let errors={}
    if(!values.username.trim()) {
        errors.username = "Username Required";
    }
    if(!values.email) {
        errors.email = "Email Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email= "Email address is invalid";
    }
    if(!values.password) {
        errors.password = "Password Required";
    }

    return errors;
}