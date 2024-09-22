import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../pages/sign_up";

export default function Router() {

  return (
          <BrowserRouter>
                  <Routes>
                      <Route path="/signup" element={<Signup />}></Route>
                  </Routes>
          </ BrowserRouter>
  )
}
