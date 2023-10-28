import React from "react";
import Ungu from "../assets/ungu.png";
import binderB from "../assets/binder besar.jpg";
import penciltic from "../assets/zebra.jpeg";
import campus from "../assets/campus.jpg";
import spidol from "../assets/spidol.jpeg"
import stabilo from "../assets/stabiloo.jpeg"
import pulpenw from "../assets/pulpen warna.jpg"
import kbinder from "../assets/kertas binder.webp"
import bindera5 from "../assets/bindera5.jpeg"
import binderb5 from "../assets/binderb5.jpeg"

export const Curious = ({ width }) => {
  return (
    <>
      <a
        href="https://storyset.com/illustration/in-no-time/amico"
        target="_blank"
        rel="noreferrer"
      >
        <img
          width={width == null ? 300 : width}
          height={width == null ? 300 : width}
          src={Ungu}
          alt="ungu.png"
        />
      </a>
    </>
  );
};
export const Buku = () => {
  return(
    <>
      <img
      width={300} 
      src={campus}
      alt="campus.jpg"
      />
    </>
  );
};
export const Binder = () => {
  return (
    <>
      <img
        width={300} 
        src={binderB}
        alt="binder besar.jpg"
      />
    </>
  );
};
export const Penciltic = () => {
  return (
    <>
      <img
         width={300} 
        src={penciltic}
        alt="zebra.jpeg"
      />
    </>
  );
};

export const Spidol = () => {
  return (
    <>
      <img
        width={300} 
         src={spidol}
         alt="spidol.jpeg"
      />
    </>
  );
};

export const Stabilo = () => {
  return (
    <>
      <img
        width={300} 
         src={stabilo}
         alt="stabiloo.jpeg"
      />
    </>
  );
};

export const Pulpen = () => {
  return (
    <>
      <img
        width={300} 
         src={pulpenw}
         alt="pulpen warna.jpg"
      />
    </>
  );
};

export const Kertas = () => {
  return (
    <>
      <img
        width={300} 
         src={kbinder}
         alt="kertas binder.webp"
      />
    </>
  );
};

export const BinderA5 = () => {
  return (
    <>
      <img
        width={300} 
         src={bindera5}
         alt="bindera5.jpeg"
      />
    </>
  );
};

export const BinderB5 = () => {
  return (
    <>
      <img
        width={300} 
         src={binderb5}
         alt="binderb5.jpeg"
      />
    </>
  );
};