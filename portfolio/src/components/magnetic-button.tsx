"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCallback, type ReactNode } from "react";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function MagneticButton({ href, children, className }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 160, damping: 18, mass: 0.4 });
  const ySpring = useSpring(y, { stiffness: 160, damping: 18, mass: 0.4 });
  const rotateSpring = useSpring(rotate, { stiffness: 120, damping: 20 });

  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
    rotate.set(0);
  }, [x, y, rotate]);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const relX = event.clientX - rect.left - rect.width / 2;
      const relY = event.clientY - rect.top - rect.height / 2;

      x.set(relX * 0.25);
      y.set(relY * 0.25);
      rotate.set(relX * -0.02);
    },
    [x, y, rotate],
  );

  return (
    <motion.a
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{
        x: xSpring,
        y: ySpring,
        rotate: rotateSpring,
        boxShadow:
          "0 20px 45px rgba(18, 67, 120, 0.35), inset 0 0 0 0.5px rgba(255, 255, 255, 0.25)",
      }}
      className={`relative inline-flex items-center justify-center rounded-full bg-white/10 px-8 py-3 text-sm font-medium tracking-[0.22em] text-white transition-all duration-500 hover:bg-white/16 hover:text-white/90 hover:shadow-[0_40px_80px_rgba(15,76,117,0.3)] ${className ?? ""}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="halo" />
    </motion.a>
  );
}
