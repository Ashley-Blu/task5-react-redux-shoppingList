import { SigninButton } from "../components/SigninButton";
import { SignupButton } from "../components/SignupButton";
import { Navbar } from "../components/Navbar";
import basket from "../assets/images/basket.png";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <Navbar />

      <div className="text-[32px] font-extrabold mt-20">
        <h2>The</h2>
        <h1>Grocery</h1>
        <h2>Wishlist</h2>
      </div>

      <div>
        <p className="mt-10 text-gray-500">
          Grocery shopping has never been this easy. <br />
          Listify is one way to to organize your shopping list and making sure{" "}
          <br /> you do not forget any essentials. Join us for the incenvenience
          and peace of mind.
        </p>
      </div>
      <img
        src={basket}
        className="float-left mr-[-800px] w-200 h-120 opacity-30"
      />
      <Link to="/signin">
        <SigninButton />
      </Link>
      <p className="text-[14px] pt-3">
        Do not have a profile with us? Click button below to create one.
      </p>
      <Link to="/signup">
        <SignupButton />
      </Link>
    </>
  );
}

export default LandingPage;
