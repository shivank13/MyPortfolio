import React from "react";
import { HERO_CONTENT } from "../constants/data";
import ProPic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-4xl font-thin tracking-tight lg:mt-16
                    lg:text-6xl"
            >
              Shivank Sharma
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-center bg-gradient-to-r from-pink-300 via-slate-500
                    to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.div
            variants={container(0.5)}
            initial="hidden"
            animate="visible">
            <a
              href="/ShivankSharma.pdf"
              download="ShivankSharma_CV.pdf"
              className="flex items-center"
            >
              <HiDownload className="mr-2 text-xl" />{" "}
              <span className="text-xl">Download CV</span>
            </a>
            </motion.div>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-10">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 1, delay: 1 },
              }}
              src={ProPic}
              alt="SS"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
