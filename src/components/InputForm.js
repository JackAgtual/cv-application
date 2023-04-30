import React, { Component } from "react"
import PersonalInfoForm from "./PersonalInfoForm"
import WorkExperienceForm from "./WorkExperienceForm"
import EducationExperienceForm from "./EducationExperienceForm"

export default class InputForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <PersonalInfoForm />
                <WorkExperienceForm />
                <EducationExperienceForm />
            </div>
        )
    }
}