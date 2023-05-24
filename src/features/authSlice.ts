import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "firebase/auth";

const initialState = {
    user: null,
};

interface State {
    user: User | null;
}

const userSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        addUser(state: State, action: PayloadAction<User>) {
            state.user = action.payload;
        },
        removeUser(state) {
            state.user = null;
        },
    },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
