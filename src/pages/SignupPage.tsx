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

    dispatch(
      signUpUser({
        username: form.username,
        password: form.password,
        name: `${form.name} ${form.surname}`,
        email: form.email,
        phoneNumber: form.phoneNumber,
      })
    );
  };

  // Map fields to state keys
  const fieldPairs: [string, keyof typeof form][] = [
    ["Name", "name"],
    ["Surname", "surname"],
    ["Username", "username"],
    ["Email", "email"],
    ["Phone Number", "phoneNumber"],
    ["Password", "password"],
  ];

  // Group into pairs for side-by-side display
  const groupedFields: [typeof fieldPairs[0], typeof fieldPairs[0]][] = [
    [fieldPairs[0], fieldPairs[1]],
    [fieldPairs[2], fieldPairs[3]],
    [fieldPairs[4], fieldPairs[5]],
  ];

  return (
    <>
      <div className="flex justify-end">
        <img
          src={profile}
          alt="Profile"
          className="w-[50px] h-[50px] mr-10 mt-10"
        />
      </div>

      <div className="max-w-2xl mx-auto p-6 rounded-2xl my-auto">
        <div className="flex flex-col items-center mb-6">
          <img src={icon} alt="List logo" className="w-30 h-30 object-cover" />
          <h2 className="text-center text-gray-600 mt-2">
            Fill in the fields below to create an account
          </h2>
        </div>

        <form onSubmit={onSignup} className="space-y-3">
          {groupedFields.map((pair, idx) => (
            <div key={idx} className="flex gap-4 mb-4">
              {pair.map(([label, key]) => (
                <div key={key} className="w-1/2">
                  <label className="block text-sm text-gray-600">{label}:</label>
                  <input
                    type={key === "password" ? "password" : "text"}
                    name={key}
                    value={form[key]}
                    onChange={handleChange}
                    className="border border-gray-300 w-full rounded px-4 py-2"
                  />
                  {errors[key] && (
                    <p className="text-red-600 text-sm">{errors[key]}</p>
                  )}
                </div>
              ))}
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
    </>
  );
};

export default SignupPage;
