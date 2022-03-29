import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Orcamentos from "./components/pages/Orcamentos";
import NossosMecanicos from "./components/pages/NossosMecanicos";
import Agendar from "./components/pages/Agendar";

function App() {
  return (
    <Router>
      <header className="header">
        <h1>logo</h1>
        <h1>Jaison Mecânicas</h1>
        <h1>
          <IoIosNotificationsOutline />
          <CgProfile />
        </h1>
      </header>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/agendar" exact>
          <Agendar />
        </Route>
        <Route path="/orcamentos" exact>
          <Orcamentos />
        </Route>
        <Route path="/nossosmecanicos" exact>
          <NossosMecanicos />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
