import  { useEffect } from "react";

import Promo from "../components/home/Promo/Promo";

const HomePage = () => {
  useEffect(() => {
    // document.title = "";
  }, []);

  return (
    <>
      <Promo />
    </>
  );
};
export default HomePage;
