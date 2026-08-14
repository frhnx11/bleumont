import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <section className="bg-[#90e0ef] min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-8">
        {/* max-w-3xl rather than the wider case-study panels: this is prose, and
            768px keeps lines near 75 characters. */}
        <div className="mx-auto max-w-3xl bg-white rounded-3xl py-8 px-5 sm:py-12 sm:px-8 shadow-lg">
          <h1 className="font-[family-name:var(--font-geist-sans)] text-3xl sm:text-4xl md:text-5xl font-semibold text-black tracking-tight text-center">
            About Us
          </h1>

          <div className="mt-8 sm:mt-10 space-y-6 text-base sm:text-lg leading-relaxed text-gray-700">
            <p>
              We are a group of entrepreneurs with deliberately varied
              backgrounds — ERP veterans with years of implementations behind
              them, business process specialists drawn from across industries,
              and AI engineers working with the newest tools for agile
              development and deployment.
            </p>
            <p>
              What sets us apart is speed without shortcuts. We take your
              business needs and challenges straight to a solution architecture,
              build it at a pace most teams cannot match, and hold that same
              pace through System Integration Testing and User Acceptance
              Testing — so your investment reaches value faster.
            </p>
            <p>
              We are relentlessly customer-centric. Our success is measured by
              whether our solutions are actually adopted, and it is in the DNA
              of every one of our people to build something end users genuinely
              want to use. When a product wins people over on its own merits,
              change management takes care of itself.
            </p>
          </div>

          <p className="mt-8 text-base italic text-gray-500">
            Full details of our core team will follow shortly.
          </p>
        </div>

        <div
          id="contact"
          className="mt-8 mx-auto max-w-3xl bg-white rounded-3xl py-8 px-5 sm:py-12 sm:px-8 shadow-lg scroll-mt-28"
        >
          <h2 className="font-[family-name:var(--font-geist-sans)] text-3xl sm:text-4xl md:text-5xl font-semibold text-black tracking-tight text-center">
            Contact Us
          </h2>
          <p className="mt-4 text-center text-base sm:text-lg text-gray-600">
            Tell us what you&apos;re trying to solve and we&apos;ll get back to you.
          </p>

          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
