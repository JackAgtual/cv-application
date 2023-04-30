import React, { Component } from "react";

export default class PersonalInfoForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { personalInfo, handleChange } = this.props
        return (
            <form>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    value={personalInfo.firstName}
                    onChange={handleChange}
                />
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" value={personalInfo.lastName}></input>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={personalInfo.email}></input>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" value={personalInfo.phoneNumber}></input>
            </form>
        )
    }
}