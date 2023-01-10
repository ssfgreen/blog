import { FOCUS_VISIBLE_OUTLINE } from "@/styles/constants";
import TwitterIcon from "@/components/icons/TwitterIcon";
import { ThemeToggle } from "./ThemeToggle";
import {
  ChatBubbleBottomCenterTextIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import cx from "clsx";
import Link from "next/link";
import React from "react";

export const Navigation = () => {
  return (
    <div className="flex items-center space-x-7 text-base font-semibold leading-none text-sky-100/90">
      <Link href="/about" className={cx("group", FOCUS_VISIBLE_OUTLINE)}>
        <div className="sm:flex sm:items-center sm:space-x-2">
          <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
            <div
              className={
                " transition-all duration-300 ease-out group-hover:scale-[1.2] group-active:translate-y-1"
              }
            >
              About
            </div>
          </div>
        </div>
      </Link>

      <Link href="/blog" className={cx("group", FOCUS_VISIBLE_OUTLINE)}>
        <div className="sm:flex sm:items-center sm:space-x-2">
          <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
            <div
              className={
                " transition-all duration-300 ease-out group-hover:scale-[1.2] group-active:translate-y-1"
              }
            >
              Posts
            </div>
          </div>
        </div>
      </Link>

      <a
        className={cx("group", FOCUS_VISIBLE_OUTLINE)}
        href="https://twitter.com/samsfgreen"
      >
        <div className="sm:flex sm:items-center sm:space-x-2">
          <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
            <div className="rounded-lg p-1 transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-active:translate-y-1">
              <TwitterIcon className="w-[18px] transform text-sky-100 transition delay-100 duration-500 ease-out group-hover:scale-110" />
            </div>
          </div>
        </div>
      </a>

      <ThemeToggle />
    </div>
  );
};
