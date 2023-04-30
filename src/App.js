import React, { Component } from "react"
import './App.css';
import InputForm from './components/InputForm';

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App" >
        <InputForm />
      </div>
    )
  }
}