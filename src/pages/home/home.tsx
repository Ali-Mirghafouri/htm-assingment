import React from "react"
import {HOME, IMAGES} from "../../constants"
import {Banner} from "./banner"

export function Home() {
  return (
    <div className="home">
      <Banner data={HOME.banner} image={IMAGES.home.banner_shoes} />
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
