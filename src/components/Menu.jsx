import React from 'react';
import '../assets/styles/components/Menu.scss'

const Menu = () => (
    <div className="menu_body show" id="menu_body">
    {/* <!-- Home --> */}
    <div className="menu_short_item " title="Home/Inicio">
        <i className="fa fa-home fa-lg" aria-hidden="true"></i>
    </div>
    {/* <!-- Productos --> */}
    <div className="menu_short_item" title="Productos">
        <i className="fa fa-shopping-basket fa-lg" aria-hidden="true"></i>
    </div>
    {/* <!-- Clientes --> */}
    <div className="menu_short_item" title="Clientes">
        <i className="fa fa-address-book fa-lg" aria-hidden="true"></i>
    </div>
    {/* <!-- Facturas --> */}
    <div className="menu_short_item" title="Facturas">
        <i className="fa fa-newspaper-o fa-lg" aria-hidden="true"></i>
    </div>
    {/* <!-- Reportes --> */}
    <div className="menu_short_item" title="Reportes">
        <i className="fa fa-line-chart fa-lg" aria-hidden="true"></i>
    </div>
    {/* Configuración  */}
    <div className="menu_short_item" title="Configuración">
        <i className="fa fa-cogs fa-lg" aria-hidden="true"></i>
    </div>
</div>
);

export default Menu;