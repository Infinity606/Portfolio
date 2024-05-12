import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { social } from "../constants";

import { resume, shaiyaanresume } from "../assets"

const About = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
    <motion.div 
      variants={fadeIn("left", "spring", 0.1, 2)}
    >
    </motion.div>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} ${styles.paddingX} text-center `}>A Bit About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 text-black text-[21px] max-w-3xl leading-[35px] text-center mx-auto ${styles.paddingX}`}
      >
        I'm a computer engineering student at McMaster University with experience 
        in python, C/C++, JavaScript, and expertise in frameProjects like React and Node.js. I'm 
        a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="flex justify-center gap-10 mt-4 py-5">
        {social.map((item, index) => (
          <div key={index} className="mx-4 hover:scale-110 transition duration-300">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img src={item.icon} alt={item.title} className="w-10 h-10" />
            </a>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 py-5">
        <div className="border-2 border-secondary rounded-lg hover:scale-105 hover:shadow-2xl transition duration-300">
          <a href={shaiyaanresume} target="_blank" rel="noopener noreferrer">
            <img src={resume} className={`w-80 h-30`}/>
          </a>
        </div>
      </div>
        

      <div className={`absolute bottom-52 w-full flex justify-center items-center`}>
        <a href='#experience'>
          <div className={`w-[25px] h-[25px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 hover:scale-110 transition duration-300`}>
          </div>
        </a>
      </div>
      


      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </section>
  );
};

export default SectionWrapper(About, "about");
