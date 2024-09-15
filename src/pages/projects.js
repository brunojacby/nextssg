import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import imgProject1 from "../../public/images/projects/article1.png"
import {motion} from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {

  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <FramerImage 
          src={img} 
          alt={title}  
          className='w-full h-auto' 
          whileHover={{scale:1.05}}
          transition={{duration: 0.2}} 
          priority="true"
          sizes='(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          50vw' 
          />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left font-bold text-4xl dark:text-light sm:text-base'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link 
          href={link} target='_blank' className='w-10'><GithubIcon className="hover:text-dark hover:dark:text-primaryDark" /></Link>
          <Link href={link} target='_blank' 
          className='ml-4 bg-dark text-light p-2 px-6 text-lg font-semibold rounded-lg hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:hover:underline sm:px-4 sm:text-base'
          >
            Visit Project
          </Link>
        </div>
      </div>      
    </article>
  )
}

const Project = ({type, title, img, link, github}) => {

  return (
    <article className='w-full flex items-center justify-between rounded-2xl border border-solid border-dark bg-light p-6 relative flex-col dark:bg-dark dark:text-light dark:border-light xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
      <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className='w-full h-auto'
        whileHover={{scale:1.05}}
        transition={{duration: 0.2}} />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-2'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left font-bold text-3xl lg:text-2xl'>{title}</h2>
        </Link>     

        <div className='mt-2 flex items-center w-full justify-between'>
        <Link 
          href={link} 
          target='_blank' 
          className='text-lg font-semibold underline hover:text-dark/75 hover:dark:text-primaryDark md:text-base'>
            Visit
        </Link>
        <Link href={link} target='_blank' className='w-10 md:w-6'><GithubIcon className="hover:text-dark/75 hover:dark:text-primaryDark" /></Link>
          
        </div>
      </div>      
    </article>
  )
}

const Projects = () => {  
   
  return (
    <>
      <Head>
        <title>Bruno Jacby | Projects Page</title>
        <meta name="description" content="my projects page"/>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">   
        <Layout className='pt-16'>
          <AnimatedText text="From Vision to Reality: Crafting Innovative Projects with Expertise!" className='mb-16 text-6xl lg:!text-6xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />

          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
                <FeaturedProject 
                title="React Portfolio Website"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
                page transitions, cool background effects, unique design and it is mobile responsive."
                link="/"
                github="/"
                type="Featured Project"
                img={imgProject1}
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
                <Project 
                title="React Portfolio Website"                
                link="/"
                github="/"
                type="Project"
                img={imgProject1}
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
                <Project 
                title="React Portfolio Website"                
                link="/"
                github="/"
                type="Project"
                img={imgProject1}
                />
            </div>

            <div className='col-span-12'>
                <FeaturedProject 
                title="React Portfolio Website"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
                page transitions, cool background effects, unique design and it is mobile responsive."
                link="/"
                github="/"
                type="Featured Project"
                img={imgProject1}
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
                <Project 
                title="React Portfolio Website"                
                link="/"
                github="/"
                type="Project"
                img={imgProject1}
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
                <Project 
                title="React Portfolio Website"                
                link="/"
                github="/"
                type="Project"
                img={imgProject1}
                />
            </div>            
          </div>
        </Layout> 
      </main>
    </>
  )
}

export default Projects