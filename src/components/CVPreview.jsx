import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

function CVPreview({ userData, educationList, practicalExperienceList }) {
    const renderHeaderInfo = () => (
        <div className="personalInformation">
            {console.log("UPDATED VALUES!")}
            <h1 className="personalName">{userData.name}</h1>
            <div className="personalDetails">
                <div>
                    <FontAwesomeIcon icon={faPhone} size="lg" />
                    <p>{userData.phoneNumber}</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    <p>{userData.email}</p>
                </div>
                {userData.linkedin && (
                    <div>
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        <p>{userData.linkedin}</p>
                    </div>
                )}
                {userData.github && (
                    <div>
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                        <p>{userData.github}</p>
                    </div>
                )}
            </div>
        </div>
    );

    const renderIntroduction = () => (
        <div className="introduction">
            <h2 className="sectionHeader">Introduction</h2>
            <p>{userData.introduction}</p>
        </div>
    );

    const renderEducationExperience = () => (
        <div className="entryListContainer">
            <h2 className="sectionHeader">Education</h2>
            {educationList.map((entry) => (
                <div key={entry.id}>
                    <h2>{entry.titleOfStudy}</h2>
                    <div className="locationDisplay">
                        <h3>{entry.schoolName}</h3>
                        <span>|</span>
                        <p>{entry.location}</p>
                    </div>
                    <div className="entryDates">
                        {entry.startDateOfStudy}
                        <span>-</span>
                        {entry.endDateOfStudy
                            ? entry.endDateOfStudy
                            : "Present"}
                    </div>
                    <div className="relevancyDisplay">
                        {entry.relevantCourses}
                    </div>
                </div>
            ))}
        </div>
    );

    const renderPracticalExperience = () => (
        <div className="entryListContainer">
            <h2 className="sectionHeader">Experience</h2>
            {practicalExperienceList.map((entry) => (
                <div key={entry.id}>
                    <h2>{entry.positionTitle}</h2>
                    <div className="locationDisplay">
                        <h3>{entry.companyName}</h3>
                        <span>|</span>
                        <p>{entry.location}</p>
                    </div>
                    <div className="entryDates">
                        {entry.startDate}
                        <span>-</span>
                        {entry.endDate ? entry.endDate : "Present"}
                    </div>
                    <div className="relevancyDisplay">
                        {entry.mainResponsibilities}
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="resume top">
            {renderHeaderInfo()}
            <div className="CVDisplay">
                {userData.introduction && renderIntroduction()}
                {practicalExperienceList.length > 0 &&
                    renderPracticalExperience()}
                {educationList.length > 0 && renderEducationExperience()}
            </div>
        </div>
    );
}

export default CVPreview;
