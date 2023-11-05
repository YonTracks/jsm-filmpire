// src/components/SideBar/SideBar.jsx

import React from "react";

function SideBar({ isSidebarVisible }) {
  const categories = [
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" }
  ];
  const genres = [
    { label: "Comedy", value: "popular" },
    { label: "Action", value: "top_rated" },
    { label: "Horror", value: "upcoming" },
    { label: "Animation", value: "upcoming" }
  ];
  return (
    <div
      className={`fixed w-72 h-full border border-l-2 top-0 ${
        isSidebarVisible ? "right-0 md:left-0" : "md:left-0"
      } bg-white`}>
      <h2 className="text-blue-500 font-extrabold text-center py-4 text-3xl">FilmPire</h2>
      <hr />
      <div className="p-2 space-y-6">
        <h2 className="text-start text-xl ">Categories</h2>
        <hr />
        {categories.map((e, i) => (
          <h2 key={i} className="text-black cursor-pointer">
            {e.label}
          </h2>
        ))}
        <hr />
        <h2 className="text-start text-xl ">Genres</h2>
        <hr />
        {genres.map((e, i) => (
          <h2 key={i} className="text-black cursor-pointer">
            {e.label}
          </h2>
        ))}
        <hr />
      </div>
    </div>
  );
}

export default SideBar;
