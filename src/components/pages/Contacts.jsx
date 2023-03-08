import React from 'react'
import styles from '../../scss/pages/contacts.scss'

function Contacts() {
  return (
    <div className='contacts-page'>
      <div className='contacts-page__container'>
        <div className='contacts-page__contacts'>
          <h1>Контакты и адреса</h1>
          <p>
            {'Email: '} <a href='mailto:shop@crossking.ru'>shop@crossking.ru</a>
          </p>
          <p>
            {'Telegram: '}
            <a href='https://t.me/crosskingru'>https://t.me/crosskingru</a>
          </p>
          <p>
            {'Вконтакте: '}
            <a href='https://vk.com/crossking'>https://vk.com/crossking</a>
          </p>
        </div>
        <div className='contacts-page__timetable'>
          <h3>График работы отдела поддержки:</h3>
          <table>
            <tbody>
              <tr>
                <td>Понедельник</td>
                <td>с 9:00 до 21:00</td>
              </tr>
              <tr>
                <td>Вторник</td>
                <td>с 9:00 до 21:00</td>
              </tr>
              <tr>
                <td>Среда</td>
                <td>с 9:00 до 21:00</td>
              </tr>
              <tr>
                <td>Четверг</td>
                <td>с 9:00 до 21:00</td>
              </tr>
              <tr>
                <td>Пятница</td>
                <td>с 9:00 до 21:00</td>
              </tr>
              <tr>
                <td>Суббота</td>
                <td>с 10:00 до 20:00</td>
              </tr>
              <tr>
                <td>Воскресенье</td>
                <td>с 10:00 до 20:00</td>
              </tr>
            </tbody>
          </table>
          <h3>Заказы через сайт принимаются круглосуточно!</h3>
          <div className='line' />
        </div>
        <div className='contacts-page__table-wrapper'>
          <form
            action='/'
            className='contacts-page__table-form'
          >
            <p>
              <label htmlFor=''>Ваш вопрос, отзыв или пожелание:</label>
            </p>
            <textarea
              name='feedback_content'
              id='feedback_content'
              cols='50'
              rows='8'
            ></textarea>
            <br />
            <p>
              <label>Адрес для получения ответа:</label>
            </p>
            <input
              id='feedback_from'
              name='feedback[from]'
              size='30'
              type='text'
            ></input>
            <br />
            <small>Ответ магазина поступит на указанный e-mail.</small>
            <br />
            <p>
              <input
                type='submit'
                value='Отправить сообщение'
                className='sendform'
              />
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacts
