import React, { useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import './Header.css'
import cv from "../Image/cv.png";
import thai from "../Image/thailand.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";


function Header() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    console.log(click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="header">
            <div className="container">
                <div className="header-con">
                    <div className="logo-container">
                        <div className='title'>Siwadon's Resume<img src={cv} className="cv" alt="logo"></img></div>
                    </div>
                    <ul className={click ? "menu active" : "menu"}>
                        <li className="menu-link" onClick={closeMobileMenu}>
                        <AnchorLink className='headerfont' href="#PersonalPage">Personal information</AnchorLink>
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                        <AnchorLink className='headerfont' href="#EducationPage">My Education</AnchorLink>
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                        <AnchorLink className='headerfont' href="#SkillPage">Skill & Code Example</AnchorLink>
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                        <Link to="/th" className="changEng">เปลี่ยนเป็นภาษาไทย <img src={thai} className="th" alt="logo"></img></Link></li>
                    </ul>
                    <div className="mobile-menu" onClick={handleClick}>
                        {click ? (
                            <FiX />
                        ) : (
                            <FiMenu />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
