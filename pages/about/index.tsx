import { Layout } from "@/components/Layout";
import EmojiSectionWrapper from "@/components/EmojiSectionWrapper";

export default function About() {
  return (
    <Layout>
      <div className="flex flex-col py-auto px-auto space-y-4 my-10">
        <EmojiSectionWrapper>
          <p>👋</p>
          <p>Hi, I’m Sam.</p>
        </EmojiSectionWrapper>
        <EmojiSectionWrapper>
          <p>🚀</p>
          <p>
            I’m a Co-founder and Head of Product at{" "}
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
