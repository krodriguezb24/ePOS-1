import React from 'react';
import '../../assets/styles/components/Home/TopButtons.scss'

const TopButtons = () => {
    return(
        <div className="top_buttons">
        <button className="button_item">Buscar Producto</button>
        <button className="button_item">Categorías de Productos</button>
    </div>
    );
};

export default TopButtons;