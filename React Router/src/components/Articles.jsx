import React from "react";
import { useSearchParams } from "react-router-dom";

function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const category = searchParams.get("category");

  const handleSort = () => {
    setSearchParams({
      sortBy: "views",
      category,
    });
  };

  return (
    <div>
      <h2>
        Articles
        <p>
          SortBy:{sortBy} category:{category}
        </p>
      </h2>

      <button onClick={handleSort}>Sort by views</button>
    </div>
  );
}

export default Articles;
