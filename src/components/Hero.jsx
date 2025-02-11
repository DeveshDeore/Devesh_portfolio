import { HERO_CONTENT } from "../constants";
import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";

// Animation variants for motion components
const container = (delay) => ({
  initial: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* Fixing the motion component by using the correct initial and animate values */}
            <motion.h1
              variants={container(0)}
              initial="initial"
              animate="visible"
              className="pb-16 text-6xl font-light tracking-tight lg:mt-16 lg:text-8xl"
            >
              Devesh Deore.
            </motion.h1>
            <motion.span
              variants={container(0.3)}
              initial="initial"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(0.6)}
              initial="initial"
              animate="visible"
              className="my-2 max-w-xl py-6 tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profile}
              alt="Devesh"
              className="rounded-lg shadow-md"
              height={400}
              width={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
