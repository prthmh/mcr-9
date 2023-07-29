import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import PageTemplate from "./pages/PageTemplate/PageTemplate";
import Landing from "./pages/Landing/Landing";
import Explore from "./pages/Explore/Explore";
import Listing from "./pages/Listing/Listing";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PageTemplate>
              <Landing />
            </PageTemplate>
          }
        />
        <Route
          path="/explore"
          element={
            <PageTemplate>
              <Explore />
            </PageTemplate>
          }
        />
        <Route
          path="/videos/:categoryName"
          element={
            <PageTemplate>
              <Listing />
            </PageTemplate>
          }
        />
      </Routes>
    </>
  );
}

export default App;
