import type { Metadata } from "next";

// The page itself is a client component and so cannot export metadata;
// this layout carries it without touching the page.
export const metadata: Metadata = {
  title: "Seapol Logistics ERP",
  description:
    "A shipping logistics ERP tracking every truck trip gate to gate, from vessel arrival through to invoicing.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
