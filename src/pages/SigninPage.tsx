import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../../redux/authSlice";
import type { AppDispatch, RootState } from "../../redux/store";
import icon from "../assets/images/list.jpg";
import profile from "../assets/icons/profile.png";

export const SigninPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const authStatus = useSelector((state: RootState) => state.auth.status);
  const authError = useSelector((state: RootState) => state.auth.error);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password) return;
    dispatch(signInUser({ username, password }));
  };

  return (
    <>
      {/* Top right profile icon */}
      <div className="flex justify-end">
        <img
          src={profile}
          alt="Profile"
          className="w-[50px] h-[50px] mr-10 mt-10"
        />
      </div>

      <div className="max-w-2xl mx-auto p-6 rounded-2xl my-auto">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-6">
          <img src={icon} alt="List logo" className="w-30 h-30 object-cover" />
          <h2 className="text-center text-gray-600 mt-2">
            Welcome back! Please sign in to continue
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={onSignin} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Username:
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-300 w-full rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 w-full rounded px-4 py-2"
            />
          </div>

          {authError && (
            <p className="text-red-600 text-sm">{authError}</p>
          )}

          <button
            type="submit"
            className="w-full h-[51px] bg-green-500 hover:bg-green-600 text-white font-medium rounded transition"
          >
            {authStatus === "loading" ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-green-500 hover:underline"
          >
            Sign Up
          </a>
        </div>
      </div>
    </>
  );
};

export default SigninPage;