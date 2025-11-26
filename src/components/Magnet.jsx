"use client";

import { motion, useMotionValue, useSpring, useAnimationControls } from "framer-motion";
import { useRef } from "react";

export default function Magnet({
  children,
  strength = 12, // smaller = stronger pull
  vibration = 4, // vibration intensity
  className,
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const controls = useAnimationControls();

  const springX = useSpring(x, { stiffness: 500, damping: 25 });
  const springY = useSpring(y, { stiffness: 500, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    // Stronger magnetic pull
    x.set(offsetX / strength);
    y.set(offsetY / strength);

    // Start vibration animation
    controls.start({
      x: [springX.get(), springX.get() + Math.random() * vibration - vibration / 2],
      y: [springY.get(), springY.get() + Math.random() * vibration - vibration / 2],
      transition: {
        duration: 0.08,
        repeat: Infinity,
        repeatType: "mirror",
      },
    });
  };

  const handleMouseLeave = () => {
    // Stop vibration + reset magnet pull
    controls.stop();
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}
