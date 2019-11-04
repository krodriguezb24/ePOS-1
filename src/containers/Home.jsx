import React from 'react';
import Menu from '../components/Menu';
import TopButtons from '../components/Home/TopButtons';
import Products from '../components/Home/Products';
import ProductItem from '../components/Home/ProductItem';
import Cart from '../components/Home/Cart';
import '../assets/styles/App.scss';


const Home = () => {
    return (
    <>
    <div className="content">
    <Menu />
    <div className="inner_content">
    <div>
    <TopButtons />
    <Products>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
    </Products>
    </div>
    <Cart />
    </div>
    </div>
    </>
);
    };

export default Home;