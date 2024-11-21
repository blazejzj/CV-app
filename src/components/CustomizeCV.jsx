import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CustomizeCV({
    toPDF,
    setLayoutType,
    layoutType,
    setFontType,
    fontType,
}) {
    const downloadSection = () => (
        <div className="downloadSection">
            <button onClick={() => toPDF()}>
                <FontAwesomeIcon icon={faCircleArrowDown} size="1x" /> Download
                CV
            </button>
        </div>
    );

    const chooseLayoutSection = () => (
        <div className="layoutSection section">
            <h3>Layout</h3>
            <div className="layoutButtons">
                <button
                    className={layoutType === "left" ? "active" : ""}
                    onClick={() => setLayoutType("left")}
                >
                    Left
                </button>
                <button
                    className={layoutType === "top" ? "active" : ""}
                    onClick={() => setLayoutType("top")}
                >
                    Top
                </button>
                <button
                    className={layoutType === "right" ? "active" : ""}
                    onClick={() => setLayoutType("right")}
                >
                    Right
                </button>
            </div>
        </div>
    );

    const chooseFontSection = () => (
        <div className="fontSection section">
            <h3>Font</h3>
            <div className="fontButtons">
                <button
                    className={fontType === "arial" ? "active" : ""}
                    onClick={() => setFontType("arial")}
                >
                    Arial
                </button>
                <button
                    className={fontType === "times" ? "active" : ""}
                    onClick={() => setFontType("times")}
                >
                    Times New Roman
                </button>
                <button
                    className={fontType === "georgia" ? "active" : ""}
                    onClick={() => setFontType("georgia")}
                >
                    Georgia
                </button>
            </div>
        </div>
    );

    const renderGithub = () => (
        <div className="credit">
            <a href="https://github.com/blazejzj" target="_blank">
                <FontAwesomeIcon
                    icon={faGithub}
                    size="1x"
                    className="githubIcon"
                />
                Blazej
            </a>
        </div>
    );

    return (
        <div className="customizeCV">
            <div className="creditNDownload">
                {renderGithub()}
                {downloadSection()}
            </div>
            {chooseLayoutSection()}
            {chooseFontSection()}
        </div>
    );
}

export default CustomizeCV;
