import React from 'react';
import '../../assets/styles/components/Home/Products.scss'

const Products = ({ children }) => {
    return(
    <section id="shipment_content">

        <div className="cart">
        {/* <!-- COMPONENTE QUE CONTIENE LOS PRODUCTOS --> */}
        <div className="cart__products">
            <div className="row">
                {/* <!-- COMPONENTE PARA DESPLEGAR UN PRODUCTO --> */}
                <div className="column">
                    {children}
                </div>
            </div>
        </div>
        </div>
    </section>
    );
};

export default Products;