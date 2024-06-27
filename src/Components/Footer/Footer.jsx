import React from 'react'
import "./Footer.css"
import Rasm_1 from "../../images/rasm_1.svg"
import Rasm_2 from "../../images/rasm_2.svg"
import Rasm_3 from "../../images/rasm_3.svg"
import Rasm_4 from "../../images/rasm_4.svg"
import Rasm_5 from "../../images/rasm_5.svg"
import Rasm_6 from "../../images/rasm_6.svg"
const Footer = () => {
  return (
    <div className='Footer'>
      <div className='container Footer__container'>
        <ul className='Footer__list'>
            <img className='Footer__img' src={Rasm_1} alt="" />
            <br/>
            <img className='Footer__img' src={Rasm_2} alt="" />
            <img className='Footer__img' src={Rasm_3} alt="" />
            <img className='Footer__img' src={Rasm_4} alt="" />
            <img className='Footer__img' src={Rasm_5} alt="" />
            <img className='Footer__img' src={Rasm_6} alt="" />
        </ul>
        <ul className='Footer__list'>
            <li><a className='Footer__link' href="#">About Us</a></li>
            <br />
            <li><a className='Footer__link' href="#">Contact</a></li>
            <br />
            <li><a className='Footer__link' href="#">Blog</a></li>
        </ul>
        <ul className='Footer__list'>
            <li> <a className='Footer__link' href="#">Careers</a></li>
            <br />
            <li><a className='Footer__link' href="#">Support</a></li>
            <br />
           <li> <a className='Footer__link' href="#">Privacy Policy</a></li>
        </ul>
        <ul className='Footer__list'>
            <button className='Footer__btn'>Request Invite</button>
            <br/>
            <a className='Footer__link' href="#">© Easybank. All Rights Reserved</a>
        </ul>
      </div>
    </div>
  )
}

export default Footer
