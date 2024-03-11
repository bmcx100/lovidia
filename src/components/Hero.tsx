import React from "react";
import { Button } from "./ui/button";
import Divider from "./Divider";

const Hero = () => {
  return (
    <section className="mx-4 mt-8">
      <div className="relative flex flex-col items-end gap-5">
        <h1 className="z-10 w-80 self-start text-3xl">
          Your <span className="font-black tracking-tighter">Long COVID </span>
          Resource Website
        </h1>
        <div className="z-1 absolute left-1 top-5 h-2 w-[290px] bg-brandPrimary"></div>
        <p className="mt-2 w-72">
          Alleviating symptoms, simplying access to information and leveraging
          our numbers to create change.
        </p>
        <div className="flex flex-col">
          <Button variant="default" className="mt-4">
            Learn more
          </Button>
        </div>
      </div>
      <div className="mt-10"></div>
      <Divider />
    </section>
  );
};

export default Hero;
