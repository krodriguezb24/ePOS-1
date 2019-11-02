import React from "react";
import '../../assets/styles/components/Home/ProductItem.scss';
import product_default from '../../assets/static/product_default.png';

const ProductItem = () => {
  return (
    <div className="cart__product_item">
      <div className="cart__product_item-title">
        <h3>Nombre del Producto</h3>
      </div>
      <div className="cart__product_up">
        <div className="cart__product__img">
          <img
            className="cart__product-img"
            src={product_default}
            alt="product_image"
          />
        </div>
        <div className="cart__product__btn">
          <button className="button_add button_add_green">
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
          <button className="button_zoom button_zoom_blue">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="cart__product_down">
        <b>Precio unitario:</b>
        <br />
        <b>Cantidad en Inventario:</b>
        <br />
        <b>Categoría:</b>
        <br />
      </div>
    </div>
  );
};

export default ProductItem;
