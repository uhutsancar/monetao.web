import React, { useEffect, useState, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserProvider from "./context/UserContext";
import { Toaster } from "react-hot-toast";


// Lazy load pages (code splitting)
const Login = lazy(() => import("./pages/Auth/Login"));
const SignUp = lazy(() => import("./pages/Auth/SignUp"));
const Home = lazy(() => import("./pages/Dashboard/Home"));
const Income = lazy(() => import("./pages/Dashboard/Income"));
const Expense = lazy(() => import("./pages/Dashboard/Expense"));

function App() {
  return (
    <Router>
      <UserProvider>
        <Suspense fallback={<div className="p-10">Loading...</div>}>
          <AppRoutes />
        </Suspense>

        <Toaster
          toastOptions={{
            className: "",
            style: {
              fontSize: "13px",
            },
          }}
        />
      </UserProvider>
    </Router>
  );
}

export default App;

// Root route handling
const Root = () => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuth(!!token);
  }, []);

  if (auth === null) return <div>Loading...</div>;

  return auth ? <Navigate to="/dashboard" /> : <Navigate to="/login" />;
};

// Separated routes for readability and reuse
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Root />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signUp" element={<SignUp />} />
    <Route path="/dashboard" element={<Home />} />
    <Route path="/expense" element={<Expense />} />
    <Route path="/income" element={<Income />} />
  </Routes>
);
