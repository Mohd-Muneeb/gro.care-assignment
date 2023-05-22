import Image from "next/image";
import { useRouter } from "next/router";
import type { Post } from "~/types/types";

interface Props {
    post: Post;
}

const Cards = (props: Props) => {
    const post = props.post;
    const router = useRouter();

    const handleClick = () => {
        router
            .push(props.post.submission.hyperlink)
            .catch((err) => console.log(err));
    };

    return (
        <div
            className=""
            onClick={() => handleClick()}
            style={{ cursor: "pointer" }}
        >
            <div className="relative aspect-[9/16] w-[70vw] md:w-[15vw]">
                <Image
                    src={post.submission.thumbnail}
                    fill
                    alt="Thumbnail"
                    className="rounded-md object-fill"
                />
            </div>
            <div className="mt-2 flex items-center justify-start gap-2">
                <div className="avatar">
                    <div className="relative w-12 rounded-full">
                        <Image
                            src={post.creator.pic}
                            fill
                            alt="Profile Picture"
                            className="avatar"
                        />
                    </div>
                </div>
                <div>
                    <h1 className="text-base text-white">
                        {post.creator.handle}
                    </h1>
                    <p className="text-sm">Reactions: {post.reaction.count}</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;
