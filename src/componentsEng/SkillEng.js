import React from 'react'
import "./SkillEng.css"
import Pro from "../Image/Pro.png";
import code from "../Image/code.png";
import ionic from "../Image/ionic.jpeg";
import Angular from "../Image/Angular.png";
import ReactJS from "../Image/ReactJS.png";
import signboard from "../Image/signboard.png";


function SkillEng() {
    return (
        <div className="containerCon" id='SkillPage'>
             <h2 className='pertitle'> Skill <img src={Pro} className="Per" alt="logo"></img></h2>
            <section className="content-edu">
            <p className='skillcontent'>
            I'm experience Ionic and Angular JS in our Senior project(Me and other 2 people). My role in Senior project are create front-end ,mockup data which use Ionic and my friend will continue to create login, calculation fuctions in Ionic and I switch to create back-end which use Angular(firebase database). At that time (Year 2018) I use Ionic and Angular because React are still new to me which I study React.JS and React Native by my self year later
          </p>
          <p className='skillcontent'>
          I'm experience in Vue.js in my internship program (year 2019) because Covid-19 my university cancle all internship that link with another company include my programe too, so my internship change to work for university(my professor assign work for me). I design and create front-end web use Vue.js and it end of my 3 month of internship program 
           </p> 
           <br/>
           <div className='tools'>Skill: <div className='subedu'>Ionic, React JS, React Native, Angular JS, Vue JS</div></div>
           <div className='tools'>Tools: <div className='subedu'>Vs code, Git, Adobe XD, Figma ,Dreamweaver, Photoshop (basic skill)</div>
           </div>
           <div className='usetitle'>I use React.JS to create this website</div>

           </section>




            
            
             <h2 className='pertitle'> Code Example <img src={code} className="Per" alt="logo"></img></h2>
             <section className="content-skill">
                
                
                <div className="skill-p">
                <a href="https://github.com/siwadonB/Siwadon_SeniorIonic" target="_blank" rel="noreferrer"> <img className="oldio" src={ionic} alt="example" /></a>
        <h2 className='codename'>Ionic (Mobile font-end)</h2>
        </div>
        

                <div className="skill-p">
                <a href="https://github.com/siwadonB/Siwadon_SeniorAngular" target="_blank" rel="noreferrer" > <img className="oldan" src={Angular} alt="example" /> </a>
        <h2 className='codename'>Angular (Web back-end with firebase)</h2>
                </div>
            
                <div className="skill-p">
                <a href="https://github.com/siwadonB/SiwadonB_WebResume.git" target="_blank" rel="noreferrer" > <img className="oldan" src={ReactJS} alt="example" /> </a>
        <h2 className='codename'>This project (React.JS)</h2>
                </div>
            </section>


<hr/>


    <div className="footer">
               <div className="End">
        Please feel free to contact me if you need any further information.
      </div>
      <div className="End">
        I hope to have the opportunity to work with you in the future.
        <img src={signboard} className="Per" alt="logo"></img>
      </div>
        </div>


        <div className="contact_footer">
        Phone number: <div className="subfooter">080-5060169</div>{" "}
        <div className="contact_footer">
            <div className='paddingfooter'>
          Email: <div className="subfooter"> boonpradub.si@gmail.com</div>
        </div>
        </div>
      </div>

        </div>
    )
}

export default SkillEng;
