import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const projects = [
  {
    name: "Edufront LMS + ERP",
    logo: "/work/edufront/edufrontlogo.png",
    description:
      "A comprehensive learning management system with courses, fees, payroll, and accounting.",
    tags: "LMS · ERP · Courses · Fees",
    href: "/work/edufront",
  },
  {
    name: "SKT Enterprises Distribution ERP",
    logo: "/work/skt/sktlogo.jpg",
    description:
      "A complete distribution management system with inventory, sales, and invoicing.",
    tags: "Distribution · Inventory · Sales",
  },
  {
    name: "Seapol Logistics ERP",
    logo: "/work/seapol/seapolgroup_logo.jpg",
    description:
      "A shipping logistics ERP for vessels, cargo, deliveries, and fleet tracking.",
    tags: "Logistics · Cargo · Fleet · ERP",
  },
];

export default function WorkPage() {
  return (
    <div>
      <Navbar />
      <section className="bg-[#90e0ef] min-h-screen pt-32 pb-24 px-8">
        <div className="mx-auto max-w-xl text-center bg-white rounded-3xl py-10 px-12 shadow-lg">
          <h2 className="font-[family-name:var(--font-geist-sans)] text-5xl font-semibold text-black tracking-tight">
            Our Work
          </h2>
          <p className="font-[family-name:var(--font-geist-sans)] mt-4 text-xl text-gray-600 tracking-tight">
            Projects we&apos;ve delivered for our clients
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => {
            const card = (
              <div
                className={`bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center${
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
