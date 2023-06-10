import React from 'react'
import styles from './formButtons.module.scss'
import { Link } from 'react-router-dom'

const FormButtons = ({
  firstBtnText,
  secondBtnText,
  secondBtnLink,
  thirdBtnText,
  thirdBtnLink,
}) => {
  return (
    <div className={styles.auth__buttons}>
      <button
        type='submit'
        className={styles.btn}      >
        {firstBtnText}
      </button>
      <Link
        to={secondBtnLink}
        type='button'
        className={styles.link}
      >
        {secondBtnText}
      </Link>
      {thirdBtnText && thirdBtnLink && (
        <Link
          to={thirdBtnLink}
          type='button'
          className={styles.link}
        >
          {thirdBtnText}
        </Link>
      )}
    </div>
  )
}

export default FormButtons
