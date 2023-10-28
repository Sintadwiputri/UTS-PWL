import React, { useContext, useEffect, useState } from "react";
import {
  Buku,
  Binder,
  Penciltic,
  Spidol,
  Stabilo,
  Pulpen,
  Kertas,
  BinderB5,
  BinderA5,
} from "../components/Assets";


const Katalog = () => {
  return (
    <main>
      <div className="container column full-width">
        <div className="container row full-width minimal-gap">
          <div className="container column">
            <h3>Buku Tulis Campus</h3>
            <Buku />
          </div>
          <div className="container column">
            <h3>Binder Besar</h3>
            <Binder />
          </div>
          <div className="container column">
            <h3>Pencil Zebra</h3>
            <Penciltic />
          </div>
        </div>
      </div>
      <div className="container column full-width">
        <div className="container row full-width minimal-gap">
          <div className="container column">
            <h3>Spildol Berwarna</h3>
            <Spidol />
          </div>
          <div className="container column">
            <h3>Stabilo Berwarna</h3>
            <Stabilo />
          </div>
          <div className="container column">
            <h3>Pulpen Berwarna</h3>
            <Pulpen />
          </div>
        </div>
      </div>
      <div className="container column full-width">
        <div className="container row full-width minimal-gap">
          <div className="container column">
            <h3>Kertas Binder</h3>
            <Kertas />
          </div>
          <div className="container column">
            <h3>Binder A5</h3>
            <BinderA5 />
          </div>
          <div className="container column">
            <h3>Binder B5</h3>
            <BinderB5 />
          </div>
        </div>
      </div>
      <div className="container column full-width">
        <div className="container row full-width minimal-gap">
          <div className="container column">
            <h3>Buku Tulis Campus</h3>
            <Buku />
          </div>
          <div className="container column">
            <h3>Binder Besar</h3>
            <Binder />
          </div>
          <div className="container column">
            <h3>Pencil Zebra</h3>
            <Penciltic />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Katalog;