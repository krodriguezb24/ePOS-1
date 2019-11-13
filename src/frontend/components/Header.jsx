import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import ePOS from '../assets/static/ePOS.png';

const Header = () => {
    const [open, setOpen] = useState(true);
    return (
        <header className="header">
            <div className="header_logo">
                <div className="header_logo--icon">
                <div open={open} onClick={() => setOpen(!open)}>
                <div className={open ? 'burgerOpen' : 'burgerClosed'}>
                    <div className='lineBurger'/>
                    <div className='lineBurger'/>
                    <div className='lineBurger'/>
                </div>
                </div>
                </div>
                <Link to="/">
                <img className="header_logo--image" src={ePOS} />
                </Link>
            </div>
            <div className="header_links">
                <div>
                    <b>Bienvenido a ePOS: </b> Mi usuario
                </div>
                <Link to="/login"><i className="fa fa-sign-out"></i> Cerrar Sesión</Link>

            </div>

        </header>
)
};

export default Header;