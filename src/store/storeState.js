import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name: "Shop",
    initialState: {
        cartItems: [],
        registeredUsers: [],
        currentUser: [],
        totalPrice: 0,
        loginStatus: false,
    },
    reducers: {
        // Function to set login state to true
        login: (state) => {
            return {
                ...state,
                loginStatus: true
            };
        },
        // Function to set login state to false
        logout: (state) => {
            return {
                ...state,
                loginStatus: false
            };
        },
        // Function to check for valid user login
    }
})

export const { login, logout } = shopSlice.actions

export default shopSlice.reducer