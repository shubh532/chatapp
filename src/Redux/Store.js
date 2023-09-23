import { configureStore } from "@reduxjs/toolkit";
import AuthReducers from "./Authentication"
import userReducer from "./UserData"
import MessagesReducer from "./Messages";
import ModalReducer from "./Modal";
import GroupsReducer from "./Groups";

export const store = configureStore({
    reducer: {
        Authentication: AuthReducers,
        UserData: userReducer,
        Messages: MessagesReducer,
        Modal: ModalReducer,
        Group: GroupsReducer
    }
})