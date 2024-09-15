import ContactMe from '@/components/ContactMe'
import React from 'react'
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'

const contact = ({message}) => {
  return (
    <>
    <Head>
      <title>Bruno Jacby | Contact Page</title>
      <meta name="description" content="my contact page"/>
    </Head>
    <TransitionEffect />          
    <main className="w-full flex flex-col items-center justify-center overflow-hidden dark:text-light">   
      <Layout className='pt-16'>
        <AnimatedText text="Contact Me" className='mb-16 text-6xl lg:!text-6xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />  
        <ContactMe />
      </Layout> 
    </main>
  </>
  )
}

export async function getStaticProps() {
  const message = "Bem-vindo ao meu site!";

  return {
    props: {
      message,
    },
  };
}

export default contact