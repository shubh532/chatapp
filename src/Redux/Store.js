import { configureStore } from "@reduxjs/toolkit";
import AuthReducers from "./Authentication"
import userReducer from "./UserData"
import MessagesReducer from "./Messages";

export const store = configureStore({
    reducer: {
        Authentication: AuthReducers,
        UserData: userReducer,
        Messages: MessagesReducer
    }
})