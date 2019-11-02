import React from 'react';
import '../../assets/styles/components/Home/Cart.scss';

const Cart = () => {
    return(
        // <!-- COMPONENTE QUE CONTIENE LOS ITEMS DEL CARRITO -->
        <div className="cart__items">
            <div className="cart__items_title">
                <h2> Carrito de Compras </h2>
            </div>
            <div className="cart__items_list"></div>
        </div>
    );
};

export default Cart;