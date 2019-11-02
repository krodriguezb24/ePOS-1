import React from 'react';
import Menu from '../components/Menu';
import TopButtons from '../components/Home/TopButtons';
import Products from '../components/Home/Products';
import ProductItem from '../components/Home/ProductItem';
import Cart from '../components/Home/Cart';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faSignOutAlt, faHome, faShoppingBasket, faAddressBook, faNewspaper, faChartLine, faCogs } from '@fortawesome/free-solid-svg-icons'
import '../assets/styles/App.scss';

library.add(faBars, faSignOutAlt, faHome, faShoppingBasket, faAddressBook, faNewspaper, faChartLine, faCogs);


const Home = () => {
    return (
    <>
    <div className="inner_content">
    <Menu />
    <TopButtons />
    <Products>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
    </Products>
    <Cart />
    </div>
    </>
);
    };

export default Home;