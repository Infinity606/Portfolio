import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  courses,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[1100px] w-full' //textbox
  >
    <p className='text-white font-black text-[48px]'>Relevant Courses Taken</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{courses}</p>

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

const Feedbacks = () => {
  return (
    <div className={`-mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl sm:px-16 px-6 sm:py-8 py-10 min-h-[200px]`} //top block
      >
        <motion.div variants={textVariant()}>{/*
          <p className={styles.sectionSubText}>Education</p>
          <h2 className={styles.sectionHeadText}>Computer Engineering McMaster University</h2>*/}
          <p className='text-white font-black text-[48px] p-3'>
            B.Eng Computer Engineering
          </p>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
