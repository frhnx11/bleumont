"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Our Work" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // The bar is fixed, so the page behind it would still scroll under an open
  // menu. Lock it, and let Escape close — both only ever matter on mobile,
  // since the trigger is md:hidden.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav
      className={`fixed top-6 left-4 right-4 z-50 bg-white/80 backdrop-blur-md shadow-sm ${
        open ? "rounded-3xl overflow-hidden" : "rounded-full"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
        {/* Left: Logo + Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Bleumont logo"
            width={80}
            height={80}
            className="w-12 md:w-20 h-auto translate-y-1"
          />
          <span className="text-xl md:text-2xl font-extrabold text-gray-900">
            Bleumont
          </span>
        </div>

        {/* Center: Nav Links (desktop) */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: CTA (desktop) */}
        <button className="hidden md:block rounded-full bg-[#c8ee44] px-6 py-2.5 text-base font-medium text-gray-900 hover:bg-[#bde33b] transition-colors">
          Get Started
        </button>

        {/* Right: Menu toggle (mobile) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden flex h-11 w-11 items-center justify-center rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 px-4 pb-4 pt-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center rounded-xl px-3 text-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button className="mt-2 w-full rounded-full bg-[#c8ee44] px-6 py-3 text-base font-medium text-gray-900 hover:bg-[#bde33b] transition-colors">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
