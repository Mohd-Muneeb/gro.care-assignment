import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "~/features/videoSlice";

export const store = configureStore({
    reducer: {
        video: videoReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
