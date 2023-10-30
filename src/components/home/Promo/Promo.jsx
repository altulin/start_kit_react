import React from "react";
import clsx from "clsx";
import style from "./Promo.module.scss";

const Promo = () => {
  return (
    <section className={clsx(style.promo)}>
      <div className={clsx(style.promo__inner, "container")}></div>
    </section>
  );
};
export default Promo;
