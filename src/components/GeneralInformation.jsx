import { useState } from "react";

function GeneralInformation({ formData, setFormData }) {
    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    const renderEditMode = () => (
        <div className="general-info-standard general-info-edit-mode section sectionBorder">
            <h1>General Information</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter name ..."
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">E-mail *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter e-mail ..."
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number *</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="Enter phone number ..."
                        required
                    />
                </div>
                <div>
                    <label htmlFor="introduction">Introduction</label>
                    <textarea
                        type="text"
                        id="introduction"
                        name="introduction"
                        value={formData.introduction}
                        onChange={handleInputChange}
                        placeholder="Optional: Tell something about yourself ..."
                    />
                </div>
                <div>
                    <label htmlFor="gitHub">GitHub</label>
                    <input
                        type="text"
                        id="gitHub"
                        name="github"
                        value={formData.github}
                        onChange={handleInputChange}
                        placeholder="Optional: github.com/johndoe"
                    />
                </div>
                <div>
                    <label htmlFor="linkedIn">LinkedIn</label>
                    <input
                        type="text"
                        id="linkedIn"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        placeholder="Optional: linkedin.com/in/johndoe"
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );

    const renderViewMode = () => (
        <div className="general-info-standard section general-info-view-mode sectionBorder">
            <h1>General Information</h1>
            <div>
                <p>Name</p>
                <p>{formData.name}</p>
            </div>
            <div>
                <p>E-mail</p>
                <p>{formData.email}</p>
            </div>
            <div>
                <p>Phone Number</p>
                <p>{formData.phoneNumber}</p>
            </div>
            <button type="button" onClick={() => setIsEditing(true)}>
                Edit
            </button>
        </div>
    );

    return <>{isEditing ? renderEditMode() : renderViewMode()}</>;
}

export default GeneralInformation;
