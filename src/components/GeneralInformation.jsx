import { useState } from "react";

function GeneralInformation() {
    // default values for the form
    const [formData, setFormData] = useState({
        name: "John Doe",
        email: "johndoe@react.com",
        phoneNumber: "+47 123 456 78",
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false); // upon submission set editing to false
    };

    const renderEditMode = () => (
        <div>
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
                        required
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );

    const renderViewMode = () => (
        <div className="card-bg-color">
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
