// import "./index.css";
export default function Footer() {
  return (
    <footer className="pt-5 pb-32 px-0 w-screen border-t-[0.05rem] border-gray_light ">
      <div className="📦 h-40 flex-col justify-between items-center lg:flex-row lg:items-start">
        <div className="flex w-full content-start flex-row flex-wrap text-xs font-normal text-gray">
          <li className="py-0 px-3">상호명 모은 </li>|
          <li className="py-0 px-3">대표 김병준</li>|
          <li className="py-0 px-3">개인정보보호책임자 김지훈</li>|
          <li className="py-0 px-3">사업자등록번호 111-23-1231</li>|
          <li className="py-0 px-3">통신판매업신고번호 2023-서울서초-9999</li>|
          <li className="py-0 px-3">
            주소 서울특별시 서초구 방베대로 21 301호
          </li>
          |<li className="py-0 px-3">이메일 help@moun.com</li>
        </div>
        <div className="flex lg:w-3/5 w-full flex-row justify-center lg:justify-end flex-wrap content-start text-xs font-medium">
          <li className="py-0 px-2">
            <a href>서비스 이용약관</a>
          </li>
          |
          <li className="py-0 px-2">
            <a href="">개인정보 처리방침</a>
          </li>
          |
          <li className="py-0 px-2">
            <a href="">고객센터</a>
          </li>
        </div>
      </div>
    </footer>
  );
}
