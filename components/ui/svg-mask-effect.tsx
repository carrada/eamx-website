"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className,
  style,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<any>({ x: null, y: null });
  const containerRef = useRef<any>(null);
  
  const updateMousePosition = (e: any) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calcular si el mouse está en la zona central (30% superior y 30% inferior excluidos)
    const heightThreshold = rect.height * 0.25; // 25% de margen arriba y abajo
    const isInActiveZone = y > heightThreshold && y < rect.height - heightThreshold;
    
    setMousePosition({ x, y });
    setIsHovered(isInActiveZone);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", updateMousePosition);
      container.addEventListener("mouseleave", () => setIsHovered(false));
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", updateMousePosition);
        container.removeEventListener("mouseleave", () => setIsHovered(false));
      }
    };
  }, []);
  
  let maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative h-screen", className)}
      style={style}
    >
      <motion.div
        className="absolute flex h-full w-full items-center justify-center text-white pointer-events-none [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] [mask-size:40px]"
        style={{
          backgroundImage: "url(/fondoeamx.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{
          maskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          maskSize: `${maskSize}px`,
        }}
        transition={{
          maskSize: { duration: 0.3, ease: "easeInOut" },
          maskPosition: { duration: 0, ease: "linear" },
        }}
      >
        <div className="relative z-20 w-full px-8 text-center font-bold text-white pointer-events-none">
          {children}
        </div>
      </motion.div>

      <div className="flex h-full w-full items-center justify-center px-8 text-slate-800">
        {revealText}
      </div>
    </motion.div>
  );
};
