import { createSlice } from "@reduxjs/toolkit";

const initialState = { showModal: false, Users: [] }

const ModalSlice = createSlice({
    name: "modal",
    initialState: initialState,
    reducers: {
        modalHandler(state) {
            state.showModal = !state.showModal
        },
        getModalUsers(state, action) {
            state.Users = [...action.payload]
        }
    }
})

export const { modalHandler, getModalUsers } = ModalSlice.actions

export default ModalSlice.reducer