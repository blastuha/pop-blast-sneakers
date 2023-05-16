import React from 'react'

import Crumbs from './Crumbs'
import Crumb from './Crumb'

function Breadcrumb({ sneakerData }) {
  return (
    <div className={`breadcrumb ${sneakerData && 'low-margin'}`}>
      <Crumb />
      <Crumbs sneakerData={sneakerData} />
    </div>
  )
}

export default Breadcrumb
