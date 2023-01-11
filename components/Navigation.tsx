import { FOCUS_VISIBLE_OUTLINE } from "@/styles/constants";
import TwitterIcon from "@/components/icons/TwitterIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import { useRouter } from "next/router";
import { ThemeToggle } from "./ThemeToggle";
import {
  ChatBubbleBottomCenterTextIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import cx from "clsx";
import Link from "next/link";
import React from "react";
import LinkedinIcon from "./icons/LinkedinIcon";

const NavItem = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href} className={cx("group", FOCUS_VISIBLE_OUTLINE)}>
      <div className="sm:flex sm:items-center sm:space-x-2">
        <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
          <div
            className={cx(
              " transition-all duration-300 ease-out group-hover:scale-[1.2] group-active:translate-y-1",
              isActive && "bg-slate-700 p-2 rounded-lg"
            )}
          >
            {text}
          </div>
        </div>
      </div>
    </Link>
  );
};

const NavIcon = ({ href, Icon }) => {
  return (
    <a
      className={cx("group", FOCUS_VISIBLE_OUTLINE)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="sm:flex sm:items-center sm:space-x-2">
        <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
          <div className="rounded-lg p-1 transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-active:translate-y-1">
            <Icon className="w-[18px] transform text-sky-100 transition delay-100 duration-500 ease-out group-hover:scale-110" />
          </div>
        </div>
      </div>
    </a>
  );
};

export const Navigation = ({ header = true }) => {
  return (
    <div
      className={cx(
        "flex items-center text-base font-semibold leading-none text-sky-100/90",
        !header && "justify-between"
      )}
    >
      <div className="flex items-center space-x-7">
        <NavItem href="/about" text="About" />
        <NavItem href="/blog" text="Posts" />
      </div>

      <div className="flex items-center ml-7 space-x-7">
        <NavIcon href="https://twitter.com/samsfgreen" Icon={TwitterIcon} />
        <NavIcon
          href="https://www.linkedin.com/in/samsfgreen/"
          Icon={LinkedinIcon}
        />
        <NavIcon href="https://github.com/ssfgreen" Icon={GithubIcon} />
        {/* <ThemeToggle /> */}
      </div>
    </div>
  );
};
