import React, { useState } from  'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [formErrors, setFormErrors] = useState([]);
    
    const createUser = (e) => {
        e.preventDefault();
        if (firstName.length < 2 || lastName.length < 2) {
            let message = "F and L name must be at least 2 char";
            let errors = formErrors;
            errors.push(message);
            setFormErrors(errors);
            //setFormErrors([...formErrors, message]);
        }
        if (email.length < 1){
            let message = "Email must be greater than 1 character";
            setFormErrors([...formErrors, message]);
        }

        console.log(formErrors);
        //const newUser = { firstName, lastName, email, password, confirmPassword };
        //console.log("Welcome", newUser);
    };
    return(
        <div>
        <form onSubmit= { createUser }>
            <div>
                <label> First Name </label>
                <input type = "text" onChange ={ (e) =>setFirstName(e.target.value)}/>
            </div>
            <div>
                <label> Last Name </label>
                <input type = "text" onChange ={ (e) =>setLastName(e.target.value)}/>
            </div>
            <div>   
                <label> Email </label>
                <input type = "text" onChange ={ (e) =>setEmail(e.target.value)}/>
            </div>
            <div>
                <label> Password </label>
                <input type = "text" onChange ={ (e) =>setPassword(e.target.value)}/>
            </div>
            <div>
                <label> Confirm Password </label>
                <input type = "text" onChange ={ (e) =>setConfirmPassword(e.target.value)}/>
            </div>
            <input type="submit" value="Create User" />
        </form>
        <h1> First Name: {firstName}</h1>
        <h1> Last Name: {lastName}</h1>
        <h1> Email {email}</h1>
        <h1> Password: {password}</h1>
        <h1> Confirm password {confirmPassword}</h1>

        </div>

    );
}
export default Form;
