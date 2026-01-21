import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../../redux/authSlice";
import type { AppDispatch, RootState } from "../../redux/store";

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
    <div className="max-w-md mx-auto mt-8 p-6 rounded-2xl shadow-md bg-white">
      <h2 className="text-center text-gray-600 mb-4">Sign In</h2>
      <form onSubmit={onSignin} className="space-y-3">
        <div>
          <label className="block text-sm text-gray-600">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            className="border border-gray-300 w-full rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="border border-gray-300 w-full rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>
        {authError && <p className="text-red-600 text-sm">{authError}</p>}
        <button
          type="submit"
          className="w-full h-[51px] bg-green-500 hover:bg-green-600 text-white font-medium rounded transition"
        >
          {authStatus === "loading" ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};
export default SigninPage;
