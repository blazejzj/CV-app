import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function PracticalExperience() {
    const [practicalExperienceList, setPracticalExperienceList] = useState([]);

    const [formData, setFormData] = useState({
        companyName: "",
        positionTitle: "",
        mainResponsibilities: "",
        startDate: "",
        endDate: "",
    });

    const [isAdding, setIsAdding] = useState(false);

    // input changes for the add new entry form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // new practical experience entry
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newEntry = {
            id: Date.now(),
            ...formData,
            isEditing: false,
        };

        setPracticalExperienceList([...practicalExperienceList, newEntry]);

        // Reset form
        setFormData({
            companyName: "",
            positionTitle: "",
            mainResponsibilities: "",
            startDate: "",
            endDate: "",
        });
        setIsAdding(false);
    };

    const handleEditEntry = (entryId) => {
        setPracticalExperienceList((prevList) =>
            prevList.map((entry) =>
                entry.id === entryId ? { ...entry, isEditing: true } : entry
            )
        );
    };

    // handle input changes for the edit form within an entry
    const handleEditInputChange = (e, entryId) => {
        const { name, value } = e.target;
        setPracticalExperienceList((prevList) =>
            prevList.map((entry) =>
                entry.id === entryId ? { ...entry, [name]: value } : entry
            )
        );
    };

    const handleEditFormSubmit = (e, entryId) => {
        e.preventDefault();
        setPracticalExperienceList((prevList) =>
            prevList.map((entry) =>
                entry.id === entryId ? { ...entry, isEditing: false } : entry
            )
        );
    };

    const handleDeleteEntry = (entryId) => {
        setPracticalExperienceList((prevList) =>
            prevList.filter((entry) => entry.id !== entryId)
        );
    };

    // render the form for adding a new practical experience entry
    const renderAddForm = () => (
        <div className="card-bg-color form-section">
            <h2>Add Practical Experience</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="companyName">Company Name</label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter Company Name ..."
                    />
                </div>
                <div>
                    <label htmlFor="positionTitle">Position Title</label>
                    <input
                        type="text"
                        id="positionTitle"
                        name="positionTitle"
                        value={formData.positionTitle}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter Position Title ..."
                    />
                </div>
                <div>
                    <label htmlFor="mainResponsibilities">
                        Main Responsibilities
                    </label>
                    <textarea
                        id="mainResponsibilities"
                        name="mainResponsibilities"
                        value={formData.mainResponsibilities}
                        onChange={handleInputChange}
                        required
                        placeholder="Describe your main tasks ..."
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="startDate">Start Date</label>
                    <input
                        type="month"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        placeholder="Enter Start Date ..."
                        required
                    />
                </div>
                <div>
                    <label htmlFor="endDate">End Date</label>
                    <input
                        type="month"
                        id="endDate"
                        name="endDate"
                        value={formData.endDate}
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

    // render the list of practical experience entries
    const renderPracticalEntries = () => (
        <div className="addedEntriesContainer">
            {practicalExperienceList.map((entry) =>
                entry.isEditing ? (
                    <div key={entry.id}>
                        <form
                            onSubmit={(e) => handleEditFormSubmit(e, entry.id)}
                        >
                            <div>
                                <label htmlFor={`companyName-${entry.id}`}>
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    id={`companyName-${entry.id}`}
                                    name="companyName"
                                    value={entry.companyName}
                                    onChange={(e) =>
                                        handleEditInputChange(e, entry.id)
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor={`positionTitle-${entry.id}`}>
                                    Position Title
                                </label>
                                <input
                                    type="text"
                                    id={`positionTitle-${entry.id}`}
                                    name="positionTitle"
                                    value={entry.positionTitle}
                                    onChange={(e) =>
                                        handleEditInputChange(e, entry.id)
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor={`mainResponsibilities-${entry.id}`}
                                >
                                    Main Responsibilities
                                </label>
                                <textarea
                                    id={`mainResponsibilities-${entry.id}`}
                                    name="mainResponsibilities"
                                    value={entry.mainResponsibilities}
                                    onChange={(e) =>
                                        handleEditInputChange(e, entry.id)
                                    }
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <label htmlFor={`startDate-${entry.id}`}>
                                    Start Date
                                </label>
                                <input
                                    type="month"
                                    id={`startDate-${entry.id}`}
                                    name="startDate"
                                    value={entry.startDate}
                                    onChange={(e) =>
                                        handleEditInputChange(e, entry.id)
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor={`endDate-${entry.id}`}>
                                    End Date
                                </label>
                                <input
                                    type="month"
                                    id={`endDate-${entry.id}`}
                                    name="endDate"
                                    value={entry.endDate}
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
                        <h3>{entry.companyName}</h3>
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
        <div className="card-bg-color section expand-section">
            <FontAwesomeIcon icon={faBriefcase} size="lg" />
            <h1>Practical Experience</h1>
            <button onClick={() => setIsAdding(true)}>
                <FontAwesomeIcon icon={faPlus} size="lg" />
            </button>
        </div>
    );

    return (
        <div className="practicalExperienceContainer">
            {isAdding ? renderAddForm() : renderViewMode()}
            {renderPracticalEntries()}
        </div>
    );
}

export default PracticalExperience;
