"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-P2E3MYLP7T";

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
    if (gtag) {
      gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname ?? window.location.pathname,
      });
    }
  }, [pathname]);

  return (
    <>
      {/* Google tag (gtag.js) – dimuat di head via beforeInteractive */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="beforeInteractive"
      />
      <Script id="google-analytics" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
