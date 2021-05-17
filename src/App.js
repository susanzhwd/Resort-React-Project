import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import UpdateProfile from "./pages/UpdateProfile";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { RoomProvider } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <RoomProvider>
      <AuthProvider>
        <React.StrictMode>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/forgot-password">
                <ForgotPassword />
              </Route>
              <Route exact path="/update-profile">
                <UpdateProfile />
              </Route>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />

              <Route exact path="/rooms">
                <Rooms />
              </Route>
              <Route exact path="/rooms/:slug">
                <SingleRoom />
              </Route>
              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </Router>
        </React.StrictMode>
      </AuthProvider>
    </RoomProvider>
  );
}

export default App;
