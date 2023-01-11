import { Layout } from "@/components/Layout";
import EmojiSectionWrapper from "@/components/EmojiSectionWrapper";
import React from "react";
import { useIntersection } from "react-use";
import cx from "clsx";
import { ProfileImage } from "@/components/ProfileImage";
import { seo } from "@/lib/seo";
import { Navigation } from "@/components/Navigation";
import Link from "next/link";
import { FOCUS_VISIBLE_OUTLINE } from "@/styles/constants";
import { RoughNotation } from "react-rough-notation";
import colors from "tailwindcss/colors";

export default function About() {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "-100px",
  });

  let showNav = false;
  if (intersection && !intersection.isIntersecting) {
    showNav = true;
  }

  return (
    <Layout showNav={showNav}>
      <div className="-mt-12 sm:mt-0">
        <div ref={intersectionRef}>
          <div
            className={cx("transition duration-300", {
              "opacity-0": showNav,
              "opacity-100": !showNav,
            })}
          >
            <div className="flex items-center space-x-6">
              <Link
                href="/"
                title="View home page"
                className={cx("rounded-full", FOCUS_VISIBLE_OUTLINE)}
              >
                <ProfileImage size="large" isInteractive />
              </Link>

              <div>
                <h1 className="text-3xl font-medium text-sky-100/80 sm:text-4xl">
                  Sam Green
                </h1>
                <h2 className="align-middle text-lg leading-6 text-sky-100/800">
                  <span className="hidden sm:inline">
                    Machine Learning, Full Stack Dev, Design
                  </span>
                  <span
                    className="inline sm:hidden"
                    title="Developer Experience"
                  >
                    ML, Dev, Design
                  </span>{" "}
                  at{" "}
                  <span className="font-medium text-sky-100/70">Turinglab</span>
                </h2>
              </div>
            </div>

            <p className="mt-7 text-xl text-sky-100/90 sm:mt-9">
              Let me tell you a little about my journey to where I am as an
              engineer, designer and product manager.
            </p>

            <div className="mt-8 sm:mt-12">
              <Navigation header={false} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-auto px-auto space-y-4 my-10">
        <EmojiSectionWrapper>
          <p>🚀</p>
          <p>
            I’m a{" "}
            <RoughNotation type="underline" show={true} color={colors.sky[200]}>
              Co-founder
            </RoughNotation>{" "}
            and Head of Product at{" "}
            <a target="_blank" href="https://turinglab.co.uk">
              Turinglab
            </a>{" "}
            where I build products to make coding education more fun and
            effective.
          </p>
        </EmojiSectionWrapper>
        <EmojiSectionWrapper>
          <p>⚡</p>
          <p>
            I've help bootstrap Turinglab to over £1m in revenue and teach over
            125,000 kids to code across over 700,000 hours of learning, reaching
            up to 80,000 learners per month.
          </p>
        </EmojiSectionWrapper>
        <EmojiSectionWrapper>
          <p>🤝</p>
          <p>
            I’ve managed projects at scale with clients such as
            <a
              target="_blank"
              href="https://www.aboutamazon.co.uk/news/community/sign-up-to-our-free-amazon-future-engineer-virtual-coding-programme"
            >
              {" "}
              Amazon
            </a>
            ,
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=ZSY2Rwc2MUw&ab_channel=YOOXNET-A-PORTER"
            >
              {" "}
              Net-a-Porter
            </a>
            ,
            <a
              target="_blank"
              href="https://edtechnology.co.uk/latest-news/uks-first-curriculum-linked-coding-platform-launched/"
            >
              {" "}
              DCMS
            </a>
            ,
            <a
              target="_blank"
              href="https://www.youth.om/en/the-program/al-nashia-scheme"
            >
              {" "}
              The Sultanate of Oman
            </a>
            ,
            <a
              target="_blank"
              href="https://www.imperial.ac.uk/computing/outreach/codelab/"
            >
              {" "}
              Imperial College London
            </a>{" "}
            and more.
          </p>
        </EmojiSectionWrapper>
        <EmojiSectionWrapper>
          <p>👑</p>
          <p>
            I’ve even taught{" "}
            <a
              target="_blank"
              href="https://www.imperial.ac.uk/news/186339/prince-charles-given-insight-into-outreach/"
            >
              Prince Charles (now King Charles III) and Camilla coding!
            </a>
          </p>
        </EmojiSectionWrapper>
        <EmojiSectionWrapper>
          <p>🎓</p>
          <p>
            I met my cofounder while studying Computer Science at{" "}
            <a
              className="text-grey-dark"
              target="_blank"
              href="https://www.imperial.ac.uk/computing/"
            >
              <i>Imperial College London</i>
            </a>{" "}
            where I brought together my love of design, data and machine
            learning to my thesis{" "}
            <a
              target="_blank"
              href="/pdfs/Visualising Deep Neural Networks.pdf"
            >
              'Visualising Deep Neural Networks'
            </a>
            .
          </p>
        </EmojiSectionWrapper>
        {/* <EmojiSectionWrapper>
      <p>🤖</p>
      <p>After graduating I contracted briefly as a software engineer building products with Machine Learning for <a className="text-grey-dark" href="https://www.proquoai.com/"><i>ProQuo AI.</i></a></p>
    </EmojiSectionWrapper> */}
        <EmojiSectionWrapper>
          <p>🐺</p>
          <p>
            I was an early employee at{" "}
            <a
              className="text-grey-dark"
              target="_blank"
              href="https://www.joinef.com/"
            >
              <i>Entrepreneur First</i>
            </a>{" "}
            on their Program Team. It was working at EF with technical founders
            that inspired me to study Computer Science.
          </p>
        </EmojiSectionWrapper>
        <EmojiSectionWrapper>
          <p>🏡</p>
          <p>
            I started out as designer for{" "}
            <a
              className="text-grey-dark"
              target="_blank"
              href="https://www.urbansplash.co.uk/"
            >
              <i>Urban Splash</i>
            </a>{" "}
            and later at{" "}
            <a
              className="text-grey-dark"
              target="_blank"
              href="https://www.alisonbrooksarchitects.com/"
            >
              <i>Alison Brooks Architects</i>
            </a>{" "}
            working on several urban and architectural designs.
          </p>
        </EmojiSectionWrapper>
        <EmojiSectionWrapper>
          <p>🎨</p>
          <p>
            I learned design at the{" "}
            <a
              target="_blank"
              className="text-grey-dark"
              href="https://www.arct.cam.ac.uk/"
            >
              <i>University of Cambridge</i>
            </a>{" "}
            where I studied Architecture and wrote my thesis exploring the{" "}
            <a target="_blank" href="/pdfs/Added Value of Quality Design.pdf">
              'Adding Value through Quality Design'
            </a>
            . Here I also ran design lectures featuring industry giants such as{" "}
            <a
              className="text-grey-dark"
              target="_blank"
              href="https://www.youtube.com/watch?v=lTcIQ7Rd46w&ab_channel=CambridgeUnion"
            >
              Chris Dercon
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              className="text-grey-dark"
              href="https://www.fosterandpartners.com/studio/spencer-de-grey/"
            >
              <i>Spencer De Grey</i>
            </a>{" "}
            as well as new, up and coming designers.
          </p>
        </EmojiSectionWrapper>
        <EmojiSectionWrapper>
          <p>🏕</p>
          <p>
            If I'm not thinking about building impactful digital products then
            I'm trying to get outside. I'm a passionate climber and have climbed
            all over Europe. I've even helped a former{" "}
            <a
              target="_blank"
              className="text-grey-dark"
              href="https://www.instagram.com/captaincutloose/?hl=en"
            >
              <i>GB Climber</i>
            </a>{" "}
            develop a coaching manual and{" "}
            <a target="_blank" href="https://greenjosh.com/catalyst.html">
              mobile app
            </a>
            .
          </p>
        </EmojiSectionWrapper>
      </div>
    </Layout>
  );
}
