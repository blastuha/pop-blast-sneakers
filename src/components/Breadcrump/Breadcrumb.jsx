import React from 'react'

import Crumbs from './Crumbs'
import Crumb from './Crumb'

function Breadcrumb({ sneakerDTO }) {
  return (
    <div className={`breadcrumb ${sneakerDTO && 'low-margin'}`}>
      <Crumb />
      <Crumbs sneakerDTO={sneakerDTO} />
    </div>
  )
}

export default Breadcrumb
