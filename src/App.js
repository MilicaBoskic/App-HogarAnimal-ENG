import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import Footer from './Components/Footer';
import About from './Components/Main/AboutPage';
import AddPet from './Components/Main/AddPetPage';
import Adopted from './Components/Main/Adopted/AdoptedPage';
import Contact from './Components/Main/ContactPage';
import { Login, Logout } from './Components/Main/LogInPage';
import Register from './Components/Main/RegisterPage';
import AdoptCat from './Components/Main/Cat/CatPage';
import Adopt from './Utils/ChangePet';
import Blog from './Components/Main/BlogPage';
import Blog1 from './Components/Main/Blogs/Blog1';
import Blog2 from './Components/Main/Blogs/Blog2';
import Blog3 from './Components/Main/Blogs/Blog3';
import Blog4 from './Components/Main/Blogs/Blog4';
import Blog5 from './Components/Main/Blogs/Blog5';
import Blog6 from './Components/Main/Blogs/Blog6';

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  return (

    <>
    <div className="App">

    <Router>

        <nav className="navbar navbar-dark bg-dark">
          {/* <div className = "d-flex justify-content-start btn-group flag">
            <a onClick={()=>handleClick('es')}><img className = "btn-sm mr-1" src={require('./Components/images/spain-flag.png')} /> </a>
            <a onClick={()=>handleClick('en')}><img className = "btn-sm mr-1" src={require('./Components/images/great-britain.png')} /></a>
          </div> */}
          <div className = "d-flex justify-content-start btn-group flag">
            <a><img className = "btn-sm mr-1" src={require('./Components/images/spain-flag.png')} /> </a>
            <a><img className = "btn-sm mr-1" src={require('./Components/images/great-britain.png')} /></a>
          </div>

          <div className = "d-flex justify-content-end">
          {isLoggedIn === true ? 
                <Link to="/logout" className="text-white text-uppercase font-weight-bolder"><img className="images" src={require('./Components/images/2.png')} />Log out |</Link> :
                <Link to="/login" className="text-white text-uppercase font-weight-bolder"><img className="images" src={require('./Components/images/2.png')} />Login  </Link>}
                <Link to="/register" className="text-white text-uppercase font-weight-bolder"><img className="images" src={require('./Components/images/register.png')} />Sign up</Link>
          </div>
        </nav>

        <div className="alert d-flex justify-content-between text-center sticky-top">
            <div className="empresa">
                <span className="text-dark text-uppercase font-weight-bolder">Hogar<span><a href="/about"><img className="logo" src={require('./Components/images/dog.png')} /></a></span>Animal</span>
            </div>

            <div className="nav1">
                <Link to="/about" className="text-dark text-uppercase font-weight-bolder">About us | </Link>
                <Link to="/adopt" className="text-dark text-uppercase font-weight-bolder">Adopt a Pet  | </Link>
                <Link to="/adopted" className="text-dark text-uppercase font-weight-bolder">Adopted Pets  | </Link>
                <Link to="/blog" className="text-dark text-uppercase font-weight-bolder">Blog  | </Link>
                <Link to="/contact" className="text-dark text-uppercase font-weight-bolder">Contact us</Link>
            </div>

            <div className="nav2">
                <Link to="/addPet" className="text-dark text-uppercase font-weight-bolder">Rehome your Pet</Link>
            </div>
        </div>

        <Switch>
            <Route path="/adopt">
                <Adopt />
            </Route>
            <Route path="/adoptCat">
                <AdoptCat />
            </Route>
            <Route path="/adopted">
                <Adopted />
            </Route>
            <Route path="/blog">
                <Blog />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/addPet">
                <AddPet isLoggedIn={isLoggedIn} />
            </Route>
            <Route path="/login">
                <Login setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn}/>
            </Route>
            <Route path="/logout">
                <Logout setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} />
            </Route>
            <Route path="/register">
                <Register setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} />
            </Route>
            <Route path="/blog1">
                <Blog1 />
            </Route>
            <Route path="/blog2">
                <Blog2 />
            </Route>
            <Route path="/blog3">
                <Blog3 />
            </Route>
            <Route path="/blog4">
                <Blog4 />
            </Route>
            <Route path="/blog5">
                <Blog5 />
            </Route>
            <Route path="/blog6">
                <Blog6 />
            </Route>
            <Route path="/">
                <About />
            </Route>

        </Switch>
    </Router>
      <Footer />

    </div>
    </>
  );
}

export default App;