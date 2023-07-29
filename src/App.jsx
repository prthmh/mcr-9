import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PageTemplate from "./pages/PageTemplate/PageTemplate";
import Landing from "./pages/Landing/Landing";
import Explore from "./pages/Explore/Explore";
import Listing from "./pages/Listing/Listing";
import WatchLater from "./pages/WatchLater/WatchLater";
import PlaylistPage from "./pages/PlaylistPage/PlaylistPage";
import SingleVideo from "./pages/SingleVideo/SingleVideo";
import PlayListVids from "./pages/PlayListVids/PlayListVids";


function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1800}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
        <Route
          path="/watchLater"
          element={
            <PageTemplate>
              <WatchLater />
            </PageTemplate>
          }
        />
        <Route
          path="/playlist"
          element={
            <PageTemplate>
              <PlaylistPage />
            </PageTemplate>
          }
        />
        <Route
          path="/playlist/:playlistId"
          element={
            <PageTemplate>
              <PlayListVids />
            </PageTemplate>
          }
        />
        <Route
          path="/video/:vidId"
          element={
            <PageTemplate>
              <SingleVideo />
            </PageTemplate>
          }
        />
      </Routes>
    </>
  );
}

export default App;
