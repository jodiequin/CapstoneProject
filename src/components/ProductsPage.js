import React from "react";
import productArray from "./ProductsList";
import ProductCard from "./ProductCard";
import { Container, Row, Col } from "react-bootstrap";

// Rendering product cards
export default function ProductsPage() {
    return (
        <div className="products_page">
            <Container fluid>
                <Col>
                    <Row xs={2} md={3} lg={4}>
                        {productArray.map(product => (<ProductCard key={product.name} {...product} />))}
                    </Row>
                </Col>
            </Container>
        </div>
    );
}