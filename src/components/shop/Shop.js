import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10)
    // console.log(fakeData);

    const [cart, setCart] = useState([]);

    const addToCart =(value) =>{
        console.log(value);
        const newCart = [...cart, value];
        setCart(newCart);
    }
    return (
        <div className = 'shop-container'>
            <div className="product-container">
                {
                    products.map(item => <Products value={item} clickBtn={addToCart}></Products>)
                }
            </div>
            <div className="cart-container">
                <Cart itemNumber={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;