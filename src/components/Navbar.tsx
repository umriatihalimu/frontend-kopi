import React from "react";
import SigninBtn from "./SigninBtn";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center p-4 ms-3 me-3 border-b">
        <h1 className="font-bold text-2xl">LOGO</h1>
        <div className="gap-6 flex text-[13px] font-semibold uppercase">
          <div>
            <Link href={"/dashboard"}>Home</Link>
          </div>
          <div>
            <Link href={"/"}>Menu</Link>
          </div>
          <div>
            <Link href={"/"}>Tentang Kami</Link>
          </div>
          <div>
            <Link href={"/"}>Member</Link>
          </div>
          <Link href={"/"}>Kontak</Link>
        </div>
        <SigninBtn />
      </div>
    </>
  );
};

export default Navbar;
