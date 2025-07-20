import { FaDiscord, FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
const links = [
    { href: 'https://discord.com', icon: <FaDiscord />},
    { href: 'https://github.com/CoderGuyShubham', icon: <FaGithub />},
    { href: 'https://youtube.com', icon: <FaYoutube/>},
    { href: 'https://www.linkedin.com/in/coderguyshubham', icon: <FaLinkedin/>},
]

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 sm:text-black text-white'>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-10 md:flex-row'>
            <p className='text-center text-sm font-light md:text-left'>
                &copy; Nova 2025. All rights reserved. <br /> Made by Shubham.
            </p>
            <div className='flex justify-center gap-4 md:justify-start'>
                {links.map((link, index) =>(
                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="sm:text-black text-white trasition-colors duration-500 ease-in-out hover:text-white">
                        {link.icon}
                    </a>
                ))}
            </div>
            <a href="#privacy-policy" className="text-center text-sm hover:underline">
                Privacy Policy
            </a>
        </div>
    </footer>
  )
}

export default Footer