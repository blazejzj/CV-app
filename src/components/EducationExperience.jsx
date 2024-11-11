import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function EducationExperience() {
    const [educationList, setEducationList] = useState([]);

    const [formData, setFormData] = useState({
        schoolName: "",
        titleOfStudy: "",
        startDateOfStudy: "",
        endDateOfStudy: "",
    });

    const [isAdding, setIsAdding] = useState(false);

    // handle input changes -> for new entry form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // new education entry
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newEntry = {
            id: Date.now(),
            ...formData,
            isEditing: false,
        };

        setEducationList([...educationList, newEntry]); // add the entry

        // reset form after adding entry
        setFormData({
            schoolName: "",
            titleOfStudy: "",
            startDateOfStudy: "",
            endDateOfStudy: "",
        });
        setIsAdding(false);
    };

    const handleEditEntry = (entryId) => {
        setEducationList((prevList) =>
            prevList.map((entry) =>
                entry.id === entryId ? { ...entry, isEditing: true } : entry
            )
        );
    };

    const handleDeleteEntry = (entryId) => {
        setEducationList((prevList) =>
            prevList.filter((entry) => entry.id !== entryId)
        );
    };

    const handleEditFormSubmit = (e, entryId) => {
        e.preventDefault();
        setEducationList((prevList) =>
            prevList.map((entry) =>
                entry.id === entryId ? { ...entry, isEditing: false } : entry
            )
        );
    };

    const handleEditInputChange = (e, entryId) => {
        const { name, value } = e.target;
        setEducationList((prevList) =>
            prevList.map((entry) =>
                entry.id === entryId ? { ...entry, [name]: value } : entry
            )
        );
    };

    // render the form for adding a new education entry
    const renderAddForm = () => (
        <div className="section form-section">
            <h2>Add Education</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="schoolName">School Name</label>
                    <input
                        type="text"
                        id="schoolName"
                        name="schoolName"
                        value={formData.schoolName}
                        onChange={handleInputChange}
                        placeholder="Enter School Name ..."
                        required
                    />
                </div>
                <div>
                    <label htmlFor="titleOfStudy">Title of Study</label>
                    <input
                        type="text"
                        id="titleOfStudy"
                        name="titleOfStudy"
                        value={formData.titleOfStudy}
                        onChange={handleInputChange}
                        placeholder="Enter Study Title ..."
                        required
                    />
                </div>
                <div>
                    <label htmlFor="startDateOfStudy">Start Date</label>
                    <input
                        type="month"
                        id="startDateOfStudy"
                        name="startDateOfStudy"
                        value={formData.startDateOfStudy}
                        onChange={handleInputChange}
                        placeholder="Enter Start Date ..."
                        required
                    />
                </div>
                <div>
                    <label htmlFor="endDateOfStudy">End Date</label>
                    <input
                        type="month"
                        id="endDateOfStudy"
                        name="endDateOfStudy"
                        value={formData.endDateOfStudy}
                        onChange={handleInputChange}
                        placeholder="Enter End Date ..."
                    />
                </div>
                <div className="form-buttons">
                    <button type="submit">Add</button>
                    <button type="button" onClick={() => setIsAdding(false)}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );

    // render the list of education entries
    const renderEducationEntries = () => (
        <div className="addedEntriesContainer">
            {educationList.map((entry) =>
                entry.isEditing ? (
                    <div key={entry.id} className="entryEditing section">
                        <form
                            onSubmit={(e) => handleEditFormSubmit(e, entry.id)}
                        >
                            <div>
                                <label htmlFor={`schoolName-${entry.id}`}>
                                    School Name
                                </label>
                                <input
                                    type="text"
                                    id={`schoolName-${entry.id}`}
                                    name="schoolName"
                                    value={entry.schoolName}
                                    onChange={(e) =>
                                        handleEditInputChange(e, entry.id)
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor={`titleOfStudy-${entry.id}`}>
                                    Title of Study
                                </label>
                                <input
                                    type="text"
                                    id={`titleOfStudy-${entry.id}`}
                                    name="titleOfStudy"
                                    value={entry.titleOfStudy}
                                    onChange={(e) =>
                                        handleEditInputChange(e, entry.id)
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor={`startDateOfStudy-${entry.id}`}>
                                    Start Date
                                </label>
                                <input
                                    type="month"
                                    id={`startDateOfStudy-${entry.id}`}
                                    name="startDateOfStudy"
                                    value={entry.startDateOfStudy}
                                    onChange={(e) =>
                                        handleEditInputChange(e, entry.id)
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor={`endDateOfStudy-${entry.id}`}>
                                    End Date
                                </label>
                                <input
                                    type="month"
                                    id={`endDateOfStudy-${entry.id}`}
                                    name="endDateOfStudy"
                                    value={entry.endDateOfStudy}
                                    onChange={(e) =>
                                        handleEditInputChange(e, entry.id)
                                    }
                                />
                            </div>
                            <button type="submit">Save</button>
                        </form>
                    </div>
                ) : (
                    // Render the entry in view mode
                    <div
                        key={entry.id}
                        className="addedEntriesViewMode section card-bg-color"
                    >
                        <h3>{entry.schoolName}</h3>
                        <div className="viewModeButtons">
                            <button onClick={() => handleEditEntry(entry.id)}>
                                <FontAwesomeIcon
                                    icon={faPenToSquare}
                                    size="lg"
                                />
                            </button>
                            <button onClick={() => handleDeleteEntry(entry.id)}>
                                <FontAwesomeIcon icon={faTrash} size="lg" />
                            </button>
                        </div>
                    </div>
                )
            )}
        </div>
    );

    const renderViewMode = () => (
        <div className="section expand-section">
            <div className="viewModeContainerIcon">
                <h1>Education Experience</h1>
                <FontAwesomeIcon icon={faGraduationCap} size="lg" />
            </div>
            <button onClick={() => setIsAdding(true)}>
                <FontAwesomeIcon icon={faPlus} size="lg" />
            </button>
        </div>
    );

    return (
        <div className="educationExperienceContainer">
            {isAdding ? renderAddForm() : renderViewMode()}
            {renderEducationEntries()}
        </div>
    );
}

export default EducationExperience;
