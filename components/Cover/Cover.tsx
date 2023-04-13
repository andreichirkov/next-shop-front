import React from "react"
import Image from "next/image"

const coverImage = require("../../images/cover.jpg")


//Поменять высоту на правильную
function Cover(props) {
  return (
    <div data-component='Cover' className="h-[calc(50vh)]">
      <Image
        src={coverImage}
        quality={100}
        unoptimized={true}
        className="h-full w-full object-cover"
        alt="Cover"
      />
    </div>
  )
}

export default Cover
