import Image from "next/image";
import Link from "next/link";
import React from "react";

const Member = () => {
  return (
    <div className="flex text-white flex-col items-center justify-center h-screen ">
      <div
        style={{
          position: "relative",
          height: "85vh",
          width: "150vh",
          backgroundImage: `url("https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1661&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)", // Ubah nilai opacity di sini (0.5 adalah contoh nilai)
          }}
          className="flex flex-col items-center justify-center h-screen"
        >
          <h1 className="font-bold z-50 text-[38px] mb-5 ">
            Gabung Untuk Dapatkan Promo Terbaik
          </h1>
          <Link
            href={"/signup"}
            className="p-2 border roundeds font-bold hover:opacity-65"
          >
            Gabung
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Member;
