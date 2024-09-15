import React, { useEffect, useRef } from "react";
import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/developer-pic-2.png";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import SkillsSlider from "@/components/SkillsSlider";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = ({message}) => {
  return (
    <>
      <Head>
        <title>Bruno Jacby | About me</title>
        <meta name="description" content="about me page" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 text-7xl lg:text-6xl sm:text-5xl xs:text-4xl sm:mb-8"
            text="
            Building Possibilities, One Stack at a Time!"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-3xl font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium text-xl">
                I am a dynamic professional, organized and responsible for what
                I do, with ambition for new challenges.
              </p>
              <p className="my-4 font-medium text-xl">
                I have a high ability to analyze and solve problems, skills such
                as leadership, self-confidence, agility, creativity, willingness
                to learn and high adaptability. I am a proactive person with a
                positive attitude.
              </p>
              <p className="font-medium text-xl">
                I take with me the philosophy that a developer is not just
                typing codes, but about solving problems. In recent years I have
                helped my clients to carry out their projects. I have a strong
                background as a consultant and in auditing.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:border-light dark:bg-dark p-8 xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[103%] h-[103%] rounded-[2rem] bg-dark dark:border-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Bruno Jacby"
                priority="true"
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
                className="w-full h-auto rounded-2xl dark:bg-light"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={15} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  training courses
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={550} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  audits performed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <SkillsSlider />
          <Education />
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const message = "Bem-vindo ao meu site!";

  return {
    props: {
      message,
    },
  };
}

export default about;
