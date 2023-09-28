import { createSlice } from "@reduxjs/toolkit";

const initialState = { groups: [], groupId: null }

const groupSlice = createSlice({
    name: "groups",
    initialState: initialState,
    reducers: {
        getGroups(state, action) {
            state.groups = action.payload
        },
        getGroupId(state, action) {
            state.groupId = action.payload
        }
    }
})


export const { getGroups, getGroupId } = groupSlice.actions

export default groupSlice.reducer