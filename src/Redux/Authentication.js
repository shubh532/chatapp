import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("tokenID")

const initialAuthState = { isAuthorized: token ? true : false }

const Authencation = createSlice({
    name: "Authencation",
    initialState: initialAuthState,
    reducers: {
        LoginHandler(state) {
            state.isAuthorized = !state.isAuthorized
        }
    }
})

export const authActions = Authencation.actions

export default Authencation.reducer