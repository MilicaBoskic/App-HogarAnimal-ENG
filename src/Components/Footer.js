import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { animateScroll as scroll } from "react-scroll";


const Footer = (props) => {

    return (
        <>
            <footer className="page-footer cyan darken-3 navbar navbar-dark bg-dark d-flex justify-content-center">

                <div className="container d-flex justify-content-center flex-column d-block d-print-block">

                    <div className="flex-center">

                            <a href="https://www.instagram.com/petguards.rs/" target="_blank" className="btn-floating btn-lg btn-ins" type="button" role="button">
                                <FontAwesomeIcon icon = {faInstagram} size = "2x" />
                            </a>
                            
                            <a href ="https://en-gb.facebook.com/cuvanjepasabeograd/" target="_blank" class="btn-floating btn-lg btn-fb" type="button" role="button">
                                <FontAwesomeIcon icon = {faFacebook} size = "2x" />
                            </a>

                            <a href="https://www.youtube.com/channel/UCwURXAVRTnF-dBbNYcqwK9Q" target="_blank" className="btn-floating btn-lg btn-yt" type="button" role="button">
                                <FontAwesomeIcon icon = {faYoutube} size = "2x" />
                            </a>

                    </div>
                        <br />
                        <div className="footer-copyright text-center py-2">© 2020 Copyright: <a className="col px-md-2" href="#"> Milica Boškić</a></div>

                </div>

                        <a href="#" className="btn-floating btn-lg btn-up" type="button" role="button" onClick = {() => scroll.scrollToTop()}>
                            <FontAwesomeIcon icon={faArrowUp} size = "3x" />
                        </a>
            </footer>
            </>
    )
}


export default Footer;