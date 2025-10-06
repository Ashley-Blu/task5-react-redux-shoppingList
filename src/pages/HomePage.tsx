import React from "react";
import { ListCard } from "../components/ListCard";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

export const HomePage: React.FC = () => {
  return (
    <>
      <CgProfile className="h-10 w-10 flex float-right mt-[-8px] mr-[-130px]" />
      <div className="flex justify-center gap-20 mt-10">
        <select className="border w-30 p-1 rounded ">
          <option value="">All</option>
          <option value="">Meat</option>
          <option value="">Treats</option>
          <option value="">Fruits</option>
          <option value="">Vegetables</option>
        </select>
        <div className="flex">
          <input
            type="text"
            placeholder="Search for an item using its name..."
            className=" border p-1.5 rounded w-100 mb-2"
          />
          <IoSearch className="w-6 h-10 ml-[-30px]" />
        </div>
      </div>
    </>
    
  );
};

export default HomePage;
