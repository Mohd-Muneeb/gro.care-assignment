import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import React from "react";
import Playlist from "~/components/Playlist";
import { useAppSelector } from "~/hooks";


const Playlists = () => {
    const user = useAppSelector((state) => state.auth.user);
    console.log(user);
    
    if (user === null) {
        return (
            <h1>
                User is not signed in, <Link href="/auth">Sign up</Link> to
                create custom playlists
            </h1>
        );
    }

    return (
        <div className="my-4 ml-[5vw]">
            <h1 className="text-xl font-medium">Your playlists</h1>
            <Playlist />
        </div>
    );
};

export default Playlists;
