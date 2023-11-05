// src/components/NavBar/NavBar.jsx

import React, { useState } from "react";
import { FaBars, FaHome, FaMoon, FaSun, FaUser } from "react-icons/fa";
import SideBar from "../SideBar/SideBar";

function NavBar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  let dark = true;

  return (
    <nav id="AppBar" className="fixed w-full bg-blue-500 py-4 px-2">
      <div className="container mx-auto flex justify-between">
        {/**Desktop */}

        <div id="DesktopToolbar" className="hidden md:flex w-full justify-between">
          <div>
            <SideBar isSidebarVisible={true} />
          </div>
          <div className="cursor-pointer">
            {dark ? <FaSun color="white" size={30} /> : <FaMoon color="white" size={30} />}
          </div>
          <div className="text-white">Search...</div>

          <div className="flex gap-2 cursor-pointer">
            <FaUser color="white" size={30} />
          </div>
        </div>

        {/**Mobile */}
        <div id="MobileToolbar" className="flex w-full justify-between md:hidden">
          <FaBars color="white" size={30} onClick={() => setIsSidebarVisible(!isSidebarVisible)} />
          <div className="text-white">search...</div>

          <div className="flex gap-2">
            {dark ? <FaSun color="white" size={30} /> : <FaMoon color="white" size={30} />}
            <FaUser color="white" size={30} />
          </div>

          {isSidebarVisible && <SideBar isSidebarVisible={isSidebarVisible} />}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
