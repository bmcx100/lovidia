import Image from "next/image";
import React from "react";
import hamburgermenu from "../assets/svgs/hamburgermenu.svg";
import Divider from "./Divider";

const Navbar = () => {
  return (
    <header className="w-full px-5 py-3">
      <nav className="flex items-center justify-between">
        <div className=" flex flex-col items-center justify-center">
          <div className="mt-2 h-[30px] w-[30px] rounded-full  bg-brandDark"></div>
          <p className="font-medium">lovidia </p>
        </div>

        <Image src={hamburgermenu} alt="mobile menu" width={42} height={42} />
      </nav>
      <Divider />
    </header>
  );
};

export default Navbar;
