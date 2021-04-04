import React from "react"
import {CONTACTUS, IMAGES} from "../../constants"

export function ContactUs() {
  const image = [
    ["137px", "137px"],
    ["150px", "122px"],
    ["148px", "148px"],
  ]
  return (
    <div className="contactUs flex_row_center">
      <img src={IMAGES.contactUs.bg} alt={IMAGES.contactUs.bg} className="contactUs_bg" />
      <div className="contactUs_mask" />
      <div className="contactUs_container">
        <div className="contactUs_header">{CONTACTUS.header}</div>
        <div className="flex_row">
          <section>
            <div className="contactUs_contacts">
              <div className="contactUs_contacts_title">{CONTACTUS.contact.title}</div>
              {CONTACTUS.contact.text.map((text, index) => (
                <div className="flex_row">
                  <img
                    src={IMAGES.footer.contacts[index]}
                    alt={IMAGES.footer.contacts[index]}
                    className="contactUs_contacts_img"
                  />
                  <div className="contactUs_contacts_text">{text}</div>
                </div>
              ))}
            </div>
            <div className="contactUs_social">
              <div className="contactUs_contacts_title">{CONTACTUS.social}</div>
              {IMAGES.footer.social.map((img, index) => (
                <img
                  src={img}
                  alt={img}
                  className="contactUs_social_img"
                  style={{
                    width: image[index][0],
                    height: image[index][1],
                  }}
                />
              ))}
            </div>
          </section>
          <div className="contactUs_form">
            <form>
              <div className="flex_row">
                <div style={{marginRight: "68px"}}>
                  <label htmlFor="name" className="contactUs_form_label">
                    {CONTACTUS.name}
                  </label>
                  <br />
                  <input name="name" className="contactUs_form_input" />
                </div>
                <div>
                  <label htmlFor="email" className="contactUs_form_label">
                    {CONTACTUS.email}
                  </label>
                  <br />
                  <input name="email" className="contactUs_form_input" />
                </div>
              </div>
              <div style={{marginTop: "50px"}}>
                <label htmlFor="feedback" className="contactUs_form_label">
                  {CONTACTUS.feedback}
                </label>
                <br />
                <textarea name="feedback" className="contactUs_form_textArea" />
              </div>
              <div className="flex_row">
                <input type="submit" value="Send Your Feedback" className="contactUs_form_button" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
