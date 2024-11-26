import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { mergeRefs } from "react-merge-refs";

function CVPreview({
    userData,
    educationList,
    practicalExperienceList,
    targetRef,
    layoutType,
    fontType,
    profilePicture,
}) {
    const contentRef = useRef(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        // Adjust scaling if content overflows the page
        const contentHeight = contentRef.current.offsetHeight;
        const maxHeightCm = 29.7;
        const cmToPx = 37.4;
        const maxHeightPx = maxHeightCm * cmToPx;

        if (contentHeight > maxHeightPx) {
            const scalingFactor = maxHeightPx / contentHeight;
            setScale(scalingFactor);
        } else {
            setScale(1);
        }
    }, [userData, educationList, practicalExperienceList]);

    const getFontFamily = () => {
        switch (fontType) {
            case "arial":
                return "Arial, Helvetica, sans-serif";
            case "times":
                return "'Times New Roman', Times, serif";
            case "georgia":
                return "Georgia, serif";
            default:
                return "Arial, Helvetica, sans-serif";
        }
    };

    const renderHeaderInfo = () => (
        <div className="personalInformation">
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
            {profilePicture && (
                <img
                    src={profilePicture}
                    alt="Profile Picture"
                    className="profilePicture"
                />
            )}
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
        <div className="resume" style={{ fontFamily: getFontFamily() }}>
            <div
                ref={mergeRefs([contentRef, targetRef])}
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: "top left",
                    width: scale < 1 ? `${100 / scale}%` : "100%",
                }}
                className={`content ${layoutType}`}
            >
                {renderHeaderInfo()}
                <div className="CVDisplay">
                    {userData.introduction && renderIntroduction()}
                    {practicalExperienceList.length > 0 &&
                        renderPracticalExperience()}
                    {educationList.length > 0 && renderEducationExperience()}
                </div>
            </div>
        </div>
    );
}

export default CVPreview;
