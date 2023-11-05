// src/components/NavBar/NavBar.jsx

import React from "react";
import { FaBars, FaHome, FaMoon, FaSun } from "react-icons/fa";

function NavBar() {
  let dark = true;

  return (
    <nav id="AppBar" className="fixed w-full bg-blue-500 py-4 px-2">
      <div className="container mx-auto flex justify-between">
        {/**Desktop */}
        <div id="DesktopToolbar" className="hidden md:flex w-full justify-between">
          <FaHome color="white" size={30} />
          <div className="">
            {dark ? <FaSun color="white" size={30} /> : <FaMoon color="white" size={30} />}
          </div>
        </div>

        {/**Mobile */}
        <div id="MobileToolbar" className="flex w-full justify-between md:hidden">
          <FaBars color="white" size={30} />
          <div className="">
            {dark ? <FaSun color="white" size={30} /> : <FaMoon color="white" size={30} />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
