import React from 'react';
import '../assets/styles/components/Burger.scss';

const Burger = ({ open, setOpen }) => (
    <div open={open} onClick={() => setOpen(!open)}>
        <div className={open ? 'burgerOpen' : 'burgerClosed'}>
        <div className='lineBurger'/>
        <div className='lineBurger'/>
        <div className='lineBurger'/>
        </div>
    </div>
);

export default Burger;