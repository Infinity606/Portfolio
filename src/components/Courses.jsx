import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";



const FeedbackCars = ({
  index,
  courses,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[1100px] sm:mt-4 xs:mt-9 w-full' //textbox
  >
    <p className='text-white font-black text-[48px]'>Relevant Courses Taken</p>

    <div className='mt-1'>
      
      <p className='text-white tracking-wider text-[18px]'>- COMPENG 2SI3: Data Structures, Algorithms</p>
      <p className='text-white tracking-wider text-[18px] mt-1'>- COMPENG 2SH4:Principles of Programming</p>
      <p className='text-white tracking-wider text-[18px] mt-1'>- STATS 3Y03:Probability and Statistics for Engineering</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            McMaster University
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            Hamilton ON
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const TopCard = ({
  index,
  courses,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-primary p-10 rounded-3xl xs:w-[1100px] sm:mt-4 xs:mt-9 w-full' //textbox
  >
    <motion.div
      variants={fadeIn("", "", 0.8, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      <p className='text-white font-black text-[48px]'>Relevant Courses Taken</p>
      </motion.div>
    

    <div className='mt-1'>
      <motion.div
      variants={fadeIn("", "", 1.3, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      <p className='text-white tracking-wider text-[18px]'>- COMPENG 2SI3: Data Structures, Algorithms</p>
      </motion.div>

      <motion.div
      variants={fadeIn("", "", 1.8, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      <p className='text-white tracking-wider text-[18px]'>- COMPENG 2SH4:Principles of Programming</p>
      </motion.div>

      <motion.div
      variants={fadeIn("", "", 2.3, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      <p className='text-white tracking-wider text-[18px]'>- STATS 3Y03:Probability and Statistics for Engineering</p>
      </motion.div>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
        
        <motion.div
          variants={fadeIn("up", "spring", 2.5, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            <p className='text-white font-medium text-[16px]'>McMaster University</p>
      </motion.div>
          
      <motion.div
          variants={fadeIn("up", "spring", 2.5, 1)}
          className='-mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            <p className='mt-1 text-secondary text-[12px]'>Hamilton ON</p>
      </motion.div>

        </div>
      </div>
    </div>
  </motion.div>
);

const Courses = () => {
  return (
    <div className={`-mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl p-20 ${styles.padding} min-h-[180px] `} //top block
      >
        <motion.div variants={textVariant()}>{/*
          <p className={styles.sectionSubText}>Education</p>
          <h2 className={styles.sectionHeadText}>Computer Engineering McMaster University</h2>*/}
          <p className='text-white font-black text-[48px] sm:px-3 -mt-12'>
            B.Eng Computer Engineering
          </p>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <TopCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Courses, "");
