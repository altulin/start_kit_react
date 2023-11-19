import clsx from "clsx";
import style from "./Promo.module.scss";
import { utcToZonedTime } from "date-fns-tz";
import { intervalToDuration } from "date-fns";
import { useRenderCount } from "@uidotdev/usehooks";

import {
  getStartDay,
  parseDate,
  makeInterval,
} from "../../../hooks/getTimeStatus";

const Promo = () => {
  console.log("useRenderCount: " + useRenderCount());
  // const startDate = "2024-02-08";

  return (
    <section className={clsx(style.promo)}>
      <div className={clsx(style.promo__inner, "container")}>
        <h1>321321321</h1>
      </div>
    </section>
  );
};
export default Promo;
