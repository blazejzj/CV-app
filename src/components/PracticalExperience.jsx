import { useState } from "react";

function PracticalExperience() {
    const [practicalExperienceList, setPracticalExperienceList] = useState([]);

    const [formData, setFormData] = useState({
        companyName: "",
        positionTitle: "",
        mainResponsibilities: "",
        startDate: "",
        endDate: "",
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
            setPracticalExperienceList((prevList) =>
                prevList.map((entry) =>
                    entry.id === editEntryId ? { ...entry, ...formData } : entry
                )
            );
        } else {
            const newEntry = { id: Date.now(), ...formData };
            setPracticalExperienceList([...practicalExperienceList, newEntry]);
        }

        setFormData({
            companyName: "",
            positionTitle: "",
            mainResponsibilities: "",
            startDate: "",
            endDate: "",
        });

        setIsEditing(false);
        setEditEntryId(null);
    };

    const handleEditEntry = (entryId) => {
        const entryToEdit = practicalExperienceList.find(
            (entry) => entry.id === entryId
        );
        setFormData({
            companyName: entryToEdit.companyName,
            positionTitle: entryToEdit.positionTitle,
            mainResponsibilities: entryToEdit.mainResponsibilities,
            startDate: entryToEdit.startDate,
            endDate: entryToEdit.endDate,
        });
        setIsEditing(true);
        setEditEntryId(entryId);
    };

    const handleDeleteEntry = (entryId) => {
        setPracticalExperienceList((prevList) =>
            prevList.filter((entry) => entry.id !== entryId)
        );
    };

    const handleCancelEdit = () => {
        setFormData({
            companyName: "",
            positionTitle: "",
            mainResponsibilities: "",
            startDate: "",
            endDate: "",
        });
        setIsEditing(false);
        setEditEntryId(null);
    };

    const renderForm = () => (
        <div>
            <h2>
                {editEntryId !== null
                    ? "Edit Practical Experience"
                    : "Add Practical Experience"}
            </h2>
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
                    />
                </div>
                <div>
                    <label htmlFor="mainResponsibilities">
                        Main Responsibilities
                    </label>
                    <textarea
                        type="text"
                        id="mainResponsibilities"
                        name="mainResponsibilities"
                        value={formData.mainResponsibilities}
                        onChange={handleInputChange}
                        required
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
                    />
                </div>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelEdit}>
                    Cancel
                </button>
            </form>
        </div>
    );

    const renderPracticalEntries = () => (
        <div>
            {practicalExperienceList.map((entry) => (
                <div key={entry.id}>
                    <h3>{entry.companyName}</h3>
                    <p>{entry.positionTitle}</p>
                    <p>{entry.mainResponsibilities}</p>
                    <p>
                        {entry.startDate} - {entry.endDate || "Present"}
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
            <h1>Practical Experience</h1>
            {isEditing ? (
                renderForm()
            ) : (
                <button onClick={() => setIsEditing(true)}>
                    + Add Practical Experience
                </button>
            )}
            {renderPracticalEntries()}
        </div>
    );
}

export default PracticalExperience;
