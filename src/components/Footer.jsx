import { FaDiscord, FaTwitter, FaGithub, FaTwitch, FaYoutube } from "react-icons/fa";
const links = [
    { href: 'https://discord.com', icon: <FaDiscord />},
    { href: 'https://twitter.com', icon: <FaTwitter />},
    { href: 'https://github.com/CoderGuyShubham', icon: <FaGithub />},
    { href: 'https://twitch.com', icon: <FaTwitch />},
    { href: 'https://youtube.com', icon: <FaYoutube/>},
]

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
            <p className='text-center text-sm font-light md:text-left'>
                &copy; Nova 2025. All rights reserved. <br /> Made by Shubham.
            </p>
            <div className='flex justify-center gap-4 md:justify-start'>
                {links.map((link, index) =>(
                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-black trasition-colors duration-500 ease-in-out hover:text-white">
                        {link.icon}
                    </a>
                ))}
            </div>
            <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right">
                Privacy Policy
            </a>
        </div>
    </footer>
  )
}

export default Footer