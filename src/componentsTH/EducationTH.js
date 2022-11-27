import React from 'react'
import Edu from "../Image/Edu.png";
import Gra from "../Image/Gra.png";
import Megra from "../Image/Megra.jpg";
import toeicphoto from "../Image/toeicphoto.png";
import toeic from "../Image/toeic.png";

function EducationTH() {
    return (
        <div className="containerCon" id='EducationPage'>
               <h2 className='pertitle'> ประวัติการศึกษา <img src={Edu} className="Per" alt="logo"></img></h2>
            <section className="content-edu">
    
          <div className='edutitle'>มัธยมศึกษาตอนปลาย</div>
          <div className='edumerce'>
<div className='mainedu'>ปี พ.ศ. 2556 - 2559 <div className='subedu'>โรงเรียนเฉลิมขวัญสตรี (จังหวัดพิษณุโลก)</div></div>
          </div>
          <div className='programtitle'>โปรแกรม: </div>
          <div className='programcontent'>วิทยาศาสตร์ กับ คณิตศาสตร์</div>
<br/>

          <div className='edutitle'>ระดับปริญญาตรี</div>
          <div className='edumerce'>
<div className='mainedu'> ปี พ.ศ. 2559 - 2563 <div className='subedu'>มหาวิทยาลัยแม่ฟ้าหลวง (จังหวัดเชียงราย)</div></div>
          </div>
          <div className='programtitle'>สำนักวิชาเทคโนโลยีสารสนเทศ </div>
          <div className='programtitle'>สาขาวิชา: </div>
          <div className='programcontent'>วิศวกรรมซอร์ฟแวร์</div>
               </section>
               
               
               
               
     
               
               
               <h2 className='pertitle'> พิธีพระราชทานปริญญาบัตร <img src={Gra} className="Per" alt="logo"></img></h2>
               <section className="content-con">
                
                <div className="content-l">
                    
                <img src={Megra} alt=""></img>
                </div>
                <div className="content-r">
                    <h2 className='nametitle'>14 กุมภาพันธ์ 2565</h2>
                    <p className='namecontent'>
                    (พิธีเลื่อนออกไป 2 ปีเนื่องด้วยสถานการณ์ไวรัสโคโรนา)
          </p>
                </div>
            </section>


<div className='toeic'>
            <h2 className='pertitle'>  ผมการทดสอบ โทอิค <img src={toeicphoto} className="topic" alt="logo"></img></h2>
               <section className="content-con"> 
                <img src={toeic} className="toeicpic" alt=""></img>
            </section>
            </div>
            <hr/>
            </div>
        
    )
}

export default EducationTH;
