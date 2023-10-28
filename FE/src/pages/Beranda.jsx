// component
import Header from "../components/Header";
import { Curious } from "../components/Assets";
import { ThemeContext } from "../context/themeContext";

// library
import React, { useContext, useState } from "react";
import { ScreenContext } from "../context/screenContenxt";

const Beranda = () => {
  const { theme } = useContext(ThemeContext);
  const { screenSize } = useContext(ScreenContext);
  const [number, setNumber] = useState(0);
  
  return (
    <>
      <Header />
      <main className={theme}>
        <div
          className={`container ${
            screenSize > 1000
              ? "row flex-full"
              : screenSize > 600 && screenSize <= 1000
              ? "column"
              : "column full-width item-center"
          }`}
        >
          <div className="container row item-center">
            <Curious />
            <div className="container column">
              <h1>Berbagai Macam Produk Alat Tulis</h1>
              <p>
             Alat Tulis Kantor
              </p>
              <p>
             Keperluan Sekolah
              </p>
              <p>
             Keperluan Mahasiswa
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Beranda;
