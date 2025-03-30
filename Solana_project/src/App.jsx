import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WalletContextProvider } from "./context/walletcontext";
import Navbar from "./pages/Navbar";
import Dashboard from "./pages/Dashboard";
import TokenCreator from "./pages/TokenCreator";
import Signup from "./pages/Signup";
import "./App.css";
import "./index.css";


const App = () => {
  return (
    <WalletContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Signup />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/token-creator" element={<TokenCreator />} />
        </Routes>
      </Router>
    </WalletContextProvider>
  );
};

export default App;
