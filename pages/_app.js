import AuthContext from "../config/AuthContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    // <AuthContext.Provider>
      <Component {...pageProps} />
    // </AuthContext.Provider>
  );
}

export default MyApp;
