import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium mb-6">
            <Sparkles size={14} />
            <span>Design • Code • Video • Teaching</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
            Build Your Digital Future. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Bloom Your Creative Potential.
            </span>
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            Welcome to **Build & Bloom** by Nida Batool. I provide
            high-performance templates, creative assets, and mini-courses to
            help you scale your business automatically.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-brand-dark text-white rounded-xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2">
              Explore The Vault <ArrowRight size={18} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-colors">
              Watch Free Lesson
            </button>
          </div>
        </div>
      </div>

      {/* Background Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-brand-secondary/10 rounded-full blur-[120px]" />
      </div>
    </section>
  );
};

export default Hero;
