'use client';
import React from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg" />
            <span className="font-bold text-xl tracking-tight text-brand-dark">
              Build & Bloom
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className="text-slate-600 hover:text-brand-primary transition"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-slate-600 hover:text-brand-primary transition"
            >
              The Vault
            </Link>
            <Link
              href="/courses"
              className="text-slate-600 hover:text-brand-primary transition"
            >
              Sprints
            </Link>
            <Link
              href="/about"
              className="text-slate-600 hover:text-brand-primary transition"
            >
              About Nida
            </Link>

            <button className="flex items-center gap-2 bg-brand-dark text-white px-5 py-2 rounded-full hover:bg-opacity-90 transition">
              <ShoppingBag size={18} />
              <span>Cart</span>
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <Menu className="text-slate-600" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
