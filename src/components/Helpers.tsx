import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Helpers = () => {
  return (
    <div className="h-[510px] bg-brandDark pt-8 text-brandLight ">
      <h2 className="mx-4 text-3xl font-bold">Our Helpers</h2>
      <p className="mx-8 mt-2">Click for information on:</p>
      <div className="mr-2 mt-10 grid w-full grid-cols-2">
        <div className="mr-1/2 ml-auto h-[243px] w-[269px] -translate-x-16 ">
          <Image
            src="/images/helpers.png"
            alt="illustration of a man standing looking off into the distance"
            width={269}
            height={243}
          />
        </div>
        <div className="mx-0 -mb-8 mr-4 mt-2 flex flex-col justify-between">
          <Button className="font-bold">Symptom Relief</Button>
          <Button className="font-bold">News and Research</Button>
          <Button className="font-bold">Feeling Lost/Isolated</Button>
        </div>
      </div>
    </div>
  );
};

export default Helpers;
