import ServicesSection from '@/components/services/ServicesSection';

/**
 * Landing page — Services Section (feature/P2).
 *
 * Only the Services Section is implemented in this PR.
 * Other sections (Hero, Team, Contact, Footer) are stubs that will be
 * implemented in their own stories to allow independent review.
 */
export default function HomePage() {
  return (
    <main>
      {/* Stub sections — implemented in separate stories */}
      <section
        id="hero"
        className="bg-hero py-[140px] text-center"
        aria-label="Hero"
      >
        <div className="mx-auto max-w-container px-6">
          <p className="text-[1rem] text-text-muted">[Hero Section — separate story]</p>
        </div>
      </section>

      {/* ── Services Section — this PR's deliverable ───────────────────────── */}
      <ServicesSection />
      {/* ─────────────────────────────────────────────────────────────────── */}

      <section
        id="team"
        className="bg-bg-card py-[100px]"
        aria-label="Team"
      >
        <div className="mx-auto max-w-container px-6">
          <p className="text-center text-[1rem] text-text-muted">[Team Section — separate story]</p>
        </div>
      </section>

      <section
        id="contact"
        className="bg-contact-gradient py-[100px]"
        aria-label="Contact"
      >
        <div className="mx-auto max-w-container px-6">
          <p className="text-center text-[1rem] text-text-muted">[Contact Section — separate story]</p>
        </div>
      </section>

      <footer className="border-t border-black/[0.04] py-12 text-center">
        <div className="mx-auto max-w-container px-6">
          <p className="text-[0.9rem] text-text-muted">[Footer — separate story]</p>
        </div>
      </footer>
    </main>
  );
}
