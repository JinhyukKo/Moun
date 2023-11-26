import { useContext } from "react";
import { Link } from "react-router-dom";
import { isMobileContext } from "../contexts/ismobile";
export default function SmallBanner() {
  const { isMobile } = useContext(isMobileContext);
  return (
    <div className="my-20">
      <div className="">
        <div className="📦 px-4 text-white w-full flex-row justify-between items-center h-24 bg-black2 rounded-2xl">
          <div className="lgH1">🍆 💦 첫 이용자 프로모션</div>

          <Link
            to="/"
            className="⚪️ bg-white text-sm font-medium w-10 h-10 rounded-full"
          >
            {isMobile ? (
              <span className="inline-flex justify-center items-center w-6 h-10 rounded-full">
                <svg
                  className=" text-black dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                <span className="hidden">More</span>
              </span>
            ) : (
              <span>더 알아보기</span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
