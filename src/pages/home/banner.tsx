import React from "react"

interface bannerProps {
  data: {
    header: string[]
    subHeader: string
    button: string
    new: string
  }
  image: string
}

export function Banner({data, image}: bannerProps) {
  return (
    <div className="flex_row home_banner">
      <div>
        <div className="flex_row">
          {data.header.map((text, index) => (
            <span className={index === 0 ? "home_banner_header_bold" : "home_banner_header_light"}>
              {text}
            </span>
          ))}
        </div>
        <div className="home_banner_subHeader">{data.subHeader}</div>
        <div className="home_banner_button cursor_pointer">{data.button}</div>
      </div>
      <img src={image} alt={image} className="home_banner_image" />
      <div className="home_banner_new">{data.new}</div>
    </div>
  )
}
