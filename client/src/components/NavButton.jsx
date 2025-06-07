import React from "react";
import { NavLink } from "react-router-dom";

export default function NavButton({ to, children }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `px-4 py-2 rounded-md font-semibold transition duration-300
        ${
          isActive
            ? "bg-purple-700 text-white shadow-lg"
            : "bg-black text-purple-400 hover:bg-purple-800 hover:text-white"
        }`
      }
    >
      {children}
    </NavLink>
  );
}
