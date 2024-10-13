import "./App.css";
import GeneralInformation from "./components/GeneralInformation";
import EducationExperience from "./components/EducationExperience";
import PracticalExperience from "./components/PracticalExperience";
// import CVPreview from './components/CVPreview'

function App() {
    return (
        <>
            <div className="user-input">
                <GeneralInformation />
                <EducationExperience />
                <PracticalExperience />
            </div>
            {/* <div className='user-output'>
        <CVPreview />
      </div> */}
        </>
    );
}

export default App;
