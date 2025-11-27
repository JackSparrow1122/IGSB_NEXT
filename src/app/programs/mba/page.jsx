"use client";

import { Suspense } from "react";
import MBAComponent from "./MBAContent";

export default function MBAPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <MBAComponent />
    </Suspense>
  );
}
