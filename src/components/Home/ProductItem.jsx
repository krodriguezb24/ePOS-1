import React from "react";
import { connect } from 'react-redux';
import { addToCart } from '../../actions';
import '../../assets/styles/components/Home/ProductItem.scss';

const ProductItem = (props) => {
  const { title, image, price, units, category } = props;
  const handleAddToCart = () => {
    props.addToCart({
      props
    })
  }

  return (
    <div className="column">
    <div className="cart__product_item">
      <div className="cart__product_item-title">
        <h3>{title}</h3>
      </div>
      <div className="cart__product_up">
        <div className="cart__product__img">
          <img
            className="cart__product-img"
            src={image}
            alt={title}
          />
        </div>
        <div className="cart__product__btn">
          <button className="button_add button_add_green" onClick={handleAddToCart}>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
          <button className="button_zoom button_zoom_blue">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="cart__product_down">
        <b>{`Precio unitario: $${price}`}</b>
        <br />
        <b>{`Cantidad en Inventario: ${units}`}</b>
        <br />
        <b>{`Categoría: ${category}`}</b>
        <br />
      </div>
    </div>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart,
}

export default connect(null, mapDispatchToProps)(ProductItem);
