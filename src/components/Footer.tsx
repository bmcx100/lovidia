import Image from "next/image";
import React from "react";
import facebook from "../assets/svgs/facebook.svg";
import xtwitter from "../assets/svgs/xtwitter.svg";
import linkedin from "../assets/svgs/linkedin.svg";
import instagram from "../assets/svgs/instagram.svg";

const Footer = () => {
  return (
    <div className="bg-brandDark pt-6 text-brandLight ">
      <div className="m-w-sx mx-20 flex justify-between">
        <Image src={facebook} alt="facebook logo" width={40} height={40} />
        <Image src={xtwitter} alt="xtwitter logo" width={40} height={40} />
        <Image src={linkedin} alt="linkedin logo" width={40} height={40} />
        <Image src={instagram} alt="instagram logo" width={40} height={40} />
      </div>

      <p className="mx-auto py-4 text-center text-xs text-brandLight/80">
        Property of The Lovidia Collective LLC. ~ Copyright 2024
      </p>
    </div>
  );
};

export default Footer;
