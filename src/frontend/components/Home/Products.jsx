import React from 'react';
import TopButtons from './TopButtons';
import '../../assets/styles/components/Home/Products.scss'

const Products = ({ children }) => {
    return(
    <section id="shipment_content">
        <TopButtons />
        <div className="cart">
        {/* <!-- COMPONENTE QUE CONTIENE LOS PRODUCTOS --> */}
        <div className="cart__products">
            <div className="row">
                {/* <!-- COMPONENTE PARA DESPLEGAR UN PRODUCTO --> */}
                    {children}
            </div>
        </div>
        </div>
    </section>
    );
};

export default Products;