import HeaderTH from './HeaderTH'
import PersonalTH from './PersonalTH'
import EducationTH from './EducationTH';
import SkillTH from './SkillTH';
import Com1 from "../Image/com1.png";


function THPage() {
  return (
   
    <div className='all'>
      <HeaderTH />
      <img src={Com1} className="com" alt=""></img>
      <PersonalTH />
      <EducationTH />
      <SkillTH/>
      </div>
  );
}

export default THPage;
