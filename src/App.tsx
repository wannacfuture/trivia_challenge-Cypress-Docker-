import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WelcomeScreen } from "./containers";

import "./App.css";

function App() {
  return (
    <div className="App flex flex-col justify-center">
      <BrowserRouter>
        <Routes>
          <Route index element={<WelcomeScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
