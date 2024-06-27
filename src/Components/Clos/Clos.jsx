import React from 'react'
import "./Clos.css"
import Logo_7 from "../../images/logo_7.svg"
import Logo_8 from "../../images/logo_8.svg"
import Logo_9 from "../../images/logo_9.svg"
import Logo_10 from "../../images/logo_10.svg"
const Clos = () => {
  return (
    <div className='Clos'>
      <div className='container Clos__container'>
        <ul className='Clos__list'>
           <li className='Clos__item'>
              <img src={Logo_7} alt="" />
              <p className='Clos__text-a'>By Claire Robinson</p>
              <h1 className='Clos__title'>Receive money in any currency with no fees</h1>
              <p className='Clos__text-b'>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
            </li>
            <li className='Clos__item'>
              <img src={Logo_8} alt="" />
              <p className='Clos__text-a'>By Wilson Hutton</p>
              <h1 className='Clos__title'>Treat yourself without worrying about money</h1>
              <p className='Clos__text-b'>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
            </li>
            <li className='Clos__item'>
              <img src={Logo_9} alt="" />
              <p className='Clos__text-a'>By Wilson Hutton</p>
              <h1 className='Clos__title'>Take your Easybank card wherever you go</h1>
              <p className='Clos__text-b'>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
            </li>
            <li className='Clos__item'>
              <img src={Logo_10} alt="" />
              <p className='Clos__text-a'>By Claire Robinson</p>
              <h1 className='Clos__title'>Our invite-only Beta accounts are now live!</h1>
              <p className='Clos__text-b'>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Clos
