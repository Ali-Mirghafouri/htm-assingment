import React, {Fragment, useState} from "react"
import {IMAGES} from "../../constants"

interface Props {
  title: string
  text: string
}

export function Collapsible({title, text}: Props) {
  const [open, setOpen] = useState(false)
  return (
    <Fragment>
      <div
        onClick={() => setOpen(!open)}
        className="flex_row cursor_pointer"
        style={{width: "1303px", position: "relative", zIndex: 2}}>
        <div className={open ? "collapse_title_open" : "collapse_title_close"}>{title}</div>
        <div className="flex_grow" />
        <img
          src={IMAGES.FAQ.arrow}
          alt={IMAGES.FAQ.arrow}
          className={open ? "collapse_img_open" : "collapse_img_close"}
        />
      </div>
      <div className={open ? "collapse_text_open" : "collapse_text_close"}>{text}</div>
    </Fragment>
  )
}
