import React from "react"
import {Footer} from "../../components"
import {HOME, IMAGES} from "../../constants"
import {Banner} from "./banner"

export function Home() {
  return (
    <div className="home">
      <Banner data={HOME.banner} image={IMAGES.home.banner_shoes} />
      <div className="flex_row home_products">
        <div className="home_fav">
          <div className="home_fav_title">{HOME.products.fav.title}</div>
          <div className="home_fav_button cursor_pointer">{HOME.products.topProducts.button}</div>
          <img src={IMAGES.home.fav_show} alt={IMAGES.home.fav_show} className="home_fav_img" />
        </div>
        <div className="home_top_product">
          <div className="home_top_product_title">{HOME.products.topProducts.title}</div>
          <div className="flex_row_wrap ">
            {HOME.products.topProducts.products.map((text, index) => (
              <div className="home_top_product_card_container">
                <div className="home_top_product_card flex_row_center">
                  <img
                    src={IMAGES.home.products[index]}
                    alt={IMAGES.home.products[index]}
                    className="home_top_product_card_img"
                  />
                </div>
                <div className="home_top_product_card_text">{text}</div>
              </div>
            ))}
          </div>
          <div className="flex_row_horizontal_center">
            <div className="home_top_product_card_button cursor_pointer ">
              {HOME.products.topProducts.button}
            </div>
          </div>
        </div>
      </div>
      <div className="flex_row_vertical_center home_about_us">
        <img src={IMAGES.home.aboutUS} alt={IMAGES.home.aboutUS} className="home_about_us_img" />
        <div className="home_about_us_background_text">{HOME.aboutUs.title}</div>
        <div className="home_about_us_content_container">
          <div className="home_about_us_title">{HOME.aboutUs.title}</div>
          <div className="home_about_us_sub_title">{HOME.aboutUs.subTitle}</div>
          <div className="home_about_us_button cursor_pointer ">{HOME.aboutUs.button}</div>
        </div>
      </div>
      <div className="home_empty" />
    </div>
  )
}
