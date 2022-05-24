import React from 'react';
import Typical from 'react-typical';
import './Profile.css'

export default function Profile() {
    return (
    <div className='profile-container'>
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon">
                    <a href="https://www.facebook.com/profile.php?id=100009518005026">
                        <i className="fa fa-facebook-square"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-google-plus-square"></i>
                    </a>
                    <a href="https://www.instagram.com/surya_sap77/">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://github.com/Suryasap007">
                        <i className="fa fa-github"></i>
                    </a>
                    <a href="https://twitter.com/SuryaSa33624078">
                        <i className="fa fa-twitter"></i>
                    </a>
                    </div>
                </div>
                <div className="profile-detail-name">
                    <span className="primary-text">
                        {" "}
                        Hello, I'M <span className="highlighted-text">Surya Saputra</span>
                    </span>
                </div>
                <div className="profile-detail-role">
                    <span className="primary-text">
                        {" "}
                        <h1>
                            <Typical 
                                loop={Infinity}
                                steps={[
                                    "I'm studying at Indraprasta University PGRI 🎓",
                                    1000,
                                    "I joined the 'Harisenin.com' bootcamp 🏫",
                                5000,
                                ]}
                            />
                        </h1>
                        <span className="profile-role-tagline">
                            I want to be a Front-end.
                        </span>
                    </span>
                </div>
                <div className="profile-options">  
                    <button className='btn primary-btn'>
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href="CV ATS - SURYA SAPUTRA.pdf" download="CV ATS SURYA.pdf">
                        <button className='btn highlighted-btn'> Get Resume </button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background">
                </div>
            </div>
        </div>
    </div>
    )
};
