import React, { Component } from "react";

export default class WorkExperienceForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form>
                <label htmlFor="jobTitle">Title:</label>
                <input type="text" id="jobTitle"></input>
                <label htmlFor="companyName">Company:</label>
                <input type="text" id="companyName"></input>
                <label htmlFor="from">From:</label>
                <input type="text" id="from"></input>
                <label htmlFor="to">To:</label>
                <input type="text" id="to"></input>
                <label htmlFor="description">Description:</label>
                <input type="text" id="description"></input>
            </form>
        )
    }
}