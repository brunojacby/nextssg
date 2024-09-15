import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import list from '../../public/images/list.png'
import cross from '../../public/images/cross.png'
import Image from 'next/image'

const CustomLink = ({href, title, className=""}) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block bg-dark absolute 
      left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${router.asPath === href ? 'w-full' : 'w-0'}`} >&nbsp;</span>
    </Link>
  )
}

const CustomMobileLink = ({href, title, className="", toggle}) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  }

  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark  my-2`} onClick={handleClick}>
      {title}
      <span className={`h-[1px] inline-block bg-light absolute 
      left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-dark`} >&nbsp;</span>
    </button>
  )
}

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () =>{
    setIsOpen(!isOpen)
  }


  return (
    <header
        className='w-full px-32 font-medium py-8
        flex items-center justify-between dark:text-light z-10 lg:px-16 md:px-12 sm:px-8'
    >        
        <button className='lg:flex hidden items-center justify-center py-2' onClick={handleClick}>
        {isOpen ? <div onClick={handleClick} className='w-full h-full bg-dark/10 z-[8] absolute top-0 left-0'></div> : null }
          {isOpen ? <Image src={cross} alt='' className="h-[30px] w-[30px]  border-solid border-dark border-[1px] rounded-lg p-1 -mt-2 dark:border-light dark:text-light dark:bg-light"/> : <Image src={list} alt='' className="h-[30px] w-[30px]  rounded-lg p-1 -mt-2 dark:border-light dark:text-light dark:bg-light"/>}
        </button>
        <div className='w-full flex justify-between items-center lg:hidden'>        
          <nav>
            <CustomLink href="/" title="Home" className='mr-4'/>
            <CustomLink href="/about" title="About me" className='mx-4'/>
            <CustomLink href="/contact" title="Contact me" className='mx-4'/>
            {/*<CustomLink href="/projects" title="Projects" className='mx-4'/>
            <CustomLink href="/articles" title="Articles" className='ml-4'/>*/}
          </nav>        
          <nav className='flex items-center justify-center flex-wrap'>
              <motion.a 
                href="https://github.com/brunojacby/" 
                whileHover={{y:-2}} 
                whileTap={{scale: 0.9}}
                className='w-6 mx-3'
                target={"_blank"}
              >
                <GithubIcon className="dark:text-light text-dark"/>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/brunojacby/"
                whileHover={{y:-2}} 
                whileTap={{scale: 0.9}}
                target={"_blank"}
                className='w-6 mx-3'
              >
                <LinkedInIcon />
              </motion.a>

              <button
                className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                onClick={()=> setMode(mode === "light" ? "dark" : "light")}
              >
                {
                  mode === "dark" ?
                  <SunIcon className={"fill-dark"} />
                  : <MoonIcon className={"fill-dark"} />
                }
              </button>
          </nav>
        </div>

        {
          isOpen ? 
            <motion.div 
              initial={{scale:0, opacity: 0, x: "-50%", y: "-50%"}}
              animate={{scale:1, opacity: 1}}
              className='min-w-[70vw] lg:flex lg:flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 xl:hidden'>              
              <nav className='flex items-center flex-col justify-center'>
                <CustomMobileLink href="/" title="Home" toggle={handleClick} />
                <CustomMobileLink href="/about" title="About me"  toggle={handleClick} />
                <CustomMobileLink href="/contact" title="Contact me" toggle={handleClick} />
                {/* 
                <CustomMobileLink href="/projects" title="Projects"  toggle={handleClick} />
                <CustomMobileLink href="/articles" title="Articles"  toggle={handleClick} /> 
                */}
              </nav> 

              <nav className='flex items-center justify-center flex-wrap mt-2'>
                  <motion.a 
                    href="https://github.com/brunojacby/" 
                    whileHover={{y:-2}} 
                    whileTap={{scale: 0.9}}
                    className='w-6 mx-3'
                    target={"_blank"}
                  >
                    <GithubIcon className="dark:text-dark text-light"/>
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/brunojacby/"
                    whileHover={{y:-2}} 
                    whileTap={{scale: 0.9}}
                    target={"_blank"}
                    className='w-6 mx-3'
                  >
                    <LinkedInIcon />
                  </motion.a>

                  <button
                    className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                    onClick={()=> setMode(mode === "light" ? "dark" : "light")}
                  >
                    {
                      mode === "dark" ?
                      <SunIcon className={"fill-dark"} />
                      : <MoonIcon className={"fill-dark"} />
                    }
                  </button>
              </nav>
            </motion.div>
          : null
        }
        
        <div 
          className='absolute left-[50%] top-2
          translate-x-[-50%]
          '>
          <Logo />
        </div>
    </header>
  )
}

export default NavBar
