    import React, { useState } from 'react'
    import { useHistory, Link } from 'react-router-dom'
    import { postUser } from '../../Services/service';
    import { setToken, setUserId } from '../../Services/auth.service';


    const Login = ({ setLoggedIn, isLoggedIn }) => {

                const history = useHistory();
                if (isLoggedIn === true) history.push('/home');

                const [username, setUsername] = useState('')
                const [password, setPassword] = useState('')

                const [message, setMessage] = useState('')

        const handleLogin = () => {
            
            postUser(username, password).then((res) => {
                console.log(res)
                if (res.data.success){
                    setLoggedIn(true);
                    history.push('/addPet')
                }
                else setMessage ('User not Found! The username or password is incorrect. Try again.');
                // setToken(res.data.token)
                // setUserId(res.data.user.user_id)
                // history.push('/addPet')
            })
            .catch((error) => {setMessage(error.response.data.message)});
        }

        return (
            <>
            <div className="img container text-uppercase font-weight-bolder"> 
                <span className ="h3" alt="Responsive image" >Hogar<span><img className="avatar" src={require('../images/dog.png')} /></span>Animal</span>
            </div>

            <hr />
                <br />
                    <div className="text">
                        <h3 className="text-dark">Login  </h3> 
                    </div>
                <br />

            <form className="form-group" onSubmit={(e) => {e.preventDefault(); handleLogin()}}>

                <div className="col-md-4 mb-4 mx-auto">

                    
                    <label for="username"><b>Username</b><span style={{color: "red"}}>*</span></label>
                    <input className="form-control" type="text" placeholder="Enter your username..." name="username" onInput={e => {e.preventDefault();setUsername(e.target.value)}} required />
                    <div className="invalid-feedback"> Por favor introduzca nombre se usuario.</div>

            <br />

                    <label for="psw"><b>Password</b><span style={{color: "red"}}>*</span></label>
                    <input className="form-control" type="password" placeholder="Enter your password..." name="psw"  onInput={e => {e.preventDefault(); setPassword(e.target.value)}} required />
            {/* <br /> */}
            
                <label style={{color: "red", fontWeight: "bold"}} > {message} </label>

            <br />
                    <button type="submit"  className="btn btn-dark">Log in</button>

                    {/* <Popup modal trigger={<button type="submit"  className="btn btn-dark">{t('button-login-loginPage.1')}</button>}>
                            {close =>  <label style={{color: "red", fontWeight: "bold"}} > {message} </label>}
                    </Popup> */}

                </div>

            </form>

            <br />

            <h6>Not on Hogar Animal yet? Sign up</h6>
            <span><Link to="/register"><button className="btn btn-info">Create Account</button></Link></span>
            <br />
            <br />
            <br />
            <br />

            </>
        );
    }

    const Logout = ({ setLoggedIn, isLoggedIn }) => {

        const history = useHistory();
    
        if (isLoggedIn === false) history.push('/logIn')

        return (
        <>
        <div className="logoutDiv">
            <h3>Are you sure you want to log out?</h3>
            <h6>You will no longer be able to access 'Rehome your pet' section.</h6>
            <br />
            <button className="btn btn-outline-dark btn-lg" style={{marginRight: 50, marginTop: 20}} onClick={() => { setLoggedIn(false); history.push('/logIn') }}>Yes</button>
            <button className="btn btn-outline-dark btn-lg" style={{marginTop: 20}}onClick={() => { setLoggedIn(true); history.push('/') }}>No</button>
        </div>
        <br />
        <br />
        </>
        )
    }

    export { Login, Logout } ;