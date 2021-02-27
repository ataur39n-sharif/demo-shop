import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './products.css'

const Products = (props) => {
    // console.log(props.value);
    const {img,name,seller,price,stock} = props.value;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="details">
                <h3 className="product-name">{name}</h3>
                <br/>
                <p><small> sold by : {seller}</small></p>
                <p>${price}</p>
                <br/>
                <p><small>Only {stock} left in stock</small></p>
                <br/>
                <button className='btn' onClick={() =>props.clickBtn(props.value)}><FontAwesomeIcon icon={faShoppingCart} />  add to cart</button>
            </div>
        </div>
    );
};

export default Products;

