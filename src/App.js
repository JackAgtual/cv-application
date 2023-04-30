import './App.css';
import EducationExperienceForm from './components/EducationExperienceForm';
import PersonalInfoForm from './components/PersonalInfoForm'
import WorkExperienceForm from './components/WorkExperienceForm';

function App() {
  return (
    <div className="App">
      <PersonalInfoForm />
      <WorkExperienceForm />
      <EducationExperienceForm />
    </div>
  );
}

export default App;
