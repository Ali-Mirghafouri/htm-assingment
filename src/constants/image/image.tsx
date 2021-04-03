import logo from "./logo.png"
import home_banner_shoes from "./home_banner_shoes.png"
import fav_shoe from "./fav_shoe.png"
import product_1 from "./product_1.png"
import product_2 from "./product_2.png"
import product_3 from "./product_3.png"
import product_4 from "./product_4.png"
import about_us_img from "./about_us_img.png"
import mail_icon from "./mail_icon.png"
import location_icon from "./location_icon.png"
import phone_icon from "./phone_icon.png"
import facebook_icon from "./facebook_icon.png"
import twitter_icon from "./twitter_icon.png"
import insta_icon from "./insta_icon.png"

export const IMAGES = {
  navBar: logo,
  home: {
    banner_shoes: home_banner_shoes,
    fav_show: fav_shoe,
    products: [product_1, product_2, product_3, product_4],
    aboutUS: about_us_img,
  },
  footer: {
    contacts: [phone_icon, mail_icon, location_icon],
    social: [facebook_icon, twitter_icon, insta_icon],
  },
}
