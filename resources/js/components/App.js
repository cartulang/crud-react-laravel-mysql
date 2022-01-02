import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tasks from "./Tasks";
import Edit from "./Edit";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Tasks />} />
                    <Route path="/edit/:id" exact element={<Edit />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
