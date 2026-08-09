"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// Hosted on Cloudflare R2 (zero egress) rather than public/ — the file is ~14 MB
// and would otherwise live in git history forever and burn Vercel bandwidth.
const DEMO_VIDEO_URL =
  "https://pub-6d8a0fb48e5c438f8f230951adac4c79.r2.dev/skt-demo.mp4";

type Shot = { src: string; alt: string; w: number; h: number };

// Ordered as a transaction actually moves through the business: goods are bought
// in, received into stock, sold (from the office or from a phone in the field),
// invoiced, collected against, and posted to the books.
const features: { name: string; body: string; shots: Shot[] }[] = [
  {
    name: "Purchase Orders",
    body: "Procurement starts here. An order is raised against a supplier with an expected delivery date and its line items, and takes its own number automatically. Every later step — what arrived, what is still outstanding, what is owed — traces back to this record.",
    shots: [
      {
        src: "/work/skt/purchase-order.png",
        alt: "Create purchase order",
        w: 1918,
        h: 1015,
      },
    ],
  },
  {
    name: "Goods Receipts",
    body: "Stock is received against an open purchase order, line by line, with batch numbers where they matter. A single transaction raises the GRN, adds the quantity to stock, updates how much of the order has now been received, and posts the value to the books — so the three can never drift apart.",
    shots: [
      {
        src: "/work/skt/goods-receipt.png",
        alt: "Create goods receipt",
        w: 1918,
        h: 1014,
      },
    ],
  },
  {
    name: "Stock Updates",
    body: "Over a thousand products, each with its SKU, category, brand, cost and selling price. Receipts and sales move stock on their own — nobody keys a stock figure — and every movement is written to an audit trail carrying a running balance. Low and out-of-stock lines are flagged as they happen.",
    shots: [
      {
        src: "/work/skt/products.png",
        alt: "Product catalogue and stock levels",
        w: 1918,
        h: 1015,
      },
    ],
  },
  {
    name: "Field Sales on Mobile",
    body: "Salespeople raise orders from their phone, searching the customer and adding products to a cart that totals GST as they go. The order arrives at head office as pending and sits in their own order history until it is reviewed. Nothing touches stock or the books until someone approves it — and if it is rejected, the reason comes back to the salesperson.",
    shots: [
      {
        src: "/work/skt/salerx-create-order.png",
        alt: "Create new order on mobile",
        w: 442,
        h: 886,
      },
      {
        src: "/work/skt/salerx-order-history.png",
        alt: "Order history on mobile",
        w: 445,
        h: 888,
      },
    ],
  },
  {
    name: "Sales Orders & GST Invoicing",
    body: "An approved order becomes an invoice. SGST and CGST are worked out per line from each product's own rates, giving taxable amount, total tax and grand total. In the same transaction stock comes down and the accounting entries are posted — and if a line would take stock below zero, the sale is refused outright rather than quietly allowed.",
    shots: [
      {
        src: "/work/skt/sales-order.png",
        alt: "Sales order with GST breakdown",
        w: 1918,
        h: 1014,
      },
    ],
  },
  {
    name: "Collections in the Field",
    body: "The same phone app pulls a customer's outstanding invoices so a salesperson can collect on the spot — cash, cheque or bank transfer — against a specific invoice. The amount is capped at what is actually outstanding, and the collection is submitted for approval rather than posted directly.",
    shots: [
      {
        src: "/work/skt/salerx-collect-payment.png",
        alt: "Collect payment on mobile",
        w: 444,
        h: 886,
      },
    ],
  },
  {
    name: "Payment Receipts",
    body: "An approved collection becomes a numbered receipt that updates how much the customer has paid, what remains due, and whether the invoice is now unpaid, part-paid or settled. Cash and bank are posted separately against receivables, and the receipt prints.",
    shots: [
      {
        src: "/work/skt/payment-receipt.png",
        alt: "Payment receipt",
        w: 1918,
        h: 1018,
      },
    ],
  },
  {
    name: "Chart of Accounts",
    body: "Underneath everything is a real double-entry ledger — assets, liabilities, income and expense — with the transaction count sitting against each account. Nobody posts to it by hand: goods received, sales invoiced and payments collected all write their own entries as they happen.",
    shots: [
      {
        src: "/work/skt/chart-of-accounts.png",
        alt: "Chart of accounts",
        w: 1918,
        h: 1014,
      },
    ],
  },
  {
    name: "Trial Balance",
    body: "Debits and credits laid out account by account with the difference between them, so the books can be proved balanced at any moment rather than at month end. It is the check that the automatic posting behind every receipt and sale is actually holding.",
    shots: [
      {
        src: "/work/skt/trial-balance.png",
        alt: "Trial balance",
        w: 1918,
        h: 1018,
      },
    ],
  },
  {
    name: "Dashboard",
    body: "The morning view: products on file, active suppliers, purchase orders in flight, how many lines have fallen to low stock, what is owed to suppliers — and a books indicator that reads Balanced or Out of Balance, so a posting problem is visible immediately instead of at the year end.",
    shots: [
      {
        src: "/work/skt/dashboard.png",
        alt: "Dashboard",
        w: 1918,
        h: 1015,
      },
    ],
  },
];

export default function SktPage() {
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
              Bleumont Distribution ERP — Demo Video
            </h2>
          </div>

          <div className="mt-10">
            <video
              src={DEMO_VIDEO_URL}
              poster="/work/skt/demo-poster.jpg"
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
                const isPair = feature.shots.length > 1;
                // A lone portrait would render ~1055px tall at full column
                // width, dwarfing every other row — rein it in.
                const isLonePortrait =
                  !isPair && feature.shots[0].h > feature.shots[0].w;

                return (
                  <div
                    key={feature.name}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center"
                  >
                    <div
                      className={`${
                        imageOnRight ? "md:order-2 md:pl-14" : "md:pr-14"
                      } ${isPair ? "grid grid-cols-2 gap-4" : ""}`}
                    >
                      {feature.shots.map((shot) => (
                        <button
                          key={shot.src}
                          type="button"
                          onClick={() =>
                            setZoomed({ shot, name: feature.name })
                          }
                          className={`block w-full cursor-zoom-in rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#90e0ef] focus-visible:ring-offset-2${
                            isLonePortrait ? " max-w-[280px] mx-auto" : ""
                          }`}
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
                      className={
                        imageOnRight ? "md:order-1 md:pr-14" : "md:pl-14"
                      }
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
