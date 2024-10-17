import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    // useSelector function to get login state from store
    // for conditonal rendering
    const state = useSelector((state) => state.shop);

    // useNavigate to navigate to login/register page
    const nav = useNavigate();

    if (state.loginStatus === false) {
        return (
            <div>
                <button
                  onClick={() => nav("/login")} > 
                  Login 
                </button>

                <button
                  onClick={() => nav("/register")} > 
                  Register
                </button>
            </div>
        );
    }
    else {
        return (
            <div>
                <button> Logout </button>
            </div>
        );
    }
}