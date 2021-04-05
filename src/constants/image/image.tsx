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
import products_header from "./products_header.png"
import shoe_1 from "./shoe_1.png"
import shoe_2 from "./shoe_2.png"
import shoe_3 from "./shoe_3.png"
import shoe_4 from "./shoe_4.png"
import shoe_5 from "./shoe_5.png"
import shoe_6 from "./shoe_6.png"
import aboutUs_header from "./aboutUs_header.png"
import shoe_logo from "./shoe_logo.png"
import map from "./map.png"
import contactUs_bg from "./contactUs_bg.png"
import FAQ_header from "./FAQ_header.png"
import down_arrow from "./down_arrow.png"

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
  products: {
    header: products_header,
    products: [shoe_1, shoe_2, shoe_3, shoe_4, shoe_5, shoe_6],
  },
  aboutUs: {
    header: aboutUs_header,
    logo: shoe_logo,
    map: map,
  },
  contactUs: {
    bg: contactUs_bg,
  },
  FAQ: {
    header: FAQ_header,
    arrow: down_arrow,
  },
}
