import React, { Component } from "react"
import './App.css';
import InputForm from './components/InputForm';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      personalInfo: {
        firstName: 'jack',
        lastName: '',
        email: '',
        phoneNumber: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      personalInfo: {
        firstName: e.target.value
      }
    })
  }

  render() {
    const { personalInfo } = this.state
    return (
      <div className="App" >
        <InputForm personalInfo={personalInfo} handleChange={this.handleChange} />
        <div>{personalInfo.firstName}</div>
        <div>{personalInfo.lastName}</div>
        <div>{personalInfo.email}</div>
        <div>{personalInfo.phoneNumber}</div>
      </div>
    )
  }
}