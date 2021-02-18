import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Store from "./components/Store";
import AboutPage from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CheckoutForm from "./components/CheckoutForm";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/store" exact component={Store} />
      <Route path="/checkout" exact component={CheckoutForm} />
      <Footer />
    </Router>
  );
}

export default App;
