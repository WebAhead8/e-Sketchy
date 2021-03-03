import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Store from "./components/Store";
import AboutPage from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CheckoutForm from "./components/CheckoutForm";
import Home from "./Pages/Home";
import Products from "./Pages/ProductsPanel";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CustomerReview from "./components/CustomerReview";
import Profile from "./components/Profile";
import ProductsPanel from "./Pages/ProductsPanel";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/store" exact component={Store} />
      <Route path="/checkout" exact component={CheckoutForm} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/login" exact component={Login} />
      <Route path="/customerreview" exact component={CustomerReview} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/products" exact component={ProductsPanel} />

      <Footer />
    </Router>
  );
}

export default App;
