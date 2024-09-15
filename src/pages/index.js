import Head from "next/head";

export default function Home({message}) {
  return (
    <>
      <Head>
        <title>Bruno Jacby</title>
        <meta name="description" content="Bruno Jacby Portfolio" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        
      </main>
    </>
  );
}

export async function getStaticProps() {
  const message = "Bem-vindo ao meu site!";

  return {
    props: {
      message,
    },
  };
}