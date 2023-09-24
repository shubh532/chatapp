import { createSlice } from "@reduxjs/toolkit";
const userId = localStorage.getItem("userId")

const initialState = { users: [], userId: userId, ShowUserInfo: false, Info: [] }

const UserSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        getUsers(state, action) {
            state.users = action.payload
        },
        ShowUserInfoHandler(state) {
            state.ShowUserInfo = !state.ShowUserInfo
        },
        getInfo(state, action) {
            state.Info = action.payload
        }
    }
})

export const { getUsers, ShowUserInfoHandler, getInfo } = UserSlice.actions

export default UserSlice.reducer