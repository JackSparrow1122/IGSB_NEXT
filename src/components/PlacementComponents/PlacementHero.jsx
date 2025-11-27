"use client";
import Image from "next/image";

export default function PlacementHero() {
  return (
    <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[88vh]">
      <Image
        src="/PlacementBanner1.jpg"
        alt="Placement Banner"
        fill
        priority
        className="object-cover"
      />
    </div>
  );
}
