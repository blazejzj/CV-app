import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

function CVPreview({ formData }) {
    const renderHeaderInfo = () => (
        <div className="personalInformation">
            {console.log("UPDATED VALUES!")}
            <h1 className="personalName">{formData.name}</h1>
            <div className="personalDetails">
                <div>
                    <FontAwesomeIcon icon={faPhone} size="lg" />
                    <p>{formData.phoneNumber}</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    <p>{formData.email}</p>
                </div>
                {formData.linkedin && (
                    <div>
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        <p>{formData.linkedin}</p>
                    </div>
                )}
                {formData.github && (
                    <div>
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                        <p>{formData.github}</p>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="resume top">
            {renderHeaderInfo()}
            <div className="CVDisplay">
                {formData.introduction && (
                    <div className="introduction">
                        <h2>Introduction</h2>
                        <p>{formData.introduction}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CVPreview;
