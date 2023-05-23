import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { updateCurrentVideo } from "~/features/videoSlice";
import UserDataCard from "~/components/UserDataCard";
import CommentContainer from "~/components/CommentContainer";
import RecommendedContainer from "~/components/RecommendedContainer";
import Footer from "~/components/Footer";

const Watch = () => {
    const router = useRouter();
    const query = router.query;
    const currentPost = useAppSelector((state) => state.video.currentVideo);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (currentPost?.postId !== query.postId) {
            dispatch(updateCurrentVideo(null));
            router.push("/").catch((err) => console.log(err));
        }
    }, []);

    return (
        <>
            <div className="h-full">
                {/* <h1>Welcome, you can watch videos here</h1> */}
                <div className="flex">
                    <div className="flex w-screen items-center justify-center bg-black">
                        <video
                            src={currentPost?.submission.mediaUrl}
                            className="aspect-[9/16] w-[60vw] md:w-[22.5vw]"
                            controls
                        ></video>
                    </div>
                </div>
                <div className="flex w-full flex-col gap-4 md:flex-row md:justify-evenly">
                    <div className="ml-[2.5vw]">
                        {currentPost?.creator !== undefined ? (
                            <>
                                <UserDataCard
                                    title={currentPost.submission.title}
                                    desc={currentPost.submission.description}
                                    user={currentPost?.creator}
                                />
                                <hr className="mt-4" />
                                <div className="mt-4">
                                    <CommentContainer
                                        comments={currentPost.comment}
                                    />
                                </div>
                                <hr className="mt-4" />
                                
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="w-full ml-[2.5vw]">
                        <RecommendedContainer />
                    </div>
                </div>
            <Footer />
            </div>
        </>
    );
};

export default Watch;
