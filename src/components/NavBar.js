import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {

    const state = useSelector((state) => state.shop);

    return (
        <div>
            <div>
                <Link to="/"> Home </Link>
                <Link to="/products"> Products </Link>
                <Link to="/cart"> Cart </Link>
            </div>

            <div>
                {state.currentUser}
            </div>
        </div>
    );
}