"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      // Animate percentage text counter
      const counterObj = { val: 0 };
      tl.to(counterObj, {
        val: 100,
        duration: 1.4,
        ease: "power2.inOut",
        onUpdate: () => {
          setPercentage(Math.round(counterObj.val));
        },
      }, 0);

      // Line progress expansion
      tl.to(
        progressLineRef.current,
        {
          scaleX: 1,
          duration: 1.4,
          ease: "power2.inOut",
        },
        0
      );

      // Fade out subtext & line
      tl.to([subtextRef.current, progressLineRef.current], {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power2.in",
      }, 1.5);

      // Scale up logo text and split open container
      tl.to(textRef.current, {
        scale: 1.15,
        opacity: 0,
        duration: 0.4,
        ease: "expo.out",
      }, 1.7);

      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 0.6,
        ease: "power3.inOut",
      }, 1.9);
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#3B2F2A] text-[#FBF7F4] select-none"
    >
      <div className="relative flex flex-col items-center text-center px-6">
        <div ref={textRef} className="overflow-hidden mb-6">
          <span className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-widest uppercase italic block text-[#E8D8CE]">
            T
          </span>
          <span className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-[#B98F88] font-semibold mt-2 block">
            TAMANNA ANSARI
          </span>
        </div>

        <div className="w-48 md:w-64 h-[2px] bg-[#7A6258]/30 relative overflow-hidden mb-4">
          <div
            ref={progressLineRef}
            className="absolute top-0 left-0 bottom-0 w-full bg-[#B98F88] origin-left scale-x-0"
          />
        </div>

        <div
          ref={subtextRef}
          className="flex items-center gap-4 text-xs tracking-widest text-[#E8D8CE]/70 font-mono"
        >
          <span>CREATIVE DEVELOPER</span>
          <span>•</span>
          <span>{percentage}%</span>
        </div>
      </div>
    </div>
  );
}
