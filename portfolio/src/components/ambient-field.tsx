"use client";

import { motion } from "framer-motion";

type Node = {
  id: number;
  x: number;
  y: number;
  radius: number;
  duration: number;
  delay: number;
  blur: number;
  opacity: number;
};

const nodes: Node[] = Array.from({ length: 28 }, (_, index) => {
  const angle = (index / 28) * Math.PI * 2;
  const radius = 24 + (index % 7) * 4;
  const eccentricity = 0.65 + (index % 5) * 0.03;
  return {
    id: index,
    x: 50 + Math.cos(angle) * radius * eccentricity,
    y: 48 + Math.sin(angle) * radius,
    radius: 220 + (index % 4) * 65,
    duration: 14 + (index % 5) * 2.4,
    delay: (index % 8) * 0.7,
    blur: 80 + (index % 6) * 10,
    opacity: 0.14 + ((index % 5) * 0.035),
  };
});

export function AmbientField() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {nodes.map((node) => (
        <motion.span
          key={node.id}
          aria-hidden="true"
          initial={{
            scale: 0.9,
            opacity: node.opacity * 0.6,
          }}
          animate={{
            scale: [0.92, 1.05, 0.94],
            opacity: [node.opacity * 0.8, node.opacity, node.opacity * 0.75],
            filter: [
              `blur(${node.blur * 0.9}px)`,
              `blur(${node.blur}px)`,
              `blur(${node.blur * 1.05}px)`,
            ],
            x: [`${node.x - 1}%`, `${node.x + 1.2}%`, `${node.x - 0.8}%`],
            y: [`${node.y}%`, `${node.y + 0.8}%`, `${node.y - 0.6}%`],
          }}
          transition={{
            duration: node.duration,
            repeat: Infinity,
            ease: [0.55, 0, 0.45, 1],
            delay: node.delay,
          }}
          className="absolute rounded-full blur-3xl"
          style={{
            width: node.radius,
            height: node.radius,
            left: `${node.x}%`,
            top: `${node.y}%`,
            background:
              "radial-gradient(circle at 30% 30%, rgba(147, 222, 255, 0.42), transparent 70%)",
          }}
        />
      ))}
    </div>
  );
}
