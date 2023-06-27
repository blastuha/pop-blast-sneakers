import React from 'react'
import useOutsideOverlayClick from '../../hooks/useOutsideOverlayClick'
import useActions from '../../hooks/useActions'
import styles from './overlay.module.scss'

const Overlay = () => {
  const {setMobileSortingOpen} = useActions()
  const ref = useOutsideOverlayClick(() => setMobileSortingOpen(false))

  return (
    <div
      ref={ref}
      className={styles.overlay}
    ></div>
  )
}

export default Overlay
