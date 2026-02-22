import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-4 right-4 z-50 rounded-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Left: Logo + Brand */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Bleumont logo" width={80} height={80} className="translate-y-1" />
          <span className="text-2xl font-extrabold text-gray-900">Bleumont</span>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          <a href="/" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">Home</a>
          <a href="/#products" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">Products</a>
          <a href="/work" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">Our Work</a>
          <a href="#" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">About</a>
        </div>

        {/* Right: CTA Button */}
        <button className="rounded-full bg-[#c8ee44] px-6 py-2.5 text-base font-medium text-gray-900 hover:bg-[#bde33b] transition-colors">
          Get Started
        </button>
      </div>
    </nav>
  );
}
