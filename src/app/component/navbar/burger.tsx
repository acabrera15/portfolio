"use client";

import { useState } from "react";
import { NavigationItems } from "./navigation_items";

export const Burger: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="relative">
      {/* Burger Button */}
      <button
        className="absolute right-0 top-[-10px] z-50 hover:animate-wiggle flex flex-col gap-1 h-fit hover:cursor-pointer group"
        onClick={() => setClicked(!clicked)}
      >
        <div
          className={` w-6 h-1 bg-white rounded-xl transition-transform  duration-300 group-hover:translate-x-1 ${
            clicked ? "translate-y-2 rotate-45" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-white rounded-xl transition-opacity duration-300 group-hover:-translate-x-1 ${
            clicked ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-white rounded-xl transition-transform duration-300 group-hover:translate-x-1 ${
            clicked ? "-translate-y-2 -rotate-45" : ""
          }`}
        ></div>
      </button>
      {/* Nav Items */}
      <NavigationItems
        open={clicked}
        links={[
          { link: "", text: "test1", color: "#FFDDA0" },
          { link: "", text: "test2", color: "#000000" },
          { link: "", text: "test3", color: "#FD00DA" },
          { link: "", text: "test3", color: "#FD50DA" },
          { link: "", text: "test3", color: "#FF00DA" },
          { link: "", text: "test3", color: "#FA90DA" },
        ]}
      />
    </div>
  );
};
