import { createSlice } from "@reduxjs/toolkit";
// import { type Post } from "~/types/types";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    page: "0",
};

const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        incrementPage(state) {
            let temp = parseInt(state.page);
            state.page = (temp++).toString();
        },
        decrementPage(state) {
            let temp = parseInt(state.page);
            state.page = (temp--).toString();
        },
        customPage(state, action: PayloadAction<string>) {
            state.page = action.payload;
        },
    },
});

export const { incrementPage, decrementPage, customPage } = pageSlice.actions;

export default pageSlice.reducer;
