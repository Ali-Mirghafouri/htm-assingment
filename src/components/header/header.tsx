import React from "react"

interface headerProps {
  image: string
  text: string
  textImage?: string
}

export function Header({image, text, textImage}: headerProps) {
  return (
    <div className=" header flex_row_center">
      <div className="full_width_height header_img_cover" />
      <img src={image} alt={image} className="full_width_height header_img" />
      <div className="flex_row_vertical_center header_content_container">
        <img src={textImage} alt={textImage} />
        <div className="header_text">{text}</div>
      </div>
    </div>
  )
}
