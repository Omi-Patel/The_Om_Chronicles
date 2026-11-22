"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * Edge tab pinned to the right side, just under the nav, linking to baseCase,
 * the studio Om is part of. Collapsed it shows only the name; on
 * hover/focus it slides open to the left with a one-line pitch.
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
      className="group fixed right-0 top-24 z-50 flex h-10 items-center rounded-l-full border border-r-0 border-border bg-background/80 pl-3.5 pr-4 text-xs shadow-lg shadow-black/5 backdrop-blur-xl transition-colors hover:border-primary/40 focus-visible:border-primary/40 focus-visible:outline-none"
    >
      <span className="relative mr-2.5 flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
      </span>

      {/* pitch: slides open leftwards on hover / keyboard focus */}
      <span className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-300 ease-out group-hover:grid-cols-[1fr] group-focus-visible:grid-cols-[1fr]">
        <span className="overflow-hidden whitespace-nowrap">
          <span className="pr-1.5 text-muted-foreground">
            Need a website? My studio,
          </span>
        </span>
      </span>

      <span className="font-mono font-semibold tracking-tight text-foreground">
        base<span className="text-primary">Case</span>
      </span>
      <ArrowUpRight className="ml-1 h-3.5 w-3.5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
    </motion.a>
  );
};
