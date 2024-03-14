import React from "react";

const CreateUser = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-400">
      <div className="border p-3 w-[500px] ">
        <h1 className="text-[28px] font-bold ">Buat Akun Baru</h1>
        <form action="" className="flex flex-col ms-2 me-2 ">
          <input
            type="text"
            placeholder="Email"
            className="p-2 mb-4 mt-4 border rounded-sm"
          />

          <input
            type="text"
            placeholder="Password"
            className="p-2 mb-4 border rounded-sm"
          />
          <button className="ms-[115px] bg-blue-400 hover:bg-blue-300 p-1 w-[250px] font-semibold text-[18px] rounded-md">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
