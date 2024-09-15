import React, { useRef  } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type, time, place, info, listatipo})  => {
    const ref = useRef(null);   
    const lista = info.split("|");

    return (  
        <>   
          {
            listatipo == 1 ? 
            <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]'>
                <LiIcon reference={ref} />
                <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5, type:"spring"}}
                viewport={{once: true}}
                >
                    <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}&nbsp;</h3>
                    <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                        {time} | {place} 
                    </span>
                    <ul className='font-medium w-full md:text-sm list-disc ml-5'>
                        {
                            lista.map((item, index)=> (
                                <li key={index}>{item}</li>
                            ))
                        }                        
                    </ul>
                </motion.div>
            </li>
             : 
            <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]'>
                <LiIcon reference={ref} />
                <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5, type:"spring"}}
                viewport={{once: true}}
                >
                    <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}&nbsp;</h3>
                    <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                        {time} | {place} 
                    </span>
                    <p className='font-medium w-full md:text-sm'>
                        {info}
                    </p>
                </motion.div>
            </li>
          }  
        
        </>
    )    
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );


  return (
    <div className='mt-[80px] mb-[200px]'>
        <h2 className='font-bold text-8xl mb-20 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Education
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:left-[30px] xs:left-[20px]' 
             />

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>       
                <Details 
                    type="EF SET English Certificate 67/100 (C1 Advanced)"
                    time="2024" place="EF Standard English Test (EF SET)"
                    info="English certification"                    
                />         
                <Details 
                    type="C# Professional Course + Object Orientation + .NET 7 + Database + Job Market"
                    time="2024" place="TTech Inc"
                    info="C#, .NET 7, Visual Studio, POO"                    
                />
                <Details 
                    type=" Associate Reactive Developer (OutSystems 11)"
                    time="2024" place="Outsystems"
                    info="Certification"                    
                />
                <Details 
                    type="Programming & OutSystems"
                    time="2023-2024" place="College of Sciences of the University of Lisbon (FCUL)"
                    info="OutSystems, Python, SQL, Javascript, HTML, CSS, SCRUM"                    
                />
                <Details 
                    type="RxJS + Angular Material - Reactive Frontend"
                    time="2023" place="Udemy"
                    info="RxJS and Angular Material"                    
                />
                <Details 
                    type="Professional Intelligence"
                    time="2023" place="PUC-RS"
                    info=""                    
                />
                <Details 
                    type="Cambly's native English"
                    time="2023" place="Cambly Inc."
                    info="Cambly Certificate of Accomplishment"                    
                />
                <Details 
                    type="IBM Front-End Developer"
                    time="2022-2023" place="IBM"
                    info="IBM Front-End Developer Professional Certificate"                    
                />
                <Details 
                    type="Web Programming"
                    time="2023" place="IEFP"
                    info="Algorithms | Programming in C/C++ | SQL | PHP | Web Client-side
                    (HTML, CSS & JavaScript) | MariaDB"
                />   
                 <Details 
                    type="React Testing Library and Jest"
                    time="2023" place=" Udemy"
                    info="React Testing Library and Jest"
                />   
                <Details 
                    type="Full Stack Training - React and Java"
                    time="2022-2023" place="EuCursos"
                    info="Front-end: Javascript, HTML, CSS and React.js | Database: MariaDB, XAAMP, SQL and AWS Amazon | Back-end: Java, Spring Boot"
                    listatipo={1}
                />  
                <Details 
                    type="Front End Development Libraries"
                    time="2022" place="Freecodecamp.org"
                    info="Bootstrap, jQuery, SASS, React, Redux"                    
                />
                <Details 
                    type="WordPress + WooCommerce"
                    time="2022-2023" place="Hostnet"
                    info=""                    
                />
                 <Details 
                    type="The Modern Angular Bootcamp"
                    time="2022" place="Stephen Grider"
                    info="Angular and Angular Material"                    
                />
                <Details 
                    type="Formation Full Stack Javascript"
                    time="12/2022" place="Intensive Course"
                    info="Front-end: HTML 5, CSS 3, JavaScript, React.js, Material UI, Next.js | Back-end: Node.js, MongoDB, API RESTFu"
                    listatipo={1}
                />                                
                <Details 
                    type="CCP"
                    time="2021" place="ENA, School of Business and Administration"
                    info="Certificate n.º F720026/2021"
                />
                <Details 
                    type="Master in Technology and Food Safety"
                    time="2018-2020" place="FCT NOVA"
                    info=""
                />
                <Details 
                    type="Bachelor's Degree in Chemical Engineering"
                    time="2017" place="UFPE"
                    info=""
                />
            </ul>
        </div>
    </div>
  )
}

export default Education