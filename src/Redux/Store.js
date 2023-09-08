import { configureStore } from "@reduxjs/toolkit";
import AuthReducers from "./Authentication"
import userReducer from "./UserData"

export const store = configureStore({
    reducer: {
        Authentication: AuthReducers,
        UserData: userReducer
    }
})