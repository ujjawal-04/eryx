"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between pl-10 pr-24 py-2 transition-all duration-300 ${isScrolled
      ? "bg-white shadow-md border-b border-zinc-100"
      : "bg-transparent"
      }`}>
      <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <Image
          src="/eryx-logo.png"
          alt="ERYX Logo"
          width={160}
          height={50}
          className="h-10 w-auto px-1"
        />
      </Link>

      <div className="hidden md:flex items-center gap-20">
        <Link href="/projects" className="text-[17px] font-medium text-black hover:text-zinc-500 transition-colors tracking-wide">Project</Link>
        <Link href="/about" className="text-[17px] font-medium text-black hover:text-zinc-500 transition-colors tracking-wide">About</Link>
        <Link href="/methodology" className="text-[17px] font-medium text-black hover:text-zinc-500 transition-colors tracking-wide">Methodology</Link>
        <Link href="/resources" className="text-[17px] font-medium text-black hover:text-zinc-500 transition-colors tracking-wide">Resources</Link>
      </div>

      <Link href="/contact" className="px-8 py-2 border-2 border-[#E50914] text-[#E50914] text-[17px] font-medium hover:bg-[#EE1F23]  hover:text-white transition-colors tracking-wide">
        Contact
      </Link>
    </nav>
  );
}
