import "./App.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import AddCandidate from "./components/Candidate/AddCandidate";
import Grid from "@mui/material/Grid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Alert from "./components/Alert";
import Home from "./components/Home";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { LOGOUT } from "./actions/types";
import Candidate from "./components/Candidate/Candidate";
import PrivateRoute from "./components/route/PrivateRoute";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    // check for token in LS when app first runs
    /* if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser()); */
    // log user out from all tabs if they log out in one tab
    /*  window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    }); */
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route
            path="candidate"
            element={<PrivateRoute component={Candidate} />}
          />
          <Route
            path="addcandidate"
            element={<PrivateRoute component={AddCandidate} />}
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
