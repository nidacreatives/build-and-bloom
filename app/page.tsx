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
} from 'lucide-react';

// TypeScript Definition
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
  const [emailSubscribed, setEmailSubscribed] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const fallbackImage =
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop';

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

  const testimonials = [
    {
      name: 'Saira K.',
      role: 'Founder, Luxe Decor',
      text: 'The Build & Bloom kit saved me weeks of work. The aesthetic is unmatched in the local market.',
    },
    {
      name: 'Ahmed R.',
      role: 'Digital Creator',
      text: "Finally, a premium resource hub tailored for Pakistani entrepreneurs. Nida's vision is crystal clear.",
    },
    {
      name: 'Zainab M.',
      role: 'Brand Strategist',
      text: 'Seamless checkout and high-quality assets. Worth every penny for my agency.',
    },
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-blue-500 font-sans antialiased">
      {/* SCROLL BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[110] origin-left"
        style={{ scaleX }}
      />

      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-[90] bg-black/80 border-b border-white/5 backdrop-blur-xl px-6 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent italic cursor-default">
            NIDA CREATIVES
          </div>
          <div className="hidden md:flex gap-10 text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
            <a href="#vault" className="hover:text-blue-400 transition">
              Vault
            </a>
            <a href="#reviews" className="hover:text-blue-400 transition">
              Reviews
            </a>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-48 pb-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 block">
            Creative Studio / 2026
          </span>
          <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.9]">
            BUILD <span className="text-zinc-800">&</span> <br />
            <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">
              BLOOM.
            </span>
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed mt-4 italic">
            Designing the blueprints for your digital empire.
          </p>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-8"
      >
        <div className="bg-zinc-900/50 p-12 rounded-[3rem] border border-white/5">
          <Zap className="text-blue-500 mb-6" size={40} />
          <h2 className="text-3xl font-bold mb-4 uppercase italic">Mission</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We deliver high-end technical foundations so you can focus strictly
            on your creative bloom.
          </p>
        </div>
        <div className="bg-zinc-900/50 p-12 rounded-[3rem] border border-white/5">
          <ShieldCheck className="text-emerald-500 mb-6" size={40} />
          <h2 className="text-3xl font-bold mb-4 uppercase italic">Vision</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            To become the gold standard for premium digital assets and branding
            across the region.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="vault" className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-black tracking-widest uppercase italic mb-20 text-center">
          The Collection
        </h2>
        {loading ? (
          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-96 bg-zinc-900 animate-pulse rounded-[3rem]"
              />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-10">
            {products.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -10 }}
                className="group bg-zinc-900/30 border border-white/5 p-6 rounded-[3rem] hover:border-blue-600/30 transition-all"
              >
                <div className="relative overflow-hidden rounded-[2rem] mb-6 aspect-square bg-zinc-800">
                  <img
                    src={product.image_url || fallbackImage}
                    alt={product.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = fallbackImage;
                    }}
                  />
                </div>
                <div className="flex justify-between items-center mb-6 px-2">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {product.title}
                  </h3>
                  <span className="text-blue-500 font-black text-xl">
                    ${product.price}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full py-4 bg-white text-black rounded-2xl font-black text-xs tracking-widest hover:bg-blue-600 hover:text-white transition-all uppercase"
                >
                  Get Access
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-black mb-16 tracking-widest uppercase italic">
            Client Words
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/20 border border-white/5 p-8 rounded-[2rem]"
              >
                <Quote className="text-blue-600 mb-4 opacity-50" size={32} />
                <p className="text-gray-400 italic mb-6 leading-relaxed">
                  "{t.text}"
                </p>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-blue-500 uppercase tracking-widest">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/10 rounded-[4rem] p-12 text-center">
          <h2 className="text-4xl font-black mb-6 italic">
            Join the Inner Circle
          </h2>
          <p className="text-gray-400 mb-10">
            Get early access to new drops and exclusive blueprints.
          </p>

          {emailSubscribed ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center gap-2 text-emerald-400 font-bold"
            >
              <CheckCircle size={20} /> Success! You're on the list.
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmailSubscribed(true);
              }}
              className="flex flex-col md:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="email@address.com"
                required
                className="bg-black/50 border border-white/10 rounded-2xl px-6 py-4 flex-grow focus:border-blue-500 outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-2xl font-bold transition-all uppercase text-xs tracking-widest">
                Join Now
              </button>
            </form>
          )}
        </div>
      </section>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-black/95 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-zinc-900 border border-white/10 p-10 rounded-[3.5rem] max-w-md w-full relative"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-8 right-8 text-gray-500 hover:text-white transition"
              >
                <X size={24} />
              </button>
              <h2 className="text-3xl font-black mb-4 italic uppercase">
                Checkout
              </h2>
              <div className="space-y-6 my-10 text-sm text-gray-400">
                <div className="flex gap-4 items-start font-medium leading-relaxed">
                  <span className="text-blue-500 font-black">01.</span>
                  <p>Click below to open WhatsApp chat with Nida.</p>
                </div>
                <div className="flex gap-4 items-start font-medium leading-relaxed">
                  <span className="text-blue-500 font-black">02.</span>
                  <p>
                    Transfer{' '}
                    <span className="text-white font-bold">
                      ${selectedProduct.price}
                    </span>{' '}
                    to SadaPay: <br />{' '}
                    <span className="text-blue-400 font-mono font-bold">
                      0301-6172702
                    </span>
                  </p>
                </div>
                <div className="flex gap-4 items-start font-medium leading-relaxed">
                  <span className="text-blue-500 font-black">03.</span>
                  <p>Send a screenshot of the payment. Link sent instantly.</p>
                </div>
              </div>
              <a
                href={selectedProduct.checkout_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-5 bg-blue-600 rounded-[1.5rem] font-black text-xs tracking-widest hover:bg-blue-500 transition uppercase shadow-lg shadow-blue-600/20"
              >
                <MessageCircle size={18} /> Send Screenshot
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer
        id="contact"
        className="py-24 px-6 text-center border-t border-white/5"
      >
        <h2 className="text-5xl font-black mb-4 italic tracking-tighter uppercase italic">
          Bloom.
        </h2>
        <a
          href="mailto:hello@nidacreatives.com"
          className="text-xl text-blue-500 font-bold hover:text-white transition"
        >
          hello@nidacreatives.com
        </a>
        <div className="flex justify-center gap-8 mt-12 opacity-30">
          <Instagram className="hover:text-white cursor-pointer transition" />
          <Mail className="hover:text-white cursor-pointer transition" />
        </div>
        <p className="mt-20 text-gray-800 text-[9px] tracking-[0.6em] uppercase font-black">
          © 2026 NIDA CREATIVES · PK
        </p>
      </footer>
    </div>
  );
}
