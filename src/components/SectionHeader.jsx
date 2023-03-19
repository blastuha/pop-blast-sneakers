import React from 'react'

// function SectionHeader() {
//   const [brand, shoesType, sex] = useOutletContext()

//   console.log(brand)

//   const textShowing = () => {
//     if (brand) return brand
//     if (shoesType) return shoesType
//     if (sex) return sex
//   }

//   return brand || shoesType || sex ? (
//     <div className='section-header'>
//       <span className='section-title'>{textShowing()}</span>
//     </div>
//   ) : (
//     ''
//   )
// }

function SectionHeader() {
  return <h1>SectionHeader</h1>
}

export default SectionHeader
