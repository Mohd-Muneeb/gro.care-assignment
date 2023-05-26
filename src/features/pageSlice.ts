import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    page: "0",
};

const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        incrementPage(state) {
            const temp1 = parseInt(state.page) + 1;
            state.page = (temp1).toString();
        },
        decrementPage(state) {
            const temp2 = parseInt(state.page) - 1;
            state.page = (temp2).toString();
        },
        customPage(state, action: PayloadAction<string>) {
            state.page = action.payload;
        },
    },
});

export const { incrementPage, decrementPage, customPage } = pageSlice.actions;

export default pageSlice.reducer;
