import React from "react";
import { Link } from "react-router-dom";
import SmallBanner_myPage from "../../components/smallbanner-mypage";
import history from "../../assets/image/logo//myPage/history.png";
import logout from "../../assets/image/logo/myPage/logout.png";
import myInfo from "../../assets/image/logo/myPage/myInfo.png";
import mySongs from "../../assets/image/logo//myPage/mySongs.png";
import UserProfile from "../../assets/image/logo/myPage/userProfile.png";

function ProfileCard() {
  return (
    <div className="m-auto flex w-[max(26.5rem)] h-[4.5rem] ">
      <img src={UserProfile} alt="userProfile" />
      <div className="ml-4 flex flex-col justify-between ">
        <h1 className="text-lg font-medium">가든인더하우스</h1>
        <Link to="./edit">
          <div className="Item-center w-20 h-8 text-xs text-normal rounded-[1.25rem] border border-magenta text-magenta hover:bg-magenta hover:text-white hover:border-white transition-colors duration-300">
            프로필 수정
          </div>
        </Link>
      </div>
    </div>
  );
}

export default function MyProfile() {
  const list = [
    {
      link: "./mySong",
      img: mySongs,
      title: "내 노래",
    },
    {
      link: "./myInfo",
      img: myInfo,
      title: "계정정보",
    },
    {
      link: "./history",
      img: history,
      title: "결제내역",
    },
    {
      link: "./logout",
      img: logout,
      title: "로그아웃",
    },
  ];

  return (
    <div className="w-screen flex-col">
      <header className="mt-28">
        <ProfileCard />
      </header>
      <div className="mt-8 w-screen bg-middle_white h-[40rem]">
        <div className="w-[max(26.5rem)] m-auto">
          <div className="flex flex-col">
            {list.map((item) => {
              return (
                <li className="h-16">
                  <Link
                    className="flex justify-between items-center h-full"
                    to={item.link}
                  >
                    <h2 className="flex items-center text-base font-normal my-auto">
                      <img className="mr-4" src={item.img} alt="" />
                      <span>{item.title}</span>
                    </h2>
                    <div>
                      <svg
                        className="w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-gray-800"
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
                    </div>
                  </Link>
                </li>
              );
            })}
          </div>
          <SmallBanner_myPage />
        </div>
      </div>
    </div>
  );
}
