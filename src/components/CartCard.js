import React from "react";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { removeProductCart } from "../store/storeState";

const CartCard = (product) => {

    // To call from global storage
    const dispatch = useDispatch();
    
    // Function to handle add to cart button click
    const handleClick = () => { dispatch(removeProductCart({name: product.name, price: product.price})) };

    return (
        <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title> {product.name} </Card.Title>
                <Card.Text> {product.description} </Card.Text>
                <Card.Text> R{product.price} </Card.Text>
                <Card.Footer className="card_footer">
                    <button 
                      className="cart_button"
                      onClick={handleClick}> 
                      Remove 
                    </button>
                </Card.Footer>
            </Card.Body>
        </Card>
    );
    
}

export default CartCard;