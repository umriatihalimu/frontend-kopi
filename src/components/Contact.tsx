import Image from "next/image";
import React from "react";
import { RiHomeOfficeFill } from "react-icons/ri";
import { FaCalendarDays } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { MdWhatsapp } from "react-icons/md";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="font-bold text-[38px] opacity-75 mb-10">Kontak Kami</h1>

        <div className="flex gap-9">
          {/* foto */}
          <div className="flex flex-col items-center justify-center">
            <Image src={"/images/kontak.jpg"} alt="" width={500} height={500} />
            <p className="mt-5 text-[15px]">
              {
                '"Rasakan Aroma, Nikmati Sensasinya: Kopi Terbaik Hanya di Sini!"'
              }
            </p>
          </div>

          {/* isi */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <RiHomeOfficeFill size={28} />
              <p className="opacity-60 font-bold">Office</p>
            </div>
            <hr />

            <div>
              <p className="opacity-60 font-bold">Baubau</p>
              <p>Jl.Pahlawan, Kilo 2 No.8, Baubau, Sulawesi Tenggara 93737</p>
              <p>Telp. +628123456789</p>
            </div>
            <div>
              <p className="opacity-60 font-bold">Kendari</p>
              <p>
                Jl.Kancil, Lorong Duku No.10, Kendari, Sulawesi Tenggara 93731
              </p>
              <p>Telp. +628123456789</p>
            </div>
            <hr />

            <div className="flex gap-5">
              <FaCalendarDays size={28} />
              <p className="opacity-60 font-bold">Store</p>
            </div>
          </div>
        </div>
        {/* sosial media */}
        <div className="flex flex-col items-center justify-center gap-2 mt-28">
          <h1 className="font-bold text-[38px] opacity-75 mb-3">
            Sosial Media
          </h1>
          <p>Hubungi kami melalui :</p>
          <div className="flex items-center justify-center gap-16 mt-4">
            <Link
              href={"/"}
              className="flex flex-col items-center justify-center opacity-60 hover:opacity-85 gap-2"
            >
              <FaInstagram size={40} />
              <p>@wecoffee_</p>
            </Link>
            <Link
              href={"/"}
              className="flex flex-col items-center justify-center opacity-60 hover:opacity-85 gap-2"
            >
              <CiFacebook size={40} />
              <p>wecoffee</p>
            </Link>

            <Link
              href={"/"}
              className="flex flex-col items-center justify-center opacity-60 hover:opacity-85 gap-2"
            >
              <MdWhatsapp size={40} />
              <p>+62123456789</p>
            </Link>
            <Link
              href={"/"}
              className="flex flex-col items-center justify-center opacity-60 hover:opacity-85 gap-2"
            >
              <MdOutlineMailOutline size={40} />
              <p>wecoffee@gmail.com</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
