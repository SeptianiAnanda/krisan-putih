import type { Metadata } from "next";
import "./globals.css";
import ConditionalLayout from "@/components/layout/ConditionalLayout";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import GoogleTagManager from "@/components/analytics/GoogleTagManager";

export const metadata: Metadata = {
  title: "Krisan Putih | Professional Web Development for Your Business",
  description:
    "We help businesses build scalable, high-performance websites. Digital agency committed to helping businesses grow through strategic planning and digital transformation.",
  openGraph: {
    title: "Krisan Putih | Professional Web Development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <GoogleTagManager />
        <GoogleAnalytics />
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
