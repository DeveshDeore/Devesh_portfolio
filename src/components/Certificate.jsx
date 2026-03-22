import { motion } from "framer-motion";
import java from "../assets/java.png";
import web from "../assets/web.png"

function Certificate() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Certificate
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 text-center"
        >
          <div className="flex items-center justify-center">
            <a href="https://drive.google.com/file/d/1RyGWhj7-dt5tsMkCcONbtVx_wOCVlI_p/view?usp=sharing">
            <img
              src={java}
              alt="Dev"
              className="rounded-lg shadow-md"
              height={400}
              width={400}
            />
            </a>
          </div>
          <p className="py-5">Infosys, Java Certificate</p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 text-center"
        >
           <div className="flex items-center justify-center">
            <a href="https://shorturl.at/Xft2L">
            <img
              src={web}
              alt="Dev"
              className="rounded-lg shadow-md"
              height={400}
              width={400}
            />
            </a>
          </div>
          <p className="py-5">SevenMentor, Web Full Stack Certificate</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Certificate;
