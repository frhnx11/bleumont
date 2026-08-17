"use client";

import Link from "next/link";
import LiquidEther from "@/components/LiquidEther";
import Navbar from "@/components/Navbar";

// Display order is this array's order; the NN / NN counter is derived from it.
// Note imageClass differs — the distribution shot is centre-cropped, the other
// two are anchored left.
const products = [
  {
    label: "Distribution System",
    body: "A complete distribution management system with inventory tracking, sales processing, and automated invoicing — built entirely around your workflow.",
    tags: "Inventory  ·  Sales  ·  Invoicing",
    image: "/work/skt/best-erp-software-04-microsoft.webp",
    imageClass: "",
    href: "/work/skt",
  },
  {
    label: "Learning Management System",
    body: "A comprehensive learning management system covering courses, assignments, teachers, students, fees, payroll, leave applications, and accounting — all in one platform.",
    tags: "Course  ·  Assignments  ·  Fees   ·  Leave  ·  Accounting",
    image: "/work/edufront/edufront1.png",
    imageClass: "object-left",
    href: "/work/edufront",
  },
  {
    label: "Shipping Logistics ERP",
    body: "A powerful shipping logistics ERP system for managing vessels, cargo, deliveries, and accounts — providing real-time fleet tracking and cargo distribution insights.",
    tags: "Vessels  ·  Cargo  ·  Delivery  ·  Fleet Tracking",
    image: "/work/seapol/image.png",
    imageClass: "object-left",
    href: "/work/seapol",
  },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="relative h-screen">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
          <h1 className="font-[family-name:var(--font-smooch-sans)] text-5xl sm:text-7xl font-extrabold tracking-tight">
            <span className="text-gray-900">Bleu</span>
            <span className="text-[#90e0ef]">mont</span>
          </h1>
          {/* No max-width here on purpose: the sentence is ~692px, so at desktop
              widths it still sits on one line by itself. Capping it would make
              desktop wrap, which this change must not do. */}
          <p className="mt-6 sm:mt-8 px-4 sm:px-0 text-center text-base sm:text-xl text-gray-500">
            Customized software solutions to make your business processes more efficient
          </p>
        </div>
        <LiquidEther colors={["#90e0ef"]} />
      </section>
      <section className="bg-gray-100 py-16 sm:py-24 px-4 sm:px-8 border-t border-gray-200">
        <div className="mx-auto max-w-3xl">
          <p className="text-xl sm:text-3xl text-black leading-relaxed text-center">
            We are an AI-native platform that replaces traditional SaaS by
            generating and evolving business software tailored to each company.
          </p>
        </div>
      </section>
      <section className="relative bg-white py-24 overflow-hidden">
        {/* Decorative dot grid - masked to hide behind the center flow area */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle, #c8ee44 3px, transparent 3px)',
          backgroundSize: '40px 40px',
          opacity: 0.3,
          maskImage: 'radial-gradient(ellipse 400px 100px at center 17%, transparent 80%, black 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 400px 100px at center 17%, transparent 80%, black 100%)',
        }} />

        {/* Prompt → Application flow */}
        {/* Stacks vertically on a phone — side by side the two pills plus the
            connector need ~500px. sm: restores the original horizontal row. */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 px-4 sm:px-8">
          <div className="px-6 sm:px-8 py-3 rounded-full border-2 border-gray-300 bg-white">
            <span className="text-lg sm:text-xl font-medium text-gray-800">Problem</span>
          </div>
          <div className="h-8 w-[2px] sm:h-[2px] sm:w-24 bg-gray-300" />
          <div className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-[#90e0ef] to-[#9ca3af]">
            <span className="text-lg sm:text-xl font-medium text-gray-800">Application</span>
          </div>
        </div>

        {/* Full-width app screenshots */}
        <div className="relative mt-16 sm:mt-32">
          <img
            src="/image.png"
            alt="Example applications built by Bleumont"
            className="w-full"
          />
        </div>
      </section>
      <section id="products" className="bg-[#90e0ef] py-16 sm:py-24 px-4 sm:px-8">
        <div className="mx-auto max-w-xl text-center bg-white rounded-3xl py-8 px-5 sm:py-10 sm:px-12 shadow-lg">
          <h2 className="font-[family-name:var(--font-geist-sans)] text-3xl sm:text-4xl md:text-5xl font-semibold text-black tracking-tight">Our Products</h2>
          <p className="font-[family-name:var(--font-geist-sans)] mt-4 text-base sm:text-xl text-gray-600 tracking-tight">
            We can build anything. But here are some examples to understand us better
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-4xl px-4 space-y-8">
          {products.map((product, i) => (
            <Link
              key={product.href}
              href={product.href}
              className="block bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 sm:p-10 flex flex-col justify-center">
                  <p className="text-xs text-gray-400 tracking-widest uppercase">
                    {String(i + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
                    &nbsp;&middot;&nbsp; {product.label}
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-800 mt-6">
                    {product.body}
                  </p>
                  <p className="mt-6 text-xs tracking-wide text-gray-400 uppercase">
                    {product.tags}
                  </p>
                </div>
                <div className="relative min-h-[220px] sm:min-h-[350px]">
                  <img
                    src={product.image}
                    alt={product.label}
                    className={`absolute inset-0 object-cover ${product.imageClass} h-full w-full md:rounded-r-3xl`}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
