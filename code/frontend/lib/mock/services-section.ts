/**
 * Mock data contract for the Services Section.
 *
 * This file is the single source of truth for service card data in the UI.
 * The backend stage must satisfy this shape when replacing mock data.
 *
 * @module lib/mock/services-section
 */

// ---------------------------------------------------------------------------
// Shared types
// ---------------------------------------------------------------------------

export interface ServiceCard {
  id: string;
  icon: string;        // emoji character used as the icon content
  title: string;
  description: string;
}

export interface ServicesSectionData {
  heading: string;
  subheading: string;
  cards: ServiceCard[];
}

// ---------------------------------------------------------------------------
// Simulated fetch — returns the shape the real API must match.
// Replace this function body in the backend stage; the caller interface is fixed.
// ---------------------------------------------------------------------------

/** Returns a resolved ServicesSectionData payload, or throws on error. */
export async function fetchServicesSection(): Promise<ServicesSectionData> {
  // Simulate a small network delay so loading states are exercisable.
  await new Promise((resolve) => setTimeout(resolve, 300));

  return {
    heading: 'Dịch vụ của chúng tôi',
    subheading:
      'Từ ý tưởng đến sản phẩm hoàn chỉnh — chúng tôi đồng hành cùng bạn ở mọi giai đoạn.',
    cards: [
      {
        id: 'svc-1',
        icon: '🎨',
        title: 'Thiết kế UI/UX',
        description:
          'Giao diện đẹp, trực quan, tối ưu trải nghiệm người dùng trên mọi thiết bị. Wireframe, prototype, design system.',
      },
      {
        id: 'svc-2',
        icon: '⚡',
        title: 'Phát triển Frontend',
        description:
          'React, Next.js — nhanh, responsive, hiệu suất cao, code sạch và dễ bảo trì. Tối ưu Core Web Vitals.',
      },
      {
        id: 'svc-3',
        icon: '🔧',
        title: 'Phát triển Backend',
        description:
          'API, database, authentication — hệ thống vững chắc cho mọi ứng dụng web. Go, PostgreSQL, REST & GraphQL.',
      },
      {
        id: 'svc-4',
        icon: '🚀',
        title: 'Tối ưu & Triển khai',
        description:
          'SEO, tốc độ tải, CI/CD — đưa sản phẩm lên production an toàn và nhanh chóng. AWS, Vercel, Docker.',
      },
    ],
  };
}

/** Error shape returned when fetch fails (e.g. network error, 5xx). */
export interface ServicesSectionError {
  code: string;
  message: string;
}
