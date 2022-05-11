// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useState, React } from "react";
import axios from "axios";
import Feed from "./components/Feed/Feed";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import DisplaySearchedResults from "./components/DisplaySearchedResults/DisplaySearchedResults";

function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={ <PrivateRoute> <ProfilePage /> </PrivateRoute> } />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
