let resizeTimeout;

const actualResizeHandler = () => {
  window.location.reload(true);
};

const resizeThrottler = () => {
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(function () {
      resizeTimeout = null;
      actualResizeHandler();
    }, 500);
  }
};

export default resizeThrottler;

// useEffect(() => {
//   window.addEventListener("resize", resizeThrottler, false);

//   return () => {
//     window.removeEventListener("resize", resizeThrottler, false);
//   };
// }, []);
