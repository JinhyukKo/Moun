import React from "react";
import { Link } from "react-router-dom";
import LoginImg from "../../assets/image/page/loginpage.png";
import NaverLogo from "../../assets/image/logo/naver-logo.svg";
import GoogleLogo from "../../assets/image/logo/google-logo.png";
export default function Login() {
  const loginList = [
    {
      title: "네이버로 로그인하기",
      url: "/",
      logo: NaverLogo,
    },
    {
      title: "구글로 로그인하기",
      url: "/",
      logo: GoogleLogo,
    },
  ];
  return (
    <div className="📦 flex flex-col-reverse lg:flex-row">
      <section className="w-full lg:w-1/2 lg:block mt-8 my-40 lg:mt-40">
        <div className="flex flex-col items-center">
          <h1 className="H2 w-80 mb-10 hidden lg:block">
            Get To Know Each Other Through Songs
          </h1>
          {/* //* login */}
          {loginList.map((element) => {
            return (
              <Link
                className="my-1 flex justify-center text-center font-medium text-base w-[min(25rem,85%)] h-12 rounded-lg border border-gray leading-[3rem] hover:shadow-md hover:border-black2"
                to={element.url}
              >
                {/*//* logo */}
                <img
                  className="px-2 object-none"
                  alt="logo"
                  src={element.logo}
                ></img>
                <span>{element.title}</span>
              </Link>
            );
          })}
          <p className="mt-4 text-center text-gray text-sm font-normal">
            회원가입시{" "}
            <Link className="underline" to="/">
              약관
            </Link>
            에 동의하신 것으로 간주됩니다.
          </p>
        </div>
      </section>
      <img
        className="lg:w-1/2 h-[calc(16rem+10vw)] lg:h-auto w-screen object-cover"
        src={LoginImg}
        alt=""
      />
    </div>
  );
}
