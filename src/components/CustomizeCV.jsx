import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CustomizeCV({ toPDF, setLayoutType }) {
    const downloadSection = () => (
        <div className="downloadSection">
            <FontAwesomeIcon icon={faCircleArrowDown} size="1x" />
            <button onClick={() => toPDF()}>Download CV</button>
        </div>
    );

    const chooseLayoutSection = () => <div></div>;

    return downloadSection();
}

export default CustomizeCV;
