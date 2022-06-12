import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { auth, provider } from "./firebase_config";

const AuthContext = createContext(false);

// export function AuthProvider(props: any) {
//   const { authenticated } = useAuth();
//   const router = useRouter();
//   if (authenticated) {
//     // return <AuthContext.Provider value={authenticated}></AuthContext.Provider>;
//     return props.children;
//   }
//   return router.replace("/signin");
// }

// export default function AuthContext(props: any) {
//   const navigate = useRouter();
//   if (auth?.currentUser?.uid) {
//     return props.children;
//   }
//   return navigate.replace("/signin");
// }

export default AuthContext;

export function useAuth() {
  const router = useRouter();
  const localAuth = auth?.currentUser;
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (localAuth !== null) {
      setAuthenticated(true);
      return;
    }
    setAuthenticated(true);
  }, [localAuth]);

  const login = () => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        if (user) {
          router.replace("/");
        }
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
        router.replace("/signin");
      });
  };

  const logout = () => {
    return auth.signOut().then(() => {
      router.replace("/signin");
      console.log("logged out");
    });
  };

  //   const AuthProvider = (props: any) => {
  //     if (authenticated) {
  //       return props.children;
  //       //   return createElement(AuthContext.Provider, props, props.children);
  //     }
  //     return router.replace("/signin");
  //     //<AuthContext.Provider value={authenticated}></AuthContext.Provider>;
  //   };

  return { authenticated, user: localAuth, logout, login };
}
