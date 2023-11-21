import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function PageNav() {
  const [pages, setNextPages] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const location = useLocation();
  return (
    <nav className="flex justify-between w-1/2 mt-20 mx-auto">
      <button
        onClick={() => {
          if (pages[0] === 1) return;
          const map = pages.map((element) => element - 1);
          setNextPages(map);
        }}
      >
        prev
      </button>
      {pages.map((element, idx) => {
        return (
          <Link
            key={idx}
            to={{ pathname: "", search: `?page=${element}` }}
            style={
              `?page=${element}` === location.search
                ? { color: "#34E26A" }
                : { color: "#111111" }
            }
            className="text-base block self-center font-medium"
          >
            {element}
          </Link>
        );
      })}
      <button
        onClick={() => {
          const map = pages.map((element) => element + 1);
          setNextPages(map);
        }}
      >
        next
      </button>
    </nav>
  );
}
