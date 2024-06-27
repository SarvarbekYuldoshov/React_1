import React from 'react'
import Logo from "../../images/logo.svg"
import "./Header.css"
const Header = () => {
  return (
    <div className='Header' >
      <div className='container Header__container'>
        <img src={Logo} alt="" />
        <ul className='Header__list'>
            <li className='Header__item'><a className='Header__link' href="#">Home</a></li>
            <li className='Header__item'><a className='Header__link' href="#">About</a></li>
            <li className='Header__item'><a className='Header__link' href="#">Contact</a></li>
            <li className='Header__item'><a className='Header__link' href="#">Blog</a></li>
            <li className='Header__item'><a className='Header__link' href="#">Careers</a></li>
        </ul>
        <button className='Header__btn'>Request Invite</button>
      </div>
    </div>
  )
}

export default Header
