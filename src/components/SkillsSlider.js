import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

import meter1 from "../../public/images/skill/meter1.svg"
import jsImg from "../../public/images/skill/js.svg"
import cssImg from "../../public/images/skill/css.svg"
import htmlImg from "../../public/images/skill/html.svg"
import mongoImg from "../../public/images/skill/mongo.svg"
import reactImg from "../../public/images/skill/react.svg"
import nextImg from "../../public/images/skill/next.svg"
import nodeImg from "../../public/images/skill/node.svg"
import tailImg from "../../public/images/skill/tail.svg"
import bootImg from "../../public/images/skill/boot.svg"
import muiImg from "../../public/images/skill/mui.svg"
import wordpressImg from "../../public/images/skill/wordpress.svg"
import authImg from "../../public/images/skill/auth.png"
import jestImg from "../../public/images/skill/jest.png"
import octopusImg from "../../public/images/skill/octopus.png"
import outImg from "../../public/images/skill/outsystemspng.png"
import angularImg from "../../public/images/skill/angular.png"
import rxjsImg from "../../public/images/skill/rxjs.png"
import ngrxImg from "../../public/images/skill/ngrx.svg"
import dockerImg from "../../public/images/skill/docker.webp"

const SkillsSlider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill my-[100px]" id="skills">
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Skills</h2>
                        <br />                       
                        <Carousel
                        autoPlay={true} 
                        autoPlaySpeed={2000} 
                        responsive={responsive} 
                        infinite={true} 
                        className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <Image src={reactImg} alt="React" className='imgskill' />
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                                <Image src={outImg} alt="Outsystems" className='imgskill' />
                                <h5>Outsystems</h5>
                            </div>
                            <div className="item">
                                <Image src={nextImg} alt="Next" className='imgskill' />
                                <h5>Next.js</h5>
                            </div>
                            <div className="item">
                                <Image src={angularImg} alt="Angular" className='imgskill' />
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                                <Image src={rxjsImg} alt="RxJs" className='imgskill'/>
                                <h5>RxJs</h5>
                            </div>
                            <div className="item">
                                <Image src={ngrxImg} alt="NgRx" className='imgskill'/>
                                <h5>NgRx</h5>
                            </div>
                            <div className="item">
                                <Image src={nodeImg} alt="Node" className='imgskill'/>
                                <h5>Node.js</h5>
                            </div>                            
                          
                            <div className="item">
                                <Image src={jestImg} alt="Jest" className='imgskill'/>
                                <h5>Jest</h5>
                            </div>
                            <div className="item">
                                <Image src={octopusImg} alt="React Testing Library" className='imgskill'/>
                                <h5>React Testing Library</h5>
                            </div>
                            <div className="item">
                                <Image src={authImg} alt="NextAuth.js" className='imgskill'/>
                                <h5>Auth.js</h5>
                            </div> 
                            <div className="item">
                                <Image src={tailImg} alt="Tailwind" className='imgskill' />
                                <h5>Tailwind CSS </h5>
                            </div>
                            <div className="item">
                                <Image src={mongoImg} alt="MongoDB" className='imgskill'/>
                                <h5>MongoDB</h5>
                            </div>                           
                            <div className="item">
                                <Image src={cssImg} alt="CSS" className='imgskill'/>
                                <h5>CSS 3</h5>
                            </div>
                            <div className="item">
                                <Image src={bootImg} alt="Bootstrap" className='imgskill'/>
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <Image src={muiImg} alt="Material" className='imgskill'/>
                                <h5>Material UI</h5>
                            </div>                            
                            <div className="item">
                                <Image src={htmlImg} alt="HTML" className='imgskill'/>
                                <h5>HTML 5</h5>
                            </div>                            
                            <div className="item">                                
                                <Image src={jsImg} alt="JavaScript" className='imgskill'/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">                                
                                <Image src={dockerImg} alt="Docker" className='imgskill'/>
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <Image src={meter1} alt="Web Development" className='imgskill'/>
                                <h5>Web Development</h5>
                            </div>  
                            <div className="item">
                                <Image src={wordpressImg} alt="React" className='imgskill'/>
                                <h5>Wordpress</h5>
                            </div>                         
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>        
    </section>
  )
}


export default SkillsSlider