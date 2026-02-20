import { Suspense } from "react";
import StudioLoginClient from "./StudioLoginClient";

function LoginFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white shadow-lg p-8 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-100 rounded w-full mb-6" />
        <div className="h-10 bg-gray-100 rounded w-full mb-4" />
        <div className="h-10 bg-gray-200 rounded w-full" />
      </div>
    </div>
  );
}

export default function StudioLoginPage() {
  return (
    <Suspense fallback={<LoginFallback />}>
      <StudioLoginClient />
    </Suspense>
  );
}
