import { createSlice } from "@reduxjs/toolkit";

const initialState = { messages: [] }

const messagesSlice = createSlice({
    name: "messages",
    initialState: initialState,
    reducers: {
        getMessagesHandler(state, action) {
            const AllMessages = action.payload
            console.log(AllMessages, "from store")
            state.messages = AllMessages
        }
    }
})


export const { getMessagesHandler } = messagesSlice.actions
export default messagesSlice.reducer