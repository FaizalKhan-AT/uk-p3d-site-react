import "./App.css";
import { HashRouter } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <HashRouter path="/">
        <Home />
      </HashRouter>
    </>
  );
}

export default App;
