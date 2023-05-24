import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrow from "../assets/right-arrow-recentSearch.svg";
import { useAppSelector } from "~/hooks";

const Playlist = () => {
    return (
        <div className="h-[150px] w-[90vw] p-4 ">
            <div className="border-black-solid relative flex rounded bg-base-200 p-4">
                <div className="avatar">
                    <div className="w-20 rounded">
                        <img
                            src="https://placeimg.com/192/192/people"
                            alt="Tailwind-CSS-Avatar-component"
                            onClick={() => (window.location.href = "/")}
                        />
                    </div>
                </div>
                <div className="mx-8">
                    <Link className=" text-lg hover:underline" href="/">
                        Playlist Name
                    </Link>
                    <p className="text-sm opacity-70">9 videos</p>
                    <p className="text-sm opacity-70">created at </p>
                    <br />
                </div>
                <div className="absolute right-12 top-12 opacity-20 hover:opacity-100">
                    <Link href="/pets">
                        <Image
                            src={arrow}
                            alt="Right arrow"
                            height={30}
                            width={30}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Playlist;
