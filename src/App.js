import Navbar from "./Components/Navbar/Header";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Banner from "./Components/Banner/Banner";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Banner />
        </div>
      </Router>
    </>
  );
}

export default App;
