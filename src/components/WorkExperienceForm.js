import React, { Component } from "react";

export default class WorkExperienceForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { experience, experienceType, handleChange, deleteEntry } = this.props

        return (
            <div>
                <form data-id={experience.id}>
                    <label htmlFor="jobTitle">Title:</label>
                    <input
                        type="text"
                        id="jobTitle"
                        value={experience.title}
                        onChange={(e) => handleChange(e, experienceType, 'title')}
                    />
                    <label htmlFor="companyName">Company:</label>
                    <input
                        type="text"
                        id="companyName"
                        value={experience.company}
                        onChange={(e) => handleChange(e, experienceType, 'company')}
                    />
                    <label htmlFor="from">From:</label>
                    <input
                        type="text"
                        id="from"
                        value={experience.from}
                        onChange={(e) => handleChange(e, experienceType, 'from')}
                    />
                    <label htmlFor="to">To:</label>
                    <input
                        type="text"
                        id="to"
                        value={experience.to}
                        onChange={(e) => handleChange(e, experienceType, 'to')}
                    />
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        value={experience.description}
                        onChange={(e) => handleChange(e, experienceType, 'description')}
                    />
                </form>
                <button onClick={() => deleteEntry(experienceType, experience.id)}>Delete</button>
            </div>
        )
    }
}