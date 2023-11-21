import React from "react";
import Image1 from "../assets/image/Albums/rectangle-53.jpg";
import Image2 from "../assets/image/Albums/rectangle-54.jpg";
import Image3 from "../assets/image/Albums/rectangle-55.jpg";
import Image4 from "../assets/image/Albums/rectangle-56.jpg";

export default function Cards({ numOfCards = 4, flexWrapClass = false }) {
  const todaysHit = [
    { img: Image1, title: "title1", composer: "composer1" },
    { img: Image2, title: "title2", composer: "composer2" },
    { img: Image3, title: "title3", composer: "composer3" },
    { img: Image4, title: "title4", composer: "composer4" },
    { img: Image1, title: "title1", composer: "composer1" },
    { img: Image2, title: "title2", composer: "composer2" },
    { img: Image3, title: "title3", composer: "composer3" },
    { img: Image4, title: "title4", composer: "composer4" },
  ];

  return (
    <ul
      style={flexWrapClass ? { flexWrap: "wrap" } : { flexWrap: "nowrap" }}
      className={
        flexWrapClass
          ? "flex flex-wrap justify-around w-full my-4 content-around"
          : "flex flex-nowrap justify-between w-[max(100%,700px)] my-4"
      }
    >
      {todaysHit.map((element, idx) => {
        if (idx >= numOfCards) return null;
        return (
          <li className=" w-60" key={idx}>
            <figure className="w-[var(--album-width)] block">
              <img
                className="block w-full object-cover rounded-[clamp(0.5rem,calc(0.5rem+(1024px-100vw)*1/4),3.125rem)] mb-4"
                src={element.img}
                alt="album"
              />
              <figcaption className="">
                <div className="text-base font-medium">{element.title}</div>
                <div className="text-xs font-normal text-gray">
                  {element.composer}
                </div>
              </figcaption>
            </figure>
          </li>
        );
      })}
    </ul>
  );
}
