import React, {Fragment} from "react"
import {Collapsible, Header} from "../../components"
import {FAQTEXT, IMAGES} from "../../constants"

export function FAQ() {
  return (
    <Fragment>
      <Header text={FAQTEXT.header.title} image={IMAGES.FAQ.header} />
      <div className="FAQ">
        {FAQTEXT.text.map(({title, text}) => (
          <div style={{marginBottom: "70px"}}>
            <Collapsible title={title} text={text} />
          </div>
        ))}
      </div>
    </Fragment>
  )
}
