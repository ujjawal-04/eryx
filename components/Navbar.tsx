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
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300 ${isScrolled
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

      <div className="hidden md:flex items-center gap-8">
        <Link href="/projects" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Project</Link>
        <Link href="/about" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">About</Link>
        <Link href="/methodology" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Methodology</Link>
        <Link href="/resources" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Resources</Link>
      </div>

      <Link href="/contact" className="px-6 py-2 border border-red-500 text-red-500 rounded-md font-medium hover:bg-red-50 transition-colors">
        Contact
      </Link>
    </nav>
  );
}
