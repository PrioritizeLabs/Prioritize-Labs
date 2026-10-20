"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import CTAButton from "../../components/CTAButton";

const SoftwareJourneyScene = dynamic(() => import("./SoftwareJourneyScene"), {
  ssr: false,
  loading: () => <div className="software-scene-loading" aria-hidden="true" />,
});

const chapters = [
  {
    number: "00",
    label: "The idea",
    eyebrow: "Software development",
    title: "Software Development,",
    emphasis: "Engineered for Growth.",
    description:
      "From ambitious ideas to scalable digital products, we design, develop, and deliver software that solves real business challenges.",
    cta: "Start a Project",
    scene: "A luminous digital core takes shape from a field of possibility.",
  },
  {
    number: "01",
    label: "Discovery",
    eyebrow: "01 / Discovery & planning",
    title: "Every Great Product Starts",
    emphasis: "With Understanding.",
    description:
      "We analyze business objectives, user needs, requirements, and technical feasibility to create a clear development roadmap.",
    scene: "The idea opens into connected requirements and shared priorities.",
  },
  {
    number: "02",
    label: "Design",
    eyebrow: "02 / UI/UX design & architecture",
    title: "Designed for People.",
    emphasis: "Architected for Scale.",
    description:
      "We create intuitive interfaces, seamless user journeys, and reliable system architectures that balance usability with technical performance.",
    scene: "User journeys become interface frames and a layered system architecture.",
  },
  {
    number: "03",
    label: "Development",
    eyebrow: "03 / Development & integration",
    title: "Where Ideas Become",
    emphasis: "Functional Products.",
    description:
      "Our developers build responsive applications, scalable backends, secure APIs, and seamless integrations using modern engineering practices.",
    scene: "Interfaces and services assemble into an integrated software system.",
  },
  {
    number: "04",
    label: "Quality",
    eyebrow: "04 / Testing & quality assurance",
    title: "Quality Is Built Into",
    emphasis: "Every Release.",
    description:
      "We validate functionality, performance, usability, and security through systematic testing and continuous refinement.",
    scene: "A measured scan moves across the product, checking each connection.",
  },
  {
    number: "05",
    label: "Launch",
    eyebrow: "05 / Deployment & launch",
    title: "Built. Tested.",
    emphasis: "Ready for the World.",
    description:
      "We configure production environments, streamline deployment, and launch applications with reliability, performance, and maintainability in mind.",
    scene: "Validated modules travel through a release path into cloud infrastructure.",
  },
  {
    number: "06",
    label: "Evolution",
    eyebrow: "06 / Maintenance & evolution",
    title: "Software That Grows",
    emphasis: "With Your Business.",
    description:
      "We provide ongoing improvements, performance optimization, maintenance, and feature enhancements to keep products effective over time.",
    scene: "The live product grows into an adaptable, connected digital ecosystem.",
  },
  {
    number: "07",
    label: "Next",
    eyebrow: "Your next chapter",
    title: "Let’s Build",
    emphasis: "What Comes Next.",
    description:
      "Have a product idea or a business challenge? Let’s turn it into software that delivers measurable value.",
    cta: "Discuss Your Project",
    scene: "A new opening forms from the system, ready for the next idea.",
  },
];

function ChapterCopy({ chapter, index, active }) {
  const Heading = index === 0 ? "h1" : "h2";

  return (
    <article
      className={`software-chapter${active ? " is-active" : ""}`}
      aria-hidden={!active}
      aria-labelledby={`software-chapter-title-${index}`}
    >
      <p className="software-eyebrow">
        <span aria-hidden="true" />
        {chapter.eyebrow}
      </p>
      <Heading
        id={`software-chapter-title-${index}`}
        className="software-chapter-title"
      >
        {chapter.title} <em>{chapter.emphasis}</em>
      </Heading>
      <p className="software-chapter-description">{chapter.description}</p>
      {chapter.cta ? (
        <CTAButton
          source={`Software development: ${index === 0 ? "hero" : "final CTA"}`}
          className="software-cta"
        >
          {chapter.cta}
        </CTAButton>
      ) : (
        <Link
          className="software-chapter-link"
          href="/contact-us"
        >
          Talk through this stage <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      )}
      <p className="software-scene-caption" aria-hidden="true">
        <span>{chapter.number}</span>
        {chapter.scene}
      </p>
    </article>
  );
}

