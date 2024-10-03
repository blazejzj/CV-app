import { useState } from "react";

function GeneralInformation() {

    const [name, setName] = useState("John Doe");
    const [email, setEmail] = useState("johndoe@react.com");
    const [phoneNumber, setPhoneNumber] = useState("+47 123 456 78");
    const [isEditing, setIsEditing] = useState(false);

    return (isEditing ? (
        <div>
            <h1>General Information</h1>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        id="name"
                        value={name}
                        onChange = {(e) => setName(e.target.value)}
                        disabled={!isEditing}
                    />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email"
                        id="email"
                        value={email}
                        onChange = {(e) => setEmail(e.target.value)}
                        disabled={!isEditing}
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input 
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange = {(e) => setPhoneNumber(e.target.value)}
                        disabled={!isEditing}
                    />
                </div>
                <button type="button" onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? "Save" : "Edit"}
                </button>
            </form>
        </div>
    ) : (
        <div>
            <h1>General Information</h1>
            <div>
                <label htmlFor="name">Name</label>
                <p>{name}</p>
            </div>
            <div>
                <label htmlFor="email">E-mail</label>
                <p>{email}</p>
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <p>{phoneNumber}</p>
            </div>
            <button type="button" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </div>
    )
);
}

export default GeneralInformation;