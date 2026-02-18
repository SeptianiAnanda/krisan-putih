import dynamicImport from "next/dynamic";
import { metadata as studioMetadata, viewport as studioViewport } from "next-sanity/studio";

export const dynamic = "force-dynamic";

export const metadata = studioMetadata;
export const viewport = studioViewport;

const StudioClient = dynamicImport(() => import("./StudioClient"), { ssr: false });

export default function StudioPage() {
  return <StudioClient />;
}
