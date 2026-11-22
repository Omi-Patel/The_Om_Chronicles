"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * The baseCase logo: two skewed bars, the short one at 70% height. Here the
 * bars "grow" on a loop, the short bar first and then the tall one, like a
 * chart going up. Uses baseCase's own brand blue so the mark is recognisable.
 */
const BaseCaseMark = () => {
  const bars = [
    { height: "70%", delay: 0 },
    { height: "100%", delay: 0.15 },
  ];

  return (
    <span
      aria-hidden
      className="mr-2 grid h-[10px] w-[11px] shrink-0 -skew-x-6 grid-cols-2 gap-[2px]"
    >
      {bars.map((bar, i) => (
        <motion.i
          key={i}
          className="block origin-bottom self-end rounded-[1px] bg-[#2546f5] dark:bg-[#8ea2ff]"
          style={{ height: bar.height }}
          animate={{ scaleY: [1, 0.35, 1.12, 1] }}
          transition={{
            duration: 0.9,
            delay: 1.6 + bar.delay,
            times: [0, 0.35, 0.75, 1],
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2.6,
          }}
        />
      ))}
    </span>
  );
};

/**
 * Edge tab pinned to the right side, just under the nav, linking to baseCase.
 * Collapsed it shows only the logo and name. On hover/focus it slides open
 * to the left with a one-line pitch.
 */
export const BaseCaseBadge = () => {
  return (
    <motion.a
      href="https://www.basecase.site/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Need a website? My studio, baseCase (opens in a new tab)"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      className="group fixed right-0 top-24 z-50 flex h-10 items-center rounded-l-full border border-r-0 border-border bg-background/80 pl-4 pr-4 text-xs leading-none shadow-lg shadow-black/5 backdrop-blur-xl transition-colors hover:border-[#2546f5]/40 focus-visible:border-[#2546f5]/40 focus-visible:outline-none dark:hover:border-[#8ea2ff]/40"
    >
      <BaseCaseMark />

      {/* pitch: slides open leftwards on hover / keyboard focus */}
      <span className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-300 ease-out group-hover:grid-cols-[1fr] group-focus-visible:grid-cols-[1fr]">
        <span className="overflow-hidden whitespace-nowrap">
          <span className="pr-1.5 text-muted-foreground">
            Need a website? My studio,
          </span>
        </span>
      </span>

      <span className="font-semibold tracking-[-0.04em] text-foreground text-[13px]">
        baseCase
      </span>
      <ArrowUpRight className="ml-1 h-3.5 w-3.5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#2546f5] dark:group-hover:text-[#8ea2ff]" />
    </motion.a>
  );
};
