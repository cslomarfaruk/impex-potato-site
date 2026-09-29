import Link from "next/link";
import Image from "next/image";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_4px_0_0_var(--color-brand-green)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 md:gap-3 shrink-0">
          <Image
            src="/images/brand/logo_emblem.png"
            alt="Impex Eco Tech Emblem"
            width={48}
            height={48}
            className="object-contain md:w-[56px] md:h-[56px]"
            priority
          />
          <Image
            src="/images/brand/wordmark.png"
            alt="Impex Eco Tech Wordmark"
            width={140}
            height={38}
            className="object-contain md:w-[180px] md:h-[48px] hidden min-[380px]:block"
            priority
          />
        </Link>

        <nav className="flex items-center gap-3 md:gap-4 shrink-0">
          <Link href="/#products" className="hidden sm:inline-block bg-brand-green text-white text-xs font-bold uppercase tracking-widest px-6 py-3 border-2 border-brand-green hover:bg-brand-green-light hover:text-brand-green transition-colors">Products</Link>
          <Link href="/#contact" className="bg-brand-red text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 sm:px-6 py-2 sm:py-3 border-2 border-brand-red hover:bg-white hover:text-brand-red transition-colors shadow-[2px_2px_0px_0px_var(--color-brand-green)] sm:shadow-[4px_4px_0px_0px_var(--color-brand-green)]">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
