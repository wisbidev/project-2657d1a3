'use client';

import { useEffect, useRef } from 'react';
import ContactSection from '@/components/ContactSection';

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 7l-8 4-8-4V5l8 4 8-4v2z" />
      <path d="M4 12l8 4 8-4" />
      <path d="M4 17l8 4 8-4" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export default function Home() {
  const navRef = useRef<HTMLElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const navLinksRef = useRef<HTMLUListElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    const menuBtn = menuBtnRef.current;
    const navLinks = navLinksRef.current;
    const overlay = overlayRef.current;

    if (!nav || !menuBtn || !navLinks || !overlay) return;

    // Scroll handler for nav shadow
    const handleScroll = () => {
      if (window.scrollY > 20) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };

    // Active nav link
    const handleActiveLink = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 120;

      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;
        const id = section.getAttribute('id');
        const link = navLinks.querySelector(`a[href="#${id}"]`);

        if (link) {
          if (scrollPos >= top && scrollPos < top + height) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });
    };

    // Fade-in animation
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeElements.forEach((el) => observer.observe(el));

    // Mobile menu toggle
    const toggleMenu = (open?: boolean) => {
      const isOpen = open !== undefined ? open : !navLinks.classList.contains('open');
      navLinks.classList.toggle('open', isOpen);
      menuBtn.classList.toggle('open', isOpen);
      overlay.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    overlay.addEventListener('click', () => toggleMenu(false));

    // Close on nav link click
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') toggleMenu(false);
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = (anchor as HTMLAnchorElement).getAttribute('href');
        if (href) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleActiveLink);

    // Initial call
    handleScroll();
    handleActiveLink();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleActiveLink);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav ref={navRef} id="navbar">
        <div className="container">
          <a href="#hero" className="logo">
            Web<span>Agent</span>
          </a>
          <button
            ref={menuBtnRef}
            className="menu-btn"
            id="menuBtn"
            aria-label="Mở menu"
          >
            <span />
            <span />
            <span />
          </button>
          <ul ref={navLinksRef} className="nav-links" id="navLinks">
            <li>
              <a href="#services">Dịch vụ</a>
            </li>
            <li>
              <a href="#team">Đội ngũ</a>
            </li>
            <li>
              <a href="#contact">Liên hệ</a>
            </li>
            <li>
              <a href="#contact" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
                Bắt đầu
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div ref={overlayRef} className="mobile-overlay" id="mobileOverlay" />

      {/* Hero Section */}
      <section id="hero">
        <div className="container">
          <h1>
            Xây dựng đội ngũ <span className="highlight">Web Agent</span>
            <br />
            chuyên nghiệp cho bạn
          </h1>
          <p>
            Đội ngũ chuyên gia xây dựng web – từ landing page đến ứng dụng
            phức tạp, giao diện hiện đại, trải nghiệm mượt mà.
          </p>
          <div className="hero-badges">
            <span className="hero-badge">
              <StarIcon />
              UI/UX Chuyên sâu
            </span>
            <span className="hero-badge">
              <BoxIcon />
              Full-stack
            </span>
            <span className="hero-badge">
              <ClockIcon />
              Đúng hạn
            </span>
          </div>
          <div>
            <a href="#contact" className="btn-primary">
              Bắt đầu dự án
            </a>
            <a href="#services" className="btn-outline">
              Xem dịch vụ
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="container">
          <h2 className="section-title fade-in">Dịch vụ của chúng tôi</h2>
          <p className="section-sub fade-in">
            Từ ý tưởng đến sản phẩm hoàn chỉnh — chúng tôi đồng hành cùng bạn ở
            mọi giai đoạn.
          </p>
          <div className="services-grid">
            <div className="service-card fade-in">
              <div className="icon-wrap">🎨</div>
              <h3>Thiết kế UI/UX</h3>
              <p>
                Giao diện đẹp, trực quan, tối ưu trải nghiệm người dùng trên mọi
                thiết bị. Wireframe, prototype, design system.
              </p>
            </div>
            <div className="service-card fade-in">
              <div className="icon-wrap">⚡</div>
              <h3>Phát triển Frontend</h3>
              <p>
                React, Next.js — nhanh, responsive, hiệu suất cao, code sạch và
                dễ bảo trì. Tối ưu Core Web Vitals.
              </p>
            </div>
            <div className="service-card fade-in">
              <div className="icon-wrap">🔧</div>
              <h3>Phát triển Backend</h3>
              <p>
                API, database, authentication — hệ thống vững chắc cho mọi ứng
                dụng web. Go, PostgreSQL, REST &amp; GraphQL.
              </p>
            </div>
            <div className="service-card fade-in">
              <div className="icon-wrap">🚀</div>
              <h3>Tối ưu &amp; Triển khai</h3>
              <p>
                SEO, tốc độ tải, CI/CD — đưa sản phẩm lên production an toàn và
                nhanh chóng. AWS, Vercel, Docker.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team">
        <div className="container">
          <h2 className="section-title fade-in">Đội ngũ</h2>
          <p className="section-sub fade-in">
            Những con người đứng sau mỗi sản phẩm chất lượng.
          </p>
          <div className="team-grid">
            <div className="team-card fade-in">
              <div className="avatar">M</div>
              <h3>Mai</h3>
              <div className="role">Product Manager</div>
              <p>
                Định hướng sản phẩm, ưu tiên tính năng, kết nối stakeholder với
                đội ngũ phát triển.
              </p>
            </div>
            <div className="team-card fade-in">
              <div className="avatar">K</div>
              <h3>Khoa</h3>
              <div className="role">Tech Lead</div>
              <p>
                Kiến trúc hệ thống, code review, đảm bảo chất lượng kỹ thuật và
                hiệu suất.
              </p>
            </div>
            <div className="team-card fade-in">
              <div className="avatar">N</div>
              <h3>Nam</h3>
              <div className="role">Developer</div>
              <p>
                Xây dựng frontend &amp; backend, biến thiết kế thành code hoạt
                động ổn định.
              </p>
            </div>
            <div className="team-card fade-in">
              <div className="avatar">L</div>
              <h3>Linh</h3>
              <div className="role">Test Lead</div>
              <p>
                Kiểm thử, viết test case, đảm bảo sản phẩm không lỗi trước khi ra
                mắt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="social-links">
            <a href="#" aria-label="Facebook" title="Facebook">
              f
            </a>
            <a href="#" aria-label="Twitter" title="Twitter">
              𝕏
            </a>
            <a href="#" aria-label="GitHub" title="GitHub">
              G
            </a>
            <a href="#" aria-label="LinkedIn" title="LinkedIn">
              in
            </a>
          </div>
          <p>
            &copy; 2025 Web Agent Team. Xây dựng với <span className="heart">❤️</span>.
          </p>
        </div>
      </footer>
    </>
  );
}
