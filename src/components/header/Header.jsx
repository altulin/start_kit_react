import React, { useState } from "react";
import style from "./Header.module.scss";
import clsx from "clsx";
import Links from "./Links";
import Logo from "../../UI/logo/Logo";
import Nav from "./Nav";

const Header = () => {
  const [isMenu, setMenu] = useState(true);
  return (
    <header className={clsx(style.header)}>
      <div className={clsx(style.header__inner)}>
        <Logo parent={"header"} />

        <Nav isMenu={isMenu} setMenu={setMenu}>
          <Links setMenu={setMenu} />
        </Nav>
      </div>
    </header>
  );
};
export default Header;
