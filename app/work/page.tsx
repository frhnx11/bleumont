import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

// Display order is this array's order — the grid maps over it directly.
const projects = [
  {
    name: "SKT Enterprises Distribution ERP",
    logo: "/work/skt/sktlogo.jpg",
    description:
      "A complete distribution management system with inventory, sales, and invoicing.",
    tags: "Distribution · Inventory · Sales",
    href: "/work/skt",
  },
  {
    name: "Seapol Logistics ERP",
    logo: "/work/seapol/seapolgroup_logo.jpg",
    description:
      "A shipping logistics ERP for vessels, cargo, deliveries, and fleet tracking.",
    tags: "Logistics · Cargo · Fleet · ERP",
    href: "/work/seapol",
  },
  {
    name: "Edufront LMS + ERP",
    logo: "/work/edufront/edufrontlogo.png",
    description:
      "A comprehensive learning management system with courses, fees, payroll, and accounting.",
    tags: "LMS · ERP · Courses · Fees",
    href: "/work/edufront",
  },
];

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "ERP, LMS and logistics platforms we have built and delivered for our clients.",
};

export default function WorkPage() {
  return (
    <div>
      <Navbar />
      <section className="bg-[#90e0ef] min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-8">
        <div className="mx-auto max-w-xl text-center bg-white rounded-3xl py-8 px-5 sm:py-10 sm:px-12 shadow-lg">
          <h2 className="font-[family-name:var(--font-geist-sans)] text-3xl sm:text-4xl md:text-5xl font-semibold text-black tracking-tight">
            Our Work
          </h2>
          <p className="font-[family-name:var(--font-geist-sans)] mt-4 text-base sm:text-xl text-gray-600 tracking-tight">
            Projects we&apos;ve delivered for our clients
          </p>
        </div>

        <div className="mt-10 sm:mt-12 mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => {
            const card = (
              <div
                className={`bg-white rounded-3xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center${
                  project.href
                    ? " hover:shadow-xl transition-shadow cursor-pointer"
                    : ""
                }`}
              >
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  width={240}
                  height={120}
                  className="h-[120px] w-auto object-contain"
                />
                <h3 className="mt-6 text-lg font-bold text-gray-900">
                  {project.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  {project.description}
                </p>
                <p className="mt-6 text-xs tracking-wide text-gray-400 uppercase">
                  {project.tags}
                </p>
              </div>
            );

            return project.href ? (
              <Link key={project.name} href={project.href}>
                {card}
              </Link>
            ) : (
              <div key={project.name}>{card}</div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
