import { useEffect, useMemo, useRef, useState } from "react";

export default function RoleTypewriter({
  items = [],
  typeSpeed = 70,       // ms per char when typing
  deleteSpeed = 45,     // ms per char when deleting
  holdTime = 900,       // pause when a full word is typed
  caret = true,
}) {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // find the longest string to reserve space (prevents layout shift)
  const longest = useMemo(
    () => items.reduce((a, b) => (b.length > a.length ? b : a), ""),
    [items]
  );

  const [i, setI] = useState(0);        // which item
  const [txt, setTxt] = useState("");   // current typed text
  const [del, setDel] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion || items.length === 0) return;

    const full = items[i % items.length];

    const step = () => {
      if (!del) {
        // typing
        const next = full.slice(0, txt.length + 1);
        setTxt(next);
        if (next === full) {
          // hold at full word
          timerRef.current = setTimeout(() => setDel(true), holdTime);
          return;
        }
        timerRef.current = setTimeout(step, typeSpeed);
      } else {
        // deleting
        const next = full.slice(0, Math.max(0, txt.length - 1));
        setTxt(next);
        if (next.length === 0) {
          setDel(false);
          setI((x) => (x + 1) % items.length);
          timerRef.current = setTimeout(step, typeSpeed);
          return;
        }
        timerRef.current = setTimeout(step, deleteSpeed);
      }
    };

    timerRef.current = setTimeout(step, typeSpeed);
    return () => clearTimeout(timerRef.current);
  }, [i, del, txt, items, prefersReducedMotion, typeSpeed, deleteSpeed, holdTime]);

  // reduced motion: show first item without animation
  const display = prefersReducedMotion ? items[0] ?? "" : txt;

  return (
    <span className="typewriter" aria-live="polite" aria-atomic="true" style={{ position: "relative", display: "inline-block" }}>
      {/* GHOST: reserves width/height using the longest string */}
      <span
        aria-hidden="true"
        style={{
          visibility: "hidden",
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
      >
        {longest || " "} 
      </span>

      {/* VISIBLE: absolutely placed on top, so size never changes */}
      <span
        className="typewriter-visible"
        style={{
          position: "absolute",
          inset: 0,
          whiteSpace: "nowrap",
        }}
      >
        {display}
        {caret && !prefersReducedMotion && <span className="typewriter-caret" aria-hidden="true">|</span>}
      </span>
    </span>
  );
}
