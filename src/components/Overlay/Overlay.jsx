import React from 'react'
import useOutsideOverlayClick from '../../hooks/useOutsideOverlayClick'
import styles from './overlay.module.scss'

const Overlay = ({ setMobileSortingOpen }) => {
  const ref = useOutsideOverlayClick(() => setMobileSortingOpen(false))

  return (
    <div
      ref={ref}
      className={styles.overlay}
    ></div>
  )
}

export default Overlay
