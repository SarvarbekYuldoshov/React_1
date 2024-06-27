import React from 'react'
import "./Section.css"
import Logo_3 from "../../images/logo_3.svg"
import Logo_4 from "../../images/logo_4.svg"
import Logo_5 from "../../images/logo_5.svg"
import Logo_6 from "../../images/logo_6.svg"
const Section = () => {
  return (
    <div className='Section'>
      <div className='container Section__container'>
        <ul className='Section__list'>
            <li className='Section__item'>
                <img src={Logo_3} alt="" />
                <h1 className='Section__title'>Online Banking</h1>
                <p className='Section__text'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
            </li>
            <li className='Section__item'>
                <img src={Logo_4} alt="" />
                <h1 className='Section__title'>Simple Budgeting</h1>
                <p className='Section__text'>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
            </li>
            <li className='Section__item'>
                <img src={Logo_5} alt="" />
                <h1 className='Section__title'>Fast Onboarding</h1>
                <p className='Section__text'>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
            </li>
            <li className='Section__item'>
                <img src={Logo_6} alt="" />
                <h1 className='Section__title'>Open API</h1>
                <p className='Section__text'>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Section
