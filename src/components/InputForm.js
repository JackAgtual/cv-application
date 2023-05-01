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
            educationExperience,
            handleExperienceChange,
            addExperienceOfType,
            deleteExperienceOfType,
            workExperienceType,
            educationExperienceType
        } = this.props

        return (
            <div>
                <div className="formHeader">Personal Info</div>
                <PersonalInfoForm personalInfo={personalInfo} handleChange={handlePersonalInfoChange} />
                <div className="formHeader">Work Experience</div>
                {workExperience.map(entry => <WorkExperienceForm
                    key={entry.id}
                    experience={entry}
                    handleChange={handleExperienceChange}
                    deleteEntry={deleteExperienceOfType}
                    experienceType={workExperienceType}
                />)}
                <button onClick={() => addExperienceOfType(workExperienceType)}>Add Work Experience</button>
                <div className="formHeader">Education Experience</div>
                {educationExperience.map(entry => <EducationExperienceForm
                    key={entry.id}
                    experience={entry}
                    handleChange={handleExperienceChange}
                    deleteEntry={deleteExperienceOfType}
                    experienceType={educationExperienceType}
                />)}
                <button onClick={() => addExperienceOfType(educationExperienceType)}>Add Education Experience</button>
            </div>
        )
    }
}