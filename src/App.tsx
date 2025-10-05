import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

function App() {
  const isLoggedIn = false;

  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route
          path="/signin"
          element={!isLoggedIn ? <SigninPage /> : <Navigate to="/home" />}
        />
        <Route
          path="/signup"
          element={!isLoggedIn ? <SignupPage /> : <Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={isLoggedIn ? <HomePage /> : <Navigate to="/signin" />}
        />
        <Route
          path="/profile"
          element={isLoggedIn ? <ProfilePage /> : <Navigate to="/signin" />}
        />
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
