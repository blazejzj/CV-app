import { useState } from "react";



function GeneralInformation() {

    function renderEditMode() {
    
        function handleSubmit(e) {
            e.preventDefault(); // handle form submission page refresh
            setIsEditing(false); // switch back to view mode
        }
    
        return (
            <div>
                <h1>General Information</h1>
                <form onSubmit={handleSubmit}> {/* Attaches handleSubmit to form's onSubmit */}
                    <div>
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input 
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input 
                            type="text"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <button type="submit">
                        Save
                    </button>
                </form>
            </div>
        );
    }
    
    function renderViewMode() {
        return (
            <div>
                <h1>General Information</h1>
                <div>
                    <p>Name</p>
                    <p>{name}</p>
                </div>
                <div>
                    <p>E-mail</p>
                    <p>{email}</p>
                </div>
                <div>
                    <p>Phone Number</p>
                    <p>{phoneNumber}</p>
                </div>
                <button type="button" onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </div>
        );
    }

    const [name, setName] = useState("John Doe");
    const [email, setEmail] = useState("johndoe@react.com");
    const [phoneNumber, setPhoneNumber] = useState("+47 123 456 78");
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div>
            {isEditing 
                ? renderEditMode() 
                : renderViewMode()
            }
        </div>
    );
}

export default GeneralInformation;
