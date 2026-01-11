import { createSlice } from '@reduxjs/toolkit';

type NavigationState = {
    isOpen: boolean;
};

const initialState: NavigationState = {
    isOpen: false,
};

const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        open: (state) => {
            state.isOpen = true;
        },
        close: (state) => {
            state.isOpen = false;
        },
        toggle: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { open, close, toggle } = navigationSlice.actions;
export default navigationSlice.reducer;
