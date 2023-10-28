import React from "react";
import * as AiIcon from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#606470] text-[#F7F7F7] py-10 w-full">
      <div className="container mx-auto flex gap-[20px]">
        <div className="flex flex-col">
        <AiIcon.AiOutlineInfo size={20} /><h2 className="text-lg font-bold mb-4">Info Kami</h2>
          <p className="mb-2">
          Stationery Store merupakan platform e-commerce terbaru kami yang kami sediakan untuk 
          semua kalangan, kami menyediakan berbagai macam Alat Tulis kantor, berbagai macam kebutuhan 
          sekolah anak, dan berbagai macam kebutuhan mahasiswa. Terdapat beberapa katalog yang kami 
          tampilkan pada situs ini yang dapat mempermudah pelanggan membeli secara cepat dan mudah.
          </p>
          <p className="mb-2">&copy; 2023. Stationery-Store</p>
        </div>
        <div className="flex flex-col">
        <AiIcon.AiOutlineHome size={20} />
          <h2 className="text-lg font-bold mb-4">Lokasi Kami</h2>
          <p className="mb-2">Stationery Store</p>
          <p className="mb-2">
          JL. Gatot Subroto KM.5 Jatiuwung Tangerang Kel. Jatiuwung Kec. Cibodas Kota Tangerang BANTEN
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;