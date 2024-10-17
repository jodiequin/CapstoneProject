import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/storeState";

export default function HomePage() {
    // useSelector function to get login state from store
    // for conditonal rendering
    const state = useSelector((state) => state.shop);

    const dispatch = useDispatch();

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
                <button 
                  onClick={() => dispatch(logout())} > 
                  Logout 
                </button>
            </div>
        );
    }
}