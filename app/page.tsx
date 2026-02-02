'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Globe,
  Mail,
  Instagram,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';

// FIX: This interface removes the "property does not exist" errors
interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image_url: string;
}

export default function LandingPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data, error } = await supabase.from('products').select('*');
        if (error) throw error;
        setProducts(data || []);
      } catch (err: any) {
        console.error('Supabase Error:', err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-blue-500 font-sans">
      {/* 1. PREMIUM NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 border-b border-white/5 backdrop-blur-xl px-6 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"
          >
            NIDA CREATIVES
          </motion.div>
          <div className="hidden md:flex gap-10 text-xs font-bold tracking-widest text-gray-400 uppercase">
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
            <a href="#vault" className="hover:text-blue-400 transition">
              The Vault
            </a>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold hover:bg-blue-600 hover:text-white transition-all">
            GET ACCESS
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION (SEO Optimized) */}
      <section className="pt-48 pb-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            Elevate Your Digital Presence
          </span>
          <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-tight">
            BUILD <span className="text-zinc-700">&</span> <br />
            <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">
              BLOOM.
            </span>
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            A curated ecosystem of premium digital assets, branding kits, and
            strategic blueprints for the modern entrepreneur.
          </p>
          <a
            href="#vault"
            className="inline-flex items-center gap-3 bg-zinc-900 border border-white/10 px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all group"
          >
            Explore Collection{' '}
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </section>

      {/* 3. VISION & MISSION */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-zinc-900 to-black p-12 rounded-[3rem] border border-white/5"
          >
            <Zap className="text-blue-500 mb-6" size={40} />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              To bridge the gap between creative vision and technical execution.
              We empower creators to launch faster with assets that scream
              professional quality.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-zinc-900 to-black p-12 rounded-[3rem] border border-white/5"
          >
            <ShieldCheck className="text-emerald-500 mb-6" size={40} />
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              To become the global gold-standard for the digital economy,
              ensuring every "Bloom" starts with a solid, high-end "Build."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. ABOUT NIDA SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-blue-600 rounded-[4rem] overflow-hidden flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-12 md:p-20 text-white">
            <h2 className="text-4xl font-black mb-6">
              The Mind Behind <br /> the Bloom.
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed italic">
              "Design is the silent ambassador of your brand. I created Nida
              Creatives to give every founder the tools to speak loudly without
              saying a word."
            </p>
            <div className="flex gap-4">
              <div className="p-3 bg-blue-500 rounded-full hover:bg-white hover:text-blue-600 transition cursor-pointer">
                <Instagram size={20} />
              </div>
              <div className="p-3 bg-blue-500 rounded-full hover:bg-white hover:text-blue-600 transition cursor-pointer">
                <Mail size={20} />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 h-[500px] bg-zinc-800">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
              alt="Nida Founder"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </section>

      {/* 5. THE DIGITAL VAULT (Live Products) */}
      <section id="vault" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-4">THE VAULT</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-[400px] bg-zinc-900 animate-pulse rounded-[2.5rem]"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-10">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -15 }}
                className="bg-zinc-900/50 border border-white/5 p-6 rounded-[3rem] hover:border-blue-500/30 transition-all group"
              >
                <div className="overflow-hidden rounded-[2rem] mb-6">
                  <img
                    src={
                      product.image_url ||
                      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800'
                    }
                    alt={product.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <span className="text-blue-500 text-xs font-black tracking-widest uppercase">
                  {product.category || 'Digital Asset'}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-6">
                  {product.title}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-black">${product.price}</span>
                  <button className="bg-white text-black px-8 py-3 rounded-2xl font-bold group-hover:bg-blue-600 group-hover:text-white transition-all">
                    GET NOW
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-zinc-900 to-black p-16 rounded-[4rem] border border-white/5">
          <h2 className="text-4xl md:text-6xl font-black mb-8 italic tracking-tighter">
            Ready to Start?
          </h2>
          <p className="text-gray-400 text-xl mb-12">
            Send us a message for custom branding or collaborations.
          </p>
          <a
            href="mailto:hello@nidacreatives.com"
            className="text-2xl md:text-4xl font-black text-blue-500 hover:text-white transition-colors break-all underline decoration-zinc-800 underline-offset-8"
          >
            hello@nidacreatives.com
          </a>
        </div>
      </section>

      <footer className="py-16 text-center border-t border-white/5">
        <p className="text-gray-600 text-xs tracking-[0.4em] uppercase font-bold">
          © 2026 NIDA CREATIVES · PREMIUM DIGITAL BLUEPRINTS
        </p>
      </footer>
    </div>
  );
}
