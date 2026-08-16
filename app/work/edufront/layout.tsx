import type { Metadata } from "next";

// The page itself is a client component and so cannot export metadata;
// this layout carries it without touching the page.
export const metadata: Metadata = {
  title: "Edufront LMS + ERP",
  description:
    "A learning management system replacing six separate SaaS tools — courses, fees, payroll and accounting in one platform.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
