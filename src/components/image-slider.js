import { useState, useEffect, useRef } from "react";

export default function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const slidesRef = useRef(slides);
  const prevSlider = () => {
    setCurrent((prevState) => (prevState === 0 ? 0 : prevState - 1));
  };
  const nextSlider = () => {
    setCurrent((prevState) =>
      prevState === slides.length - 1 ? slides.length - 1 : prevState + 1
    );
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrent((prevState) => {
        console.log("prev" + prevState);
        return prevState === slides.length - 1 ? 0 : prevState + 1;
      });
      console.log("ccurent" + current);
    }, 6000);

    // const setCurrentPromise = new Promise((resolve, reject) => {
    //   setCurrent(1);
    //   resolve(current);
    // });
    // setCurrentPromise.then((current) => {
    //   console.log("current" + current);
    // });

    return () => {
      clearInterval(interval);
    };
  }, [current]);

  return (
    <div
      id="default-carousel"
      className="📦 h-full relative z-0"
      data-carousel="static"
    >
      <ol className="flex overflow-hidden">
        {slidesRef.current.map((element, idx) => {
          return (
            <li
              key={element.key}
              style={{ transform: `translate(${-current * 100}%)` }}
              className={` basis-full shrink-0 h-full ease-in-out transition-all duration-1000`}
              data-carousel-item={idx}
            >
              {element.key}
              <img
                src={element.img}
                className={`block object-contain w-full h-full `}
                alt={element.title}
              />
            </li>
          );
        })}
      </ol>

      <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
        {slidesRef.current.map((element, idx) => {
          return (
            <li key={element.key}>
              <button
                type="button"
                className={`w-3 h-3 rounded-full ${
                  current === idx ? "bg-white" : "bg-gray"
                }`}
                aria-current="false"
                aria-label={`Slide ${idx}`}
                data-carousel-slide-to={idx + 1}
              ></button>
            </li>
          );
        })}
      </div>

      <button
        type="button"
        id="⬅️"
        className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlider}
      >
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="hidden">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlider}
      >
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="hidden">Next</span>
        </span>
      </button>
    </div>
  );
}
