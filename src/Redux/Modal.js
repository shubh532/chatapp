import { createSlice } from "@reduxjs/toolkit";

const initialState = { showModal: false }

const ModalSlice = createSlice({
    name: "modal",
    initialState: initialState,
    reducers: {
        modalHandler(state) {
            state.showModal = !state.showModal
        }
    }
})

export const { modalHandler } = ModalSlice.actions

export default ModalSlice.reducer