import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {

    const state = useSelector((state) => state.shop);

    return (
        <div className="nav_bar">
            <Link to="/" className="nav_bar_link"> Home </Link>
            <Link to="/products" className="nav_bar_link"> Products </Link>
            <Link to="/cart" className="nav_bar_link"> Cart </Link>

            <p className="user_display"> {state.currentUser} </p>
        </div>
    );
}