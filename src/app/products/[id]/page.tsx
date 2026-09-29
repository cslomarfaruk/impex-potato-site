import { getProductById, categories } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
  const ids: { id: string }[] = [];
  categories.forEach((cat) => {
    cat.products.forEach((prod) => {
      ids.push({ id: prod.id });
    });
  });
  return ids;
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);
  
  if (!product) {
    notFound();
  }

  return (
    <main className="flex-1 bg-white relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0F7A3E 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 relative z-10">
        <Link href="/#products" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-brand-green hover:text-brand-red transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
        </Link>

        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          {/* Header & Description */}
          <div className="order-2 lg:order-1 flex-1">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-brand-green mb-6 font-heading">{product.name}</h1>
            <div className="w-16 h-2 bg-brand-red mb-8"></div>
            
            {product.description && (
              <p className="text-lg text-black/80 leading-relaxed font-medium mb-8">
                {product.description}
              </p>
            )}

            {product.uses && (
              <div className="mt-12">
                <h3 className="text-xl font-bold uppercase tracking-widest text-brand-green mb-6 font-heading">Key Applications & Uses</h3>
                <ul className="flex flex-col gap-4">
                  {product.uses.map((use, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-brand-red shrink-0" />
                      <div>
                        <strong className="text-black font-bold">{use.title}:</strong> <span className="text-black/80">{use.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.features && (
              <div className="mt-12">
                <h3 className="text-xl font-bold uppercase tracking-widest text-brand-green mb-6 font-heading">Features & Insights</h3>
                <ul className="flex flex-col gap-4 bg-brand-green-light/20 p-6 border-l-4 border-brand-green">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-black/80 font-medium leading-relaxed">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Product Images */}
          <div className="order-1 lg:order-2 flex-1 w-full lg:max-w-xl">
            {product.images && product.images.length > 0 && (
              <div className="flex flex-col gap-6 w-full">
                <div className="flex flex-col shadow-[4px_4px_0px_0px_var(--color-brand-green)] border-2 border-brand-green bg-white">
                  <div className="relative aspect-square w-full">
                    <Image 
                      src={product.images[0]} 
                      alt={product.name} 
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="p-2 border-t-2 border-brand-green bg-brand-green-light/20 text-center text-sm font-bold tracking-widest text-brand-green">
                    {product.images[0].split('/').pop()?.replace(/\.[^/.]+$/, "")}
                  </div>
                </div>
                {product.images.length > 1 && (
                  <div className="grid grid-cols-2 gap-4">
                    {product.images.slice(1).map((img, idx) => (
                      <div key={idx} className="flex flex-col shadow-[4px_4px_0px_0px_var(--color-brand-red)] border-2 border-brand-red bg-white">
                        <div className="relative aspect-square w-full">
                          <Image 
                            src={img} 
                            alt={`${product.name} - View ${idx + 2}`} 
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                        <div className="p-2 border-t-2 border-brand-red bg-[#fce8eb] text-center text-xs font-bold tracking-widest text-brand-red truncate px-2" title={img.split('/').pop()?.replace(/\.[^/.]+$/, "")}>
                          {img.split('/').pop()?.replace(/\.[^/.]+$/, "")}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Technical Data Table */}
        {product.tableData && (
          <div className="mt-16 w-full overflow-hidden">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-brand-green mb-8 font-heading text-center lg:text-left">Technical Specifications</h2>
            
            {/* Mobile Swipe Hint */}
            <p className="text-xs text-brand-green font-bold uppercase tracking-widest mb-4 block md:hidden text-center animate-pulse">
              &larr; Swipe to view full table &rarr;
            </p>

            <div className="overflow-x-auto border-2 border-brand-green shadow-[4px_4px_0px_0px_var(--color-brand-green)] bg-white w-full">
              <table className="w-full text-left border-collapse min-w-max">
                <thead>
                  <tr className="bg-brand-green text-white">
                    {product.tableData.headers.map((header, idx) => (
                      <th key={idx} className="p-4 border-b border-brand-green text-sm font-bold uppercase tracking-wider whitespace-nowrap">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-black text-sm">
                  {product.tableData.rows.map((row, rowIdx) => (
                    <tr key={rowIdx} className="hover:bg-brand-green-light/20 transition-colors">
                      {row.map((cell, cellIdx) => {
                        // If the row has fewer elements than headers, make the last element span the remaining columns
                        const isLastCellInShortRow = cellIdx === row.length - 1 && row.length < product.tableData!.headers.length;
                        const colSpan = isLastCellInShortRow ? product.tableData!.headers.length - row.length + 1 : 1;
                        
                        return (
                          <td 
                            key={cellIdx} 
                            colSpan={colSpan}
                            className={`p-4 border-b border-brand-green-light ${isLastCellInShortRow && cellIdx !== 0 ? 'text-center font-bold bg-gray-50' : ''}`}
                          >
                            {cell}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
