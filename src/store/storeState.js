import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name: "Shop",
    initialState: {
        cartItems: [],
        registeredUsernames: [],
        registeredPasswords: [],
        currentUser: "",
        totalPrice: 0,
        loginStatus: false,
    },
    reducers: {

        // Function to set login state to true and update current user
        login: (state, action) => {
            return {
                ...state,
                loginStatus: true,
                currentUser: action.payload
            };
        },

        // Function to set login state to false and remove current user
        logout: (state) => {
            return {
                ...state,
                loginStatus: false,
                currentUser: ""
            };
        },

        // Function to add user to registered users
        addUser: (state, action) => {
            return {
                ...state,
                registeredUsernames: [...state.registeredUsernames, action.payload.username],
                registeredPasswords: [...state.registeredPasswords, action.payload.password]
            };
        },

        // Function to add product to cart
        addProductCart: (state, action) => {
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            };
        },

    }
})

export const { login, logout, addUser, addProductCart } = shopSlice.actions

export default shopSlice.reducer