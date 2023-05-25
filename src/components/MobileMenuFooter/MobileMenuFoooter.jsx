import React from 'react'
import styles from './mobileMenuFooter.scss'
import { SlSocialInstagram } from 'react-icons/sl'
import { SlSocialGithub } from 'react-icons/sl'

const MobileMenuFoooter = () => {
  return (
    <div className='mobile__footer'>
      <div className='footer__contacts'>
        <h3>Контакты:</h3>
        <ul className='contacts__text'>
          <li>Номер: +7-995-625-15-88</li>
          <li>shevnin.boris2@gmail.com</li>
        </ul>
        <div className='contacts__icons'>
          <SlSocialInstagram />
          <SlSocialGithub />
        </div>
      </div>
    </div>
  )
}

export default MobileMenuFoooter
