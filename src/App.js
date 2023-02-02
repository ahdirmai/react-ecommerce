import React from "react";

// import React Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Home
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

// import Component
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/product/:id"
            element={<ProductDetails></ProductDetails>}
          ></Route>
        </Routes>
        <Sidebar />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
