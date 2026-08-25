"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check touch capabilities
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Smooth ticker lerp
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3.out" });

    const ticker = gsap.ticker.add(() => {
      xTo(mouse.x);
      yTo(mouse.y);
    });

    // Delegated mouseover detection
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectTarget = target.closest("[data-cursor='view']");
      const ctaTarget = target.closest("[data-cursor='open']");
      const linkTarget = target.closest("a, button, [role='button']");

      if (projectTarget) {
        setIsHovered(true);
        setCursorText("VIEW");
      } else if (ctaTarget) {
        setIsHovered(true);
        setCursorText("OPEN");
      } else if (linkTarget) {
        setIsHovered(true);
        setCursorText("");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      gsap.ticker.remove(ticker);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor fixed top-0 left-0 pointer-events-none z-[99999] rounded-full border flex items-center justify-center transition-all duration-200 ${
        isHovered
          ? cursorText
            ? "w-16 h-16 bg-[#3B2F2A] text-[#FBF7F4] border-[#3B2F2A] shadow-lg"
            : "w-10 h-10 bg-[#B98F88]/30 border-[#B98F88] backdrop-blur-xs"
          : "w-4 h-4 bg-[#3B2F2A] border-transparent"
      }`}
    >
      {cursorText && (
        <span className="text-[10px] font-sans font-bold tracking-widest text-[#FBF7F4] animate-fade-in">
          {cursorText}
        </span>
      )}
    </div>
  );
}
