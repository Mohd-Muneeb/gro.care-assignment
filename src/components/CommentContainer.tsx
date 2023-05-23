import React from "react";
import { Comments } from "~/types/types";

const CommentContainer = (props: Comments) => {
    if (!props.comments.commentingAllowed) {
        return (
            <div>
                <h1>Comments are disabled on this video</h1>
            </div>
        );
    }

    return props.comments.count === 0 ? (
        <div>
            <h1>No comments here to show yet</h1>
        </div>
    ) : (
        <div>
            <h1>There are totally {props.comments.count} comments</h1>
        </div>
    );
};

export default CommentContainer;
