'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Globe,
  Mail,
  Instagram,
  ArrowRight,
  ShieldCheck,
  Zap,
  MessageCircle,
  X,
  Quote,
  CheckCircle,
  Linkedin,
} from 'lucide-react';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image_url: string;
  checkout_url: string;
}

export default function LandingPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const getData = async () => {
      try {
        const { data, error } = await supabase.from('products').select('*');
        if (error) throw error;
        setProducts(data || []);
      } catch (err: any) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="bg-[#000000] text-white min-h-screen selection:bg-purple-500 font-sans antialiased overflow-x-hidden">
      {/* 3D MOVING BACKGROUND OBJECTS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -100, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-teal-900/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            y: [0, 150, 0],
            x: [0, 50, 0],
            rotate: [360, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[150px]"
        />
      </div>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-purple-500 to-teal-500 z-[110] origin-left"
        style={{ scaleX }}
      />

      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-[90] bg-black/60 border-b border-white/5 backdrop-blur-2xl px-6 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent italic">
            NIDA CREATIVES
          </div>
          <div className="hidden md:flex gap-8 text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">
            <a href="#vault" className="hover:text-teal-400 transition">
              Vault
            </a>
            <a href="#contact" className="hover:text-purple-400 transition">
              Connect
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-64 pb-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-7xl md:text-[12rem] font-black mb-8 tracking-tighter leading-[0.8] mix-blend-difference">
            BUILD <br />
            <span className="bg-gradient-to-b from-teal-300 via-purple-400 to-purple-600 bg-clip-text text-transparent">
              BLOOM.
            </span>
          </h1>
          <p className="text-teal-100/60 text-lg md:text-2xl max-w-2xl mx-auto font-light tracking-wide mt-8">
            Digital blueprints for the next generation of visionary founders.
          </p>
        </motion.div>
      </section>

      {/* THE VAULT */}
      <section id="vault" className="relative py-32 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-20">
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-teal-900"></div>
          <h2 className="text-3xl font-black tracking-[0.5em] uppercase italic text-purple-500">
            The Vault
          </h2>
          <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-teal-900"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -20, scale: 1.02 }}
              className="group bg-zinc-900/20 backdrop-blur-md border border-white/10 p-8 rounded-[4rem] hover:border-teal-500/50 transition-all duration-500 shadow-2xl shadow-purple-900/5"
            >
              <div className="relative overflow-hidden rounded-[3rem] mb-8 aspect-[4/5] bg-black">
                <img
                  src={product.image_url}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
                  alt={product.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-teal-50">
                {product.title}
              </h3>
              <p className="text-purple-400 font-black text-xl mb-8">
                ${product.price}
              </p>
              <button
                onClick={() => setSelectedProduct(product)}
                className="w-full py-5 bg-gradient-to-r from-teal-600 to-purple-600 rounded-3xl font-black text-[10px] tracking-[0.3em] uppercase hover:from-teal-500 hover:to-purple-500 transition-all shadow-lg shadow-purple-600/20"
              >
                Access Blueprint
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, rotateY: 20 }}
              animate={{ scale: 1, rotateY: 0 }}
              className="bg-gradient-to-b from-zinc-900 to-black border border-teal-500/30 p-12 rounded-[4rem] max-w-md w-full relative shadow-[0_0_100px_rgba(20,184,166,0.1)]"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-10 right-10 text-gray-500 hover:text-teal-400"
              >
                <X size={30} />
              </button>
              <h2 className="text-3xl font-black mb-10 text-teal-400 uppercase italic tracking-tighter">
                Checkout
              </h2>
              <div className="space-y-8 mb-12 text-sm">
                <div className="flex gap-6">
                  <span className="text-purple-500 font-black italic text-xl">
                    01
                  </span>
                  <p className="text-gray-300">
                    Message Nida via WhatsApp to confirm availability.
                  </p>
                </div>
                <div className="flex gap-6">
                  <span className="text-purple-500 font-black italic text-xl">
                    02
                  </span>
                  <p className="text-gray-300">
                    Transfer{' '}
                    <span className="text-teal-400 font-bold">
                      ${selectedProduct.price}
                    </span>{' '}
                    to SadaPay: <br />
                    <b className="text-white tracking-widest text-lg">
                      0301-6172702
                    </b>
                  </p>
                </div>
                <div className="flex gap-6">
                  <span className="text-purple-500 font-black italic text-xl">
                    03
                  </span>
                  <p className="text-gray-300">
                    Send screenshot. Unlock your bloom.
                  </p>
                </div>
              </div>
              <a
                href={selectedProduct.checkout_url}
                target="_blank"
                className="flex items-center justify-center gap-3 w-full py-6 bg-teal-600 rounded-full font-black text-xs tracking-widest hover:bg-teal-500 transition uppercase shadow-xl shadow-teal-600/20"
              >
                <MessageCircle size={20} /> Initialize Transfer
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER & SOCIALS */}
      <footer
        id="contact"
        className="py-40 px-6 text-center border-t border-white/5 relative overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter italic bg-gradient-to-r from-teal-400 to-purple-600 bg-clip-text text-transparent">
            BLOOM NOW.
          </h2>

          <div className="flex flex-col gap-6 items-center mb-16">
            <a
              href="mailto:nida93115@gmail.com"
              className="text-xl md:text-3xl font-light text-teal-100 hover:text-purple-400 transition-colors flex items-center gap-3 group"
            >
              <Mail className="group-hover:rotate-12 transition-transform" />{' '}
              nida93115@gmail.com
            </a>
          </div>

          <div className="flex justify-center gap-12 pt-10 border-t border-white/10">
            <a
              href="https://www.linkedin.com/in/nida-batool-9a708b183"
              target="_blank"
              className="text-gray-500 hover:text-[#0077b5] transition-all scale-150"
            >
              <Linkedin />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#e4405f] transition-all scale-150"
            >
              <Instagram />
            </a>
          </div>

          <p className="mt-24 text-zinc-800 text-[10px] font-black tracking-[1em] uppercase">
            Nida Creatives © 2026 · Built to Bloom
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
