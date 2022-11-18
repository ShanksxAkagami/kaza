import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//style
import "./styles/style.css";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="App">
        <Router>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="products/:productId" element={<Product />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;