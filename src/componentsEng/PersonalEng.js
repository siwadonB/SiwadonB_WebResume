import React from 'react'
import "./PersonalEng.css"
import Me from "../Image/Me.jpg";
import Per from "../Image/Per.png";

function PersonalEng() {
    return (
        <div className="containerCon">
             
            <section className="content-con">
                <div className="content-l">
                <img src={Me} alt=""></img>
                </div>
                <div className="content-r">
                    <h2 className='nametitle'>Hello! I'm Siwadon Boonpradub (Tong)</h2>
                    <p className='namecontent' id='PersonalPage'>
                    " I'm Software Developer experience in both Front-end and
          Back-end(only firebase) but I love to coding Front-end more.I
          graduated from Mae Fah Luang University, School of Information
          technology, Major Software Engineering "
          </p>
                </div >
            </section >

            <section className="content-per">
                    <h2 className='pertitle'>Personal information <img src={Per} className="Per" alt="logo"></img></h2>
                    
                <div className='maincontact'> 
                <div className='titlecontact'>Name: </div><div className="subcontact"> Mr.Siwadon Boonpradub</div>
                </div>
                <br/>
                <div className='maincontact'> 
                <div className='titlecontact'>Nickname: </div><div className="subcontact"> Tong (ตอง)</div>
                </div>
                <br/>
                <div className='maincontact'> 
                <div className='titlecontact'>Date of Birth: </div><div className="subcontact"> 4 January 1998</div>
                </div>
                <br/>
                <div className='maincontact'> 
                <div className='titlecontact'>Nationality: </div><div className="subcontact"> Thai</div>
                </div>
                <br/>
                <div className='maincontact'> 
                <div className='titlecontact'>Email: </div><div className="subcontact"> boonpradub.si@gmail.com</div>
                </div>
                <br/>
                <div className='maincontact'> 
                <div className='titlecontact'>Mobilephone: </div><div className="subcontact"> 080-5060169</div>
                </div>
                <br/>
                <div className='maincontact'> 
                <div className='titlecontact'>Sex: </div><div className="subcontact"> Male</div>
                </div>
                <br/>
                <div className='maincontact'> 
                <div className='titlecontact'>Home address: </div><div className="subcontact"> 346/2 Chaiyanuphab 6, Chaiyanuphab Road, Naimuang, Muang, Phitsanulok</div>
                </div>   
            </section>


<hr/>
        </div>
    )
}

export default PersonalEng;
