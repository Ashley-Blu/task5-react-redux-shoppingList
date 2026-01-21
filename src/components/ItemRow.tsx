import React from "react";
import { type List } from "../../redux/listSlice";

interface ItemRowProps {
  list: List;
  onEdit?: (list: List) => void;
  onDelete?: (id: number) => void;
}

const ItemRow: React.FC<ItemRowProps> = ({ list, onEdit, onDelete }) => {
  return (
    <div className="flex justify-between items-center border-b py-2 px-3 hover:bg-gray-50">
      <div>
        <h3 className="font-semibold">{list.name}</h3>
        <p className="text-gray-500 text-sm">{list.category}</p>
      </div>
      <div className="flex gap-2">
        {onEdit && (
          <button
            onClick={() => onEdit(list)}
            className="px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
          >
            Edit
          </button>
        )}
        {onDelete && (
          <button
            onClick={() => onDelete(list.id)}
            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemRow;
