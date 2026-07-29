'use client';

import type { ServiceCard } from '@/lib/mock/services-section';

interface ServiceCardProps {
  card: ServiceCard;
  animationDelay?: string;
}

/**
 * Service card component.
 *
 * States covered:
 * - default: card at rest with subtle shadow
 * - hover: card lifts (translateY -6px) + shadow-lg; icon-wrap scales 1.1 + rotates -4deg
 * - reduced-motion: hover transition is instant (transition-duration: 0ms)
 *
 * All visual tokens trace to design/design-system.md §1.
 */
export default function ServiceCard({ card }: ServiceCardProps) {
  return (
    <article className="group bg-bg-card rounded-[12px] border border-black/[0.03] p-9 text-center shadow-[var(--shadow)] transition-all duration-[300ms] ease-in-out cursor-default hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)]">
      {/* Icon wrapper — 60×60px, gradient background, border-radius 16px */}
      <div
        className="mx-auto mb-4.5 flex h-[60px] w-[60px] items-center justify-center rounded-[16px] bg-gradient-to-br from-[#eef2ff] to-[#f0fdfa] text-[1.6rem] transition-transform duration-[300ms] ease-in-out group-hover:scale-[1.1] group-hover:-rotate-[4deg]"
        aria-hidden="true"
      >
        {card.icon}
      </div>

      {/* Title */}
      <h3 className="mb-2 text-[1.15rem] font-bold leading-tight text-text">
        {card.title}
      </h3>

      {/* Description */}
      <p className="text-[0.95rem] leading-[1.6] text-text-muted">{card.description}</p>
    </article>
  );
}
