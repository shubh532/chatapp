import { createSlice } from "@reduxjs/toolkit";
const userId = localStorage.getItem("userId")

const initialState = { users: [], userId:userId }

const UserSlice = createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        getUsers(state, action){
            state.users= action.payload
        }
    }
})

export const {getUsers} = UserSlice.actions

export default UserSlice.reducer