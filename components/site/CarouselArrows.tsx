"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export function CarouselArrows({
  canPrev,
  canNext,
  onPrev,
  onNext,
  className = "",
}: {
  canPrev: boolean;
  canNext: boolean;
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}) {
  const base =
    "grid h-[50px] w-[50px] place-items-center rounded-full border border-[#e6e8ef] bg-white transition-all duration-200";
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <button
        type="button"
        aria-label="Previous"
        onClick={onPrev}
        disabled={!canPrev}
        className={`${base} ${canPrev ? "text-[#0c1f5b] hover:border-[#d0103a] hover:text-[#d0103a] hover:shadow-md" : "text-[#c3c6d1] cursor-default"}`}
      >
        <ChevronLeft className="h-5 w-5" strokeWidth={2.25} />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={onNext}
        disabled={!canNext}
        className={`${base} ${canNext ? "text-[#0c1f5b] hover:border-[#d0103a] hover:text-[#d0103a] hover:shadow-md" : "text-[#c3c6d1] cursor-default"}`}
      >
        <ChevronRight className="h-5 w-5" strokeWidth={2.25} />
      </button>
    </div>
  );
}
