import { useEffect, useCallback } from "react";
import { setAction, setTimeAction } from "../store/appSlice";
import { useDispatch } from "react-redux";
import {
  intervalToDuration,
  formatDistanceStrict,
  startOfDay,
  endOfDay,
  isAfter,
} from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export const getStartDay = (date) => {
  // console.log(Date.parse(date));
  return startOfDay(new Date(Date.parse(date)));
};

export const getEndDay = (date) => {
  return endOfDay(new Date(Date.parse(date)));
};

export const makeInterval = (start, end) => {
  const { months, days, hours, minutes } = intervalToDuration({
    start: start,
    end: end,
  });

  const resultDays = formatDistanceStrict(start, end, {
    unit: "day",
  }).replace(/[ a-z]/g, "");

  const getVal = (val) => {
    let data;
    if (Number(val) > 9) {
      data = val.toString().split("");
    } else {
      data = `0${val.toString().split("")}`.split("");
    }

    return data;
  };

  return {
    days: months > 0 ? getVal(resultDays) : getVal(days),
    hours: getVal(hours),
    minutes: getVal(minutes),
  };
};

export const useGetTimeStatus = ({ startDate, endDate }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!startDate || !endDate) {
      return;
    }

    const startDayStartAction = getStartDay(startDate);
    const endDayEndAction = getEndDay(endDate);
    const current = utcToZonedTime(new Date(), "Europe/Moscow");

    if (isAfter(current, startDayStartAction)) {
      // акция идет
      // dispatch(setAction(0));
      // dispatch(setTimeAction(makeInterval(current, endDayEndAction)));
    }
    if (isAfter(startDayStartAction, current)) {
      // не началась
      // dispatch(setAction(-1));
      // dispatch(setTimeAction(makeInterval(current, startDayStartAction)));
    }
    if (isAfter(current, endDayEndAction)) {
      // закончилась
      // dispatch(setAction(1));
    }
  }, [dispatch, endDate, startDate]);
};
