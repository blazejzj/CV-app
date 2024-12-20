import "./styles/main.scss";
import GeneralInformation from "./components/GeneralInformation";
import EducationExperience from "./components/EducationExperience";
import PracticalExperience from "./components/PracticalExperience";
import CVPreview from "./components/CVPreview";
import CustomizeCV from "./components/CustomizeCV";
import { useState } from "react";
import { Resolution, usePDF } from "react-to-pdf";

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
        location: "",
        startDate: "",
        endDate: "",
    });

    // CVPreview (download)
    const options = {
        resolution: Resolution.EXTREME,
        canvas: {
            mimeType: "image/png",
            qualityRatio: 2,
        },
    };
    const { toPDF, targetRef } = usePDF({ filename: "page.pdf" }, options);

    // CVPreview adjust layout
    const [layoutType, setLayoutType] = useState("top");

    // CVPreview adjust font
    const [fontType, setFontType] = useState("arial");

    // Photo
    const [profilePicture, setProfilePicture] = useState(null);

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
                    targetRef={targetRef}
                    layoutType={layoutType}
                    fontType={fontType}
                    profilePicture={profilePicture}
                />
            </div>
            <div className="app__customize">
                <CustomizeCV
                    toPDF={toPDF}
                    setLayoutType={setLayoutType}
                    layoutType={layoutType}
                    setFontType={setFontType}
                    fontType={fontType}
                    setProfilePicture={setProfilePicture}
                />
            </div>
        </div>
    );
}

export default App;
