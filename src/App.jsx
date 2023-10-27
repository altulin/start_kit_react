import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Template from "./templates/Template";
import { setIsMobileOrTablet } from "./store/appSlice";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive"; // разрешение экрана

const App = () => {
  const dispath = useDispatch();

  const isMobileOrTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useEffect(() => {
    dispath(setIsMobileOrTablet(isMobileOrTablet));
  }, [dispath, isMobileOrTablet]);

  return (
    <Routes>
      <Route path="/" element={<Template />}>
        {/* <Route index element={<HomePage />} /> */}
        {/* <Route path="/private" element={<Private />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
