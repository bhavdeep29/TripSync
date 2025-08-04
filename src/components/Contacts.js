import React from "react";
import { Link } from 'react-router-dom';
import logo from '../img/main-logo.png';

function Contact({ contacts }) {

    function img(event) {
        event.target.classList.toggle("active");
    }

    return (
        <div className="cont-img" style={{ backgroundColor:"rgb(140, 171, 255)", margin: "10px 0px 0px 0px" }} >
            <div className="cont-hover">

                <div className="cont-container">
                    <div className="cont-wrap">
                        <a href="#">
                            <img src={logo} alt="img" className="img" onClick={img} />

                        </a>
                        {/* <div className="cont-title txt-shadow">{contacts.cname}</div> */}

                        <div className="cont-place  txt-shadow"><i className="fa-solid fa-location-dot" />{contacts.clocation}</div>
                    </div>
                    <div className="cont-content">
                        <p className="txt-shadow"><i className="fa-solid fa-phone" /> 9408629810</p>
                        <p className="txt-shadow"><i class="fa-solid fa-envelope" /> mangukiyabhavdeep007@gmail.com</p>
                        
                        <div className="cont-buttons">
                            <div className="cont-btn">
                                {/* <button><a href={contacts.clink1}>View here</a></button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
