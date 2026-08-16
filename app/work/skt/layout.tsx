import type { Metadata } from "next";

// The page itself is a client component and so cannot export metadata;
// this layout carries it without touching the page.
export const metadata: Metadata = {
  title: "SKT Enterprises Distribution ERP",
  description:
    "A distribution ERP covering procurement, stock, GST invoicing, field sales on mobile and double-entry accounting.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
