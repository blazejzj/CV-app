import { useState } from "react";

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
        <div>
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
                    />
                </div>
                <button type="submit">Add</button>
                <button type="button" onClick={() => setIsAdding(false)}>
                    Cancel
                </button>
            </form>
        </div>
    );

    // render the list of education entries
    const renderEducationEntries = () => (
        <div>
            {educationList.map((entry) =>
                entry.isEditing ? (
                    // Render the edit form within the entry
                    <div key={entry.id}>
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
                    <div key={entry.id}>
                        <h3>{entry.schoolName}</h3>
                        <p>{entry.titleOfStudy}</p>
                        <p>
                            {entry.startDateOfStudy} -{" "}
                            {entry.endDateOfStudy || "Present"}
                        </p>
                        <button onClick={() => handleEditEntry(entry.id)}>
                            Edit
                        </button>
                        <button onClick={() => handleDeleteEntry(entry.id)}>
                            Delete
                        </button>
                    </div>
                )
            )}
        </div>
    );

    return (
        <div>
            <h1>Education Experience</h1>
            {isAdding ? (
                renderAddForm()
            ) : (
                <button onClick={() => setIsAdding(true)}>
                    + Add Education
                </button>
            )}
            {renderEducationEntries()}
        </div>
    );
}

export default EducationExperience;
