import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="mx-auto flex flex-wrap  flex-col md:flex-row items-center bg-[#180142] text-white ">
          <div className=" text-sm font-bold ml-10 md:mr-10 sm:mr-10 ">
            {" "}
            <h1>PORTFOLIO.</h1>
          </div>
          <div className="  text-xl font-bold md:ml-auto md:mr-auto flex flex-wrap items-center  justify-center">
            <Link
              href={""}
              className="m-5 hover:text-[#7b2bbf] hover:underline transition delay-75 duration-300 ease-in-out"
            >
              About
            </Link>

            <Link
              href={""}
              className="m-5 hover:text-[#7b2bbf] hover:underline transition delay-75 duration-300 ease-in-out"
            >
              Experience
            </Link>

            <Link
              href={""}
              className="m-5 hover:text-[#7b2bbf] hover:underline transition delay-75 duration-300 ease-in-out"
            >
              Project
            </Link>

            <Link
              href={""}
              className="m-5 hover:text-[#7b2bbf] hover:underline transition delay-75 duration-300 ease-in-out"
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
