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
    <div class='auth-buttons'>
      <button
        type='submit'
        class='auth-btn enter'
      >
        {firstBtnText}
      </button>
      <Link
        to={secondBtnLink}
        type='button'
        class='auth-link'
      >
        {secondBtnText}
      </Link>
      {thirdBtnText && thirdBtnLink && (
        <Link
          to={thirdBtnLink}
          type='button'
          class='auth-link'
        >
          {thirdBtnText}
        </Link>
      )}
    </div>
  )
}

export default FormButtons
