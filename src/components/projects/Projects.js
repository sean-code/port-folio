import React, { useEffect, useMemo, useRef, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Projects.css";

function RepoBadge({ children }) {
  return <span className="repo-badge">{children}</span>;
}

function ProjectCard({ cover, title, summary, stack = [], repo }) {
  return (
    <article className="proj-card">
      <div className="proj-media">
        <img src={cover} alt="" loading="lazy" decoding="async" />
        <div className="proj-media-overlay" />
      </div>

      <div className="proj-body">
        <h3 className="proj-title">{title}</h3>

        {stack?.length > 0 && (
          <div className="proj-tags">
            {stack.map((t, i) => (
              <RepoBadge key={i}>{t}</RepoBadge>
            ))}
          </div>
        )}

        <p className="proj-summary">{summary}</p>

        <div className="proj-actions">
          <a
            className="btn-ghost"
            href={repo}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${title} repository (opens in new tab)`}
          >
            View Repository
          </a>
        </div>
      </div>
    </article>
  );
}

function ProjectsModal({ open, onClose, items = [] }) {
  const closeRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Focus the close button when opened
  useEffect(() => {
    if (open && closeRef.current) closeRef.current.focus();
  }, [open]);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      id="more-projects"
      className="proj-modal"
      role="dialog"
      aria-modal="true"
      aria-label="More projects"
    >
      {/* Backdrop */}
      <div className="proj-modal__backdrop" role="presentation" onClick={onClose} />

      <div className="proj-modal__panel" role="document">
        <header className="proj-modal__head">
          <h3 className="proj-modal__title">More Projects</h3>
          <button
            ref={closeRef}
            className="proj-modal__close btn-ghost sm"
            onClick={onClose}
            aria-label="Close"
            title="Close"
          >
            X
          </button>
        </header>

        <div className="proj-more-grid">
          {items.map((p, i) => (
            <article key={i} className="proj-more-item">
              <div className="mini-media">
                <img src={p.cover} alt="" loading="lazy" decoding="async" />
              </div>
              <div className="mini-info">
                <div className="proj-more-title">{p.title}</div>

                {p.stack?.length ? (
                  <div className="proj-more-tags">
                    {p.stack.map((t, j) => (
                      <RepoBadge key={j}>{t}</RepoBadge>
                    ))}
                  </div>
                ) : null}

                <a
                  className="btn-ghost sm"
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Open repository for ${p.title}`}
                >
                  Repository
                </a>
              </div>
            </article>
          ))}
        </div>

      
      </div>
    </div>
  );
}

