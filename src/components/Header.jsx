import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Burger from './Burger';
import '../assets/styles/components/Header.scss';
import ePOS from '../assets/static/ePOS.png';

const Header = () => {
    const [open, setOpen] = useState(true);
    return (
    <header className="header_body">
        <div className="header_content">
                <div className="header_content__menu">
                        <div id="header_content__menu__icon">
                                {/* <i className="fa fa-reorder fa-lg " /> */}
                                {/* <FontAwesomeIcon icon="bars" /> */}
                                <Burger open={open} setOpen= {setOpen}/>
                        </div>
                </div>
                <div className="header_content__logo"> <img className="header__img" src={ePOS} /> </div>
                <div className="header_content__link">
                        <div><b>Bienvenido a ePos: </b> Mi usuario</div>
                        <a href="/">
                        {/* <i className="fa fa-sign-out"></i>  */}
                        <FontAwesomeIcon icon="sign-out-alt" />
                        Cerrar Sesión</a>
                </div>
            </div>
    </header>
)
};

export default Header;