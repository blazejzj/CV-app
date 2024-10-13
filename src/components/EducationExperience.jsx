import { useState } from "react";

function EducationExperience() {
    const [educationList, setEducationList] = useState([]);

    const [formData, setFormData] = useState({
        schoolName: "",
        titleOfStudy: "",
        startDateOfStudy: "",
        endDateOfStudy: "",
    });

    const [isEditing, setIsEditing] = useState(false);
    const [editEntryId, setEditEntryId] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (editEntryId !== null) {
            setEducationList((prevList) =>
                prevList.map((entry) =>
                    entry.id === editEntryId ? { ...entry, ...formData } : entry
                )
            );
        } else {
            const newEntry = { id: Date.now(), ...formData };
            setEducationList([...educationList, newEntry]);
        }

        setFormData({
            schoolName: "",
            titleOfStudy: "",
            startDateOfStudy: "",
            endDateOfStudy: "",
        });
        setIsEditing(false);
        setEditEntryId(null);
    };

    const handleEditEntry = (entryId) => {
        const entryToEdit = educationList.find((entry) => entry.id === entryId);
        setFormData({
            schoolName: entryToEdit.schoolName,
            titleOfStudy: entryToEdit.titleOfStudy,
            startDateOfStudy: entryToEdit.startDateOfStudy,
            endDateOfStudy: entryToEdit.endDateOfStudy,
        });
        setIsEditing(true);
        setEditEntryId(entryId);
    };

    const handleDeleteEntry = (entryId) => {
        setEducationList((prevList) =>
            prevList.filter((entry) => entry.id !== entryId)
        );
    };

    const handleCancelEdit = () => {
        setFormData({
            schoolName: "",
            titleOfStudy: "",
            startDateOfStudy: "",
            endDateOfStudy: "",
        });
        setIsEditing(false);
        setEditEntryId(null);
    };

    const renderForm = () => (
        <div>
            <h2>{editEntryId !== null ? "Edit Education" : "Add Education"}</h2>
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
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelEdit}>
                    Cancel
                </button>
            </form>
        </div>
    );

    const renderEducationEntries = () => (
        <div>
            {educationList.map((entry) => (
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
            ))}
        </div>
    );

    return (
        <div>
            <h1>Education Experience</h1>
            {isEditing ? (
                renderForm()
            ) : (
                <button onClick={() => setIsEditing(true)}>
                    + Add Education
                </button>
            )}
            {renderEducationEntries()}
        </div>
    );
}

export default EducationExperience;
