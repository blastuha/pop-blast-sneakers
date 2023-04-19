import React from 'react'
import { Link } from 'react-router-dom'

const FormButtons = ({
  firstBtnText,
  secondBtnText,
  secondBtnLink,
  thirdBtnText,
  thirdBtnLink,
}) => {
  return (
    <div className='auth-buttons'>
      <button
        type='submit'
        className='auth-btn enter'
      >
        {firstBtnText}
      </button>
      <Link
        to={secondBtnLink}
        type='button'
        className='auth-link'
      >
        {secondBtnText}
      </Link>
      {thirdBtnText && thirdBtnLink && (
        <Link
          to={thirdBtnLink}
          type='button'
          className='auth-link'
        >
          {thirdBtnText}
        </Link>
      )}
    </div>
  )
}

export default FormButtons
