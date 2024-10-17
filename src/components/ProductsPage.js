import React from "react";
import productArray from "./ProductsList";
import ProductCard from "./ProductCard";

export default function ProductsPage() {
    return (
        <div>
            {productArray.map(product => (<ProductCard key={product.name} {...product} />))}
        </div>
    );
}