import { createSlice } from "@reduxjs/toolkit";

const initialState = { messages: [] }

const messagesSlice = createSlice({
    name: "messages",
    initialState: initialState,
    reducers: {
        getMessagesHandler(state, action) {
            const AllMessages = action.payload
            state.messages = AllMessages
        },
        addNewMessage(state, action) {
            state.messages.push(action.payload)
        }
    }
})


export const { getMessagesHandler, addNewMessage } = messagesSlice.actions
export default messagesSlice.reducer