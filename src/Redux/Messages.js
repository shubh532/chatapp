import { createSlice } from "@reduxjs/toolkit";

const initialState = { messages: [], ChatList: [] }

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
        },
        getAllChatList(state, action) {
            const AllchatsList = action.payload
            state.ChatList = AllchatsList
        }
    }
})


export const { getMessagesHandler, addNewMessage, getAllChatList } = messagesSlice.actions
export default messagesSlice.reducer