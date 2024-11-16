import "./styles/main.scss";
import GeneralInformation from "./components/GeneralInformation";
import EducationExperience from "./components/EducationExperience";
import PracticalExperience from "./components/PracticalExperience";
import CVPreview from "./components/CVPreview";
import { useState } from "react";

function App() {
    const generalInformationData = {
        name: "John Doe",
        email: "johndoe@react.com",
        phoneNumber: "+47 123 456 78",
        introduction: "",
        github: "",
        linkedin: "",
    };
    const [formData, setFormData] = useState(generalInformationData);

    return (
        <div className="app">
            <div className="app__userInput__box">
                <div className="app__userInput">
                    <GeneralInformation
                        formData={formData}
                        setFormData={setFormData}
                    />
                    <EducationExperience />
                    <PracticalExperience />
                </div>
            </div>
            <div className="app__userOutput">
                <CVPreview formData={formData} />
            </div>
        </div>
    );
}

export default App;
