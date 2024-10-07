import { useState } from "react";

function EducationExperience() {

    function preventDefault(e) {
        e.preventDefault();
        setIsEditing(false);
    }

    function renderFormEditMode() {
        <div>
            <h1>Education</h1>
            <form onSubmit={preventDefault()}>
                <div>
                    <label htmlFor="schoolName">School Name</label>
                    <input 
                        type="text"
                        id="schoolName"
                        value={schoolName}
                        onChange={setSchoolName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="titleOfStudy">Study Title</label>
                    <input 
                        type="text"
                        id="titleOfStudy"
                        value={titleOfStudy}
                        onChange={setTitleOfStudy(e.target.value)} 
                    />
                </div>
                <div>
                    <div>
                        <label htmlFor="startDateOfStudy">Start Date</label>
                        <input 
                            type="text"
                            id="startDateOfStudy"
                            value={startDateOfStudy}
                            onChange={setStartDateOfStudy(e.target.value)} 
                        />  
                    </div>
                    <div>
                        <label htmlFor="endDateOfStudy">End Date</label>
                        <input 
                            type="text"
                            id="endDateOfStudy"
                            value={endDateOfStudy}
                            onChange={setEndDateOfStudy(e.target.value)} 
                        />
                    </div>
                </div>
            </form>
            <button type="button">Add Education</button>
        </div>
    }

    function renderFormViewMode() {
        <div>
            <h1>Education</h1>
            <div>

            </div>
        </div>
    }

    function renderAllEntries() {
        // return a list of all entries in the array
    }


    const [educationList, setEduactionList] = useState([]); // Initialize an empty array holding all the entries

    // Form variables
    const [schoolName, setSchoolName] = useState("Høgskolen I Østfold");
    const [titleOfStudy, setTitleOfStudy] = useState("Bachelor in Informatics");
    const [startDateOfStudy, setStartDateOfStudy] = useState("08-2022");
    const [endDateOfStudy, setEndDateOfStudy] = useState("-"); // '-' string would indicate study isn't finished

    // render switch
    const [isEditing, setIsEditing] = useState(false); 

    return (

    )
}

export default EducationExperience;