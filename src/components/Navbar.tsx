import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import auth from "~/auth";
import { addUser } from "~/features/authSlice";
import { useAppDispatch, useAppSelector } from "~/hooks";

const Navbar = ({ Page }: any) => {
    const router = useRouter();

    const dispatch = useAppDispatch();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(addUser(user));
        } else {
            dispatch(addUser(null));
        }
    });

    const user = useAppSelector((state) => state.auth.user);

    const handleHomeRouting = (): void => {
        const success = router.push("/").catch((err) => console.log(err));
        console.log(success);
        return;
    };

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="navbar w-full bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label
                            htmlFor="my-drawer-3"
                            className="btn-ghost btn-square btn"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div
                        className="mx-2 flex-1 px-2"
                        onClick={handleHomeRouting}
                    >
                        <button className="btn btn-ghost">
                            <h1 className="text-lg font-medium">ShortsTube</h1>
                        </button>
                    </div>
                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal">
                            <li>
                                <Link href="/playlists">My Playlists</Link>
                            </li>
                            <li>
                                {user !== null ? (
                                    <Link href="/">Log out</Link>
                                ) : (
                                    <Link href="/auth">Sign Up</Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
                {Page}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu z-40 w-80 bg-base-200 p-4">
                    <li>
                        <a>Sidebar Item 1</a>
                    </li>
                    <li>
                        <a>Sidebar Item 2</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
