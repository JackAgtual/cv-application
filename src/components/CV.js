import React, { Component } from "react"

export default class CV extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { personalInfo, workExperience, educationExperience } = this.props
        return (
            <div>
                <div className="personalInfo">
                    <div className="name">{`${personalInfo.firstName} ${personalInfo.lastName}`}</div>
                    <div className="contact">{`${personalInfo.email} | ${personalInfo.phoneNumber}`}</div>
                </div>
            </div>
        )
    }
}