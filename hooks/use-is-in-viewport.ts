import { useRef, useEffect, useState } from "react";

export function useIsInViewport() {
  const ref = useRef<any>(null);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const isFullyVisible =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth);

      const isPartiallyVisible =
        rect.top <
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom > 0 &&
        rect.left <
          (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right > 0;

      setIsInViewport(isFullyVisible || isPartiallyVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [ref, isInViewport];
}
