import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WelcomeScreen, LoadingScreen } from "./containers";

import "./App.css";

function App() {
  return (
    <div className="App flex flex-col justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="welcome" element={<WelcomeScreen />} />
          <Route index element={<LoadingScreen firstLoad={true} />} />
          <Route path="quiz" element={<LoadingScreen firstLoad={false} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
