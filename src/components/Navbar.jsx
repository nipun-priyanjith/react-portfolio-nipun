import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Heroicons for the hamburger and close icons

const navLinks = [
  { name: 'AboutMe', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'MyYouTube', href: '#experience' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="p-5 text-white border-neutral-900">
      <div className="flex items-center justify-between">
        
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? (
              <XIcon className="w-8 h-8 text-white" />
            ) : (
              <MenuIcon className="w-8 h-8 text-white" />
            )}
          </button>
        </div>

        {/* Navbar Links for larger screens */}
        <div className="hidden lg:flex space-x-6 ml-auto">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              whileHover={{ scale: 1.1, color: '#9CFF00' }}
              className="text-lg font-mono"
              style={{ color: '#fffce1' }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Dropdown Menu for mobile screens */}
      {menuOpen && (
        <div className="lg:hidden mt-4 flex flex-col space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-lg font-mono"
              style={{ color: '#fffce1' }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;


















// import React from 'react'
// import logo from "../assets/kevinRushLogo.png"
// import { FaLinkedin } from 'react-icons/fa'
// import { FaGithub } from 'react-icons/fa'
// import { FaYoutube } from 'react-icons/fa'
// import { FaFacebook } from 'react-icons/fa'

// function Navbar() {
//   return (
//     <nav className=' mb-20 flex items-center justify-between py-6'>
//       <div className="flex flex-shrink-0 items-center">
//         <img className='mx-2 w-10' src={logo} alt="logo" />
//       </div>
//       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//         <FaLinkedin/>
//         <FaGithub/>
//         <FaYoutube/>
//         <FaFacebook/>
//       </div>
//     </nav>
//   )
// }

// export default Navbar