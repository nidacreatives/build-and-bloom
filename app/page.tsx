import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <main className="pb-20">
      <Hero />

      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              The Digital Vault
            </h2>
            <p className="text-slate-500">
              Hand-crafted assets to accelerate your workflow.
            </p>
          </div>
          <button className="text-brand-primary font-bold hover:underline">
            View All Assets
          </button>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            title="Premium Framer Portfolio Template"
            price="$49"
            category="Web Dev"
          />
          <ProductCard
            title="Cinematic Reel Transitions"
            price="$29"
            category="Video"
          />
          <ProductCard
            title="AI Image Generation Masterclass"
            price="$19"
            category="Teaching"
            isAffiliate={true} // This represents a supplier product
          />
        </div>
      </section>
    </main>
  );
}
