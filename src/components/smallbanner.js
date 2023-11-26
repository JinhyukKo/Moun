import { Link } from "react-router-dom";

export default function SmallBanner() {
  return (
    <div className="my-20">
      <div className="">
        <div className="📦 px-4 text-white w-full flex-row justify-between items-center h-24 bg-black2 rounded-2xl">
          <div className="lgH1">🍆 💦 첫 이용자 프로모션</div>
          <Link
            to="/"
            className="⚪️ bg-white text-sm font-medium lg:indent-0 indent-[-9999px] w-10 rounded-full"
          >
            더 알아보기
          </Link>
        </div>
      </div>
    </div>
  );
}
