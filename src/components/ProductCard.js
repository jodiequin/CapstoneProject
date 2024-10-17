import React from "react";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { addProductCart } from "../store/storeState";

const ProductCard = (product) => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.shop);

    // Function to handle add to cart button click
    const handleClick = () => { dispatch(addProductCart(product)) }

    // Conditional rendering to only allow user to add item to cart if logged in
    if (state.loginStatus === true) {
        return (
            <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title> {product.name} </Card.Title>
                    <Card.Text> {product.description} </Card.Text>
                    <Card.Text> R{product.price} </Card.Text>
                    <button onClick={handleClick}> Add To Cart </button>
                </Card.Body>
            </Card>
        );
    }
    else {
        return (
            <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title> {product.name} </Card.Title>
                    <Card.Text> {product.description} </Card.Text>
                    <Card.Text> R{product.price} </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default ProductCard;