import { supabase } from '@/lib/supabase';

export default async function Page() {
  // This line asks Supabase for your "Build & Bloom Kit"
  const { data: products, error } = await supabase.from('products').select('*');

  if (error) console.log('Error fetching:', error);

  return (
    <main>
      {/* ... Hero Section ... */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products?.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-2xl shadow-sm border"
          >
            <div className="h-48 bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
              <span className="text-gray-400 font-bold">
                {product.category}
              </span>
            </div>
            <p className="text-blue-600 text-sm font-bold uppercase">
              {product.category}
            </p>
            <h3 className="text-xl font-bold mt-2">{product.title}</h3>
            <p className="text-2xl font-bold mt-4">{product.price}</p>
            <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition">
              Get Access
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
