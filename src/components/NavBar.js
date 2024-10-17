import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <div>
                <Link to="/"> Home </Link>
                <Link to="/products"> Products </Link>
                <Link to="/cart"> Cart </Link>
            </div>

            <div>
                Username conditional rendering
            </div>
        </div>
    );
}