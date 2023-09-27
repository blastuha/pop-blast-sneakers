/** @format */

import React from 'react'
import { Link } from 'react-router-dom'
import { SlSocialInstagram } from 'react-icons/sl'
import { SlSocialGithub } from 'react-icons/sl'
import styles from './footer.module.scss'

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <h1 className={styles.footer__logo}>POP BLAST SNEAKERS</h1>
        <div className={styles.footer__column}>
          <ul>
            <a href='/'>Доставка и оплата</a>
            <a href='/'>Возврат и обмен</a>
            <a href='/'>О магазине</a>
          </ul>
          <br></br>
          <div className={styles.footer__contacts}>
            <h4>Контакты:</h4>
            <span>Номер: +7-995-625-15-88</span>
            <span>shevnin.boris2@gmail.com</span>
            <div className={styles.footer__contacts__icons}>
              <Link
                to='https://github.com/blastuha'
                target='_blank'
              >
                <SlSocialInstagram className={styles.footer__contacts__icon} />
              </Link>
              <Link
                to='https://github.com/blastuha'
                target='_blank'
              >
                <SlSocialGithub className={styles.footer__contacts__icon} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
