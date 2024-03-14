"use client";
import { baseurl } from "@/lib/variabel";
import React, { useRef } from "react";

interface FormInput {
  email: string;
  password: string;
}

const Signup = () => {
  const createUser = async () => {
    const res = await fetch(baseurl + "/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        email: data.current.email,
        password: data.current.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status !== 201) {
      return alert("Akun tidak dapat dibuat, Periksa email ");
    }
    await res.json();
    alert("Akun berhasil dibuat");
  };

  // untuk ubah inputannya
  const data = useRef<FormInput>({
    email: "",
    password: "",
  });

  return (
    <div className="flex items-center justify-center h-screen bg-black/45">
      <div className="border p-3 w-[500px] ">
        <h1 className="text-[28px] font-bold ">Buat Akun Baru</h1>
        <form action="" className="flex flex-col ms-2 me-2 ">
          <input
            type="text"
            placeholder="Email"
            required
            className="p-2 mb-4 mt-4 border rounded-sm"
            onChange={(e) => (data.current.email = e.target.value)}
          />

          <input
            type="text"
            placeholder="Password"
            required
            className="p-2 mb-4 border rounded-sm"
            onChange={(e) => (data.current.password = e.target.value)}
          />
          <button
            className="ms-[115px] bg-blue-400 hover:bg-blue-300 p-1 w-[250px] font-semibold text-[18px] rounded-md"
            onClick={createUser}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
