import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = () => (
  <ContentLoader
    speed={3}
    width='100%'
    height='100%'
    viewBox='0 0 210 320'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect
      x='0'
      y='0'
      rx='0'
      ry='0'
      width='210'
      height='320'
    />
  </ContentLoader>
)

export default Skeleton
