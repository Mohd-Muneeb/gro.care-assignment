import React from "react";
import {
    signInWithPopup,
    GoogleAuthProvider,
    updateCurrentUser,
} from "firebase/auth";
import auth from "~/auth";
import db from "~/db";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { addUser } from "~/features/authSlice";

const Auth = () => {
    const provider = new GoogleAuthProvider();
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.auth.user);

    if (auth.currentUser !== null) {
        dispatch(addUser(auth.currentUser));

        return (
            <div>
                <h1>You are already signed in</h1>
            </div>
        );
    }

    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(async (result) => {
                // const credential =
                //     GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                await setDoc(
                    doc(
                        db,
                        "users",
                        user.email ? user.email : "unknown@unknown.com"
                    ),
                    {
                        name: user.displayName,
                        email: user.email,
                        pic: user.photoURL,
                        watchLists: [],
                    }
                );

                // console.log("Document written as ", docRef.id);

                dispatch(addUser(user));
            })
            .catch((error) => {
                // Handle Errors here.
                alert(
                    "An Error Occured with Signin, try again later or contact the maintainer of this website"
                );
                console.log(error);
            });
    };
    return (
        <div>
            Auth
            <button
                onClick={() => handleSignIn()}
                className="btn-outline btn-primary btn"
            >
                Login / SignUp
            </button>
        </div>
    );
};

export default Auth;
