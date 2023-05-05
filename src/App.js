import React from "react";
import "./App.css";

import VendingMachine from "./VendingMachine";
import PretzelPieces from "./PretzelPieces";
import Chips from "./Chips";
import Skittles from "./Skittles";
import NavBar from "./NavBar";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Route exact path="/vending-machine">
                    <VendingMachine />
                </Route>
                <Route exact path="/pretzels">
                    <PretzelPieces />
                </Route>
                <Route exact path="/chips">
                    <Chips />
                </Route>
                <Route exact path="/skittles">
                    <Skittles />
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;
