import React, {Fragment} from "react"
import {Header} from "../../components"
import {IMAGES, PRODUCTS} from "../../constants"

export function Products() {
  return (
    <Fragment>
      <Header text={PRODUCTS.header} image={IMAGES.products.header} />
      <div className="flex_row">
        <div className="products_filter">
          <div className="products_filter_text">{PRODUCTS.filter}</div>
          {PRODUCTS.filters.map(({title, filters}) => (
            <Fragment>
              {title === "" ? null : <div className="products_filter_sub_title">{title}</div>}
              {filters.map((text) => (
                <div className="flex_row_vertical_center">
                  <input type="checkbox" className="products_filter_checkbox" />
                  <div className="products_filter_filters">{text}</div>
                </div>
              ))}
            </Fragment>
          ))}
          <div className="flex_row_horizontal_center">
            <div className="products_filter_button cursor_pointer">{PRODUCTS.filterButton}</div>
          </div>
        </div>
        <div className="flex_row_wrap">
          {PRODUCTS.products.map((text, index) => (
            <div className="products_product flex_column_center">
              <img
                src={IMAGES.products.products[index]}
                alt={IMAGES.products.products[index]}
                className="products_product_img"
              />
              <div className="products_product_text">{text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex_row_horizontal_center">
        {PRODUCTS.counter.map((text, index) =>
          index === 0 ? (
            <div className="products_counter_selected flex_row_center">{text}</div>
          ) : (
            <div className="products_counter flex_row_center">{text}</div>
          )
        )}
      </div>
    </Fragment>
  )
}
