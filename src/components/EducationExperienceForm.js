import React from "react";
import FormCSS from '../styles/Form.module.css'

export default function EducationExperienceForm(props) {

    const { experience, experienceType, handleChange, deleteEntry } = props

    return (
        <div>
            <form className={FormCSS.inputForm} data-id={experience.id}>
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
            <button className={FormCSS.btn} onClick={() => deleteEntry(experienceType, experience.id)}>Delete</button>
        </div>
    )
}