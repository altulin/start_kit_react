import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Template from "./templates_pages/Template";
import { setIsMobileOrTablet } from "./store/appSlice";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive"; // разрешение экрана
import HomePage from "./pages/HomePage";

const App = () => {
  const dispatch = useDispatch();

  const isMobileOrTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useEffect(() => {
    dispatch(setIsMobileOrTablet(isMobileOrTablet));
  }, [dispatch, isMobileOrTablet]);

  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<HomePage />} />
        {/* <Route path="/private" element={<Private />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
