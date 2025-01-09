import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        placeholder="Search for recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ color:"black", padding: "10px", width: "300px" }}
      />
      <button onClick={handleSearch} style={{ padding: "10px", marginLeft: "10px" }}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
