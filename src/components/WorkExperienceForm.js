import React, { Component } from "react";

export default class WorkExperienceForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { experience, handleChange } = this.props

        return (
            <div>
                <form data-id={experience.id}>
                    <label htmlFor="jobTitle">Title:</label>
                    <input
                        type="text"
                        id="jobTitle"
                        value={experience.title}
                        onChange={(e) => handleChange(e, 'title')}
                    />
                    <label htmlFor="companyName">Company:</label>
                    <input
                        type="text"
                        id="companyName"
                        value={experience.company}
                        onChange={(e) => handleChange(e, 'company')}
                    />
                    <label htmlFor="from">From:</label>
                    <input
                        type="text"
                        id="from"
                        value={experience.from}
                        onChange={(e) => handleChange(e, 'from')}
                    />
                    <label htmlFor="to">To:</label>
                    <input
                        type="text"
                        id="to"
                        value={experience.to}
                        onChange={(e) => handleChange(e, 'to')}
                    />
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        value={experience.description}
                        onChange={(e) => handleChange(e, 'description')}
                    />
                </form>
                <button>Delete</button>
            </div>
        )
    }
}