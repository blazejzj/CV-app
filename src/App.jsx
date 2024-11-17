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
    const [userData, setUserData] = useState(generalInformationData);

    // Education Experience
    const [educationData, setEducationData] = useState({
        schoolName: "",
        titleOfStudy: "",
        location: "",
        relevantCourses: "",
        startDateOfStudy: "",
        endDateOfStudy: "",
    });

    const [educationList, setEducationList] = useState([]);

    // Practical Experience
    const [practicalExperienceList, setPracticalExperienceList] = useState([]);

    const [practicalData, setPracticalData] = useState({
        companyName: "",
        positionTitle: "",
        mainResponsibilities: "",
        startDate: "",
        endDate: "",
    });

    // TODO
    /**
     * cant type in linkedin in generalinformation
     */
    return (
        <div className="app">
            <div className="app__userInput__box">
                <div className="app__userInput">
                    <GeneralInformation
                        formData={userData}
                        setFormData={setUserData}
                    />
                    <EducationExperience
                        educationList={educationList}
                        setEducationList={setEducationList}
                        educationData={educationData}
                        setEducationData={setEducationData}
                    />
                    <PracticalExperience
                        practicalData={practicalData}
                        setPracticalData={setPracticalData}
                        practicalExperienceList={practicalExperienceList}
                        setPracticalExperienceList={setPracticalExperienceList}
                    />
                </div>
            </div>
            <div className="app__userOutput">
                <CVPreview
                    userData={userData}
                    educationList={educationList}
                    practicalExperienceList={practicalExperienceList}
                />
            </div>
        </div>
    );
}

export default App;
