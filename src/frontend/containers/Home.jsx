import React from 'react';
import { connect } from 'react-redux';
import Menu from '../components/Menu';
import TopButtons from '../components/Home/TopButtons';
import Products from '../components/Home/Products';
import ProductItem from '../components/Home/ProductItem';
import Cart from '../components/Home/Cart';
import '../assets/styles/App.scss';


const Home = (props) => {
    const { products } = props
    return (
    <>
    <div className="content">
    <Menu />
    <div className="inner_content">
    <Products>
    {products.map(product => 
    <ProductItem key={product.id} {...product}/>
    )}
    </Products>
    <Cart />
    </div>
    </div>
    </>
);
    };

    const mapStateToProps = state => {
        return {
            products: state.products
        }
    }

export default connect(mapStateToProps, null)(Home);