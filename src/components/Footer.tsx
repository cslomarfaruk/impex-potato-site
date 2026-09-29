import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-brand-green bg-white relative overflow-hidden">

      <div className="absolute -bottom-24 -left-24 opacity-5 pointer-events-none">
        <Image
          src="/images/brand/logo_emblem.png"
          alt="Watermark"
          width={300}
          height={300}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/images/brand/logo_final.png"
              alt="Impex Eco Tech Logo"
              width={220}
              height={60}
              className="object-contain mb-6"
            />
            {/* <p className="text-base text-black font-medium max-w-md">
              Delivering next-generation environmental engineering, water purification, sustainable agriculture, and renewable energy solutions.
            </p> */}
          </div>
          <div className="md:text-right">
            <h3 className="font-bold text-brand-green uppercase tracking-wider mb-4">Contact</h3>
            <p className="text-base text-black font-bold mb-1">info@impexecotech.com</p>
            <p className="text-base text-black font-bold mb-1">+88 01927-976323 (WhatsApp)</p>
            <p className="text-base text-black font-bold">+88 01822-419089</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-brand-green/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-bold text-brand-green uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Impex Eco Tech Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
