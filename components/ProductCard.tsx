import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

interface ProductProps {
  title: string;
  price: string;
  category: string;
  isAffiliate?: boolean;
}

const ProductCard = ({ title, price, category, isAffiliate }: ProductProps) => {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
      <div className="h-40 bg-slate-50 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
        {/* Placeholder for Product Image */}
        <span className="text-slate-300 font-bold uppercase tracking-widest">
          {category}
        </span>
      </div>

      <div className="flex justify-between items-start mb-2">
        <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">
          {category}
        </span>
        <span className="text-lg font-bold text-slate-900">{price}</span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-primary transition-colors">
        {title}
      </h3>

      <button
        className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
          isAffiliate
            ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            : 'bg-brand-primary text-white hover:bg-brand-secondary'
        }`}
      >
        {isAffiliate ? (
          <>
            View Details <ExternalLink size={16} />
          </>
        ) : (
          <>
            Get Access <Download size={16} />
          </>
        )}
      </button>
    </div>
  );
};

export default ProductCard;
