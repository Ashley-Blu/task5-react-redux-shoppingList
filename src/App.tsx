import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import { useSelector } from "react-redux";
import { type RootState } from "../redux/store";
import errorPage from './assets/images/404.png'

function App() {
  const isLoggedIn = useSelector((state: RootState) => !!state.auth.currentUser);

  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/signin" element={!isLoggedIn ? <SigninPage /> : <Navigate to="/home" />} />
      <Route path="/signup" element={!isLoggedIn ? <SignupPage /> : <Navigate to="/signin" />} />
      <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/" />} />
      <Route path="/profile" element={isLoggedIn ? <ProfilePage /> : <Navigate to="/profile" />} />
      <Route path="*" element={<div><img src={errorPage} className="opacity-50 w-full h-full fixed"/></div>} />
    </Routes>
  );
}

export default App;
