import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home/Home";
import Index from "./pages/Index/Index";
import Nav from "./components/Nav/Nav";
import "./reset.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [sidebarPullout, setSidebarPullout] = useState(false);

  const handleSidebarPullout = () => {
    setSidebarPullout(!sidebarPullout);
  }

  return (
    <div className="App">
      <Router>
        <Nav sidebarPullout={sidebarPullout} setSidebarPullout={handleSidebarPullout} />
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/home">
            <Home sidebarPullout={sidebarPullout} setSidebarPullout={handleSidebarPullout} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
