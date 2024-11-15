import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { generalInformationData } from "./data/GeneralInformationData";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

function CVPreview() {
    const renderHeaderInfo = () => (
        <div className="personalInformation">
            <h1 className="personalName">{generalInformationData.name}</h1>
            <div className="personalDetails">
                <div>
                    <FontAwesomeIcon icon={faPhone} size="lg" />
                    <p>{generalInformationData.phoneNumber}</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    <p>{generalInformationData.email}</p>
                </div>
                {generalInformationData.linkedin && (
                    <div>
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        <p>{generalInformationData.linkedin}</p>
                    </div>
                )}
                {generalInformationData.github && (
                    <div>
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                        <p>{generalInformationData.github}</p>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="resume top">
            {renderHeaderInfo()}
            <div className="CVDisplay">
                {generalInformationData.introduction && (
                    <div className="introduction">
                        <h2>Introduction</h2>
                        <p>{generalInformationData.introduction}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CVPreview;
