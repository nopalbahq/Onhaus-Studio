'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

export default function Navbar()
{
  // State Toogle
  const [isOpen, setIsOpen] = useState(false); 

    return(
        <nav className="fixed top-0 left-0 w-full h-16 flex items-center px-5 sm:px-10 lg:px-10 bg-transparent z-10">
          <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
            
        {/* Logo ICS di kiri */}
        <Link href="/" className="text-3xl font-bold text-white justify-start md:pl-15 ">
          <Image src="/image/onhaus-navbar-text-edit.png" width={235} height={100} alt="ONHAUS" >

          </Image>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-5 list-none m-0 p-0">
          <li>
            <Link href="/about" className="text-white text-lg hover:text-gray-300 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/team" className="text-white text-lg hover:text-gray-300 transition">
              Team
            </Link>
          </li>
          <li>
            <Link href="/works" className="text-white text-lg hover:text-gray-300 transition">
              Works
            </Link>
          </li>
          <li>
            <Link href="/contactus" className="text-white text-lg hover:text-gray-300 transition">
              Contact
            </Link>
          </li>
          
        </ul>

        {/* Hamburger Button */}
        <button onClick={()=> setIsOpen(!isOpen)}
          className="md:hidden text-white z-50"
          aria-label="Toogle Menu"> {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        
        </div>
        {/* Mobile Menu DropDown */}
        <AnimatePresence>
        {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}      // Mulai dari atas (y: -100 = 100% ke atas) + transparan
          animate={{ opacity: 1, y: 0 }}         // Slide down ke posisi normal + fade in
          exit={{ opacity: 0, y: 100 }}         // Slide up kembali + fade out
          transition={{ duration: 0.4, ease: "easeIn" }}  // Durasi & easing halus
          className="fixed inset-0 top-16 bg-black/95 backdrop-blur-md z-40 flex flex-col items-center justify-center"
          >
        
          <ul className="flex flex-col gap-10 text-center">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}  // Tutup menu setelah klik
                className="text-white text-3xl font-light hover:text-gray-300 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}  // Tutup menu setelah klik
                className="text-white text-3xl font-light hover:text-gray-300 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                onClick={() => setIsOpen(false)}
                className="text-white text-3xl font-light hover:text-gray-300 transition"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                href="/works"
                onClick={() => setIsOpen(false)}
                className="text-white text-3xl font-light hover:text-gray-300 transition"
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                href="/contactus"
                onClick={() => setIsOpen(false)}
                className="text-white text-3xl font-light hover:text-gray-300 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
      </AnimatePresence>
      </nav>
    )
}