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
            const newUsers = action.payload.User
            const isAddingUser = action.payload.AddingUser
            if (isAddingUser) {
                state.groupUsers = [...state.groupUsers, ...newUsers]
            } else {
                state.groupUsers = [...newUsers]
            }
        },
        AdminHandler(state, action) {
            const userId = action.payload.userId
            const isAdmin = action.payload.isAdmin
            if (isAdmin) {
                const userIndex = state.groupUsers.findIndex(user => user.id === userId)
                const updateUser = {
                    ...state.groupUsers[userIndex],
                    admin: true
                }
                const updateList = [
                    ...state.groupUsers.slice(0, userIndex),
                    updateUser,
                    ...state.groupUsers.slice(userIndex + 1)
                ]
                state.groupUsers = [...updateList]
            } else {
                const userIndex = state.groupUsers.findIndex(user => user.id === userId)
                const updateUser = {
                    ...state.groupUsers[userIndex],
                    admin: false
                }
                const updateList = [
                    ...state.groupUsers.slice(0, userIndex),
                    updateUser,
                    ...state.groupUsers.slice(userIndex + 1)
                ]
                state.groupUsers = [...updateList]
            }
        }
    }
})


export const { getGroups, getGroupId, existGroups, getGroupUser, AdminHandler } = groupSlice.actions

export default groupSlice.reducer