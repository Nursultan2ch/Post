import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Nursultan' },
    { id: '1', name: 'Kutman' },
    { id: '2', name: 'Kylym' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer