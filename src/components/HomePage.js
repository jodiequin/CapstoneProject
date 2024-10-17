import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/storeState";

export default function HomePage() {
    
    // To call from global storage
    const state = useSelector((state) => state.shop);
    const dispatch = useDispatch();

    // useNavigate to navigate to login/register page
    const nav = useNavigate();

    // Showing login/register page
    if (state.loginStatus === false) {
        return (
            <div className="home_page">

                <h1 className="welcome_margin">
                    Welcome to your favourite clothing boutique!
                </h1>

                <div>
                    <button
                      className="home_page_buttons"
                      onClick={() => nav("/login")} > 
                      Login 
                    </button>

                    <button
                      className="home_page_buttons"
                      onClick={() => nav("/register")} > 
                      Register
                    </button>
                </div>
            </div>
        );
    }
    // Showing logout page
    else {
        return (
            <div className="home_page">

                <h1 className="welcome_margin">
                    Welcome, <b> {state.currentUser} </b>, to your favourite clothing boutique!
                </h1>

                <button 
                  className="home_page_buttons"
                  onClick={() => dispatch(logout())} > 
                  Logout 
                </button>
            </div>
        );
    }
}