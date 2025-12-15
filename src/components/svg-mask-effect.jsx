import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={updateMousePosition}
      className={cn("relative h-screen flex items-center justify-center", className)}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center text-6xl font-bold text-slate-400"
        animate={{
          WebkitMaskImage: isHovered
            ? `radial-gradient(${revealSize}px circle at ${mousePosition.x}px ${mousePosition.y}px, black 40%, transparent 100%)`
            : "none",
          WebkitMaskSize: "100%",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      >
        <div className="absolute inset-0 z-0 h-full w-full">
          {children}
        </div>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center text-slate-200">
        {revealText}
      </div>
    </motion.div>
  );
};
