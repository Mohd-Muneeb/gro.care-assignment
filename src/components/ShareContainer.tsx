import { useRouter } from "next/router";
import React from "react";
import {
    FacebookIcon,
    FacebookShareButton,
    RedditIcon,
    RedditShareButton,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from "react-share";

const ShareContainer = () => {
    const url = window.location.href;

    return (
        <>
            <div className="my-4">
                <p className="mb-2 text-center font-medium">
                    Share this video!
                </p>
                <div className=" flex items-center justify-center gap-4">
                    <FacebookShareButton url={url}>
                        <FacebookIcon size={40} />
                    </FacebookShareButton>
                    <WhatsappShareButton url={url}>
                        <WhatsappIcon size={40} />
                    </WhatsappShareButton>
                    <TwitterShareButton url={url}>
                        <TwitterIcon size={40} />
                    </TwitterShareButton>
                    <RedditShareButton url={url}>
                        <RedditIcon size={40} />
                    </RedditShareButton>
                </div>
            </div>
            <hr />
        </>
    );
};

export default ShareContainer;
