/** @format */
import React from 'react'

import Breadcrumb from '../../components/Breadcrump/Breadcrumb'

import useWidth from '../../hooks/useWidth'

import styles from './about.module.scss'

const About = () => {
  const width = useWidth()

  return (
    <div className={styles.about}>
      {width > 767 && <Breadcrumb />}
      <div style={{ marginBottom: '40px' }}>
        <h1>О проекте</h1>
        <p>
          <b>Pop Blast Sneaker</b> - это мой первый React проект. В начале я
          даже не рассматривал возможность включения этого проекта в свое
          портфолио. В то время он был скорее обучающим опытом, полным
          недоработок и не самых успешных решений.
        </p>
        <p>
          Однако в него было вложено огромное количество усилий. Именно
          благодаря этому проекту я получил базовые знания и научился, как не
          стоит делать.
        </p>
        <p>
          Несмотря на все его недостатки, я решил включить его в свое портфолио.
          Так как проект стал частью моего эволюционного пути.
        </p>
      </div>
      <div style={{ marginBottom: '120px' }}>
        <h1>Что реализовано:</h1>
        <ol>
          <li>
            <p>
              <b>Взаимодействие с API:</b> Запросы к данным, которые хранятся на
              сервисе mockapi.
            </p>
          </li>
          <li>
            <p>
              <b>Redux Tool Kit и Async Thunk:</b> Использование для работы с
              глобальными состояниями и асинхронными запросами.
            </p>
          </li>
          <li>
            <p>
              <b>Взаимодействие с Корзиной и Избранными:</b> Данные хранятся в
              localStorage с использованием библиотеки Redux Persist.
            </p>
          </li>
          <li>
            <p>
              <b>Уведомления:</b> При добавлении товара в корзину или избранное
              - выпадает уведомление. Реализовано без сторонних библиотек.
            </p>
          </li>
          <li>
            <p>
              <b>Поиск с debounce:</b> Реализован поиск с задержкой из
              библиотеки lodash.
            </p>
          </li>
          <li>
            <p>
              <b>Breadcrumb:</b> Реализован собственный Breadcrumb без сторонних
              библиотек.
            </p>
          </li>
          <li>
            <p>
              <b>Сортировка и фильтрация:</b> Сортировка и фильтрация по
              единичному параметру. (Сортировку по множественным параметрам
              организовать не оказалось возможным из-за ограничений сервиса
              mockapi)
            </p>
          </li>
          <li>
            <p>
              <b>Мобильное меню:</b> Реализовано мобильное меню с двумя
              отдельными поисками, с настройкой фильтров и сортировкой.
              Компоненты реализованы без сторонних библиотек.
            </p>
          </li>
          <li>
            <p>
              <b>Breadcrumb:</b> Реализован собственный Breadcrumb без сторонних
              библиотек.
            </p>
          </li>
          <li>
            <p>
              <b>Формы авторизации:</b> Формы авторизации, регистрации, забыл
              пароль без отправки данных. Реализована валидация полей без
              сторонних библиотек.
            </p>
          </li>

          <li>
            <p>
              <b>DropDown меню:</b> Реализованы множественные DropDown меню без
              сторонних библиотек.
            </p>
          </li>
          <li>
            <p>
              <b>Скелетон отображение: </b> На главной странице используется
              скелетон-компонент при загрузке данных.
            </p>
          </li>
          <li>
            <p>
              <b>Адаптивная верстка: </b> Сайт адаптирован для экранов до ширины
              320px.
            </p>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default About
