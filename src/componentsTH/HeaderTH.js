import React, { useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import './HeaderTH.css'
import us from "../Image/us.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";


function HeaderTH() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    console.log(click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="header">
            <div className="container">
                <div className="header-con">
                    <div className="logo-container">
                        <a href="#">Siwadon's Resume</a>
                    </div>
                    <ul className={click ? "menu active" : "menu"}>
                        <li className="menu-link" onClick={closeMobileMenu}>
                        <AnchorLink className='headerfont' href="#PersonalPage">ประวัติส่วนตัว</AnchorLink>
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                        <AnchorLink className='headerfont' href="#EducationPage">ประวัติการศึกษา</AnchorLink>
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                        <AnchorLink className='headerfont' href="#SkillPage">ทักษะและโค๊ดตัวอย่าง</AnchorLink>
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                        <Link to="/" className="changEng">English language <img src={us} className="cv" alt="logo"></img></Link>
            </li>
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

export default HeaderTH;
