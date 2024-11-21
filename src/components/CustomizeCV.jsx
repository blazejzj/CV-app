import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CustomizeCV({ toPDF, setLayoutType, layoutType }) {
    const downloadSection = () => (
        <div className="downloadSection">
            <button onClick={() => toPDF()}>
                <FontAwesomeIcon icon={faCircleArrowDown} size="1x" /> Download
                CV
            </button>
        </div>
    );

    const chooseLayoutSection = () => (
        <div className="layoutSection">
            <h3>Choose Layout</h3>
            <div className="layoutButtons">
                <button
                    className={layoutType === "left" ? "active" : ""}
                    onClick={() => setLayoutType("left")}
                >
                    Left Layout
                </button>
                <button
                    className={layoutType === "top" ? "active" : ""}
                    onClick={() => setLayoutType("top")}
                >
                    Top Layout
                </button>
                <button
                    className={layoutType === "right" ? "active" : ""}
                    onClick={() => setLayoutType("right")}
                >
                    Right Layout
                </button>
            </div>
        </div>
    );

    return (
        <div className="customizeCV">
            {downloadSection()}
            {chooseLayoutSection()}
        </div>
    );
}

export default CustomizeCV;
