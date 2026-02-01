import { supabase } from '@/lib/supabase';

export default async function Page() {
  // 1. This line pulls your REAL data from the Supabase table
  const { data: products, error } = await supabase.from('products').select('*');

  if (error) {
    console.error('Database Error:', error);
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-6xl font-bold">The Digital Vault</h1>
        <p className="text-gray-400 mt-4">Real-time products from Supabase</p>
      </section>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products && products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="bg-white text-black p-6 rounded-3xl shadow-xl"
              >
                <div className="h-40 bg-gray-100 rounded-2xl mb-4 flex items-center justify-center">
                  <span className="text-gray-400 font-bold uppercase">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="text-2xl font-black mt-2">{product.price}</p>
                <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-bold">
                  Get Access
                </button>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3">
              No products found in your database table.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
