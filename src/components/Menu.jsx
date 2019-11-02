import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/styles/components/Menu.scss'

const Menu = () => (
    <div className="menu_body show" id="menu_body">
    {/* <!-- Home --> */}
    <div className="menu_short_item " title="Home/Inicio">
        {/* <i className="fa fa-home fa-lg" aria-hidden="true"></i> */}
        <FontAwesomeIcon icon="home" />
    </div>
    {/* <!-- Productos --> */}
    <div className="menu_short_item" title="Productos">
        {/* <i className="fa fa-shopping-basket fa-lg" aria-hidden="true"></i> */}
        <FontAwesomeIcon icon="shopping-basket" />
    </div>
    {/* <!-- Clientes --> */}
    <div className="menu_short_item" title="Clientes">
        {/* <i className="fa fa-address-book fa-lg" aria-hidden="true"></i> */}
        <FontAwesomeIcon icon="address-book" />
    </div>
    {/* <!-- Facturas --> */}
    <div className="menu_short_item" title="Facturas">
        {/* <i className="fa fa-newspaper-o fa-lg" aria-hidden="true"></i> */}
        <FontAwesomeIcon icon="newspaper" />
    </div>
    {/* <!-- Reportes --> */}
    <div className="menu_short_item" title="Reportes">
        {/* <i className="fa fa-line-chart fa-lg" aria-hidden="true"></i> */}
        <FontAwesomeIcon icon="chart-line" />
    </div>
    {/* Configuración  */}
    <div className="menu_short_item" title="Configuración">
        {/* <i className="fa fa-cogs fa-lg" aria-hidden="true"></i> */}
        <FontAwesomeIcon icon="cogs" />
    </div>
</div>
);

export default Menu;