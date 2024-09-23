import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../pages/sign_up";
import Signin from "../pages/sign_in"

export default function Router() {

  return (
          <BrowserRouter>
                  <Routes>
                      <Route path="/signin" element={<Signin />}></Route>
                      <Route path="/signup" element={<Signup />}></Route>
                  </Routes>
          </ BrowserRouter>
  )
}
