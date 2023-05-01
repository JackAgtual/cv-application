import React, { Component } from "react"
import './App.css';
import InputForm from './components/InputForm';
import _ from 'lodash'
import uniqid from 'uniqid'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      personalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
      },
      workExperience: [],
      educationExperience: []
    }

    this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this)
    this.handleExperienceChange = this.handleExperienceChange.bind(this)
    this.addExperienceOfType = this.addExperienceOfType.bind(this)
    this.deleteExperienceOfType = this.deleteExperienceOfType.bind(this)
  }

  handlePersonalInfoChange(e, prop) {
    const newState = _.cloneDeep(this.state)
    newState.personalInfo[prop] = e.target.value
    this.setState(newState)
  }

  handleExperienceChange(e, experienceType, prop) {
    const newState = _.cloneDeep(this.state)

    // find correct exprience to edit (get correct id)
    const id = e.target.parentElement.dataset.id
    for (let i = 0; i < newState[experienceType].length; i++) {

      if (newState[experienceType][i].id !== id) continue // only edit current id

      // update state
      newState[experienceType][i][prop] = e.target.value
      break
    }
    this.setState(newState)
  }

  addExperienceOfType(experienceType) {
    const newState = _.cloneDeep(this.state)

    if (experienceType === 'workExperience') {
      newState[experienceType].push({
        id: uniqid(),
        title: '',
        company: '',
        from: '',
        to: '',
        description: ''
      })
    } else if (experienceType === 'educationExperience') {
      newState[experienceType].push({
        id: uniqid(),
        school: '',
        degree: '',
        completionDate: ''
      })
    } else console.error(`Invalid experience type: ${experienceType}`)

    this.setState(newState)
  }

  deleteExperienceOfType(experienceType, id) {
    const newState = _.cloneDeep(this.state)
    newState[experienceType] = newState[experienceType].filter(experience => experience.id !== id)
    this.setState(newState)
  }

  render() {
    const { personalInfo, workExperience, educationExperience } = this.state
    return (
      <div className="App" >
        <InputForm
          personalInfo={personalInfo}
          handlePersonalInfoChange={this.handlePersonalInfoChange}
          workExperience={workExperience}
          educationExperience={educationExperience}
          handleExperienceChange={this.handleExperienceChange}
          addExperienceOfType={this.addExperienceOfType}
          deleteExperienceOfType={this.deleteExperienceOfType}
          workExperienceType={'workExperience'}
          educationExperienceType={'educationExperience'}
        />
      </div>
    )
  }
}