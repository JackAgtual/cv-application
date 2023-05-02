import React, { Component } from "react";
import FormCSS from '../styles/Form.module.css'
export default class PersonalInfoForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { personalInfo, handleChange } = this.props
        return (
            <form className={FormCSS.inputForm}>
                <input
                    type="text"
                    id="firstName"
                    placeholder="First name"
                    value={personalInfo.firstName}
                    onChange={(e) => handleChange(e, 'firstName')}
                />
                <input
                    type="text"
                    id="lastName"
                    placeholder="Last name"
                    value={personalInfo.lastName}
                    onChange={(e) => handleChange(e, 'lastName')}
                />
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={personalInfo.email}
                    onChange={(e) => handleChange(e, 'email')}
                />
                <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="Phone number"
                    value={personalInfo.phoneNumber}
                    onChange={(e) => handleChange(e, 'phoneNumber')}
                />
            </form>
        )
    }
}