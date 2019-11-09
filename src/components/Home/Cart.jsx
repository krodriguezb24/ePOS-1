import React from 'react';
import { connect } from 'react-redux';
import { deleteFromCart } from '../../actions';
import productImage from '../../assets/static/product_default.png';
import '../../assets/styles/components/Home/Cart.scss';

const Cart = (props) => {
    const { cart } = props;

    const handleDeleteFromCart = productItem => {
        props.deleteFromCart(productItem);
    };

    const handleSubtotalPrice = () => {
        const reducer = (accumulator, currentValue) =>
          accumulator + currentValue.props.price;
        const addition = cart.reduce(reducer, 0);
        return addition.toFixed(2);
      };

      const handleIVA = () => {
        const reducer = (accumulator, currentValue) =>
        accumulator + (currentValue.props.price*0.16);
      const iva = cart.reduce(reducer, 0);
      return iva.toFixed(2);
      }

    return(
        // <!-- COMPONENTE QUE CONTIENE LOS ITEMS DEL CARRITO -->
        <>
        <div className="cart__items">
            <div className="cart__items_title">
                <h2> Carrito de Compras </h2>
            </div>
            <div className="cart__items_list">
            {cart.length > 0 ? cart.map((product, index) => { return(<div className="cart__items_list-product">
                    <div className="cart__items_list-product_img">
                        <img className="cart__items__product-img" src={product.props.image}
                            alt="product_image" />
                    </div>
                    <div className="cart__items_list-description">
                        <div className="cart__items_list-secc1">
                            <h4>{product.props.title}</h4>
                            <div className="cart__items_list-buttons">
                                <button className="button_minus button_minus_red"><i className="fa fa-minus"
                                        aria-hidden="true"></i></button>
                                1
                                <button className="button_add button_add_green"><i className="fa fa-plus"
                                        aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <div className="cart__items_list-secc2">
                            <b>Precio: ${product.props.price}</b>
                        </div>
                    </div>
                    <div className="cart__items_list-delete">
                        <button className="button_delete"><i className="fa fa-trash" aria-hidden="true" onClick={() => handleDeleteFromCart(index)}></i></button>
                    </div>
                </div>)
            })
            : <h3>El carrito está vacío</h3>}
            </div> 
            <div className="cart__items_total">
            <div className="cart__items_total-label_IVA">
                    <h3>IVA incluido de: ${handleIVA()}</h3> <br />
                </div>
                <div className="cart__items_total-label">
                    <h3>Total: ${handleSubtotalPrice()}</h3>
                </div>
            </div>
            <div className="cart__items_buttons">
                <button className="button-cart">Comprar</button>
                <button className="button-cart">Vaciar Carrito</button>
            </div>
        </div>
    </>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
    };
};

const mapDispatchToProps = {
    deleteFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);