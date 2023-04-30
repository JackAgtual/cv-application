import React, { Component } from "react"
import './App.css';
import InputForm from './components/InputForm';
import _ from 'lodash'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      personalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
      }
    }

    this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this)
  }

  handlePersonalInfoChange(e, prop) {
    const newState = _.cloneDeep(this.state)
    newState.personalInfo[prop] = e.target.value
    this.setState(newState)
  }

  render() {
    const { personalInfo } = this.state
    return (
      <div className="App" >
        <InputForm personalInfo={personalInfo} handleChange={this.handlePersonalInfoChange} />
        <div>{personalInfo.firstName}</div>
        <div>{personalInfo.lastName}</div>
        <div>{personalInfo.email}</div>
        <div>{personalInfo.phoneNumber}</div>
      </div>
    )
  }
}