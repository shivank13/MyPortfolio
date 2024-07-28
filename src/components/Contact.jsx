import React from "react";
import { CONTACT } from "../constants/data";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1 
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="my-10 text-center text-4xl">Get in Touch</motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        ><a href={`tel:${CONTACT.phoneNo}`} className="border-b">
          {CONTACT.phoneNo}
        </a>
        </motion.p>
        <motion.p
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}>
        <a 
        href={`mailto:${CONTACT.email}`} className="border-b">
          {CONTACT.email}
        </a>
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
