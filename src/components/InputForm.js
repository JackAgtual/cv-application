import React, { Component } from "react"
import PersonalInfoForm from "./PersonalInfoForm"
import WorkExperienceForm from "./WorkExperienceForm"
import EducationExperienceForm from "./EducationExperienceForm"

export default class InputForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { personalInfo, handleChange } = this.props
        return (
            <div>
                <div className="formHeader">Personal Info</div>
                <PersonalInfoForm personalInfo={personalInfo} handleChange={handleChange} />
                <div className="formHeader">Work Experience</div>
                <WorkExperienceForm />
                <div className="formHeader">Education Experience</div>
                <EducationExperienceForm />
            </div>
        )
    }
}