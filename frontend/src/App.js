import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import InspirationDetail from "./components/FeaturedInspiration/InspirationDetail";
import AddBooks from "./pages/AddBooks/AddBooks";
import Header from "./components/Header/Header";
import AuthPage from "./pages/auth/AuthPage/AuthPage";
import Profile from "./pages/Profile/Profile";
import Footer from "./components/Footer/Footer";
import SingleBook from "./pages/SingleBook/SingleBook";
import { AuthProvider } from "./AuthProvider";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div className="App">
      <AuthProvider>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={ <Home /> }
          />
          <Route path="/inspiration/:id" element={<InspirationDetail />} />
          <Route path="/add-book" element={<AddBooks />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/book/:id" element={<SingleBook />} />
          <Route
            path="/profile"
            element={token ? <Profile /> : <Navigate to="/auth" />}
          />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
