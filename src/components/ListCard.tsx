import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../redux/listSlice";
import type { RootState, AppDispatcher } from "../../redux/store";
import { IoMdAdd } from "react-icons/io";
import noItems from '../assets/images/no-items.png'

export const ListCard: React.FC = () => {
  const [itemName, setItemName] = useState("");
  const dispatch = useDispatch<AppDispatcher>();
  const lists = useSelector((state: RootState) => state.lists.lists);

  const handleAddItem = () => {
    if (itemName.trim() !== "") {
      dispatch(addItem(itemName));
      setItemName("");
    }
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 rounded">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Enter the name of the item..."
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleAddItem}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center gap-2"
        >
          <IoMdAdd />
          Add 
        </button>
      </div>

      <h1 className="text-xl font-semibold mb-3">Shopping List</h1>

      {lists.length === 0 ? (
        <p className="text-gray-500"><img src={noItems} alt="" /></p>
      ) : (
        lists.map((list: { id: number; name: string }) => (
          <div
            key={list.id}
            className="flex justify-between items-center bg-gray-100 rounded p-2 mb-2"
          >
            <span>{list.name}</span>
            <button
              onClick={() => handleRemoveItem(list.id)}
              className="bg-red-500 text-white px-3 py-1 hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};
