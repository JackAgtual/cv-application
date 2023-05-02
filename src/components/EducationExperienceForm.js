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
                    <input
                        type="text"
                        id="schoolName"
                        placeholder="School name"
                        value={experience.school}
                        onChange={(e) => handleChange(e, experienceType, 'school')}
                    />
                    <input
                        type="text"
                        id="degreeName"
                        placeholder="Degree"
                        value={experience.degree}
                        onChange={(e) => handleChange(e, experienceType, 'degree')}
                    />
                    <input
                        type="text"
                        id="completionDate"
                        placeholder="Completion date"
                        value={experience.completionDate}
                        onChange={(e) => handleChange(e, experienceType, 'completionDate')}
                    />
                </form>
                <button onClick={() => deleteEntry(experienceType, experience.id)}>Delete</button>
            </div>
        )
    }
}