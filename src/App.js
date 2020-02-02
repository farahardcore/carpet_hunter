import React from 'react';
import './App.css';
import MainMenu from "./Components/Menu";
import Header from "./Components/Header";
import CarpetWindow from "./Components/CarpetWindow";

function App() {

  return (
    <div className="App">
        <Header/>
        <MainMenu/>
        <div className="game">
            <CarpetWindow/>
            <CarpetWindow/>
            <CarpetWindow/>
            <CarpetWindow/>
            <CarpetWindow/>
            <CarpetWindow/>
            <CarpetWindow/>
            <CarpetWindow/>
            <CarpetWindow/>
        </div>
    </div>

  );
}

export default App;
