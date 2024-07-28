import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full flex pl-16 p-3 z-50 items-center rounded-b-2xl"
      style={{ backgroundColor: "#040B11" }}
    >
      <div className="pr-36 pl-16">
        <NavLink
          to="/"
          className="items-center justify-center font-bold shadow-md flex"
        >
          <img src="./public/Logoo.png" alt="" className="pr-2" />
          <p className="text-white text-xl mt-1">D-CRIME</p>
        </NavLink>
      </div>

      <div className="items-center flex justify-center pl-28">
        <NavLink
          to="/"
          className="items-center justify-center flex font-bold shadow-md pl-8"
        >
          <p className="text-white text-xs">HOME</p>
        </NavLink>

        <NavLink
          to="/"
          className="items-center justify-center flex font-bold shadow-md pl-8"
        >
          <p className="text-white text-xs">KNOW ABOUT</p>
        </NavLink>

        <NavLink
          to="/Reportcrime"
          className="items-center justify-center flex font-bold shadow-md pl-8"
        >
          <p className="text-white text-xs">REPORT</p>
        </NavLink>

        <NavLink
          to="./Map"
          className="items-center justify-center flex font-bold shadow-md pl-8"
        >
          <p className="text-white text-xs">FIND THE ROUTE</p>
        </NavLink>

        <Link
          to="https://mediafiles.botpress.cloud/f989931f-1b36-4af2-8a8a-0325112761f1/webchat/bot.html"
          target="_blank"
          className="items-center justify-center flex font-bold shadow-md pl-8"
        >
          <p className="text-white text-xs">Watson</p>
        </Link>

        <NavLink
          to="/Admin1"
          className="items-center justify-center flex font-bold shadow-md pl-8"
        >
          <p className="text-white text-xs">ADMIN</p>
        </NavLink>
      </div>

      <div className="pl-44">
        <div>
          <SignedOut>
            <SignInButton className="ml-4 py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600" />
          </SignedOut>
          <SignedIn>
            <div className="flex space-x-4">
              <UserButton className="ml-4 py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600" />
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
