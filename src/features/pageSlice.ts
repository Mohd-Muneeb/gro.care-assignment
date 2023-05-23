import { createSlice } from "@reduxjs/toolkit";
import { type Post } from "~/types/types";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    page: 0,
};

interface State {
    page: number;
}

const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        incrementPage(state) {
            state.page++;
        },
        decrementPage(state) {
            state.page--;
        },
        customPage(state, action: PayloadAction<State>) {
            state.page = action.payload.page;
        },
    },
});

export const { incrementPage, decrementPage , customPage} = pageSlice.actions;

export default pageSlice.reducer;
