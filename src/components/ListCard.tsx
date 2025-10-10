import React from "react";
import type { List } from "../../redux/listSlice";

interface ListCardProps {
  list: List;
  onEdit?: (list: List) => void;
  onDelete?: (id: number) => void;
}

const ListCard: React.FC<ListCardProps> = ({ list, onEdit, onDelete }) => {
  return (
    <div className="border rounded-lg shadow p-4 flex flex-col items-center bg-white">
      {list.image && (
        <img src={list.image} alt={list.name} className="w-full h-40 object-cover rounded mb-2" />
      )}
      <h3 className="font-bold text-lg">{list.name}</h3>
      <p className="text-gray-600">{list.category}</p>
      {list.notes && <p className="text-gray-400 text-sm mt-1">{list.notes}</p>}
      <div className="mt-2 flex gap-2">
        {onEdit && (
          <button
            onClick={() => onEdit(list)}
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Edit
          </button>
        )}
        {onDelete && (
          <button
            onClick={() => onDelete(list.id)}
            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default ListCard;
