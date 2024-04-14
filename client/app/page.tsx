import React from "react";
import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { IoIosHome } from "react-icons/io";
import { BiHash } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { PiBookmarkSimple } from "react-icons/pi";
import { CiUser } from "react-icons/ci";

interface TwitterSideBarButton {
  title: string;
  icon: React.ReactNode;
}

const sideBarMenuItems: TwitterSideBarButton[] = [
  {
    title: "Home",
    icon: <IoIosHome />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBellFill />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <PiBookmarkSimple />,
  },
  {
    title: "Profile",
    icon: <CiUser />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-8 px-4">
          <div className=" text-3xl h-fit rounded-full hover:bg-gray-800 p-2 cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className=" mt-4 text-2xl font-semibold">
            <ul>
              {sideBarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 p-2 rounded-full px-4 py-3 w-fit cursor-pointer"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-6 border-l-[1px] border-r-[1px] border-gray-400 "></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
