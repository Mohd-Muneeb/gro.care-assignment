import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "~/features/videoSlice";
import pageSlice from "~/features/pageSlice";
import authSlice from "~/features/authSlice";

export const store = configureStore({
    reducer: {
        video: videoReducer,
        page: pageSlice,
        auth: authSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
