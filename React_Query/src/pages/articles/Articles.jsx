import React from "react";
import { useSearchParams } from "react-router-dom";

const Articles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const category = searchParams.get("category");

  function handleSortBy() {
    setSearchParams({ sortBy: "views", category: category });
  }
  return (
    <div>
      <h2>Articles</h2>
      <p>Sort By: {sortBy}</p>
      <p>Categoty: {category}</p>
      <button onClick={handleSortBy}>Sort by views</button>
    </div>
  );
};

export default Articles;
