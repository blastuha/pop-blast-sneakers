import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={500}
    height={500}
    viewBox="0 0 500 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="20" rx="0" ry="0" width="280" height="320" /> 
    <rect x="10" y="352" rx="0" ry="0" width="280" height="20" /> 
    <rect x="10" y="382" rx="0" ry="0" width="280" height="20" />
  </ContentLoader>
)

export default MyLoader