import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <h1 className='footer__logo'>POP BLAST SNEAKERS</h1>
        <div className='footer__column'>
          <div className='footer__column'>
            <ul className='footer__column-links'>
              <a
                href='/'
                className='footer__column-links__link'
              >
                Доставка и оплата
              </a>
              <a
                href='/'
                className='footer__column-links__link'
              >
                Возврат и обмен
              </a>
              <a
                href='/'
                className='footer__column-links__link'
              >
                О магазине
              </a>
            </ul>
          </div>
          <div className='footer__column-right'>
            <div className='footer__column-contacts'>
              <h4 className='footer__column-contacts__cont'>Контакты:</h4>
              <span className='footer__column-contacts__item'>
                Номер: +7-921-777-77-77
              </span>
              <span className='footer__column-contacts__item'>
                shevnin.boris2@yandex.ru
              </span>
              <span className='footer__column-contacts__item'>Github</span>
              <span className='footer__column-contacts__item'>insta vk</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
