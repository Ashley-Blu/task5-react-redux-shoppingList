import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../redux/authSlice";
import type { AppDispatch, RootState } from "../../redux/store";
import icon from "../assets/images/list.jpg";
import profile from "../assets/icons/profile.png";

export const SignupPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const authStatus = useSelector((state: RootState) => state.auth.status);

  const [form, setForm] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSignup = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [k: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Name required";
    if (!form.surname.trim()) newErrors.surname = "Surname required";
    if (!form.username.trim()) newErrors.username = "Username required";
    if (!form.email.trim()) newErrors.email = "Valid email required";
    if (!form.password || form.password.length < 6)
      newErrors.password = "Password min 6 chars";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    dispatch(signUpUser({
      username: form.username,
      password: form.password,
      name: `${form.name} ${form.surname}`,
      email: form.email,
    }));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 rounded-2xl shadow-md bg-white">
      <div className="flex justify-end">
        <img src={profile} alt="Profile" className="w-[50px] h-[50px]" />
      </div>
      <div className="flex flex-col items-center mb-6">
        <img src={icon} alt="List logo" className="w-20 h-20 object-cover" />
        <h2 className="text-center text-gray-600 mt-2">
          Fill in the fields below to create an account
        </h2>
      </div>
      <form onSubmit={onSignup} className="space-y-3">
        {["name","surname","username","email","password","phoneNumber"].map((field) => (
          <div key={field}>
            <label className="block text-sm text-gray-600">{field}</label>
            <input
              type={field==="password"?"password":"text"}
              name={field}
              value={form[field as keyof typeof form]}
              onChange={handleChange}
              className="border border-gray-300 w-full rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            {errors[field] && <p className="text-red-600 text-sm">{errors[field]}</p>}
          </div>
        ))}
        <button
          type="submit"
          className="w-full h-[51px] bg-green-500 hover:bg-green-600 text-white font-medium rounded transition"
        >
          {authStatus === "loading" ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};
export default SignupPage;
