import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { putUser, postUser } from '../../Services/service';
import { setToken } from '../../Services/auth.service';
// import { MDBInput } from 'mdbreact';


const Register = () => {
    const [message, setMessage] = useState('')


        const history = useHistory();

        const [name, setName] = useState('')
        const [surname, setSurname] = useState('')
        const [username, setUsername] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [passwordConf, setpasswordConf] = useState('')
    
    
        let user = {
            name: name,
            surname: surname,
            username: username,
            email: email,
            password: password,
        }
    
        const handleSubmit = () => {

            if (password === passwordConf) {
                putUser(user).then(() => {
                    postUser(username, password).then(res => {
                        setToken(res.data.token)
                        history.push('/logIn');
                    })
                })
            }
            else setMessage ("Please make sure your passwords match.");

        }

    return (
        <>

        <div className="img container text-uppercase font-weight-bolder"> 
            <span className ="h3" alt="Responsive image" >Hogar<span><img className="avatar" src={require('../images/dog.png')} /></span>Animal</span>
        </div>
        <hr />

    <br />
            <div className="text">
                <h3 className="text-dark">Create Account</h3> 
            </div>
    <br />

        <form className="form-group" onSubmit={(e) => {e.preventDefault(); handleSubmit()}}>

            <div className="col-md-4 mb-4 mx-auto">

                <label for="name"><b>First Name</b><span style={{color: "red"}}>*</span></label>
                <input className="form-control" type="text" name="input" placeholder="Enter first name..." onInput = {e => {setName(e.target.value)}} required />

                <label for="lastname"><b>Last Name</b><span style={{color: "red"}}>*</span></label>
                <input className="form-control" type="text" name="input" placeholder="Enter last name..." onInput={e => {setSurname(e.target.value)}} required />

                <label for="username"><b>Username</b><span style={{color: "red"}}>*</span></label>
                <input className="form-control" type="text" placeholder="Enter username..." name="username"  onInput={e => {setUsername(e.target.value)}} required />
                <div className="invalid-feedback">Por favor introduzca nombre se usuario.</div>

                <label for="email"><b>Email</b><span style={{color: "red"}}>*</span></label>
                <input className="form-control" type="text" placeholder="Enter email..." name="email" onInput={e => {setEmail(e.target.value)}} required />

                <label for="psw"><b>Password</b><span style={{color: "red"}}>*</span></label>
                <input className="form-control" type="password" placeholder="Enter password..." name="psw" minLength="5" onInput={e => {setPassword(e.target.value)}} required />

                <label for="psw-repeat"><b>Confirm the Password</b><span style={{color: "red"}}>*</span></label>
                <input className="form-control" type="password" placeholder="Confirm the password..." name="psw-repeat" onInput={e => {setpasswordConf(e.target.value)}} required />
                <hr />

                <p>By using this site, you signify your consent to these .<a href="#">Terms of Use</a>. </p>

            <label style={{color: "red", fontWeight: "bold"}}>{message}</label>
            <br />
                <button type="submit"  class="btn btn-dark">Create Account</button>
            </div>

        </form>
                <h6>Already Registred?</h6>
                <span><Link to="/login"><button className="btn btn-info">Log in</button></Link></span>
                <br />
                <br />
                <br />
                <br />
</>
    )
}

export default Register;