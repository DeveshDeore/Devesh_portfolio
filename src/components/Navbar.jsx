import logo from "../assets/projects/D_b1.png"
import { FaLinkedin, FaGithub, FaInstagram  } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="" height={100} width={100}/>    
            
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin onClick={() => window.open("https://linkedin.com/in/devesh-deore-b6221b300")} className="cursor-pointer"/>
            <FaGithub onClick={() => window.open("https://github.com/DeveshDeore")} className="cursor-pointer"/>
            {/* <FaSquareXTwitter onClick={() => window.open("https://twitter.com/")} className="cursor-pointer"/> */}
            <FaInstagram onClick={() => window.open("https://www.instagram.com/devesh_deore_83")} className="cursor-pointer"/>
        </div>
    </nav>
  )
}

export default Navbar