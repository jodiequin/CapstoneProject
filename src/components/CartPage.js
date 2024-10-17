import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

export default function CartPage() {

    // To call from global storage
    const state = useSelector((state) => state.shop);

    // Conditional rendering for if no items have been added to cart
    if (state.cartItems.length !== 0) {
        return (
            <div>
                <div>
                    {state.totalPrice}
                </div>

                <div>
                    {state.cartItems.map(product => (<CartCard key={product.name} {...product} />))}
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <h1> Cart is empty </h1>
                <p> Note: You can only add items to cart if you are logged in </p>
            </div>
        );
    }
}