import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram  } from "react-icons/fa"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Get in touch
      </motion.h2>
      <div className="text-center tracking-tighter text-neutral-200">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {/* {CONTACT.phoneNo} */}
        </motion.p>
        <a href="mailto: deveshdeore82@gmail.com" className="border-b memail">
        <svg className="h-4 w-4 text-blue-500 email"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg>
          {CONTACT.email}
        </a>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
           <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin onClick={() => window.open("https://linkedin.com/in/devesh-deore-b6221b300")} className="cursor-pointer"/>
            <FaGithub onClick={() => window.open("https://github.com/DeveshDeore")} className="cursor-pointer"/>
            {/* <FaSquareXTwitter onClick={() => window.open("https://twitter.com/")} className="cursor-pointer"/> */}
            <FaInstagram onClick={() => window.open("https://www.instagram.com/devesh_deore_83")} className="cursor-pointer"/>
        </div>
        </motion.p>
       
        
        
      </div>
    </div>
  );
};

export default Contact;
