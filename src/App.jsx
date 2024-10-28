import "./styles/main.scss";
import GeneralInformation from "./components/GeneralInformation";
import EducationExperience from "./components/EducationExperience";
import PracticalExperience from "./components/PracticalExperience";
// import CVPreview from './components/CVPreview'

function App() {
    return (
        <div className="app">
            <div className="app__userInput__box">
                <div className="app__userInput">
                    <GeneralInformation />
                    <EducationExperience />
                    <PracticalExperience />
                </div>
            </div>
            <div className="app__userOutput">
                <div className="app__userOutput__box">
                    <h1>Hello</h1>
                </div>
            </div>
        </div>
    );
}

export default App;
