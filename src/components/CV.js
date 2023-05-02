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
                <div className="workExperience">
                    {workExperience.map(job => {
                        return (
                            <div className="job">
                                <div className="jobTitle">{job.title}</div>
                                <div className="company">{job.company}</div>
                                <div className="jobDates">{`${job.from} - ${job.to}`}</div>
                                <div className="jobDescription">{job.description}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="educationExperience">
                    {educationExperience.map(school => {
                        return (
                            <div className="education">
                                <div className="schoolName">{school.school}</div>
                                <div className="degree">{school.degree}</div>
                                <div className="completionDate">{school.completionDate}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}