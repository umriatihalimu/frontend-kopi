import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-[38px] opacity-75">Menu Kami</h1>
        <div className="flex gap-5 pt-5">
          <div className="flex flex-col items-center  w-[280px] ">
            <Image
              className="w-[280px] h-[200px]  object-cover"
              src={"/images/americano.jpg"}
              alt="kopi1"
              width={500}
              height={500}
            />
            <div className="flex flex-col justify-center items-center ">
              <h2 className="font-semibold mt-2 mb-2 text-[16px] uppercase">
                Americano
              </h2>
              <p className="text-center opacity-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, itaque?
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center  w-[280px] ">
            <Image
              className="w-[280px] h-[200px]  object-cover"
              src={"/images/latte.jpg"}
              alt="kopi1"
              width={500}
              height={500}
            />
            <div className="flex flex-col justify-center items-center ">
              <h2 className="font-semibold mt-2 mb-2 text-[16px] uppercase">
                Latte
              </h2>
              <p className="text-center opacity-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, itaque?
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center  w-[280px] ">
            <Image
              className="w-[280px] h-[200px]  object-cover"
              src={"/images/kopi jahe.jpg"}
              alt="kopi1"
              width={500}
              height={500}
            />
            <div className="flex flex-col justify-center items-center ">
              <h2 className="font-semibold mt-2 mb-2 text-[16px] uppercase">
                Kopi jahe
              </h2>
              <p className="text-center opacity-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, itaque?
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center  w-[280px] ">
            <Image
              className="w-[280px] h-[200px] border  object-cover"
              src={"/images/espresso.jpg"}
              alt="kopi1"
              width={500}
              height={500}
            />
            <div className="flex flex-col justify-center items-center ">
              <h2 className="font-semibold mt-2 mb-2 text-[16px] uppercase">
                Espresso
              </h2>
              <p className="text-center opacity-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, itaque?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
