import React from 'react'

const Header = () => {
  return (
    <>
      <div className="about-header">
        {/* <h1>Who We Are</h1>
        <div className="images">
          <img src="https://res.cloudinary.com/revitalize/image/upload/v1570037035/about%20page/Hero_Images1_k5qnxo.svg" alt="" />
          <img src="https://res.cloudinary.com/revitalize/image/upload/v1570036574/about%20page/Hero_Images_2_cuklhr.svg" alt="" />
        </div> */}
        <img
          src="https://res.cloudinary.com/revitalize/image/upload/v1570037035/about%20page/Hero_Images1_k5qnxo.svg"
          alt="" />
        <h1>Who We Are</h1>
        <img
          src="https://res.cloudinary.com/revitalize/image/upload/v1570036574/about%20page/Hero_Images_2_cuklhr.svg"
          alt=""
          className="img2" />
      </div>
    </>
  )
}

export default Header
