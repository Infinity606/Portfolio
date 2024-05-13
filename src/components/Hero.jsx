import { styles } from "../styles";
import { logo } from "../assets";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typical from 'react-typical'; // Import react-typical

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSubtitleAndDescription, setShowSubtitleAndDescription] = useState(false);
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
          clearInterval(intervalId);
          return prevIndex;
        } else {
          return prevIndex + 1;
        }
      });
    }, 4000);

    const subtitleAndDescriptionTimeout = setTimeout(() => {
      setShowSubtitleAndDescription(true);
    }, 2000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(subtitleAndDescriptionTimeout);
    };
  }, [description.length]);

  const typingSteps = [
    'I am a',  
    `I am a ${description[currentIndex].text}`, 2000
  ];

  return (
    <section className={'relative w-full h-screen mx-auto'}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto items-start gap-5 `}>
        <img src={logo} alt='logo' className='w-24 object-contain' /> 
        <div className='flex flex-col justify-start items-start space-y-4 absolute bottom-32'>
          <h1 className={`${styles.heroHeadText}`}>
            <Typical
              steps={['Hi, I\'m Shaiyaan', 1000]}
              loop={1}
              wrapper="p"
            />
          </h1>
          <div className={`${styles.heroSubText2} min-h-[3rem]`}> {/* Reserve space with min-height */}
            {showSubtitleAndDescription && (
              <Typical
                steps={typingSteps}
                loop={1}
                wrapper="p"
              />
            )}
          </div>
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
