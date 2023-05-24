import Image from "next/image";
import React, { useState } from "react";
import { boolean } from "zod";
import type { Creator } from "~/types/types";

interface userData extends Creator {
    title: string;
    desc: string;
}

const UserDataCard = (props: userData) => {
    const [Active, setActive] = useState<boolean>(false);
    // console.log(props.user);
    return (
        <div className=" rounded-lg bg-base-200">
            <div className="my-2 min-w-[45vw] rounded-lg bg-base-300 p-4">
                <h1 className="text-xl font-bold  text-info-content">{props.title}</h1>
            </div>
            <div className="flex w-full items-center gap-4 p-4">
                <div className="avatar">
                    <div className="relative w-16 rounded-full">
                        <Image src={props.user.pic} fill alt="Avatar" />
                    </div>
                </div>
                <div>
                    <h1 className="text-lg text-info-content">{props.user.handle}</h1>
                    <p>{props.user.name}</p>    
                </div>
            </div>
            <hr className="mb-4 ml-[5%] w-[90%] border-2 border-solid border-base-300" />
            <div className="px-4 pb-4">
                <p>{props.desc}</p>
                <div className="flex items-center justify-center">
                    {Active ? (
                        <button
                            className="btn-primary btn-outline btn mt-2"
                            onClick={() => setActive(!Active)}
                        >
                            Show More
                        </button>
                    ) : (
                        <button
                            className="btn-primary btn-outline  btn mt-2"
                            onClick={() => setActive(!Active)}
                        >
                            Show Less
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserDataCard;
