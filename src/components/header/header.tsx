import React from "react"

interface headerProps {
  image: string
  text: string
}

export function Header({image, text}: headerProps) {
  return (
    <div className=" header flex_row_center">
      <div className="full_width_height header_img_cover" />
      <img src={image} alt={image} className="full_width_height header_img" />
      <div className="header_text">{text}</div>
    </div>
  )
}
