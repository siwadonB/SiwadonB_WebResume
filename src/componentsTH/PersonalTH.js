import React from 'react'
import "./PersonalTH.css"
import Me from "../Image/Me.jpg";
import Per from "../Image/Per.png";
import please from "../Image/please.png";

function PersonalTH() {
    return (
        <div className="containerCon"> 
            <section className="content-con">
                <div className="content-l">
                <img src={Me} alt=""></img>
                </div>
                <div className="content-r">
                    <h2 className='nametitle'>สวัสดีครับ <img src={please} className="cv" alt="logo"></img> ผมชื่อ นายศิวดล บุญประดับ(ตอง)</h2>
                    <p className='namecontent' id='PersonalPage'>
                    " ผมเป็นนักพัฒนาซอร์ฟแวร์สามารถเขียนได้ทั้งโปรแกรมส่วนของทางหน้าบ้านและหลังบ้าน(ใช้
          Firebase) แต่ผมชอบเขียนโค๊ดของทางฝั่งหน้าบ้านมากกว่า
          ผมจบจากมหาวิทยาลัยแม่ฟ้าหลวง สำนักวิชาเทคโนโลยีสารสนเทศ
          สาขาวิศวกรรมซอร์ฟแวร์ "
          </p>
                </div >
            </section >

            <section className="content-per">
                    <h2 className='pertitle'>ประวัติส่วนตัว <img src={Per} className="Per" alt="logo"></img></h2>
                    
                <div className='maincontact'> 
                <div className='titlecontact'>ชื่อ: </div><div className="subcontact"> นายศิวดล บุญประดับ</div>
                </div>
                <br/>
                <div className='maincontact'> 
                <div className='titlecontact'>ชื่อเล่น: </div><div className="subcontact"> ตอง </div>
                </div>
                <br/>
                <div className='maincontact'> 
                <div className='titlecontact'>วันเกิด: </div><div className="subcontact"> 4 มกราคา 2541</div>
                </div>
                <br/>
                <div className='maincontact'> 
                <div className='titlecontact'>สัญชาติ: </div><div className="subcontact"> ไทย</div>
                </div>
                <br/>
                <div className='maincontact'> 
                <div className='titlecontact'>อีเมล์: </div><div className="subcontact"> boonpradub.si@gmail.com</div>
                </div>
                <br/>
                <div className='maincontact'> 
                <div className='titlecontact'>เบอร์โทรศัพท์มือถือ: </div><div className="subcontact"> 080-5060169</div>
                </div>
                <br/>
                <div className='maincontact'> 
                <div className='titlecontact'>เพศ: </div><div className="subcontact"> ชาย </div>
                </div>
                <br/>
                <div className='maincontact'> 
                <div className='titlecontact'>ที่อยู่: </div><div className="subcontact"> 346/ ซอยไชยานุภาพ 6, ถนนไชยานุภาพ, ตำบลในเมือง, อำเภอเมือง, จังหวัดพิษณุโลก</div>
                </div>   
            </section>


<hr/>
        </div>
    )
}

export default PersonalTH;
