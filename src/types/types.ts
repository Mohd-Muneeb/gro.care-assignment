export interface Post {
    postId: string;
    creator: {
        name: string;
        id: string;
        handle: string;
        pic: string;
    };
    comment: {
        count: number;
        commentingAllowed: boolean;
    };
    reaction: {
        count: number;
        voted: boolean;
    };
    submission: {
        title: string;
        description: string;
        mediaUrl: string;
        thumbnail: string;
        hyperlink: string;
        placeholderUrl: string;
    };
}

export interface Creator {
    user: {
        name: string;
        id: string;
        handle: string;
        pic: string;
    };
}

export interface Response {
    data: {
        message: string;

        data: {
            offset: number;
            page: number;
            posts: Post[];
        };
    };
}

export interface Comments {
    comments: {
        count: number;
        commentingAllowed: boolean;
    };
}
