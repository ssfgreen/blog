import { Layout } from "@/components/Layout";
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

const ExtLink = ({ href, children }: { href: string; children: any }) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {" "}
    <i>{children}</i>
  </a>
);

export default function About() {
  return (
    <Layout>
      <div className="flex flex-col py-auto px-auto space-y-4 my-10 text-lg w-full">
        <div className="flex flex-row space-x-4">
          <p>🚀</p>
          <p>
            I’m a{" "}
            <RoughNotation
              type="underline"
              show={true}
              color={colors.sky[200]}
              order={1}
            >
              Co-founder
            </RoughNotation>{" "}
            and Head of Product at{" "}
            <ExtLink href="https://turinglab.co.uk">Turinglab</ExtLink> where I
            build products to make coding education more fun and effective.
          </p>
        </div>
        <div className="flex flex-row space-x-4">
          <p>⚡</p>
          <p>
            I{"'"}ve help bootstrap Turinglab to over
            <RoughNotation
              type="underline"
              show={true}
              color={colors.sky[200]}
              order={2}
            >
              {` £1m in revenue `}
            </RoughNotation>
            and teach over
            <RoughNotation
              type="underline"
              show={true}
              color={colors.sky[200]}
              order={3}
            >
              {` 125,000 kids to code `}
            </RoughNotation>
            across over 700,000 hours of learning, reaching up to 80,000
            learners per month.
          </p>
        </div>
        <div className="flex flex-row space-x-4">
          <p>🤝</p>
          <p>
            I’ve managed projects at scale with clients such as
            <ExtLink href="https://www.aboutamazon.co.uk/news/community/sign-up-to-our-free-amazon-future-engineer-virtual-coding-programme">
              Amazon
            </ExtLink>
            ,
            <ExtLink href="https://www.youtube.com/watch?v=ZSY2Rwc2MUw&ab_channel=YOOXNET-A-PORTER">
              Net-a-Porter
            </ExtLink>
            ,
            <ExtLink href="https://edtechnology.co.uk/latest-news/uks-first-curriculum-linked-coding-platform-launched/">
              DCMS
            </ExtLink>
            ,
            <ExtLink href="https://www.youth.om/en/the-program/al-nashia-scheme">
              The Sultanate of Oman
            </ExtLink>
            ,
            <ExtLink href="https://www.imperial.ac.uk/computing/outreach/codelab/">
              Imperial College London
            </ExtLink>{" "}
            and more.
          </p>
        </div>
        <div className="flex flex-row space-x-4">
          <p>👑</p>
          <p>
            I’ve even taught{" "}
            <ExtLink href="https://www.imperial.ac.uk/news/186339/prince-charles-given-insight-into-outreach/">
              Prince Charles (now King Charles III) and Camilla coding!
            </ExtLink>
          </p>
        </div>
        <div className="flex flex-row space-x-4">
          <p>🎓</p>
          <p>
            I met my cofounder while studying Computer Science at Imperial
            College London where I brought together my love of design, data and
            machine learning to my thesis{" "}
            <ExtLink href="/pdfs/Visualising Deep Neural Networks.pdf">
              <RoughNotation
                type="underline"
                show={true}
                color={colors.sky[200]}
              >
                Visualising Deep Neural Networks
              </RoughNotation>
              .
            </ExtLink>
          </p>
        </div>
        <div className="flex flex-row space-x-4">
          <p>🤖</p>
          <p>
            After graduating I contracted briefly as a software engineer
            building products with Machine Learning for{" "}
            <ExtLink href="https://www.proquoai.com/">TX.ai</ExtLink>.
          </p>
        </div>
        <div className="flex flex-row space-x-4">
          <p>🐺</p>
          <p>
            I was an early employee at{" "}
            <ExtLink href="https://www.joinef.com/">Entrepreneur First</ExtLink>{" "}
            where I worked on their Program Team. It was working at EF with
            technical founders that inspired me to study Computer Science.
          </p>
        </div>
        <div className="flex flex-row space-x-4">
          <p>🏡</p>
          <p>
            I started out as designer for
            <ExtLink href="https://www.urbansplash.co.uk/">
              Urban Splash
            </ExtLink>
            and later at{" "}
            <ExtLink href="https://www.alisonbrooksarchitects.com/">
              Alison Brooks Architects
            </ExtLink>{" "}
            working on several urban and architectural designs.
          </p>
        </div>
        <div className="flex flex-row space-x-4">
          <p>🎨</p>
          <p>
            I learned design studying architecture at
            <ExtLink href="https://www.arct.cam.ac.uk/">
              <RoughNotation
                type="underline"
                show={true}
                color={colors.sky[200]}
              >
                {` University of Cambridge `}
              </RoughNotation>
            </ExtLink>
            where I studied Architecture and wrote my thesis exploring the
            <ExtLink href="/pdfs/Added Value of Quality Design.pdf">
              <RoughNotation
                type="underline"
                show={true}
                color={colors.sky[200]}
              >
                Adding Value through Quality Design
              </RoughNotation>
            </ExtLink>
            . Here I also ran design lectures featuring industry giants such as
            <ExtLink href="https://www.youtube.com/watch?v=lTcIQ7Rd46w&ab_channel=CambridgeUnion">
              Chris Dercon
            </ExtLink>
            , Spencer De Grey and as well as new, up and coming designers.
          </p>
        </div>
        <div className="flex flex-row space-x-4">
          <p>🏕</p>
          <p>
            If I{"'"}m not thinking about building impactful digital products
            then I{"'"}m trying to get outside. I{"'"}m a passionate climber and
            have climbed all over Europe. I{"'"}ve even helped a former
            <ExtLink href="https://www.instagram.com/captaincutloose/?hl=en">
              GB Climber
            </ExtLink>{" "}
            develop a coaching manual and
            <ExtLink href="https://greenjosh.com/catalyst.html">
              mobile app
            </ExtLink>
            .
          </p>
        </div>
      </div>
    </Layout>
  );
}
