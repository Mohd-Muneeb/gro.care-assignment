import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, getDefaultMiddleware } from "@reduxjs/toolkit";
import type { User } from "firebase/auth";

const initialState = {
    user: null,
    email: null,
};

interface State {
    user: User | null;
    email: string | null | undefined;
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser(state: State, action: PayloadAction<User | null>) {
            state.user = action.payload ;
            state.email = action.payload?.email;
        },
        removeUser(state) {
            state.user = null;
        },
    },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
