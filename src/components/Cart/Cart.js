import React from 'react';

const Cart = (props) => {

    const cart = props.itemNumber;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        total = total + element.price;
    }

    let shipping = 0;
    if(total >0 && total <100) {
        shipping = 10
    }
    else if(total >0 &&  total < 200){
        shipping = 20
    }
    else if(total >0 && total > 200){
        shipping = 50 ;
    }
    
    let tax = (total /10).toFixed(2);
    // tax = tax.toFixed(2);

    let grandTotal = (total + shipping + parseFloat(tax)).toFixed(2);
    // grandTotal = grandTotal.toFixed(2)

    return (
        <div>
            <h1>cart section </h1>
                    <h4>Order summary : {cart.length}</h4>
                    <h5>Purchase cost : ${total}</h5>
                    <h5>Shipping cost :$ {shipping}</h5>
                    <h5>Taxes(10%) : ${tax}</h5>
                    <h5>Total Cost : ${grandTotal} </h5>
        </div>
    );
};

export default Cart;