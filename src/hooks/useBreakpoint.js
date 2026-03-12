import { useState, useEffect } from "react";

// Breakpoints:  mobile < 640  |  tablet 640–1023  |  desktop ≥ 1024
export function useBreakpoint() {
  const getBreakpoint = () => {
    const w = window.innerWidth;
    if (w < 640)  return "mobile";
    if (w < 1024) return "tablet";
    return "desktop";
  };

  const [bp, setBp] = useState(getBreakpoint);

  useEffect(() => {
    const handler = () => setBp(getBreakpoint());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return {
    bp,
    isMobile:  bp === "mobile",
    isTablet:  bp === "tablet",
    isDesktop: bp === "desktop",
    isMobileOrTablet: bp !== "desktop",
  };
}
