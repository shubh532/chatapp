import { createSlice } from "@reduxjs/toolkit";

const initialState = { groups: [], groupId: null, isExistGroup: null, groupUsers: [] }

const groupSlice = createSlice({
    name: "groups",
    initialState: initialState,
    reducers: {
        getGroups(state, action) {
            const newGroup = action.payload
            state.groups = [...state.groups, ...newGroup]
        },
        getGroupId(state, action) {
            state.groupId = action.payload
        },
        //this reducer is used to check wheather group is exist or not
        existGroups(state, action) {
            state.isExistGroup = action.payload
        },
        getGroupUser(state, action) {
            const newUsers = action.payload
            state.groupUsers = [...newUsers]
        }
    }
})


export const { getGroups, getGroupId, existGroups, getGroupUser, makeGroupAdmin } = groupSlice.actions

export default groupSlice.reducer