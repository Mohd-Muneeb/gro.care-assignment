import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "~/auth";
import db from "~/db";
import { collection, addDoc } from "firebase/firestore";

const Auth = () => {
    const provider = new GoogleAuthProvider();

    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(async (result) => {
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                const docRef = await addDoc(collection(db, "users"), {
                    name: user.displayName,
                    email: user.email,
                    pic: user.photoURL,
                    watchLists: [],
                });

                console.log("Document written as ", docRef.id);
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
            <button onClick={() => handleSignIn()}>something</button>
        </div>
    );
};

export default Auth;
