/** @format */
import React from 'react'

import Breadcrumb from '../../components/Breadcrump/Breadcrumb'

import useWidth from '../../hooks/useWidth'

import './about.scss'

const About = () => {
  const width = useWidth()

  return (
    <div className='about'>
      {width > 767 && <Breadcrumb />}
      <h1>О проекте</h1>
    </div>
  )
}

export default About
