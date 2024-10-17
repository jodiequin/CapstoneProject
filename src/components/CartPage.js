import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard.js";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import HelpPopUp from "./HelpPopUp.js";

export default function CartPage() {

    // To call from global storage
    const state = useSelector((state) => state.shop);

    // To store delivery choice
    const [deliveryChoice, setDeliveryChoice] = useState("Choose Delivery Option");
    const [deliveryPrice, setDeliveryPrice] = useState(0);

    useEffect(() => {
        if (deliveryChoice === "Standard Delivery") {
            setDeliveryPrice(55);
        }
        else if (deliveryChoice === "Express Delivery") {
            setDeliveryPrice(80);
        }
    }, [deliveryChoice])

    // Conditional rendering for if no items have been added to cart
    if (state.cartItems.length !== 0) {
        return (
            <div>
                <div>
                    <form>
                        <label> Delivery Options </label>
                        <DropdownButton title={deliveryChoice}>
                            <Dropdown.Item onClick={() => setDeliveryChoice("Standard Delivery")}>
                                Standard Delivery: R55
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => setDeliveryChoice("Express Delivery")}>
                                Express Delivery: R80
                            </Dropdown.Item>
                        </DropdownButton>
                    </form>
                    <HelpPopUp />

                    <h4> - Cart Summary - </h4>
                    <div>
                        <p> Sub-total </p>
                        <p> R{state.totalPrice} </p>
                    </div>
                    <div>
                        <p> Delivery </p>
                        <p> R{deliveryPrice} </p>
                    </div>
                    <div>
                        <h2> Total </h2>
                        <h2> R{state.totalPrice + deliveryPrice} </h2>
                    </div>

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