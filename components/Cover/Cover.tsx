import React from "react"
import Image from "next/image"

const coverImage = require("../../images/cover.jpg")

function Cover(props) {
  return (
    <div className="h-[calc(100vh)]">
      <Image
        src={coverImage}
        quality={100}
        unoptimized={true}
        className="h-[calc(100vh)] object-cover"
        alt="Cover"
      />
    </div>
  )
}

export default Cover
