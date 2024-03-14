import React from "react";
import SigninBtn from "./SigninBtn";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between p-4 ms-3 me-3 border-b">
        <h1 className="font-bold text-2xl">Coffee SI</h1>
        <SigninBtn />
      </div>
    </>
  );
};

export default Navbar;
