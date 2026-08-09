"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// Hosted on Cloudflare R2 (zero egress) rather than public/ — the file is ~22 MB
// and would otherwise live in git history forever and burn Vercel bandwidth.
const DEMO_VIDEO_URL =
  "https://pub-6d8a0fb48e5c438f8f230951adac4c79.r2.dev/seapol-demo.mp4";

type Shot = { src: string; alt: string; w: number; h: number };

// Ordered as a job actually moves through the ERP: a ship arrives, its cargo is
// split into work orders, trucks are approved, trips run, and the settled trips
// are billed. Alerts, dashboard and master data sit around that spine.
const features: { name: string; body: string; shots: Shot[] }[] = [
  {
    name: "Vessels",
    body: "Every ship arrival is recorded with the total cargo it carries, then tracked as trucks deliver against it. Total, allocated and delivered sit side by side with the running balance, so the team can reconcile a vessel at a glance and close it out when the ship is done.",
    shots: [
      { src: "/work/seapol/vessels.png", alt: "Vessels list", w: 1918, h: 1012 },
    ],
  },
  {
    name: "Work Orders",
    body: "A vessel's cargo is split into work orders — one party, one cargo type, one supplier, one quantity, plus any customs references. Delivered weight rolls up automatically from every truck trip, and an order marks itself Partial the moment anything ships.",
    shots: [
      {
        src: "/work/seapol/work-orders.png",
        alt: "Work Orders list",
        w: 1918,
        h: 1015,
      },
    ],
  },
  {
    name: "Truck Allotment",
    body: "Allotment cards decide which trucks may haul for which party. There is no global pool — a truck can only start a trip if it sits on a card, and each weighbridge operator sees only the cards granted to them. Expired or blocked vehicles are surfaced before they are ever allotted.",
    shots: [
      {
        src: "/work/seapol/truck-allotment.png",
        alt: "New allotment card",
        w: 1918,
        h: 1012,
      },
    ],
  },
  {
    name: "Truck Orders on Mobile",
    body: "The port weighbridge runs on a phone. An operator creates a trip by weighing the empty truck, then works through loading slip, gross weight and exit — one-handed, in portrait, with a bottom tab bar built for thumb reach. Desktop and mobile share a single column definition, so a field can never behave differently between the two.",
    shots: [
      {
        src: "/work/seapol/truck-orders-mobile.png",
        alt: "Truck Orders on mobile",
        w: 447,
        h: 888,
      },
      {
        src: "/work/seapol/create-truck-order-mobile.png",
        alt: "Create truck order on mobile",
        w: 445,
        h: 889,
      },
    ],
  },
  {
    name: "Invoicing",
    body: "A four-step wizard turns settled trips into a payment bill. Each trip is billed on its lowest net — the lower of the weight sent from the port and the weight received at the destination — priced at the party's rate, frozen when the invoice is created so a later rate change never rewrites history.",
    shots: [
      {
        src: "/work/seapol/invoicing.png",
        alt: "New invoice wizard",
        w: 1918,
        h: 1014,
      },
    ],
  },
  {
    name: "Alerts",
    body: "Two things raise a flag: a weight discrepancy of more than 0.3 MT between what left the port and what arrived, and any truck whose RC, insurance or fitness certificate has lapsed. One tolerance drives the notification bell, this page, the dashboard and analytics — so all four always agree.",
    shots: [
      { src: "/work/seapol/alerts.png", alt: "Alerts page", w: 1918, h: 1014 },
    ],
  },
  {
    name: "Dashboard",
    body: "Ongoing vessels, tonnes delivered today and this month, trips run today and value invoiced this month — alongside a ten-day delivery trend, the top parties and the most recent alerts. Every figure uses the same calendar day as the list it came from.",
    shots: [
      {
        src: "/work/seapol/dashboard.png",
        alt: "Dashboard",
        w: 1918,
        h: 1015,
      },
    ],
  },
  {
    name: "Master Data",
    body: "Seven registries underpin everything else: trucks, truck owners, parties and their billing rates, suppliers, cargo types, loading sites and discount parties. Trucks additionally accept an Excel bulk upload that reports every problem in a file at once, so a whole sheet can be fixed in one pass.",
    shots: [
      {
        src: "/work/seapol/master-data.png",
        alt: "Master data",
        w: 1918,
        h: 1015,
      },
    ],
  },
];

