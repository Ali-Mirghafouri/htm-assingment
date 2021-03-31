import React, {Fragment} from "react"
import {IMAGES, NAVBAR} from "../../constants"
import {Link} from "react-router-dom"

export function NavBar() {
  return (
    <Fragment>
      <div className="flex_row_vertical_center nav_bar full_width">
        <img src={IMAGES.navBar} alt={IMAGES.navBar} className="nav_bar_logo" />
        <div className="flex_grow" />
        {NAVBAR.tabs.map((text) => (
          <Link to={`/${text}`} className="nav_bar_tabs ">
            {text}
          </Link>
        ))}
      </div>
      <div className="nav_bar_space" />
    </Fragment>
  )
}
