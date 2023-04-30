import React, { Component } from "react";

export default class EducationExperienceForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form>
                <label htmlFor="schoolName">School:</label>
                <input type="text" id="schoolName"></input>
                <label htmlFor="degreeName">Degree:</label>
                <input type="text" id="degreeName"></input>
                <label htmlFor="completionDate">Completion Date:</label>
                <input type="text" id="completionDate"></input>
            </form>
        )
    }
}