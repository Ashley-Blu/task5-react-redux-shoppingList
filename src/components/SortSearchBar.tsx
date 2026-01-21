import React, { useState } from "react";

interface SortSearchProps {
  categories: string[];
  onSearch: (term: string) => void;
  onFilter: (category: string) => void;
}

const SortSearch: React.FC<SortSearchProps> = ({ categories, onSearch, onFilter }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="flex gap-4 mb-4">
      <input
        type="text"
        placeholder="Search items..."
        value={search}
        onChange={handleSearchChange}
        className="border rounded px-3 py-2 w-60"
      />
      <select
        value={category}
        onChange={handleCategoryChange}
        className="border rounded px-3 py-2"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

export default SortSearch;
