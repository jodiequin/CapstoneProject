import { configureStore } from "@reduxjs/toolkit";
import storeState from "./storeState.js";

const store = configureStore({
    reducer: {
        shop: storeState,
    }
})

export default store;