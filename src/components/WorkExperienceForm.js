import React, { Component } from "react";
import FormCSS from '../styles/Form.module.css'

export default class WorkExperienceForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { experience, experienceType, handleChange, deleteEntry } = this.props

        return (
            <div>
                <form className={FormCSS.inputForm} data-id={experience.id}>
                    <input
                        type="text"
                        id="jobTitle"
                        placeholder="Job title"
                        value={experience.title}
                        onChange={(e) => handleChange(e, experienceType, 'title')}
                    />
                    <input
                        type="text"
                        id="companyName"
                        placeholder="Company name"
                        value={experience.company}
                        onChange={(e) => handleChange(e, experienceType, 'company')}
                    />
                    <input
                        type="text"
                        id="from"
                        placeholder="Start date"
                        value={experience.from}
                        onChange={(e) => handleChange(e, experienceType, 'from')}
                    />
                    <input
                        type="text"
                        id="to"
                        placeholder="End date"
                        value={experience.to}
                        onChange={(e) => handleChange(e, experienceType, 'to')}
                    />
                    <textarea
                        type="text"
                        rows="4"
                        id="description"
                        placeholder="Description"
                        value={experience.description}
                        onChange={(e) => handleChange(e, experienceType, 'description')}
                    />
                </form>
                <button className={FormCSS.btn} onClick={() => deleteEntry(experienceType, experience.id)}>Delete</button>
            </div>
        )
    }
}