import { useRouter } from "next/router";
import React from "react";
import { useAppSelector } from "~/hooks";
import Cards from "./Cards";
import { Post } from "~/types/types";

const RecommendedContainer = () => {
    const posts = useAppSelector((state) => state.video.posts);
    const router = useRouter();

    const query = router.query.postId;
    console.log(posts);

    const checkValidity = (elem: Post) => {
        return query !== elem.postId;
    };

    return (
        <div className="mt-4 w-full">
            <h1 className="font-medium">Recommended Video</h1>
            
            <hr className="my-4"/>
            <div className="flex flex-col md:justify-start justify-center items-center flex-wrap h-full md:flex-row gap-4">

            {posts !== null ? (
                posts
                    .filter(checkValidity)
                    .map((elem: Post) => (
                        <Cards key={elem.postId} post={elem} />
                    ))
            ) : (
                <></>
            )}
            </div>
        </div>
    );
};

export default RecommendedContainer;
