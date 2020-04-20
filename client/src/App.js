import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";
import "./reset.scss"

function App() {
  const [sidebarPullout, setSidebarPullout] = useState(false);

  const handleSidebarPullout = () => {
    setSidebarPullout(!sidebarPullout);
  }

  return (
    <div className="App">
      <Nav sidebarPullout={sidebarPullout} setSidebarPullout={handleSidebarPullout}/>
      <Home sidebarPullout={sidebarPullout} setSidebarPullout={handleSidebarPullout}/>
    </div>
  );
}

export default App;
