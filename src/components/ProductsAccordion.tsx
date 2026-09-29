"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Category } from "@/lib/data";

export function ProductsAccordion({ categories }: { categories: Category[] }) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <div className="flex flex-col border border-brand-green bg-white shadow-[8px_8px_0px_0px_var(--color-brand-green)]">
      {categories.map((category, index) => (
        <div key={category.id} className={`border-b border-brand-green/20 ${index === categories.length - 1 ? 'border-b-0' : ''}`}>
          <button
            onClick={() => toggleCategory(category.id)}
            className="w-full flex items-center justify-between p-6 bg-white hover:bg-brand-green-light transition-colors text-left"
          >
            <h3 className="text-xl font-bold uppercase tracking-tight text-brand-green">{category.name}</h3>
            {openCategory === category.id ? (
              <ChevronUp className="w-6 h-6 text-brand-red" />
            ) : (
              <ChevronDown className="w-6 h-6 text-brand-green" />
            )}
          </button>
          
          {openCategory === category.id && (
            <div className="p-6 bg-zinc-50 border-t border-brand-green/10">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.products.map((product) => (
                  <li key={product.id}>
                    <Link 
                      href={`/products/${product.id}`} 
                      className="flex items-center gap-3 p-4 bg-white border border-brand-green/20 hover:border-brand-red hover:shadow-[4px_4px_0px_0px_var(--color-brand-red)] transition-all group"
                    >
                      <span className="w-2 h-2 bg-brand-green group-hover:bg-brand-red transition-colors"></span>
                      <span className="font-medium text-black">{product.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
