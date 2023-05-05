import React from 'react'
import CVCSS from '../styles/CV.module.css'
import uniqid from 'uniqid'

export default function CV(props) {
  const { personalInfo, workExperience, educationExperience } = props

  return (
    <div className={CVCSS.cv}>
      <div className={CVCSS.personalInfo}>
        <div
          className={CVCSS.name}
        >{`${personalInfo.firstName} ${personalInfo.lastName}`}</div>
        <div>{`${personalInfo.email} | ${personalInfo.phoneNumber}`}</div>
      </div>
      <div className={CVCSS.workExperience}>
        <div className={CVCSS.sectionHeader}>Work Experience</div>
        {workExperience.map((job) => {
          return (
            <div key={uniqid()} className={CVCSS.experience}>
              <div className={CVCSS.experienceTitle}>{job.title}</div>
              <div>{`${job.from} - ${job.to}`}</div>
              <div className={CVCSS.companyName}>{job.company}</div>
              <div className={CVCSS.jobDescription}>
                {job.description.split('\n').map((line) => (
                  <div>{line}</div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
      <div>
        <div className={CVCSS.sectionHeader}>Education</div>
        {educationExperience.map((school) => {
          return (
            <div key={uniqid()} className={CVCSS.experience}>
              <div className={CVCSS.experienceTitle}>{school.school}</div>
              <div>{school.completionDate}</div>
              <div>{school.degree}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
