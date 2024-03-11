import React from "react";
import { Button } from "./ui/button";
import Divider from "./Divider";

const You = () => {
  return (
    <section className="mx-2">
      <h2 className="mt-8 text-left text-3xl font-medium">Want To Help?</h2>
      <p className="ml-2 mt-2 leading-3">
        <span className="text-lg font-bold">Two Super Easy Steps</span> will
        make a huge difference in how we help others.
      </p>
      <div className="mt-10">
        <Button className="-rotate-12 rounded-md px-8 py-4 text-lg font-medium">
          Step 1
        </Button>
        <h3 className="ml-5 mt-3 text-lg font-bold">
          Sign Up for our Newsletter.
        </h3>
        <div>
          <Button
            variant="outline"
            className="ml-5 mt-1 w-full max-w-xs justify-start text-left text-brandDark/70"
          >
            Enter your email address
          </Button>
          {/* <p>arrow</p> */}
        </div>
        <p className="ml-6 mr-4 mt-1 leading-tight">
          You pick what info and how often, but sign up and be a number for
          change.
        </p>
      </div>

      <div className="mt-10">
        <div className="flex items-end justify-between">
          <Button className="-rotate-12 rounded-md px-8 py-4 text-lg font-medium">
            Step 2
          </Button>

          {/* <p>CONFIDENTIAL</p> */}
        </div>
        <h3 className="ml-5 mt-3 text-lg font-bold">Share your experience.</h3>

        <div className="mx-6 flex flex-col items-center">
          <Button
            className="mt-4 h-[26.5px] w-44  self-start lowercase"
            variant="outline"
          >
            share@lovidia.com
          </Button>
          <p className="my-1 text-sm font-bold">OR</p>
          <Button className="h-[26.5px] w-44 self-end">Contact Form</Button>
        </div>
        <p className="ml-6 mr-4 mt-4 leading-tight">
          Learning your experience with Long COVID is essential to us helping
          others, please help us.
        </p>

        <div className="mt-8"></div>
      </div>
    </section>
  );
};

export default You;
