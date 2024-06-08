import { createSlice } from '@reduxjs/toolkit';

export const pinSlice = createSlice({
    name: 'pincode',
    initialState: {
        pin: [],
        isLoading: false
    },
    reducers: {

        getPinFetch: (state) => {
            state.isLoading = true;
        },
        
        getPinSuccess: (state,action) => {
            state.pin = action.payload;
            state.isLoading = false;
        },

        getPinFailure: (state) => {
            state.isLoading = false;
        }
    }
})

export const { getPinFailure, getPinFetch, getPinSuccess } = pinSlice.actions;

export default pinSlice.reducer;