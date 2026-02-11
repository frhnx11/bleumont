"use client";

import LiquidEther from "@/components/LiquidEther";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="relative h-screen">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
          <h1 className="font-[family-name:var(--font-smooch-sans)] text-7xl font-extrabold tracking-tight">
            <span className="text-gray-900">Bleu</span>
            <span className="text-[#90e0ef]">mont</span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 whitespace-nowrap">
            Customized software solutions to make your business processes more efficient
          </p>
        </div>
        <LiquidEther colors={["#90e0ef"]} />
      </section>
      <section className="bg-gray-100 py-24 px-8 border-t border-gray-200">
        <div className="mx-auto max-w-3xl">
          <p className="text-3xl text-black leading-relaxed text-center">
            Our business is very simple. Unlike traditional companies, we build
            softwares entirely customized to cater to your business needs. Each software is
            built from scratch harnessing the power of AI to provide a faster, cheaper and
            more personal experience.
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
        <div className="relative flex items-center justify-center gap-8 px-8">
          <div className="px-8 py-3 rounded-full border-2 border-gray-300 bg-white">
            <span className="text-xl font-medium text-gray-800">Problem</span>
          </div>
          <div className="w-24 h-[2px] bg-gray-300" />
          <div className="px-8 py-3 rounded-full bg-gradient-to-r from-[#90e0ef] to-[#9ca3af]">
            <span className="text-xl font-medium text-gray-800">Application</span>
          </div>
        </div>

        {/* Full-width app screenshots */}
        <div className="relative mt-32">
          <img
            src="/image.png"
            alt="Example applications built by Bleumont"
            className="w-full"
          />
        </div>
      </section>
      <section className="bg-[#90e0ef] py-24 px-8">
        <div className="mx-auto max-w-xl text-center bg-white rounded-3xl py-10 px-12 shadow-lg">
          <h2 className="font-[family-name:var(--font-geist-sans)] text-5xl font-semibold text-black tracking-tight">Our Services</h2>
          <p className="font-[family-name:var(--font-geist-sans)] mt-4 text-xl text-gray-600 tracking-tight">
            We can build anything. But here are some examples to understand us better
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-4xl px-4">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 flex flex-col justify-center">
                <p className="text-xs text-gray-400 tracking-widest uppercase">
                  01 / 02 &nbsp;&middot;&nbsp; Distribution System
                </p>
                <p className="text-lg leading-relaxed text-gray-800 mt-6">
                  A complete distribution management system with inventory tracking, sales processing, and automated invoicing — built entirely around your workflow.
                </p>
                <p className="mt-6 text-xs tracking-wide text-gray-400 uppercase">
                  Inventory &nbsp;·&nbsp; Sales &nbsp;·&nbsp; Invoicing
                </p>
              </div>
              <div className="relative min-h-[350px]">
                <img
                  src="/work/skt/best-erp-software-04-microsoft.webp"
                  alt="Distribution System"
                  className="absolute inset-0 object-cover h-full w-full md:rounded-r-3xl"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 flex flex-col justify-center">
                <p className="text-xs text-gray-400 tracking-widest uppercase">
                  02 / 02 &nbsp;&middot;&nbsp; Learning Management System
                </p>
                <p className="text-lg leading-relaxed text-gray-800 mt-6">
                  A comprehensive learning management system covering courses, assignments, teachers, students, fees, payroll, leave applications, and accounting — all in one platform.
                </p>
                <p className="mt-6 text-xs tracking-wide text-gray-400 uppercase">
                  Course &nbsp;·&nbsp; Assignments &nbsp;·&nbsp; Fees &nbsp;&nbsp;·&nbsp; Leave &nbsp;·&nbsp; Accounting
                </p>
              </div>
              <div className="relative min-h-[350px]">
                <img
                  src="/work/edufront/edufront1.png"
                  alt="Learning Management System"
                  className="absolute inset-0 object-cover object-left h-full w-full md:rounded-r-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
