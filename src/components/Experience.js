import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  const lista = work.split("|");

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        viewport={{ once: true }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize text-xl"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <ul className="font-medium text-sm w-full md:text-sm ml-5 list-disc">
          {lista.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mt-[80px] mb-[500px] xl:mb-[150px]">
      <h2 className="font-bold text-8xl mb-20 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          viewport={{ once: true }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
        
          <Details
            position="Front-End Developer"
            company="Dex Works"
            time="03/2023-present"
            address="Remote"
            companyLink="https://dexworks.com"
            work="Develop and maintain scalable SaaS platforms, ensuring a seamless user experience and robust functionality. 
                Implement complex features such as user management, subscription models, and real-time data processing
                | Oversee code reviews, ensuring high standards of code quality and best practices. Mentor junior developers, 
                providing guidance on coding techniques, project challenges, and professional growth
                | Work closely with backend developers, UI/UX designers, product managers, and stakeholders to define and 
                deliver complex project requirements
                | Develop a SaaS application using Angular to enable users to create, customize, and manage their online 
                stores. Create modular components, integrate with backend services, and implement a dynamic routing 
                system
                | Implement end-to-end automated testing with Playwright to ensure the application's reliability. Use JWT 
                (JSON Web Tokens) for authentication to ensure a secure login system and session management
                | Maintain websites built with React and update legacy components from ASP.NET to React
                | Migrate projects from Angular 10 to 17
                | Develop and maintain automated tests using Jest for unit testing and Playwright for end-to-end testing, 
                ensuring robust and reliable application performance
                | Main technologies: Angular, Angular Material, RxJs, Fusion Charts, Node.js, React.js, Next.js, HTML, 
                CSS, Typescript, Jest, Jasmine, Cypress, Auth, JWT, Jira, Bitbucket, Git, CI/CD and Slack"
          />
            <Details
            position="Associate Developer (Full Stack)"
            company="Moxie"
            time="2024"
            address="Lisbon, Portugal"
            companyLink="https://www.moxie.pt"
            work="Responsible for developing a Whistleblower APP, using OutSystems Developer Cloud and agile methodology
                | Also, I developed reusable libraries and components with Javascript
                | Development and maintenance of apps in OutSystems 11, Traditional Web and ODC
                | Main technologies: OutSystems, SQL, Javascript, React.js, HTML, CSS, SCRUM, Azure Boards, C#"
          />
          <Details
            position="Front-End Developer | Web Design"
            company="Bolt Agency"
            time="2023"
            address="Lisbon, Portugal"
            work="Website Creation & Maintenance: Developed and maintained responsive websites using Angular for 
                  Frontend and WordPress for CMS  | Mockup Design with Figma: Created detailed mockups and prototypes in Figma, collaborating with designers 
                  to translate visual concepts into interactive, high-fidelity web pages  | Bug Identification & Resolution: Systematically identified and resolved front-end bugs, optimizing website 
                  performance and ensuring compatibility across different devices and browsers"
          />
          <Details
            position="Front-End Developer"
            company="Workana"
            time="2021-2023"
            address="Remote"            
            work="Every transition has a beginning, and my story in technology starts here | Provided services for clients based in Brazil, Portugal, USA and England, delivering high-quality solutions for 
            projects in various industries, including e-commerce, real estate, gyms, and personal trainers |  Troubleshoot performance, accessibility, accountability, and compatibility in the context of web development
            |  Website Creation & Maintenance: Developed and maintained responsive websites using Angular, React.js, 
            WordPress, JavaScript, and PHP |  Collaboration with Cross-Functional Teams: Worked closely with backend developers, designers, and content 
            creators to align the technical implementation with creative vision, delivering cohesive and high-performing 
            websites | Technologies: Angular, React.js, Next.js, WordPress, WooCommerce, PHP, HTML, CSS, Tailwind CSS, Angular & Material UI, JavaScript, Figma"
          />
          <Details
            position="Auditor"
            company="Qualimais"
            time="2019-2021"
            address="Lisbon, Portugal"
            work="Implementation and audits in Food Safety and HACCP
                | Experience with clients in the area of restaurants, hotels and industry around Lisbon and Porto regions
                | Training in Good Practices and HACCP with customers and external customers
                | Training new auditors"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
