import Image from "next/image";
import React from "react";
import { MdCoffeeMaker } from "react-icons/md";
import { GiCoffeeBeans } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";

const About = () => {
  return (
    <div className="container ">
      <h1 className="font-bold text-[38px] opacity-75 mb-10">Tentang Kami</h1>
      {/* gambar */}
      <div className="flex gap-16">
        <div className="w-[400px] h-[270px] ">
          <Image
            src={"/images/tentang.jpg"}
            alt=""
            width={500}
            height={500}
            className="object-cover w-[400px] h-[270px]"
          />
        </div>
        <div className="w-[600px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          aperiam blanditiis, illum, aspernatur aut maiores beatae tenetur iste,
          itaque sed laboriosam. Esse error dignissimos et aperiam cupiditate
          nihil perspiciatis unde magni repudiandae porro minima, atque amet
          deserunt, odio inventore officia repellendus exercitationem maiores
          distinctio, necessitatibus id incidunt qui. Iusto, accusantium!
          <div className="flex gap-3 mt-4">
            <div className="flex flex-col items-center justify-center text-center ">
              <p className="font-bold text-[14px] mb-1">
                Diproses dengan mesin berteknologi tinggi
              </p>
              <MdCoffeeMaker size={40} className="opacity-75" />
            </div>
            <div className="flex flex-col items-center justify-center text-center ">
              <p className="font-bold text-[14px] mb-1">
                Bekerja sama dengan perkebunan kopi terbaik
              </p>
              <FaHandshake size={40} className="opacity-75" />
            </div>
            <div className="flex flex-col items-center justify-center text-center ">
              <p className="font-bold text-[14px] mb-1">
                Biji kopi berkualitas
              </p>
              <GiCoffeeBeans size={40} className="opacity-75" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
