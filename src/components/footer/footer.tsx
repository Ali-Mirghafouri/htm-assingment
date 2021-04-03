import React, {Fragment} from "react"
import {FOOTER, IMAGES} from "../../constants"

export function Footer() {
  return (
    <div className="footer flex_row">
      <div className="flex_column footer_contacts_container">
        {FOOTER.contact.map((text, index) => (
          <div className="flex_row footer_contact_container">
            <img
              src={IMAGES.footer.contacts[index]}
              alt={IMAGES.footer.contacts[index]}
              className="footer_contacts_image"
            />
            <div className="footer_contacts_text">{text}</div>
          </div>
        ))}
      </div>
      <div className="footer_rights_text">{FOOTER.copyRights}</div>
      <div className="footer_social">
        <div className="flex_row">
          {FOOTER.social.map((text, index) =>
            index < 2 ? (
              <div className="footer_social_content_container flex_row_vertical_center">
                <img
                  src={IMAGES.footer.social[index]}
                  alt={IMAGES.footer.social[index]}
                  className="footer_social_img"
                />
                <div className="footer_social_text">{text}</div>
              </div>
            ) : null
          )}
        </div>
        <div
          className="flex_row_center"
          style={{
            marginTop: "70px",
          }}>
          <img
            src={IMAGES.footer.social[2]}
            alt={IMAGES.footer.social[2]}
            className="footer_social_img"
          />
          <div className="footer_social_text">{FOOTER.social[2]}</div>
        </div>
      </div>
    </div>
  )
}
