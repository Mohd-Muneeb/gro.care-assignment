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
    name: "user",
    initialState,
    reducers: {
        addUser(state: State, action: PayloadAction<User | null>) {
            state.user = action.payload;
        },
        removeUser(state) {
            state.user = null;
        },
    },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