export default function Project() {
  // ===== Featured (3 on page) =====
  const FEATURED = useMemo(
    () => [
      {
        title: "Car Rental SaaS",
        summary:
          "Booking engine with deterministic availability, admin metrics, PDF receipts, and secure auth.",
        stack: ["Vue 3", "Node/Prisma", "Stripe/M-Pesa", "Railway"],
        cover:
          "https://www.enterprise.com/en/exotic-car-rental/_jcr_content/root/container/container/container_1060086341/teaser.coreimg.jpeg/1708936909048/explore-our-vehicles-1920x1080-vehicles.jpeg",
        repo: "https://github.com/sean-code/cars-website",
      },
      {
        title: "Regex, Rules & Detectors",
        summary:
          "Precision regex + version capture for technology detection with curated regression tests.",
        stack: ["Regex", "JavaScript", "OSS"],
        cover:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
        repo: "https://github.com/sean-code/Wappalyzer",
      },
      {
        title: "BioNLP Extractor (Prostate Cancer WIP)",
        summary:
          "Pipeline for biomedical text: ingest → preprocess → entity cues → lightweight classifier with F1-oriented evaluation.",
        stack: ["Python", "scikit-learn", "spaCy"],
        cover:
          "https://images.unsplash.com/photo-1585435465945-bef5a93f8849?q=80&w=1600&auto=format&fit=crop",
        repo: "https://github.com/sean-code",
      },
    ],
    []
  );

  // ===== More (overlay) — includes IMAGES + repo only =====
  const MORE = useMemo(
    () => [
      {
        title: "XO Commerce Store",
        stack: ["Vue", "Firebase", "Tailwind"],
        repo: "https://github.com/sean-code/Xo-Commerce",
        cover:
          "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop",
      },
      // {
      //   title: "Movie Search",
      //   stack: ["React", "Redux", "OMDb"],
      //   repo: "https://github.com/sean-code/Movie-Search",
      //   cover:
      //     "https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=1200&auto=format&fit=crop",
      // },
      {
        title: "Vitamu Meals App",
        stack: ["JS", "SCSS", "HTML"],
        repo: "https://github.com/sean-code/Vitamu-Foods",
        cover:
          "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Superheroes API",
        stack: ["Rails", "Postgres", "Railway"],
        repo: "https://github.com/sean-code/Superheroes-Back-end",
        cover:
          "https://i0.wp.com/www.myunusualjourneys.com/wp-content/uploads/2017/01/superheroes.jpg?resize=1280%2C640&ssl=1",
      },
      {
        title: "Cars API",
        stack: ["Rails", "Postgres", "Railway"],
        repo: "https://github.com/sean-code/carreview",
        cover:
          "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Perfumes API",
        stack: ["Node", "Prisma", "MySQL"],
        repo: "https://github.com/sean-code/perfumes-NGR",
        cover:
          "https://cdn.mos.cms.futurecdn.net/VzUqgr8pfbNcfXrpzeVBPE.jpg",
      },
      {
        title: "Personal Notes API",
        stack: ["Rails", "Postgres"],
        repo: "https://github.com/sean-code/scholathon-notes-backend",
        cover:
          "https://cdn.shopify.com/s/files/1/1832/9339/files/thankyou_grande.jpg?v=1535231698",
      },
      {
        title: "French Community",
        stack: ["React", "EmailJS"],
        repo: "https://github.com/sean-code/french-community",
        cover:
          "https://upload.wikimedia.org/wikipedia/commons/0/09/Standard_of_the_French_Community.svg",
      },
      {
        title: "Marvel Stars UI",
        stack: ["JS", "SASS", "HTML"],
        repo: "https://github.com/sean-code/Marvel-UI/",
        cover:
          "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/CCC3F8712F781DC1ECDDC406924EF0569A30DB0F0BF628CA9EAF60B97C9ABC4B/compose?aspectRatio=1.78&format=webp&width=1600",
      },
      {
        title: "Cinema Tickets API",
        stack: ["Rails", "Sinatra"],
        repo: "https://github.com/sean-code/Theater",
        cover:
          "https://i.pinimg.com/736x/48/b0/cb/48b0cbc8995d8a1f945c8762e7943e7a.jpg",
      },
    ],
    []
  );

  const [open, setOpen] = useState(false);

  // Helper: detect mobile at click-time
  const isMobile = () =>
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(max-width: 640px)").matches;

  const handleViewMore = () => {
    if (isMobile()) {
      // mobile → go to GitHub repos
      window.open("https://github.com/sean-code?tab=repositories", "_blank", "noopener,noreferrer");
    } else {
      // tablet/desktop → open modal
      setOpen(true);
    }
  };

  return (
    <section className="projects" id="projects">
      <Container>
        <header className="projects-head">
          <h2 className="projects-title">Projects</h2>
          <p className="projects-sub">
            Select work that shows research-grade thinking and production engineering.
          </p>
        </header>

        <Row className="g-4 proj-grid">
          {FEATURED.map((p, i) => (
            <Col key={i} xs="12" md="6" lg="4">
              <ProjectCard {...p} />
            </Col>
          ))}
        </Row>

        <div className="projects-foot">
          <button
            className="btn-ghost"
            onClick={handleViewMore}
            aria-haspopup={!isMobile() ? "dialog" : undefined}
            aria-controls={!isMobile() ? "more-projects" : undefined}
            aria-expanded={!isMobile() ? open : undefined}
          >
            View More Projects
          </button>
        </div>
      </Container>

      {/* Modal is still mounted; we just never open it on mobile */}
      <ProjectsModal open={open} onClose={() => setOpen(false)} items={MORE} />
    </section>
  );
}
