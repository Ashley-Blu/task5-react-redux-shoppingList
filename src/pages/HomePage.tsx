// pages/HomePage.tsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import {
  loadLists,
  createListAsync,
  updateListAsync,
  deleteListAsync,
  type List,
} from "../../redux/listSlice";
import SortSearch from "../components/SortSearchBar";
import ItemRow from "../components/ItemRow";
import Modal from "../components/Modal";
import { IoMdAdd } from "react-icons/io";
import noItems from "../assets/images/no-items.png";

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const lists = useSelector((state: RootState) => state.lists.lists);

  const [filteredLists, setFilteredLists] = useState<List[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<List | null>(null);
  const [form, setForm] = useState({ name: "", category: "", notes: "", image: "" });

  const categories = Array.from(new Set(lists.map((l) => l.category))).filter(Boolean);

  useEffect(() => {
    dispatch(loadLists());
  }, [dispatch]);

  useEffect(() => {
    setFilteredLists(lists);
  }, [lists]);

  // ─── Search & Filter
  const handleSearch = (term: string) => {
    setFilteredLists(lists.filter((l) => l.name.toLowerCase().includes(term.toLowerCase())));
  };

  const handleFilter = (category: string) => {
    setFilteredLists(category ? lists.filter((l) => l.category === category) : lists);
  };

  // ─── Modal
  const openAdd = () => {
    setEditing(null);
    setForm({ name: "", category: "", notes: "", image: "" });
    setShowModal(true);
  };

  const openEdit = (list: List) => {
    setEditing(list);
    setForm({
      name: list.name,
      category: list.category,
      notes: list.notes || "",
      image: list.image || "",
    });
    setShowModal(true);
  };

  const handleSave = () => {
    if (!form.name.trim()) return;

    if (editing?.id != null) {
      dispatch(updateListAsync({ id: editing.id, payload: form }));
    } else {
      dispatch(createListAsync(form)); // id optional now
    }

    setShowModal(false);
    setEditing(null);
    setForm({ name: "", category: "", notes: "", image: "" });
  };

  const handleDelete = (id: number) => {
    dispatch(deleteListAsync(id));
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Shopping List</h1>
        <button
          onClick={openAdd}
          className="flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          <IoMdAdd />
          Add
        </button>
      </div>

      <SortSearch categories={categories} onSearch={handleSearch} onFilter={handleFilter} />

      {filteredLists.length === 0 ? (
        <div className="text-center mt-10 text-gray-500">
          <img src={noItems} alt="No items" className="mx-auto w-32 h-32" />
          <p>No items found.</p>
        </div>
      ) : (
        filteredLists.map((list) => (
          <ItemRow key={list.id} list={list} onEdit={openEdit} onDelete={handleDelete} />
        ))
      )}

      {showModal && (
        <Modal title={editing ? "Edit List Item" : "Add List Item"} onClose={() => setShowModal(false)}>
          <div className="flex flex-col gap-3">
            <label className="text-sm">Name</label>
            <input
              className="border p-2 rounded"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <label className="text-sm">Category</label>
            <input
              className="border p-2 rounded"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            />

            <label className="text-sm">Notes</label>
            <textarea
              className="border p-2 rounded"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />

            <label className="text-sm">Image URL</label>
            <input
              className="border p-2 rounded"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
            />

            <div className="flex justify-end gap-2 mt-2">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 border rounded">
                Cancel
              </button>
              <button onClick={handleSave} className="px-4 py-2 bg-green-600 text-white rounded">
                Save
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
