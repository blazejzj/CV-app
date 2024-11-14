import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { generalInformationData } from "./GeneralInformation";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function CVPreview() {
    return (
        <div className="resume top">
            <div className="personalInformation">
                <h1 className="personalName">{generalInformationData.name}</h1>
                <div className="personalDetails">
                    <div>
                        <FontAwesomeIcon icon={faPhone} size="xs" />
                        <p>{generalInformationData.phoneNumber}</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} size="xs" />
                        <p>{generalInformationData.email}</p>
                    </div>
                </div>
            </div>
            <div className="CVDisplay">
                <h1>HelloWorld!</h1>
            </div>
        </div>
    );
}

export default CVPreview;
