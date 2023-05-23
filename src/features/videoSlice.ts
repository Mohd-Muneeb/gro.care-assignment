import { createSlice } from "@reduxjs/toolkit";
import { type Post } from "~/types/types";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface State {
    posts: Post[];
    currentVideo: Post | null;
    page: number;
}

const initialState: State = {
    posts: [],
    currentVideo: null,
    page: 1,
};

const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        updateVideos(state, action: PayloadAction<Post[]>) {
            state.posts = action.payload;
        },
        updateCurrentVideo(state, action: PayloadAction<Post | null>) {
            state.currentVideo = action.payload;
        },
    },
});

export const { updateVideos, updateCurrentVideo } = videoSlice.actions;

export default videoSlice.reducer;
