import React from "react"
import Image from "next/image"

const sliderImage1 = require("../../images/slide-1.jpg")

//Поменять высоту на правильную
function CoverSlider(props) {
  return (
    <div data-component='CoverSlider' className="h-[calc(50vh)]">
      <Image
        src={sliderImage1}
        quality={100}
        unoptimized={true}
        className="h-full w-full object-cover"
        alt="Cover"
      />
    </div>
  )
}

export default CoverSlider
