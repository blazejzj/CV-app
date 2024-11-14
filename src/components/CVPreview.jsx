import { generalInformationData } from "./GeneralInformation";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function CVPreview() {
    return (
        <div className="resume top">
            <div className="personalInformation">
                <h1 className="personalName">Python Javalin</h1>
                <div className="personalDetails">
                    <div>
                        <p>123456789</p>
                    </div>
                    <div>
                        <p>omg@gmail.com</p>
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
