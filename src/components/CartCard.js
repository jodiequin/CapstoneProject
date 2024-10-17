import React from "react";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { removeProductCart } from "../store/storeState";

const CartCard = (product) => {

    // To call from global storage
    const dispatch = useDispatch();
    const state = useSelector((state) => state.shop);

    // Function to handle add to cart button click
    const handleClick = () => { dispatch(removeProductCart({name: product.name, price: product.price})) };

    return (
        <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title> {product.name} </Card.Title>
                <Card.Text> {product.description} </Card.Text>
                <Card.Text> R{product.price} </Card.Text>
                <button onClick={handleClick}> Delete </button>
            </Card.Body>
        </Card>
    );
    
}

export default CartCard;