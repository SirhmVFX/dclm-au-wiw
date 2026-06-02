// import Image from "next/image";
// import Link from "next/link";
// import Button from "./Button";

// function Header() {
//   return (
//     <>
//       <div className="w-full h-20 bg-black/10 flex items-center justify-between px-10 fixed top-0 left-0 z-50 backdrop-blur-sm">
//         <div className="flex items-center justify-between gap-4 w-[1200px] mx-auto">
//           <Image
//             src="/assets/dlclogo.png"
//             alt="Logo"
//             width={100}
//             height={100}
//             className="w-20"
//           />

//           <div className="flex gap-4 items-center text-white">
//             <Link href="/about">About</Link>
//             <Link href="/order-of-service">Order of program</Link>
//           </div>
//           <div className="flex items-center gap-4">
//             <Button href="/register" text="Register Now" type="fill" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Header;

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Program", href: "/program" },
    { name: "Direction", href: "/direction" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? " bg-black/20 backdrop-blur-md shadow-2xl py-5" : "   py-8"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="flex items-center space-x-2">
              <div>
                <Image
                  src="/assets/dlclogo.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-white leading-none">
                  Deeper Life <br /> Bible Church
                </h1>
                <p className="text-base text-gray-300 -mt-1">Australia</p>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-orange-400 transition-colors duration-300 font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <a
              href="/register"
              className="px-6 py-2 bg-orange-500  text-white font-bold rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105"
            >
              Register Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none z-99"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-black z-40 transition-transform duration-500 pt-24 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-orange-400 text-xl font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/register"
              onClick={() => setIsOpen(false)}
              className="px-8 py-3 bg-orange-500 text-gray-900 font-bold rounded-full mt-4"
            >
              Register Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
