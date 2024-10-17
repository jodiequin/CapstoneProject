import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard.js";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import HelpPopUp from "./HelpPopUp.js";
import { Container, Row, Col } from "react-bootstrap";

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
            <div className="cart_align">
                <div className="delivery">
                    <form>
                        <label> <b> Delivery Options </b> </label>
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

                    <h4 className="text_center"> - Cart Summary - </h4>
                    <div className="delivery_text_align">
                        <p> Sub-total </p>
                        <p className="delivery_text_right"> R{state.totalPrice} </p>
                    </div>
                    <div className="delivery_text_align">
                        <p> Delivery </p>
                        <p className="delivery_text_right"> R{deliveryPrice} </p>
                    </div>
                    <div className="delivery_text_align">
                        <h2> Total </h2>
                        <h2 className="delivery_text_right"> R{state.totalPrice + deliveryPrice} </h2>
                    </div>
                    <h1 className="text_center"> - - - </h1>

                </div>

                <div>
                    <Container>
                        <Col>
                            <Row xs={1} sm={2} md={3}>
                                {state.cartItems.map(product => (<CartCard key={product.name} {...product} />))}
                            </Row>
                        </Col>
                    </Container>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="home_page">
                <h1> Cart is empty </h1>
                <p> Note: You can only add items to cart if you are logged in </p>
            </div>
        );
    }
}