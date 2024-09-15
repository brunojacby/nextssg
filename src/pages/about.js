import React from "react";
import Head from "next/head";

const about = ({message}) => {
  return (
    <>
      <Head>
        <title>Bruno Jacby | About me</title>
        <meta name="description" content="about me page" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        
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
