import {
    GoogleAuthProvider,
    PopupRedirectResolver,
    signInWithPopup
} from "firebase/auth";
import { useMutation } from "react-query";
import { auth, provider } from "./firebase_config";

export const useSignup = () => {
  return useMutation(async (data) => {
    try {
      console.log("signup data", data);
      await signInWithPopup(
        auth,
        new GoogleAuthProvider(),
        (done: PopupRedirectResolver) => {
          console.log("signed in");
        }
      );
    } catch (error) {
      console.log("sign in error", error);
    }
  });
};


const signin = () => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
