import { useState } from "react";

// define an object with data
export const generalInformationData = {
    name: "John Doe",
    email: "johndoe@react.com",
    phoneNumber: "+47 123 456 78",
};

function GeneralInformation() {
    const [formData, setFormData] = useState(generalInformationData);

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
        <div className="general-info-standard general-info-edit-mode section">
            <h1>General Information</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
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
                    <label htmlFor="email">E-mail</label>
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
                    <label htmlFor="phoneNumber">Phone Number</label>
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
                <button type="submit">Save</button>
            </form>
        </div>
    );

    const renderViewMode = () => (
        <div className="general-info-standard section general-info-view-mode">
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
