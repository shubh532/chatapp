import { createSlice } from "@reduxjs/toolkit";

const initialState = { groups: [] }

const groupSlice = createSlice({
    name: "groups",
    initialState: initialState,
    reducers: {
        getGroups(state, action) {
            state.groups = action.payload
        }
    }
})


export const { getGroups } = groupSlice.actions

export default groupSlice.reducer