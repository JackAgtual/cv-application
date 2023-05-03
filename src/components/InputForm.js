import React from "react"
import PersonalInfoForm from "./PersonalInfoForm"
import WorkExperienceForm from "./WorkExperienceForm"
import EducationExperienceForm from "./EducationExperienceForm"
import FormCSS from '../styles/Form.module.css'

export default function InputForm(props) {

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
    } = props

    return (
        <div className={FormCSS.masterForm}>
            <div className={FormCSS.formHeader}>Personal Info</div>
            <PersonalInfoForm personalInfo={personalInfo} handleChange={handlePersonalInfoChange} />
            <div className={FormCSS.formHeader}>Work Experience</div>
            {workExperience.map(entry => <WorkExperienceForm
                key={entry.id}
                experience={entry}
                handleChange={handleExperienceChange}
                deleteEntry={deleteExperienceOfType}
                experienceType={workExperienceType}
            />)}
            <button className={FormCSS.btn} onClick={() => addExperienceOfType(workExperienceType)}>Add Work Experience</button>
            <div className={FormCSS.formHeader}>Education Experience</div>
            {educationExperience.map(entry => <EducationExperienceForm
                key={entry.id}
                experience={entry}
                handleChange={handleExperienceChange}
                deleteEntry={deleteExperienceOfType}
                experienceType={educationExperienceType}
            />)}
            <button className={FormCSS.btn} onClick={() => addExperienceOfType(educationExperienceType)}>Add Education Experience</button>
        </div>
    )
}