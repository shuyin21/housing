import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

export const sidebarOpenSlice = createSlice({
    name: 'sidebar',
    initialState: { value: initialStateValue },

    reducers: {
        sidebarDetails: (state, action) => {
            state.value = action.payload;
        },

    },
});


export const { sidebarDetails } = sidebarOpenSlice.actions;

export default sidebarOpenSlice.reducer;