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
          <p>👋</p>
          <p>Hi, I{"'"}m Sam, let me introduce myself.</p>
        </div>

        <div className="flex flex-row space-x-4">
          <p>💡</p>
          <p>
            I am interested in using machine learning for good; in education and
            pedagogy; in human centred design and building impactful products.{" "}
          </p>
        </div>

        <div className="flex flex-row space-x-4">
          <p>🚀</p>
          <p>
            I am co-founder at{" "}
            <ExtLink href="https://turinglab.co.uk">Turinglab</ExtLink> where I
            build products to make coding education more engaging and effective.
            At our peak, we taught over 80,000 kids to code per month across
            Europe and the Middle-East.
          </p>
        </div>

        <div className="flex flex-row space-x-4">
          <p>🎓</p>
          <p>
            Previously I was the Director of{" "}
            <ExtLink href="https://www.imperial.ac.uk/computing/outreach/codelab/">
              Codelab
            </ExtLink>
            , and an MEng Supervisor, at Imperial College London.
          </p>
        </div>

        <div className="flex flex-row space-x-4">
          <p>🤖</p>
          <p>
            I was awarded a distinction for my MSc in Computer Science at
            Imperial College London, with my thesis{" "}
            <ExtLink href="/pdfs/Visualising Deep Neural Networks.pdf">
              {'"'}Visualising Deep Neural Networks
              {'"'}.
            </ExtLink>
          </p>
        </div>

        <div className="flex flex-row space-x-4">
          <p>🎨</p>
          <p>
            I also hold an MA in Architecture from the University of Cambridge,
            where my thesis explored{" "}
            <ExtLink href="/pdfs/Added Value of Quality Design.pdf">
              The impact of quality design.
            </ExtLink>
          </p>
        </div>

        <div className="flex flex-row space-x-4">
          <p>🕹️</p>
          <p>
            I{"'"}ve worked in education
            <ExtLink href="https://turinglab.co.uk">(Turinglab</ExtLink>,
            <ExtLink href="https://www.imperial.ac.uk/computing/">
              Imperial College London)
            </ExtLink>
            , Machine Learning
            <ExtLink href="https://www.proquoai.com/">(TX.ai)</ExtLink>,
            Startups{" "}
            <ExtLink href="https://www.joinef.com/">
              (Entrepreneur First)
            </ExtLink>{" "}
            and Architecture
            <ExtLink href="https://www.alisonbrooksarchitects.com/">
              (ABA
            </ExtLink>{" "}
            ,
            <ExtLink href="https://www.urbansplash.co.uk/">
              Urban Splash)
            </ExtLink>
            .
          </p>
        </div>

        <div className="flex flex-row space-x-4">
          <p>⚡</p>
          <p>
            I do data science in Python, Pandas, PyTorch; web development in
            React, Next, Typescript, Postgres; design in Figma, Adobe; product
            in Gsuite, Gmail, Zoom.
          </p>
        </div>

        <div className="flex flex-row space-x-4">
          <p>👑</p>
          <p>
            Fun Fact: I’ve taught{" "}
            <ExtLink href="https://www.imperial.ac.uk/news/186339/prince-charles-given-insight-into-outreach/">
              Prince Charles (now King Charles III) Python!
            </ExtLink>
          </p>
        </div>

        <div className="flex flex-row space-x-4">
          <p>🏕</p>
          <p>
            I love being outside and am a passionate climber <i>(V8, 7B)</i>. I
            have climbed all over Europe and even helped former GB Climber,
            Louis Parkinson, develop a coaching manual and
            <ExtLink href="https://greenjosh.com/catalyst.html">
              mobile app.
            </ExtLink>
          </p>
        </div>
      </div>
    </Layout>
  );
}
