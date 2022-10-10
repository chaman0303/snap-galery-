import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Components/Navbar";
import Photos from "./Components/Photo/Photos";
import Login from "./Components/LoginWithValidation";
// import Signup from "./Components/Signup/SignUp";
import SignupWithValidation from "./Components/Signup/SignupWithValidation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Component404 from "./Components/404";
import PhotosEnlarge from "./Components/Photo/PhotosEnlarge";

// import FunctionalComponent from './Components/FunctionalComponent'
function App() {
  return (
    <>
      <div className="App"></div>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route index element={<Photos />} />
          <Route path="/signup" element={<SignupWithValidation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/photos/:id" element={<PhotosEnlarge />} />
          {/* no match route */}
          <Route path="*" element={<Component404 />} />         
          {/* <FunctionalComponent/> */}
          {/* <Login /> */}
          {/* <Signup /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
