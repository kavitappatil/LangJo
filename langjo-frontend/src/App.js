import logo from "./logo.svg";
import "./App.css";
import LogIn from "./components/LogIn";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Pages from "./Pages";
import SignUp from './component/SignUp';
  


function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Pages />
      </div>
      <div className="App">
      <SignUp/>
      </div>
      <div><LogIn /></div>
    </div>
  );
}

export default App;
