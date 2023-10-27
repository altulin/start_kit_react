import React from "react";
import style from "./Logo.module.scss";
import clsx from "clsx";

import { Link } from "react-router-dom";
import ImgWithFallback from "../image/img_webp";

function Logo({ parent }) {
  return (
    <Link
      className={clsx(style.logo, style[`logo--${parent}`])}
      to={"/"}
      aria-label="logo"
    >
      <ImgWithFallback />
    </Link>
  );
}

export default Logo;
