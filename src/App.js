import { BrowserRouter, Route, Routes } from "react-router";
import Header from "../components/Header";
import Home from "../components/Home";
import Layout from "../components/Layout";
import Signin from "../components/Signin";
import "./App.css";

function App() {
  return (
    <div className="">
      Hello
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="signin" element={<Signin />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
