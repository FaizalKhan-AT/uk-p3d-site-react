import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/SignUp/Signup";
import ForgottenPassword from "./Components/ForgottenPassword/ForgottenPassword";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgotten-password" component={ForgottenPassword} />
      </Router>
    </>
  );
}

export default App;
