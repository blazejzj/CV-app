import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { generalInformationData } from "./data/GeneralInformationData";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

function CVPreview() {
    return (
        <div className="resume top">
            <div className="personalInformation">
                <h1 className="personalName">{generalInformationData.name}</h1>
                <div className="personalDetails">
                    <div>
                        <FontAwesomeIcon icon={faPhone} size="s" />
                        <p>{generalInformationData.phoneNumber}</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} size="s" />
                        <p>{generalInformationData.email}</p>
                    </div>
                    {generalInformationData.linkedin && (
                        <div>
                            <FontAwesomeIcon icon={faLinkedin} size="s" />
                            <p>{generalInformationData.linkedin}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="CVDisplay">
                <h1>HelloWorld!</h1>
            </div>
        </div>
    );
}

export default CVPreview;
