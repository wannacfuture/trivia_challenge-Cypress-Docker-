import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

import { WelcomeScreen, LoadingScreen, QuizScreen } from "./containers";

import "./App.css";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App flex flex-col justify-center">
        <BrowserRouter>
          <Routes>
            <Route path="welcome" element={<WelcomeScreen />} />
            <Route index element={<LoadingScreen firstLoad={true} />} />
            <Route path="quiz" element={<QuizScreen />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
