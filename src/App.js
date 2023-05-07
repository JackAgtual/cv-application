import React, { useState } from 'react'
import './App.css'
import _ from 'lodash'
import uniqid from 'uniqid'
import InputForm from './components/InputForm'
import CV from './components/CV'

export default function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  })

  const [workExperience, setWorkExperience] = useState([])
  const [educationExperience, setEducationExperience] = useState([])

  const workExperienceType = 'workExperience'
  const educationExperienceType = 'educationExperience'

  function handlePersonalInfoChange(e, prop) {
    setPersonalInfo((prevPersonalInfo) => {
      return { ...prevPersonalInfo, [prop]: e.target.value }
    })
  }

  function handleExperienceChange(e, experienceType, prop) {
    if (experienceType === 'workExperience') {
      setWorkExperience((prevWorkExperience) => {
        const updatedWorkExperience = [...prevWorkExperience]
        // find correct exprience to edit (get correct id)
        const id = e.target.parentElement.dataset.id
        for (let i = 0; i < updatedWorkExperience.length; i++) {
          if (updatedWorkExperience[i].id !== id) continue // only edit current id

          // update state
          updatedWorkExperience[i][prop] = e.target.value
          return updatedWorkExperience
        }
      })
    } else if (experienceType === 'educationExperience') {
      setEducationExperience((prevEducationExperience) => {
        const updatedEducationExperience = [...prevEducationExperience]
        // find correct exprience to edit (get correct id)
        const id = e.target.parentElement.dataset.id
        for (let i = 0; i < updatedEducationExperience.length; i++) {
          if (updatedEducationExperience[i].id !== id) continue // only edit current id

          // update state
          updatedEducationExperience[i][prop] = e.target.value
          return updatedEducationExperience
        }
      })
    }
  }

  function addExperienceOfType(experienceType) {
    if (experienceType === workExperienceType) {
      setWorkExperience((prevWorkExperience) =>
        prevWorkExperience.concat({
          id: uniqid(),
          title: '',
          company: '',
          from: '',
          to: '',
          description: '',
        })
      )
    } else if (experienceType === educationExperienceType) {
      setEducationExperience((prevEducationExperience) =>
        prevEducationExperience.concat({
          id: uniqid(),
          school: '',
          degree: '',
          completionDate: '',
        })
      )
    } else console.error(`Invalid experience type: ${experienceType}`)
  }

  function deleteExperienceOfType(experienceType, id) {
    if (experienceType === 'workExperience') {
      setWorkExperience((prevWorkExperience) => {
        return prevWorkExperience.filter((experience) => experience.id !== id)
      })
    } else if (experienceType === 'educationExperience') {
      setEducationExperience((prevEducationExperience) => {
        return prevEducationExperience.filter((experience) => experience.id !== id)
      })
    }
  }

  return (
    <div className="App">
      <InputForm
        personalInfo={personalInfo}
        handlePersonalInfoChange={handlePersonalInfoChange}
        workExperience={workExperience}
        educationExperience={educationExperience}
        handleExperienceChange={handleExperienceChange}
        addExperienceOfType={addExperienceOfType}
        deleteExperienceOfType={deleteExperienceOfType}
        workExperienceType={workExperienceType}
        educationExperienceType={educationExperienceType}
      />
      <CV
        personalInfo={personalInfo}
        workExperience={workExperience}
        educationExperience={educationExperience}
      />
    </div>
  )
}
