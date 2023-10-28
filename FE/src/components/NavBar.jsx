import React, { useContext } from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <>
      <nav>
        <div className="icon-container">
          <h1>stationery store</h1>
        </div>
        <ul>
          <li>
            <NavLink to={"/"}>Beranda</NavLink>
          </li>
          <li>
            <NavLink to={"about"}>Katalog</NavLink>
          </li>
          <li>
            <NavLink to={"contact"}>Belanja</NavLink>
          </li>
          <li>
            <NavLink to={"result"}>Pesanan Saya</NavLink>
          </li>
         
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
