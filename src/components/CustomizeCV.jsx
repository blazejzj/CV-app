import { useState, useRef } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AvatarEditor from "react-avatar-editor";

function CustomizeCV({
    toPDF,
    setLayoutType,
    layoutType,
    setFontType,
    fontType,
    setProfilePicture,
}) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [scale, setScale] = useState(1);
    const [rotate, setRotate] = useState(0);
    const editorRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
        }
    };

    const handleSave = () => {
        if (editorRef.current) {
            const canvas = editorRef.current.getImageScaledToCanvas();
            const dataURL = canvas.toDataURL();
            setProfilePicture(dataURL);
        }
    };

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
            <a
                href="https://github.com/blazejzj"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    icon={faGithub}
                    size="1x"
                    className="githubIcon"
                />
                Blazej
            </a>
        </div>
    );

    const renderProfilePicture = () => (
        <div className="profilePictureContainer section">
            <h3>Photo</h3>
            <label className="profileInputLabel">
                Upload Photo
                <input
                    type="file"
                    id="profilePicture"
                    name="profilePicture"
                    accept="image/png, image/jpeg"
                    onChange={handleImageChange}
                    className="profileInput"
                />
            </label>
            {selectedImage && (
                <div className="editorContainer">
                    <AvatarEditor
                        ref={editorRef}
                        image={selectedImage}
                        width={250}
                        height={250}
                        border={50}
                        color={[255, 255, 255, 0.6]}
                        scale={scale}
                        rotate={rotate}
                    />
                    <div className="controls">
                        <label>
                            Scale:
                            <input
                                type="range"
                                value={scale}
                                min="1"
                                max="3"
                                step="0.01"
                                onChange={(e) =>
                                    setScale(parseFloat(e.target.value))
                                }
                            />
                        </label>
                        <label>
                            Rotate:
                            <input
                                type="number"
                                value={rotate}
                                onChange={(e) =>
                                    setRotate(parseFloat(e.target.value))
                                }
                            />
                        </label>
                        <button onClick={handleSave} className="saveButton">
                            Save
                        </button>
                    </div>
                </div>
            )}
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
            {renderProfilePicture()}
        </div>
    );
}

export default CustomizeCV;