export default function SeapolPage() {
  const [zoomed, setZoomed] = useState<{ shot: Shot; name: string } | null>(
    null
  );

  return (
    <div>
      <Navbar />
      <section className="bg-[#90e0ef] pt-44 pb-12 px-8">
        <div className="mx-auto max-w-6xl bg-white rounded-3xl py-12 px-8 shadow-lg">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-geist-sans)] text-5xl font-bold text-gray-900 tracking-tight">
              Bleumont Logistics ERP — Demo Video
            </h2>
          </div>

          <div className="mt-10">
            <video
              src={DEMO_VIDEO_URL}
              poster="/work/seapol/demo-poster.jpg"
              controls
              playsInline
              preload="none"
              className="w-full rounded-2xl shadow-lg bg-black"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#90e0ef] pb-24 px-8">
        <div className="mx-auto max-w-6xl bg-white rounded-3xl py-12 px-8 shadow-lg">
          <h2 className="font-[family-name:var(--font-geist-sans)] text-5xl font-bold text-gray-900 tracking-tight text-center">
            Key Features
          </h2>

          <div className="relative mt-14">
            {/* Centre spine — decorative, and only meaningful once the two
                columns exist, so it is hidden while they are stacked. */}
            <div
              aria-hidden
              className="hidden md:block absolute left-1/2 inset-y-0 w-px bg-gray-200 -translate-x-1/2"
            />

            <div className="flex flex-col gap-20">
              {features.map((feature, i) => {
                // Image leads on even rows, text leads on odd ones. The image is
                // always first in the DOM so the stacked mobile order stays
                // consistent; only the desktop grid order flips.
                const imageOnRight = i % 2 === 1;

                return (
                  <div
                    key={feature.name}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center"
                  >
                    <div
                      className={`${
                        imageOnRight ? "md:order-2 md:pl-14" : "md:pr-14"
                      } ${
                        feature.shots.length > 1
                          ? "grid grid-cols-2 gap-4"
                          : ""
                      }`}
                    >
                      {feature.shots.map((shot) => (
                        <button
                          key={shot.src}
                          type="button"
                          onClick={() =>
                            setZoomed({ shot, name: feature.name })
                          }
                          className="block w-full cursor-zoom-in rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#90e0ef] focus-visible:ring-offset-2"
                          aria-label={`Enlarge ${shot.alt}`}
                        >
                          <Image
                            src={shot.src}
                            alt={shot.alt}
                            width={shot.w}
                            height={shot.h}
                            className="w-full h-auto rounded-xl border border-gray-200 shadow-sm transition-shadow hover:shadow-md"
                          />
                        </button>
                      ))}
                    </div>

                    <div
                      className={imageOnRight ? "md:order-1 md:pr-14" : "md:pl-14"}
                    >
                      <h3 className="font-[family-name:var(--font-geist-sans)] text-3xl font-bold text-gray-900 tracking-tight">
                        {feature.name}
                      </h3>
                      <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        {feature.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Dialog
        open={zoomed !== null}
        onOpenChange={(open) => !open && setZoomed(null)}
      >
        <DialogContent className="!max-w-[95vw] w-[95vw] max-h-[90vh] overflow-y-auto p-8">
          <DialogTitle className="text-2xl font-bold text-center">
            {zoomed?.name}
          </DialogTitle>
          {zoomed && (
            <Image
              src={zoomed.shot.src}
              alt={zoomed.shot.alt}
              width={zoomed.shot.w}
              height={zoomed.shot.h}
              // A portrait phone shot at 95vw would open ~2,400px tall; cap it
              // by height instead so it fits the viewport.
              className={`h-auto rounded-xl border border-gray-200${
                zoomed.shot.h > zoomed.shot.w
                  ? " w-auto max-h-[75vh] mx-auto"
                  : " w-full"
              }`}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
