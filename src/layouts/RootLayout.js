import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/header";
import Footer from "./Footer/footer";

import { useRef, useEffect, useState, useMemo } from "react";
import { isMobileContext } from "../contexts/ismobile";
import { StepTitle } from "@chakra-ui/react";

export default function RootLayout() {
  //* RootLayout
  //* ------------ variables ------------//
  const location = useLocation();
  const [isOpened, setOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false); //mobile or desktop
  let windowRef = useRef(null); //document.querySelector('.window');
  //* ------------ window width observer ------------//
  const width_observer = useMemo(() => {
    return new ResizeObserver((entries) => {
      //callback
      const windowElement = entries[0].target; //document.querySelector('.window');
      let window_view_width = entries[0].contentRect.width; //windowElement.getBoundingClientRect().width;
      windowElement.style.setProperty("--vw", window_view_width); //set css variable
      if (window_view_width < 1024) {
        setIsMobile(true); //add mobile class
      } else {
        setIsMobile(false); //add desktop class
      }
    });
  }, []);
  //* ------------ useEffect ------------//
  useEffect(() => {
    //componentDidMount
    const windowElement = windowRef.current; //document.querySelector('.window');
    width_observer.observe(windowElement); //observe
  }, []);
  useEffect(() => {
    setOpened(false);
  }, [location]);
  return (
    <>
      <isMobileContext.Provider value={{ isMobile, setIsMobile }}>
        <div
          ref={windowRef}
          className={`window:${isMobile ? "mobile" : "desktop"}`}
        >
          <Header isOpened={isOpened} setOpened={setOpened} />
          <Outlet />
          <Footer />
        </div>
      </isMobileContext.Provider>
    </>
  );
}
