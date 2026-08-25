'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isProjectHover, setIsProjectHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile / touch screen
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0
      );
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.25, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.25, ease: 'power3.out' });

    const xDotTo = gsap.quickTo(cursorDot, 'x', { duration: 0.05, ease: 'power1.out' });
    const yDotTo = gsap.quickTo(cursorDot, 'y', { duration: 0.05, ease: 'power1.out' });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      xTo(clientX);
      yTo(clientY);
      xDotTo(clientX);
      yDotTo(clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Attach event listeners for interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const interactive = target.closest('a, button, [data-cursor="interactive"]');
      const projectCard = target.closest('[data-cursor="project"]');

      if (projectCard) {
        setIsHovered(true);
        setIsProjectHover(true);
        setCursorText('VIEW');
        gsap.to(cursor, {
          scale: 3.2,
          backgroundColor: 'rgba(61, 90, 128, 0.9)',
          borderColor: '#98B4C7',
          duration: 0.3,
          ease: 'power2.out',
        });
      } else if (interactive) {
        setIsHovered(true);
        setIsProjectHover(false);
        setCursorText('');
        gsap.to(cursor, {
          scale: 1.8,
          backgroundColor: 'rgba(152, 180, 199, 0.25)',
          borderColor: '#98B4C7',
          duration: 0.3,
          ease: 'power2.out',
        });
      } else {
        setIsHovered(false);
        setIsProjectHover(false);
        setCursorText('');
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: 'transparent',
          borderColor: 'rgba(152, 180, 199, 0.6)',
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Trailing Outer Ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 border border-airy-blue/70 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-opacity duration-300"
        style={{
          boxShadow: isProjectHover ? '0 0 20px rgba(152, 180, 199, 0.5)' : 'none',
        }}
      >
        {cursorText && (
          <span className="text-[9px] font-extrabold tracking-widest text-white uppercase select-none pointer-events-none">
            {cursorText}
          </span>
        )}
      </div>

      {/* Immediate Inner Dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-2 h-2 bg-airy-blue rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </>
  );
}
