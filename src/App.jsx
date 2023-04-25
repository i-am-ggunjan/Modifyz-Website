import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";
import ShopPage from "./pages/ShopPage";
import RegStore from "./api/RegStore";

const App = () => {
  return (
    <>
      <Router>
        <RegStore>
          <Header></Header>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route
              path="/profile"
              element={<ProfilePage></ProfilePage>}
            ></Route>
            <Route path="/about" element={<AboutPage></AboutPage>}></Route>
            <Route
              path="/contacts"
              element={<ContactPage></ContactPage>}
            ></Route>
            <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
          </Routes>
        </RegStore>
      </Router>
    </>
  );
};

export default App;
