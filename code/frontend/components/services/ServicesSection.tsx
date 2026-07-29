'use client';

import { useEffect, useRef, useState } from 'react';
import {
  fetchServicesSection,
  type ServicesSectionData,
  type ServicesSectionError,
} from '@/lib/mock/services-section';
import ServiceCard from './ServiceCard';

/**
 * Services section — LANDING-003.
 *
 * States covered:
 * - loading: skeleton cards with pulse animation (shown while fetch is pending)
 * - error: error message with retry button
 * - empty: friendly empty-state message when cards array is length 0
 * - default: four service cards in responsive grid
 *
 * Fade-in animation fires once on scroll-into-view (IntersectionObserver, threshold 0.15).
 * Respects prefers-reduced-motion: no transition, instant state change.
 */
export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const [data, setData] = useState<ServicesSectionData | null>(null);
  const [error, setError] = useState<ServicesSectionError | null>(null);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  // ---------------------------------------------------------------------------
  // Fetch services data
  // ---------------------------------------------------------------------------
  async function load() {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchServicesSection();
      setData(result);
    } catch (e) {
      setError({
        code: 'FETCH_ERROR',
        message:
          'Không thể tải danh sách dịch vụ. Vui lòng kiểm tra kết nối hoặc thử lại.',
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  // ---------------------------------------------------------------------------
  // Fade-in on scroll — fires once, respects reduced-motion
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-bg-light py-[100px]"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-container px-6">
        {/* Section heading */}
        <h2
          id="services-heading"
          className={`text-center text-[2rem] font-extrabold leading-tight text-text transition-opacity duration-[700ms] ease-in-out ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionProperty: 'opacity, transform', transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          {data?.heading ?? 'Dịch vụ của chúng tôi'}
        </h2>

        {/* Subheading */}
        <p
          className={`mx-auto mb-[52px] max-w-[600px] text-center text-[1.1rem] text-text-muted transition-opacity duration-[700ms] ease-in-out ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transitionProperty: 'opacity, transform',
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '100ms',
          }}
        >
          {data?.subheading ??
            'Từ ý tưởng đến sản phẩm hoàn chỉnh — chúng tôi đồng hành cùng bạn ở mọi giai đoạn.'}
        </p>

        {/* ── Loading state ─────────────────────────────────────────────────── */}
        {loading && (
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            }}
            aria-busy="true"
            aria-label="Đang tải dịch vụ…"
          >
            {[1, 2, 3, 4].map((n) => (
              <div
                key={`skeleton-${n}`}
                className="rounded-[12px] border border-black/[0.03] bg-bg-card p-9 text-center"
                aria-hidden="true"
              >
                {/* Icon skeleton */}
                <div className="mx-auto mb-4.5 h-[60px] w-[60px] animate-pulse rounded-[16px] bg-gradient-to-br from-[#eef2ff] to-[#f0fdfa]" />
                {/* Title skeleton */}
                <div className="mx-auto mb-2 h-5 w-3/4 animate-pulse rounded bg-gray-200" />
                {/* Description skeleton */}
                <div className="mx-auto h-4 w-full animate-pulse rounded bg-gray-100" />
                <div className="mx-auto mt-1 h-4 w-2/3 animate-pulse rounded bg-gray-100" />
              </div>
            ))}
          </div>
        )}

        {/* ── Error state ────────────────────────────────────────────────────── */}
        {!loading && error && (
          <div
            className="rounded-[12px] border border-error/20 bg-error/5 p-8 text-center"
            role="alert"
          >
            <p className="mb-4 text-[1rem] text-error">{error.message}</p>
            <button
              type="button"
              onClick={load}
              className="cursor-pointer rounded-pill bg-primary px-8 py-3.5 text-[1rem] font-semibold text-white transition-transform duration-[200ms] ease hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] active:translate-y-0"
            >
              Thử lại
            </button>
          </div>
        )}

        {/* ── Empty state ───────────────────────────────────────────────────── */}
        {!loading && !error && data && data.cards.length === 0 && (
          <div className="rounded-[12px] border border-black/[0.04] bg-bg-card p-12 text-center">
            <div
              className="mx-auto mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-[16px] bg-gradient-to-br from-[#eef2ff] to-[#f0fdfa] text-[1.6rem]"
              aria-hidden="true"
            >
              📋
            </div>
            <p className="text-[1rem] font-semibold text-text">
              Chưa có dịch vụ nào được hiển thị.
            </p>
            <p className="mt-1 text-[0.9rem] text-text-muted">
              Vui lòng quay lại sau để cập nhật.
            </p>
          </div>
        )}

        {/* ── Default: 4-card grid ──────────────────────────────────────────── */}
        {!loading && !error && data && data.cards.length > 0 && (
          <div
            className="grid gap-6 transition-opacity duration-[700ms] ease-in-out"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '200ms',
            }}
            aria-label={`${data.cards.length} dịch vụ được cung cấp`}
          >
            {data.cards.map((card, index) => (
              <div
                key={card.id}
                style={{
                  transitionProperty: 'opacity, transform',
                  transitionDuration: '700ms',
                  transitionTimingFunction: 'ease',
                  transitionDelay: visible ? `${200 + index * 100}ms` : '0ms',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(30px)',
                }}
              >
                <ServiceCard card={card} />
              </div>
            ))}
          </div>
        )}

        {/* Responsive grid: 4 cols ≥1024px, 2 cols 768–1023px, 1 col <768px */}
        <style>{`
          @media (max-width: 768px) {
            #services .grid {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 480px) {
            #services .grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
