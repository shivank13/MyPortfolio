import { animate } from "framer-motion";
import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiJavascript,
  SiPython,
  SiDjango,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import { motion } from "framer-motion";

const IconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
      initial={{y:-100, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div 
      initial={{x:-100, opacity:0}}
      whileInView={{x:0, opacity:1}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={IconVariants(2.5)} 
          initial="initial"
          animate="animate"
          title="React"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-[#61DAFB]" />{" "}
          {/* React Color */}
        </motion.div>
        <motion.div
          variants={IconVariants(5)} 
          initial="initial"
          animate="animate"
          title="JavaScript"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-7xl text-[#F7DF1E]" />{" "}
          {/* JavaScript Color */}
        </motion.div>
        <motion.div
        variants={IconVariants(4)} 
        initial="initial"
        animate="animate"
          title="TailwindCSS"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-[#06B6D4]" />{" "}
          {/* TailwindCSS Color */}
        </motion.div>
        <motion.div
        variants={IconVariants(3)} 
        initial="initial"
        animate="animate"
          title="Python"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPython className="text-7xl text-[#3776AB]" /> {/* Python Color */}
        </motion.div>
        <motion.div
        variants={IconVariants(5.5)} 
        initial="initial"
        animate="animate"
          title="Django"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiDjango className="text-7xl text-[#092E20]" /> {/* Django Color */}
        </motion.div>
        <motion.div
        variants={IconVariants(4.5)} 
        initial="initial"
        animate="animate"
          title="MongoDB"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-[#47A248]" />{" "}
          {/* MongoDB Color */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
