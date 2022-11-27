import Header from './componentsEng/Header'
import PersonalEng from './componentsEng/PersonalEng'
import EducationEng from './componentsEng/EducationEng'
import SkillEng from './componentsEng/SkillEng'
import "./App.css";
import Com from "./Image/Com.jpg";


function App() {
  return (
   
    <div className='all'>
      <Header />
      <img src={Com} className="com" alt=""></img>
      <PersonalEng />
      <EducationEng />
      <SkillEng/>

      </div>
  );
}

export default App;
