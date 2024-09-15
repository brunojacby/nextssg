import React from 'react'
import {motion} from "framer-motion"

const Skill = ({name, x, y}) => {
    return (
    <motion.div             
        className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute w-max dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
        whileHover={{scale:1.2}}
        initial={{x:0,y:0}}
        whileInView={{x:x, y:y, transition: {duration: 1.5}}}        
        viewport={{once: true}}
        >
            {name}
    </motion.div>
    )    
};

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-[62px] w-full text-center md:text-6xl md:mt-32'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm
        xs:bg-circularLightXs xs:dark:bg-circularDarkXs'>
        <motion.div             
        className='flex items-center justify-center rounded-full font-semibold bg-black text-light py-3 px-8 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
        transition={{duration: 1.5}}        
        >
            Web
        </motion.div>
            <Skill name="JavaScript" x="-15vw" y="2vw" />
            <Skill name="CSS 3" x="6vw" y="-5vw" />
            <Skill name="HTML 5" x="2vw" y="6vw" />
            <Skill name="React.js" x="-5vw" y="12vw" />
            <Skill name="Bootstrap" x="-19vw" y="-10vw" />
            <Skill name="Next.js" x="-1vw" y="-15vw" />
            <Skill name="Web Design" x="20vw" y="-10vw" />
            <Skill name="Tailwind CSS" x="2vw" y="-20vw" />
            <Skill name="SQL" x="-25vw" y="10vw" />
            <Skill name="WordPress" x="-19vw" y="-18vw" />
            <Skill name="MongoDB" x="-29vw" y="-3vw" />
            <Skill name="Material UI" x="20vw" y="10vw" />
            <Skill name="Web Development" x="-5vw" y="19vw" />
            <Skill name="Figma" x="8vw" y="15vw" />
            <Skill name="Node.js" x="20vw" y="0vw" />
        </div>        
    </>
  )
}

export default Skills