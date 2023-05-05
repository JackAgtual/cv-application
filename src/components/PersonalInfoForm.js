import React from 'react'
import FormCSS from '../styles/Form.module.css'

export default function PersonalInfoForm(props) {
  const { personalInfo, handleChange } = props

  return (
    <form className={FormCSS.inputForm}>
      <input
        type="text"
        id="firstName"
        placeholder="First name"
        value={personalInfo.firstName}
        onChange={(e) => handleChange(e, 'firstName')}
      />
      <input
        type="text"
        id="lastName"
        placeholder="Last name"
        value={personalInfo.lastName}
        onChange={(e) => handleChange(e, 'lastName')}
      />
      <input
        type="email"
        id="email"
        placeholder="Email"
        value={personalInfo.email}
        onChange={(e) => handleChange(e, 'email')}
      />
      <input
        type="tel"
        id="phoneNumber"
        placeholder="Phone number"
        value={personalInfo.phoneNumber}
        onChange={(e) => handleChange(e, 'phoneNumber')}
      />
    </form>
  )
}
