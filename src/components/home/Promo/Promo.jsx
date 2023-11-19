import clsx from "clsx";
import style from "./Promo.module.scss";
import { utcToZonedTime } from "date-fns-tz";

import { getStartDay } from "../../../hooks/getTimeStatus";

const Promo = () => {
  const startDate = "2024-02-08";
  const current = utcToZonedTime(new Date(), "Europe/Moscow");

  console.log(current);

  return (
    <section className={clsx(style.promo)}>
      <div className={clsx(style.promo__inner, "container")}>
        <h1>321321321</h1>
      </div>
    </section>
  );
};
export default Promo;
