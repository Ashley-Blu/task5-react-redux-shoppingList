import type React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiSquareInfo } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

export const Navbar: React.FC = () => {
  return (
    <>
      <nav className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-0">
          <div className="w-[40px] h-[40px] ml-[50px] mt-[15px] bg-green-600 rounded-full"></div>
          <div className="w-[40px] h-[40px] ml-[-25px] mt-[15px] rounded-full border-2 border-black"></div>
          <p className="mt-[15px] pl-[5px] font-semibold text-[20px]">Listify</p>
        </div>
        <div className="flex items-center gap-8 pr-10 mt-[15px]">
          <p className="cursor-pointer hover:text-green-600 text-[12px]">
            <IoHomeOutline className="h-5 w-10" />
            Home
          </p>
          <p className="cursor-pointer hover:text-green-600 text-[12px]">
            <CiSquareInfo className="h-5 w-10" />
            About
          </p>
          <p className="cursor-pointer hover:text-green-600 text-[12px]">
            <CgProfile  className="h-5 w-10" />
            Profile
          </p>
        </div>
      </nav>
    </>
  );
};
