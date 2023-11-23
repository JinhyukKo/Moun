// import "./index.css";

import { useState, useEffect, useRef, useContext } from "react";
import { isMobileContext } from "../../contexts/ismobile";
import { Link, NavLink } from "react-router-dom";

import imageLogo from "../../assets/image/logo/favicon.svg";
import textLogo from "../../assets/image/logo/moun.png";
import Profile from "../../assets/image/logo/profile.png";

function Left({ isOpened, setOpened, isMobile }) {
  const openHeaderPages = function () {
    if (isMobile) {
      setOpened(!isOpened);
    }
  };
  return (
    <div className="w-1/5 flex">
      {!isMobile ? (
        ""
      ) : (
        <button
          onClick={openHeaderPages}
          className="flex cursor-grab h-full w-8"
        >
          {isMobile & !isOpened ? (
            <div className="transition-all mr-3 w-5 h-0.5 bg-white self-center before:block before:bg-white before:relative before:top-2 before:content-['.'] before:indent-[-9999px] before:w-5 before:h-0.5 after:block after:w-5 after:h-0.5 after:indent-[-9999px] after:bg-white after:content-['.'] after:bottom-2.5 after:relative"></div>
          ) : isMobile & isOpened ? (
            <div className="self-center transition-all bg-white w-5 h-0.5 rotate-45 before:block before:bg-white before:w-5 before:h-0.5 before:rotate-90"></div>
          ) : (
            ""
          )}
        </button>
      )}

      {!isOpened ? (
        <Link className="w-[min(3.8125,8vw)]" to="/">
          <img
            className="w-full h-full object-center"
            src={imageLogo}
            alt="logo"
          />
        </Link>
      ) : (
        ""
      )}

      <Link className="w-28 ml-2 hidden lg:block" to="/">
        <img className="object-none w-full h-full" src={textLogo} alt="moun" />
      </Link>
    </div>
  );
}
function Pages({ isOpened, isMobile }) {
  const navList = ["Home", "Song", "Artists", "Released"];
  let ColStyle;
  let hiddenStyle;
  useEffect(() => {}, [isMobile]);
  ColStyle = isMobile
    ? { flexDirection: "column", alignItems: "center", marginTop: "2rem" }
    : null;
  if (isMobile) {
    hiddenStyle = isOpened
      ? { visibility: "visible" }
      : { visibility: "hidden" };
  } else hiddenStyle = { visibility: "visible" };

  return (
    <ul style={ColStyle} className="flex">
      {navList.map((element, idx) => {
        if (!isMobile & (idx === 0)) {
          return null;
        }
        return (
          <li
            key={idx}
            id={element}
            style={hiddenStyle}
            className="my-6 mx-8 text-base font-medium hover:cursor-pointer"
          >
            <NavLink to={element.toLowerCase()}>{element}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}

function Right({ isOpened, isMbbile }) {
  const [isLogined, Login] = useState(false);
  return (
    <div className="w-1/5 mx-0 my-auto ">
      {isOpened ? ( //
        ""
      ) : isLogined ? (
        <img src={Profile} alt="profile" className="🔒 float-right"></img>
      ) : (
        <Link to="login">
          <button className="🔓 float-right text-sm ⚪️ bg-transparent text-white">
            시작하기
          </button>
        </Link>
      )}
    </div>
  );
}

export default function Header({ isOpened, setOpened }) {
  const { isMobile } = useContext(isMobileContext);

  useEffect(() => {
    if (!isMobile) {
      setOpened(false);
    }
  }, [isMobile]);
  return (
    <header className="fixed top-0 px-3 w-screen h-[4.5rem] bg-black2 text-white z-10">
      {isOpened ? (
        <div className="absolute top-[20rem] w-screen h-screen bg-black2 opacity-50"></div>
      ) : (
        ""
      )}

      <div className="📦 h-full justify-between">
        <Left
          isOpened={isOpened}
          setOpened={setOpened}
          isMobile={isMobile}
        ></Left>
        <Pages isOpened={isOpened} isMobile={isMobile}></Pages>
        <Right isOpened={isOpened} isMobile={isMobile}></Right>
      </div>
      {isOpened ? <div className=" w-screen h-[16rem]  bg-black2 "></div> : ""}
    </header>
  );
}
