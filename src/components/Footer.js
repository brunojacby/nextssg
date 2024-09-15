import Image from 'next/image'
import Layout from './Layout'
import Link from 'next/link'
import badge from '../../public/images/badgeibm.png'
import badgeReact from '../../public/images/front-end-development-with-react.png'

const Footer = () => {
  return (
    <footer className='pb-6 w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
        <Layout 
        className='!py-16 lg:py-6 grid grid-cols-3 gap-2 items-center justify-center md:flex md:flex-col md:gap-6'
        >            
          <div className='flex items-center justify-center lg:p-2'>
                Build With<span className='text-primary text-2xl px-1 dark:text-primaryDark'>&hearts;</span>
                by&nbsp;<Link href="https://brunojacby.com" target={"_self"} className='underline underline-offset-2'>Bruno Jacby</Link>
          </div>
          <div className='flex items-center justify-center'>
            <Link href="/contact" className='underline underline-offset-2' target={"_self"} >Say Hello!</Link>         
          </div>
          <div className='flex gap-5 items-center justify-center'>
            <Image src={badge} alt='Software Engineering Essentials' className='rounded-full w-[150px] md:w-[100px]'/>   
            <Image src={badgeReact} alt='Developing Front-End Apps with React' className='rounded-full w-[150px] md:w-[100px]'/>  
          </div>          
          <div className='flex items-center justify-center mt-10 col-span-3'>
            <span>2021-{new Date().getFullYear()} &copy; All Rights Reserved.</span> 
          </div>         
        </Layout>
    </footer>
  )
}

export default Footer