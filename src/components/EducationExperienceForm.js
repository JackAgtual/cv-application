import React, { Component } from "react";

export default class EducationExperienceForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { experience, experienceType, handleChange, deleteEntry } = this.props

        return (
            <div>
                <form data-id={experience.id}>
                    <label htmlFor="schoolName">School:</label>
                    <input
                        type="text"
                        id="schoolName"
                        value={experience.school}
                        onChange={(e) => handleChange(e, experienceType, 'school')}
                    />
                    <label htmlFor="degreeName">Degree:</label>
                    <input
                        type="text"
                        id="degreeName"
                        value={experience.degree}
                        onChange={(e) => handleChange(e, experienceType, 'degree')}
                    />
                    <label htmlFor="completionDate">Completion Date:</label>
                    <input
                        type="text"
                        id="completionDate"
                        value={experience.completionDate}
                        onChange={(e) => handleChange(e, experienceType, 'completionDate')}
                    />
                </form>
                <button onClick={() => deleteEntry(experienceType, experience.id)}>Delete</button>
            </div>
        )
    }
}