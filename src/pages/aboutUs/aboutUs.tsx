import React, {Fragment} from "react"
import {Header} from "../../components"
import {ABOUTUS, IMAGES} from "../../constants"

export function AboutUs() {
  return (
    <div>
      <div className="flex_row" style={{backgroundColor: "#F2F2F2"}}>
        <div className="aboutUS_box_container">
          <div className="aboutUS_box1" />
          <div className="aboutUS_box2" />
          <div className="aboutUS_box_text">{ABOUTUS.aboutUs}</div>
        </div>
        <div className="aboutUS_description">{ABOUTUS.description}</div>
      </div>
      <Header image={IMAGES.aboutUs.header} text={ABOUTUS.header} textImage={IMAGES.aboutUs.logo} />
      <div className="flex_row" style={{backgroundColor: "#F2F2F2"}}>
        <img src={IMAGES.aboutUs.map} alt={IMAGES.aboutUs.map} className="aboutUS_map" />
        <div className="full_width">
          <div className="aboutUS_title">{ABOUTUS.location.title}</div>
          {ABOUTUS.location.text.map(({title, text}) => (
            <div style={{marginBottom: "140px"}}>
              <div className="aboutUS_sub_title">{title}</div>
              {text.map((text) => (
                <div className="aboutUS_text">{text}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
