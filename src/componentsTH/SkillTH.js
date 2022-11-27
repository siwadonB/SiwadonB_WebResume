import React from 'react'
import Pro from "../Image/Pro.png";
import code from "../Image/code.png";
import ionic from "../Image/ionic.jpeg";
import Angular from "../Image/Angular.png";
import ReactJS from "../Image/ReactJS.png";
import signboard from "../Image/signboard.png";


function SkillTH() {
    return (
        <div className="containerCon" id='SkillPage'>
             <h2 className='pertitle'> ทักษะ <img src={Pro} className="Per" alt="logo"></img></h2>
            <section className="content-edu">
            <p className='skillcontent'>
            ผมมีประสบการณ์ในการเขียน
        ไอออนิคและแองกูล่าเฟรมเวิร์คในโปรเจ็คจบการศึกษาของพวกผม (ผมและเพื่อนอีก
        2 คน) หน้าที่ของผมในโปรเจ็คจบตัวนี้คือ ออกแบบโครงเว็บใน adoube XD
        สร้างรูปแบบและทำข้อมูลทิ้งไว้ในส่วนของทางโปรแกรมหน้าบ้านแล้วก็ส่งต่อให้เพื่อนไปใส่ระบบล็อคอินและระบบคำนวณคะแนนในระบบ
        แล้วผมก็ย้ายไปทำในส่วนของโปรแกรมหลังบ้านโดยใชแองกูล่าเฟรมเวิร์ค
        (โดยใช้ฐานข้อมูลคือ Firebase) ในขณะตอนที่สร้างโปรเจ็ค ปี 2561
        ผมได้เลือกใช้ ไอออนิคและแองกูล่าเฟรมเวิร์ค เพราะด้วยในขณะนั้น
        รีแอคนั้นยังใหม่สำหรับผมมากแล้วก็ข้อมูลอ้างอิงน้อย
        แต่หลังจากนั้นผมก็ได้ศึกษา รีแอคเจเอสและรีแอคเนทีพ ด้วยตัวเองหลังจากนั้น
        1 ปี
          </p>
          <p className='skillcontent'>
          ผมมีประสบการณ์ในการเขียน วิวเจเอส ในตอนที่ฝึกงานในปี 2562
        ซึ่งด้วยสถานะการณ์โควิด 19
        ในขณะนั้นหนักมากทางมหาวิทยาลัยเลยได้ยกเลิกแผนการฝึกงานทั้งหมดที่นักศึกษาต้องไปฝึกงานกับบริษัทข้างนอกแล้วให้ทางนักศึกษาทำงานใก้กับมหาวิทยาลัยแทน
        ในงานที่ผมได้รับมานั้นคือ ให้ผมทำเว็ปจัดซื้อจัดจ้างสินค้าให้ทางมหาลัย
        ผมได้ ออกแบบและเขียนระบบทางหน้าบ้านไว้โดยใช้ วิวเจเอสเฟรมเวิร์ค
        แล้วก็หมดช่วงเวลาฝึกงานของผม
           </p> 
           <br/>
           <div className='tools'>ทักษะ: <div className='subedu'>Ionic, React JS, React Native, Angular JS, Vue JS</div></div>
           <div className='tools'>เครื่องมือ: <div className='subedu'>Vs code, Git, Adobe XD, Figma ,Dreamweaver, Photoshop (basic skill)</div>
           </div>
           <div className='usetitle'> ผมได้ใช้ React JS ในการพัฒนาเว็ปไซต์นี้ขึ้นมา</div>

           </section>




            
            
             <h2 className='pertitle'> โค๊ดตัวอย่าง <img src={code} className="Per" alt="logo"></img></h2>
             <section className="content-skill">
                
                
                <div className="skill-p">
                <a href="https://github.com/siwadonB/Siwadon_SeniorIonic" target="_blank" rel="noreferrer"> <img className="oldio" src={ionic} alt="example" /></a>
        <h2 className='codename'>Ionic (แอพโทรศัพท์มือถือทางฝั่งหน้าบ้าน)</h2>
        </div>
        

                <div className="skill-p">
                <a href="https://github.com/siwadonB/Siwadon_SeniorAngular" target="_blank" rel="noreferrer" > <img className="oldan" src={Angular} alt="example" /> </a>
        <h2 className='codename'>Angular (เว็ปทางฝั่งหลังบ้านเชื่อมกับ Firebase)</h2>
                </div>
            
                <div className="skill-p">
                <a href="https://github.com/siwadonB/SiwadonB_WebResume.git" target="_blank" rel="noreferrer" > <img className="oldan" src={ReactJS} alt="example" /> </a>
        <h2 className='codename'>React.JS (โปรเจ็คตัวนี้)</h2>
                </div>
            </section>


<hr/>


    <div className="footer">
               <div className="End">
        ถ้ามีข้อสงสัยหรือมีคำถามโปรดติดต่อเบอรโทรศัพท์หรืออีเมล์ทางด้านล่างนี้ได้ตลอดเลยครับ
      </div>
      <div className="End">
      ผมหวังว่าเราจะได้มีโอกาศร่วมงานกันในอนาคตครับ
        <img src={signboard} className="Per" alt="logo"></img>
      </div>
        </div>


        <div className="contact_footer">
        เบอร์โทรศัพท์มือถือ: <div className="subfooter">080-5060169</div>{" "}
        <div className="contact_footer">
            <div className='paddingfooter'>
            อีเมลล์: <div className="subfooter"> boonpradub.si@gmail.com</div>
        </div>
        </div>
      </div>

        </div>
    )
}

export default SkillTH;
