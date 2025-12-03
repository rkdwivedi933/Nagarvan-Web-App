import React from 'react'
import ContactSection from '../comopents/contact/ContactSection'
import ContactBackground from '../comopents/layout/ContactBackground'
import DropUsLineForm from '../comopents/contact/DropUsLineForm'

function Contact() {
  return (
    <div>
      <ContactBackground>

      <ContactSection/>
      <DropUsLineForm/>
      </ContactBackground>
    </div>
  )
}

export default Contact
