import React from 'react'
import "./Hero.css"
import Logo_1 from "../../images/logo_1.svg"
import Logo_2 from "../../images/logo_2.svg"
const Hero = () => {
  return (
    <div className='Hero'>
      <div className='container Hero__container'>
        <ul className='Hero__list'>
            <h1 className='Hero__title'>Next generation digital banking</h1>
            <p className='Hero__text'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <button className='Hero__btn'>Request Invite</button>
        </ul>
        <ul className='Hero__list'>
            <img className='Hero__img-a' src={Logo_1} alt="rasm1" />
            <img className='Hero__img-b' src={Logo_2} alt="rasm2" />
        </ul>
      </div>
    </div>
  )
}

export default Hero
