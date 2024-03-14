"use client";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const SigninBtn = () => {
  const { data: session } = useSession(); //pke useSession untuk tau apakah sdh authenticated atau belum
  // console.log({ session });

  if (session && session.user) {
    return (
      <div className="font-bold text-lg">
        <p>{session.user.email}</p>
        <Link href={"/api/auth/signout"} className="bg-blue-500 ">
          Sign out
        </Link>
      </div>
    );
  }

  return (
    <div className="font-semibold text-[17px] flex gap-3">
      <Link
        href={"/api/auth/signin"}
        className=" rounded-md p-1 ps-2 pe-2 bg-gray-200 hover:bg-gray-100"
      >
        Sign In
      </Link>
      <Link
        href={"/signup"}
        className=" rounded-md p-1 ps-2 pe-2 bg-gray-200 hover:bg-gray-100"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default SigninBtn;
