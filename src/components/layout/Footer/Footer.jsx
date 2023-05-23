import React from 'react'
import styles from './footer.module.scss'
import { SlSocialInstagram } from 'react-icons/sl'
import { SlSocialGithub } from 'react-icons/sl'

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
            <span>Номер: +7-921-777-77-77</span>
            <span>shevnin.boris2@yandex.ru</span>
            <SlSocialInstagram className={styles.footer__contacts__icon} />
            <SlSocialGithub className={styles.footer__contacts__icon} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
