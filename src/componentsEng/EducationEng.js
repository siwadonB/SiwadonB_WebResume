import React from 'react'
import "./EducationEng.css"
import Edu from "../Image/Edu.png";
import Gra from "../Image/Gra.png";
import Megra from "../Image/Megra.jpg";
import toeicphoto from "../Image/toeicphoto.png";
import toeic from "../Image/toeic.png";

function EducationEng() {
    return (
        <div className="containerCon" id='EducationPage'>
               <h2 className='pertitle'> Education <img src={Edu} className="Per" alt="logo"></img></h2>
            <section className="content-edu">
    
          <div className='edutitle'>Senior High School (มัธยมศึกษาตอนปลาย)</div>
          <div className='edumerce'>
<div className='mainedu'>Year 2013 - 2016 <div className='subedu'>CHALERMKWANSATREE SCHOOL (Phitsanulok)</div></div>
          </div>
          <div className='programtitle'>Program: </div>
          <div className='programcontent'>Sciences and Mathmatics</div>
<br/>

          <div className='edutitle'>Bachelor’s Degree (ระดับปริญญาตรี)</div>
          <div className='edumerce'>
<div className='mainedu'>Year 2016 - 2020 <div className='subedu'>Mae Fah Luang University (Chiang Rai)</div></div>
          </div>
          <div className='programtitle'>School of information technology </div>
          <div className='programtitle'>Major: </div>
          <div className='programcontent'>Software Engineering</div>
               </section>
               
               
               
               
     
               
               
               <h2 className='pertitle'> Commencement Ceremony <img src={Gra} className="Per" alt="logo"></img></h2>
               <section className="content-con">
                
                <div className="content-l">
                    
                <img src={Megra} alt=""></img>
                </div>
                <div className="content-r">
                    <h2 className='nametitle'>14 Febuary 2022</h2>
                    <p className='namecontent'>
                    (Ceremony late 2 year causes of Covid-19 )
          </p>
                </div>
            </section>


<div className='toeic'>
            <h2 className='pertitle'>  TOEIC Test <img src={toeicphoto} className="topic" alt="logo"></img></h2>
               <section className="content-con"> 
                <img src={toeic} className="toeicpic" alt=""></img>
            </section>
            </div>
            <hr/>
            </div>
        
    )
}

export default EducationEng;
