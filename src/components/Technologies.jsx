import js from "../assets/icons/js.png";
import ts from "../assets/icons/ts.png";
import html from "../assets/icons/html.png";
import tailwind from "../assets/icons/tailwind.png";
import mongo from "../assets/icons/mongo.png";
import express from "../assets/icons/express.svg";
import react from "../assets/icons/react.png";
import node from "../assets/icons/nodejs.png";
import java from "../assets/icons/java.png";
import spring from "../assets/icons/spring.png";
import next from "../assets/icons/next.svg";
import redis from "../assets/icons/redis.png";
import shadcn from "../assets/icons/shadcn.png";
import image from "../assets/icons/image.png";
import mysql from "../assets/icons/Mysql-pi.png";
import css from "../assets/icons/css.png";
import { motion } from "framer-motion";

const iconVarients = (duration) => ({
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
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {[
          { src: js, duration: 3.2 },
          { src: css, duration: 4.2 },
          { src: html, duration: 4.2 },
          { src: tailwind, duration: 4.6 },
          { src: react, duration: 5 },
          { src: mysql, duration: 5 },
         
         
        ].map((icon, index) => (
          <motion.div
            key={index}
            variants={iconVarients(icon.duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <img src={icon.src} className="rounded-md size-16" />
          </motion.div>
        ))}
      </motion.div>
      <motion.div 
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1.5 }}
      className="flex flex-wrap pt-10 items-center justify-center gap-4">
        {[
         
         { src: image, duration: 4.2 },
          { src: java, duration: 4.6 },
          { src: spring, duration: 5.0 },
        ].map((icon, index) => (
          <motion.div
            key={index}
            variants={iconVarients(icon.duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <img src={icon.src} className="rounded-md size-16" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
