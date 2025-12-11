// src/lib/ui/ScrollProgressBar.tsx
"use client";

// Import necessary hooks from React
import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-amber-600 z-50"
      style={{ width: `${scrollPercent}%`, transition: "width 0.2s ease" }}
    />
  );
};

export default ScrollProgressBar;
