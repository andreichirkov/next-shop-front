import Image from "next/image";
import React from "react";

const sliderImage1 = require("../../images/slide-1.jpg")

export default function CoverCategory(): JSX.Element {
  return (
    <section data-component='CoverCategory' className="h-[calc(50vh)]">

      <h2>CoverCategory -- Тут слайдер плоский из категорий с картинками</h2>
      <h2>Попадают пропасами</h2>

      <Image
        src={sliderImage1}
        quality={100}
        unoptimized={true}
        className="h-full w-full object-cover"
        alt="Cover"
      />
    </section>
  )
}