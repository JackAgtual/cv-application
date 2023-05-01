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
      workExperience: []
    }

    this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this)
    this.handleWorkExperienceChange = this.handleWorkExperienceChange.bind(this)
    this.addWorkExperience = this.addWorkExperience.bind(this)
    this.deleteWorkExperience = this.deleteWorkExperience.bind(this)
  }

  handlePersonalInfoChange(e, prop) {
    const newState = _.cloneDeep(this.state)
    newState.personalInfo[prop] = e.target.value
    this.setState(newState)
  }

  handleWorkExperienceChange(e, prop) {
    const newState = _.cloneDeep(this.state)

    // find correct exprience to edit (get correct id)
    const id = e.target.parentElement.dataset.id
    for (let i = 0; i < newState.workExperience.length; i++) {

      if (newState.workExperience[i].id !== id) continue // only edit current id

      // update state
      newState.workExperience[i][prop] = e.target.value
      break
    }
    this.setState(newState)
  }

  addWorkExperience() {
    const newState = _.cloneDeep(this.state)
    newState.workExperience.push({
      id: uniqid(),
      title: '',
      company: '',
      from: '',
      to: '',
      description: ''
    })
    this.setState(newState)
  }

  deleteWorkExperience(id) {
    const newState = _.cloneDeep(this.state)
    newState.workExperience = newState.workExperience.filter(experience => experience.id !== id)
    this.setState(newState)
  }

  render() {
    const { personalInfo, workExperience } = this.state
    return (
      <div className="App" >
        <InputForm
          personalInfo={personalInfo}
          handlePersonalInfoChange={this.handlePersonalInfoChange}
          workExperience={workExperience}
          handleWorkExperienceChange={this.handleWorkExperienceChange}
          addWorkExperience={this.addWorkExperience}
          deleteWorkExperience={this.deleteWorkExperience}
        />
      </div>
    )
  }
}