import React from "react";
import clsx from "clsx";
import style from "./Promo.module.scss";
import Form from "./Form";
const Promo = () => {
  return (
    <section className={clsx(style.promo)}>
      <div className={clsx(style.promo__inner, "container")}>
        <Form />
      </div>
    </section>
  );
};

export default Promo;
