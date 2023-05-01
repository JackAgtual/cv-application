import React, { Component } from "react"
import PersonalInfoForm from "./PersonalInfoForm"
import WorkExperienceForm from "./WorkExperienceForm"
import EducationExperienceForm from "./EducationExperienceForm"

export default class InputForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            personalInfo,
            handlePersonalInfoChange,
            workExperience,
            handleWorkExperienceChange
        } = this.props

        return (
            <div>
                <div className="formHeader">Personal Info</div>
                <PersonalInfoForm personalInfo={personalInfo} handleChange={handlePersonalInfoChange} />
                <div className="formHeader">Work Experience</div>
                {workExperience.map(entry => <WorkExperienceForm
                    key={entry.id}
                    experience={entry}
                    handleChange={handleWorkExperienceChange}
                />)}
                <div className="formHeader">Education Experience</div>
                <EducationExperienceForm />
            </div>
        )
    }
}