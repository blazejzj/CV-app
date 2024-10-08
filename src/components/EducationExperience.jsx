import { useState } from "react";

function EducationExperience() {

    function clearEducationFormCompletely() {
        setSchoolName("");
        setTitleOfStudy("");
        setStartDateOfStudy("");
        setEndDateOfStudy("");
    }

    function resetEducationFormToDefault() {
        setSchoolName("Harvard University");
        setTitleOfStudy("Bachelor in Computer Science");
        setStartDateOfStudy("MM-YYYY");
        setEndDateOfStudy("-");
    }

    function renderClearInputFieldButton() {
        return (
            <div>
                <button type="button" onClick={() => clearEducationFormCompletely()}>
                    Clear
                </button>
            </div>
        );
    }

    function renderFormEditMode() {
        return (
            <div>
                <h1>Education</h1>
                <form onSubmit={handleEducationFormSubmission}>
                    <div>
                        <label htmlFor="schoolName">School Name</label>
                        <input
                            type="text"
                            id="schoolName"
                            value={schoolName}
                            onChange={(e) => setSchoolName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="titleOfStudy">Study Title</label>
                        <input
                            type="text"
                            id="titleOfStudy"
                            value={titleOfStudy}
                            onChange={(e) => setTitleOfStudy(e.target.value)}
                        />
                    </div>
                    <div>
                        <div>
                            <label htmlFor="startDateOfStudy">Start Date</label>
                            <input
                                type="text"
                                id="startDateOfStudy"
                                value={startDateOfStudy}
                                onChange={(e) => setStartDateOfStudy(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="endDateOfStudy">End Date</label>
                            <input
                                type="text"
                                id="endDateOfStudy"
                                value={endDateOfStudy}
                                onChange={(e) => setEndDateOfStudy(e.target.value)}
                            />
                        </div>
                    </div>
                </form>
                <div>
                    <button type="button" onClick={() => setIsEditing(false)}>
                        Save
                    </button>
                    {renderClearInputFieldButton()}
                </div>
            </div>
        );
    }

    function renderFormToggleButton() {
        return (
            <div>
                <button type="button" onClick={() => setIsEditing(true)}>
                    + Add Education
                </button>
            </div>
        );
    }

    function handleEducationFormSubmission(e) {
        // prevent default first + turn off editing
        e.preventDefault()
        // Create an education object
        let entry = {
            schoolName: schoolName,
            titleOfStudy: titleOfStudy,
            startDateOfStudy: startDateOfStudy,
            endDateOfStudy: endDateOfStudy
        }
        setEducationList([... educationList, entry]);
        resetEducationFormToDefault();
        setIsEditing(false);
    }

    function renderAllEducationEntries() {
        return educationList.map((education, index) => (
            <div key={index}>
                <p>{education.schoolName}</p>
                <p>{education.titleOfStudy}</p>
                <p>{education.startDateOfStudy}</p>
                <p>{education.endDateOfStudy}</p>
            </div>
        ));
    }

    // form input variables
    const [schoolName, setSchoolName] = useState("Høgskolen I Østfold");
    const [titleOfStudy, setTitleOfStudy] = useState("Bachelor in Computer Science");
    const [startDateOfStudy, setStartDateOfStudy] = useState("MM-YYYY");
    const [endDateOfStudy, setEndDateOfStudy] = useState("-");

    // toggle form on or off
    const [isEditing, setIsEditing] = useState(false);

    // array holding all entries
    const [educationList, setEducationList] = useState([]); // initialize as an empty array

    return (
        <div>
            {isEditing ? renderFormEditMode() : renderFormToggleButton()}
            <div id="educationEntries">
                {renderAllEducationEntries()}
            </div>
        </div>
    );
}

export default EducationExperience;
