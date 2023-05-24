import React from "react";
import { useRouter } from "next/router";
import { useAppDispatch } from "~/hooks";
import { updateVideos } from "~/features/videoSlice";
import UserDataCard from "~/components/UserDataCard";
import CommentContainer from "~/components/CommentContainer";
import RecommendedContainer from "~/components/RecommendedContainer";
import Footer from "~/components/Footer";

import { type NextPage } from "next";
import type { Post } from "~/types/types";
import ShareContainer from "~/components/ShareContainer";

interface PageProps {
    page: string;
    postId: string;
    data: Response;
}

export interface Response {
    message: string;

    data: {
        offset: number;
        page: number;
        posts: Post[];
    };
}

const Watch: NextPage<PageProps> = (props) => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const allPosts = props.data.data.posts;

    dispatch(updateVideos(allPosts));

    const pageNumber = router.query.page;

    const currentPost = allPosts.find(
        (elem) => elem.postId === router.query.postId
    );

    if (pageNumber === undefined) {
        return (
            <>
                <div>video not found, please check the url</div>
            </>
        );
    }

    return (
        <>
            <div className="h-full">
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
                                <div>
                                    <ShareContainer />
                                </div>
                                <div className="mt-4">
                                    <CommentContainer
                                        comments={{reaction: currentPost.reaction.count, ...currentPost.comment}}
                                    />
                                </div>
                                <hr className="mt-4" />
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="ml-[2.5vw] w-full">
                        <RecommendedContainer />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

interface Query {
    query: {
        page: string;
        postId: string;
    };
}

export const getServerSideProps = async (context: Query) => {
    let pageNumber = context.query.page;
    if (pageNumber === undefined) {
        pageNumber = "0";
    } else {
        pageNumber = pageNumber;
    }
    const postId = context.query.postId;

    const data: Response = await fetch(
        `https://internship-service.onrender.com/videos?page=${pageNumber}`
    )
        .then((res) => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        })
        .then((res: Response) => {
            return res;
        });

    return {
        props: {
            page: pageNumber,
            data: data,
            postId: postId,
        },
    };
};

export default Watch;
