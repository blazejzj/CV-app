import "./styles/main.scss";
import GeneralInformation from "./components/GeneralInformation";
import EducationExperience from "./components/EducationExperience";
import PracticalExperience from "./components/PracticalExperience";
// import CVPreview from './components/CVPreview'

function App() {
    return (
        <>
            <div className="app__userInput">
                <GeneralInformation />
                <EducationExperience />
                <PracticalExperience />
            </div>
            <div className="app__userOutput"></div>
        </>
    );
}

export default App;
