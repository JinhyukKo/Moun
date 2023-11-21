import { Link } from "react-router-dom";

export default function SmallBanner_myPage() {
  return (
    <div className="mt-4">
      <div className="">
        <div className="📦 text-white w-full flex-row justify-between items-center h-16 bg-black2 rounded-lg">
          <div className="text-sm">🍆 💦 1분 안에 내 노래 등록하기</div>
          <Link
            to="/"
            className="Item-center bg-gray text-sm font-medium w-10 h-10 rounded-full"
          >
            👉
          </Link>
        </div>
      </div>
    </div>
  );
}
