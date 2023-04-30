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
                    onChange={(e) => handleChange(e, 'firstName')}
                />
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    value={personalInfo.lastName}
                    onChange={(e) => handleChange(e, 'lastName')}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={personalInfo.email}
                    onChange={(e) => handleChange(e, 'email')}
                />
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    value={personalInfo.phoneNumber}
                    onChange={(e) => handleChange(e, 'phoneNumber')}
                />
            </form>
        )
    }
}