import { styles } from "../styles";
import { logo } from "../assets";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const description = [
      {
          text: "Web developer"
      },
      {
          text: "Athlete"
      },
      {
          text: "Computer Engineering Student"
      },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === description.length - 1) {
                clearInterval(intervalId); // Stop the interval when reaching the last index
                return prevIndex; // Return the same index to prevent further updates
            } else {
                return prevIndex + 1; // Increment the index if it's not the last one
            }
        });
    }, 1500);

    return () => clearInterval(intervalId);
}, [description.length]);


  return (
    <section className={'relative w-full h-screen mx-auto'}>
       <div className={`${styles.paddingX} absolute inset-0 top-[120px]  max-w-7xl mx-auto items-start gap-5 `}>
        <img src={logo} alt='logo' className='w-24 object-contain' /> 
        <div className='absolute bottom-32'>
        <h1 className={`${styles.heroHeadText}`}>
              Hi, I'm <span >Shaiyaan</span>
            </h1>
            <p className={`${styles.heroSubText}`}>
            I am a
            </p>
            <p className={`${styles.heroSubText2}`}>
            <AnimatePresence>
              <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, rotateX: 180 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  exit={{ opacity: 0, rotateX: -180 }}
                  transition={{ duration: 0.5 }}
                  style={{ position: 'absolute', top: '93%', transform: 'translate(-50%, -50%)' }}
                >
                {description[currentIndex].text} <br className='sm:block hidden' />
              </motion.p>
            </AnimatePresence>
            </p>
        </div>
      </div>

      <div className={`absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center `}>
        <a href='#about'>
          <div className={`w-[25px] h-[25px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 hover:scale-110 transition duration-300`}>
          </div>
        </a>
      </div>
      <div className={`flex flex-col justify-center items-center -mt-12 `}>
        <p className={`text-secondary text-[13px] mt-4`}>Press to Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;
