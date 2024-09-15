import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-0.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/lamp.svg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bruno Jacby</title>
        <meta name="description" content="Bruno Jacby Portfolio" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="!pt-0">
          <div className="flex items-center justify-between w-full lg:flex-col gap-10 md:gap-1">
            <div className="w-1/2 md:w-full flex justify-center">
              <Image
                src={profilePic}
                priority
                alt="Bruno Jacby"
                className="lg:hidden md:inline-block md:w-[80%] z-0 rounded-2xl md:mb-5 w-[70%]"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                text={
                  "Reactivate Your Digital Vision with a Full-Stack Developer!"
                }
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects, showcasing my expertise in web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/about"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border dark:bg-light dark:text-dark border-solid 
                hover:dark:bg-dark hover:dark:text-light
                border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  About Me <LinkArrow className={`w-4 ml-1`} />
                </Link>
                <Link
                  href="mailto:brunojacby@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-16 bottom-16 xl:right-8 xl:top-[82%] inline-block w-[10em] md:hidden">
          <Image src={lightBulb} alt="Bruno Jacby" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
