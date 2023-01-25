import { useState, useEffect } from "react";

export default function useWindowSize() {
  const isClient = typeof window === "object";
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
    isMobile: false,
  });
  useEffect(() => {
    function handleResize() {
      if (!isClient)
        return {
          width: 0,
          height: 0,
          isMobile: false,
        };
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);
  return windowSize;
}