export default function SoftwareDevelopmentExperience() {
  const trackRef = useRef(null);
  const sceneProgress = useRef({ value: 0 });
  const [activeChapter, setActiveChapter] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const updateProgress = useCallback((progress) => {
    const value = Math.max(0, Math.min(progress, 1));
    const nextChapter = Math.min(
      chapters.length - 1,
      Math.floor(value * chapters.length + 0.5),
    );
    setActiveChapter((current) => (current === nextChapter ? current : nextChapter));
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(media.matches);
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    let context;
    let cancelled = false;

    import("gsap").then(({ gsap }) => {
      return import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        if (cancelled || !trackRef.current) return;
        gsap.registerPlugin(ScrollTrigger);
        context = gsap.context(() => {
          const scrollTrigger = {
            trigger: trackRef.current,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
              updateProgress(self.progress);
              if (reducedMotion) {
                sceneProgress.current.value = self.progress * chapters.length;
              }
            },
          };

          if (reducedMotion) {
            ScrollTrigger.create(scrollTrigger);
          } else {
            gsap.to(sceneProgress.current, {
              value: chapters.length,
              ease: "none",
              scrollTrigger: { ...scrollTrigger, scrub: 0.6 },
            });
          }
        }, trackRef);
        ScrollTrigger.refresh();
      });
    });

    return () => {
      cancelled = true;
      context?.revert();
    };
  }, [reducedMotion, updateProgress]);

  return (
    <main className="software-page">
      <section
        className="software-story-track"
        ref={trackRef}
        aria-label="Software development journey"
      >
        <div className="software-story-viewport">
          <div className="software-canvas-layer" aria-hidden="true">
            <SoftwareJourneyScene
              progress={sceneProgress}
              reducedMotion={reducedMotion}
            />
          </div>
          <div className="software-story-grain" aria-hidden="true" />
          <div className="software-story-grid" aria-hidden="true" />
          <div className="software-chapters" aria-live="polite">
            {chapters.map((chapter, index) => (
              <ChapterCopy
                key={chapter.number}
                chapter={chapter}
                index={index}
                active={activeChapter === index}
              />
            ))}
          </div>

          <nav className="software-progress" aria-label="Development stages">
            <p className="software-progress-heading">
              <span>THE PRODUCT JOURNEY</span>
              <span>{String(activeChapter).padStart(2, "0")} / 07</span>
            </p>
            <ol>
              {chapters.map((chapter, index) => (
                <li key={chapter.number}>
                  <a
                    href={`#software-stage-${chapter.number}`}
                    aria-current={activeChapter === index ? "step" : undefined}
                    aria-label={`${chapter.number} ${chapter.label}`}
                    onClick={(event) => {
                      event.preventDefault();
                      const track = trackRef.current;
                      if (!track) return;
                      const target =
                        track.getBoundingClientRect().top +
                        window.scrollY +
                        ((track.offsetHeight - window.innerHeight) * index) /
                          chapters.length;
                      window.scrollTo({
                        top: target,
                        behavior: reducedMotion ? "auto" : "smooth",
                      });
                    }}
                  >
                    <span>{chapter.number}</span>
                  </a>
                </li>
              ))}
            </ol>
            <div className="software-progress-track" aria-hidden="true">
              <span style={{ transform: `scaleX(${(activeChapter + 1) / chapters.length})` }} />
            </div>
          </nav>

          <a
            className="software-scroll-cue"
            href="#software-stage-01"
            onClick={(event) => {
              event.preventDefault();
              const track = trackRef.current;
              if (!track) return;
              window.scrollTo({
                top:
                  track.getBoundingClientRect().top +
                  window.scrollY +
                  (track.offsetHeight - window.innerHeight) / chapters.length,
                behavior: reducedMotion ? "auto" : "smooth",
              });
            }}
          >
            <ArrowDown size={14} aria-hidden="true" />
            Scroll to explore
          </a>
        </div>
        {chapters.map((chapter, index) => (
          <span
            className="software-stage-anchor"
            id={`software-stage-${chapter.number}`}
            key={chapter.number}
            style={{ "--stage-index": index }}
            aria-hidden="true"
          />
        ))}
      </section>
    </main>
  );
}
