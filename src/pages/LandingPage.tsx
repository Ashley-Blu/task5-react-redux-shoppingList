import React from "react";
import { SigninButton } from "../components/SigninButton";
import { SignupButton } from "../components/SignupButton";
import { Navbar } from "../components/Navbar";
import basket from "../assets/images/basket.png";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <>
      <Navbar />

      <div className="text-[32px] font-extrabold mt-20 text-center">
        <h2>The</h2>
        <h1>Grocery</h1>
        <h2>Wishlist</h2>
      </div>

      <div>
        <p className="mt-10 text-gray-500 text-center">
          Grocery shopping has never been this easy. <br />
          Listify helps you organize your shopping list and ensures <br /> you
          don’t forget any essentials. Join us for convenience and peace of
          mind.
        </p>
      </div>

      <img
        src={basket}
        alt="An image of a trolly"
        className="absolute left-50 top-100 w-150 h-130 opacity-40"
      />

      <div className="mt-10 flex flex-col items-center gap-3">
        <Link to="/signin" className="w-full max-w-xs">
          <SigninButton />
        </Link>

        <p className="text-[14px] text-gray-500 text-center">
          Do not have a profile with us? Click below to create one.
        </p>

        <Link to="/signup" className="w-full max-w-xs">
          <SignupButton />
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
