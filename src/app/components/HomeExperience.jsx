"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChartNoAxesCombined,
  Code2,
  Layers3,
  MapPin,
  Megaphone,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { useCTAModal } from "../hooks/Usectamodal";

const PersistentGlobe = dynamic(() => import("./PersistentGlobe"), {
  ssr: false,
  loading: () => <div className="globe-loading" aria-hidden="true" />,
});

const mobileMediaQuery = "(max-width: 900px)";

function subscribeToMobile(notify) {
  const media = window.matchMedia(mobileMediaQuery);
  media.addEventListener("change", notify);
  return () => media.removeEventListener("change", notify);
}

function getIsMobile() {
  return window.matchMedia(mobileMediaQuery).matches;
}

const cities = [
  { id: "agra", name: "Agra", country: "India", latitude: 27.18, longitude: 78.01 },
  { id: "delhi", name: "Delhi", country: "India", latitude: 28.61, longitude: 77.21 },
  { id: "mumbai", name: "Mumbai", country: "India", latitude: 19.08, longitude: 72.88 },
  { id: "london", name: "London", country: "United Kingdom", latitude: 51.51, longitude: -0.12 },
  { id: "paris", name: "Paris", country: "France", latitude: 48.86, longitude: 2.35 },
  { id: "dubai", name: "Dubai", country: "United Arab Emirates", latitude: 25.2, longitude: 55.27 },
  { id: "new-york", name: "New York", country: "United States", latitude: 40.71, longitude: -74.01 },
  { id: "singapore", name: "Singapore", country: "Singapore", latitude: 1.35, longitude: 103.82 },
  { id: "tokyo", name: "Tokyo", country: "Japan", latitude: 35.68, longitude: 139.69 },
  { id: "sydney", name: "Sydney", country: "Australia", latitude: -33.87, longitude: 151.21 },
];

const services = [
  {
    number: "01",
    title: "Growth marketing",
    description:
      "Connect paid campaigns, SEO, social media and lead generation to a clearer view of what is moving the business forward.",
    link: "/services/growth-marketing",
    label: "Explore growth marketing",
    Icon: ChartNoAxesCombined,
  },
  {
    number: "02",
    title: "Creative production",
    description:
      "Create brand systems, social content, video and campaign assets shaped for the channels your audience uses.",
    link: "/services/creative-services",
    label: "Explore creative production",
    Icon: Megaphone,
  },
  {
    number: "03",
    title: "Technology & automation",
    description:
      "Build websites, web apps and connected workflows that make day-to-day operations easier to scale.",
    link: "/services/technology",
    label: "Explore technology and automation",
    Icon: Code2,
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "Start with your goals, audience, current setup and the constraints that matter.",
  },
  {
    number: "02",
    title: "Shape the plan",
    text: "Agree on the right scope, priorities, deliverables and measures of progress.",
  },
  {
    number: "03",
    title: "Make and launch",
    text: "Create the campaign, content or technology, then test it before it goes live.",
  },
  {
    number: "04",
    title: "Learn and improve",
    text: "Use what the work reveals to refine the next step and keep the effort focused.",
  },
];

const industries = [
  "E-commerce",
  "Technology",
  "Healthcare",
  "Real estate",
  "Education",
  "Hospitality",
  "Professional services",
  "Retail",
];

const faqs = [
  {
    question: "What does Prioritize Labs help businesses with?",
    answer:
      "Prioritize Labs provides growth marketing, creative production, and technology and automation services. The right mix depends on your goals and the work already in place.",
  },
  {
    question: "How do you estimate a project?",
    answer:
      "Scope and pricing depend on the deliverables, complexity and engagement model. Share what you are trying to achieve and the team can discuss an appropriate scope before work begins.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Timing varies with the scope, required inputs and review process. A proposed timeline can be discussed once the project requirements are understood.",
  },
  {
    question: "How do I get started?",
    answer:
      "Use the project enquiry form or contact the team directly at info@prioritizelabs.com. Include your goals and the services you are considering, if known.",
  },
];

function Eyebrow({ children }) {
  return (
    <p className="home-eyebrow">
      <span aria-hidden="true" />
      {children}
    </p>
  );
}

function ProjectTile({ href, image, alt, category, title, imageClass = "" }) {
  return (
    <Link href={href} className={`home-project-tile ${imageClass}`}>
      <div className="home-project-image">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 760px) 90vw, 40vw"
          className="object-cover"
        />
        <span className="home-project-open" aria-hidden="true">
          <ArrowUpRight size={20} />
        </span>
      </div>
      <div className="home-project-caption">
        <div>
          <p>{category}</p>
          <h3>{title}</h3>
        </div>
        <MoveUpRight aria-hidden="true" size={18} />
      </div>
    </Link>
  );
}

export default function HomeExperience() {
  const { openModal } = useCTAModal();
  const isMobile = useSyncExternalStore(subscribeToMobile, getIsMobile, () => false);
  const [selectedCity, setSelectedCity] = useState("agra");
  const [globePaused, setGlobePaused] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const activeCity = cities.find((city) => city.id === selectedCity) ?? cities[0];
  const notifySceneReady = useCallback(() => setSceneReady(true), []);
  const showPreloader = !isMobile && preloaderVisible;

  useEffect(() => {
    if (isMobile || !sceneReady || !preloaderVisible) return undefined;
    const timeout = window.setTimeout(() => setPreloaderVisible(false), 380);
    return () => window.clearTimeout(timeout);
  }, [isMobile, preloaderVisible, sceneReady]);

  useEffect(() => {
    if (!showPreloader) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showPreloader]);

  return (
    <>
      {!isMobile && (
        <div
          className={`home-preloader${preloaderVisible ? "" : " is-exiting"}`}
          role="status"
          aria-label="Loading Prioritize Labs homepage"
          aria-hidden={!showPreloader}
        >
          <div className="home-preloader-globe" aria-hidden="true">
            <span className="home-preloader-land home-preloader-land-one" />
            <span className="home-preloader-land home-preloader-land-two" />
            <span className="home-preloader-latitude" />
            <span className="home-preloader-longitude" />
          </div>
          <div className="home-preloader-copy" aria-hidden="true">
            <span>PRIORITIZE LABS</span>
            <div className="home-loader-track">
              <span />
            </div>
          </div>
        </div>
      )}
      <main id="home-experience" className="home-experience" inert={showPreloader}>
        <div
          className={`home-globe-layer${sceneReady && !isMobile ? " is-ready" : ""}`}
          aria-hidden="true"
        >
          {!isMobile && (
            <PersistentGlobe
              cities={cities}
              selectedCity={selectedCity}
              paused={globePaused}
              onReady={notifySceneReady}
            />
          )}
        </div>

      <section className="home-hero home-section" aria-labelledby="home-title">
        <div className="home-shell home-hero-grid">
          <div className="home-hero-copy">
            <Eyebrow>Growth marketing · Creative · Technology</Eyebrow>
            <h1 id="home-title">
              Growth, built around
              <span> what matters.</span>
            </h1>
            <p className="home-hero-intro">
              Prioritize Labs helps ambitious businesses connect marketing,
              creative production and technology to move important work forward.
            </p>
            <div className="home-hero-actions">
              <button
                type="button"
                className="home-button home-button-primary"
                onClick={() => openModal("Homepage hero")}
              >
                Discuss a project <ArrowRight size={17} aria-hidden="true" />
              </button>
              <Link href="/portfolio" className="home-button home-button-quiet">
                Explore our work <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <div className="home-hero-note">
              <MapPin size={15} aria-hidden="true" />
              <span>Based in Agra, India · Working with businesses across markets</span>
            </div>
          </div>

          <div
            className="home-globe-space"
            role="group"
            aria-label="Interactive globe visualization. City markers and animated routes are illustrative, not clients or live connections."
          >
            {/* <div className="home-globe-meta">
              <div className="home-globe-caption">
                <span className="home-live-dot" aria-hidden="true" />
                <span>Illustrative world view</span>
              </div>
              <p className="home-globe-footnote" aria-live="polite">
                {activeCity.name}, {activeCity.country} · Map points and routes
                are illustrative, not clients or live connections.
              </p>
            </div> */}
            <div
              className="home-city-picker"
              role="group"
              aria-label="Choose a map point or animation setting"
            >
              {cities.map((city) => (
                <button
                  type="button"
                  key={city.id}
                  aria-pressed={selectedCity === city.id}
                  onClick={() => setSelectedCity(city.id)}
                >
                  {city.name}
                </button>
              ))}
              <button
                type="button"
                aria-label={globePaused ? "Resume globe animation" : "Pause globe animation"}
                aria-pressed={globePaused}
                onClick={() => setGlobePaused((paused) => !paused)}
              >
                {globePaused ? "Resume motion" : "Pause motion"}
              </button>
            </div>
          </div>

          <a className="home-scroll-cue" href="#services">
            <ArrowDown size={15} aria-hidden="true" />
            Scroll to explore
          </a>
        </div>
      </section>

      <section
        className="home-services home-section"
        id="services"
        aria-labelledby="services-title"
      >
        <div className="home-shell">
          <div className="home-section-heading">
            <div>
              <Eyebrow>What we do</Eyebrow>
              <h2 id="services-title">
                The right work, <em>in the right order.</em>
              </h2>
            </div>
            <p>
              Bring a specific challenge or a broader growth goal. We help
              identify the work that can make the most useful difference.
            </p>
          </div>

          <div className="home-service-list">
            {services.map(({ number, title, description, link, label, Icon }) => (
              <article className="home-service-row" key={number}>
                <span className="home-service-number">{number}</span>
                <div className="home-service-name">
                  <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
                  <h3>{title}</h3>
                </div>
                <p>{description}</p>
                <Link href={link} aria-label={label}>
                  <ArrowUpRight size={20} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
          <div className="home-service-footer">
            <Link href="/services">
              See all services <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="home-approach home-section"
        id="approach"
        aria-labelledby="approach-title"
      >
        <div className="home-shell home-approach-grid">
          <div className="home-approach-lead">
            <Eyebrow>A connected approach</Eyebrow>
            <h2 id="approach-title">
              Better work starts with <em>better priorities.</em>
            </h2>
            <p>
              Marketing, creative and technology work best when they support a
              shared business goal. We bring those capabilities together around
              the problem you need to solve—not a preset package.
            </p>
            <button
              type="button"
              className="home-text-link"
              onClick={() => openModal("Homepage approach")}
            >
              Tell us what you are working on
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
          <div className="home-approach-notes">
            <div>
              <span>01</span>
              <div>
                <h3>Start with context</h3>
                <p>Understand the audience, goals and current constraints.</p>
              </div>
            </div>
            <div>
              <span>02</span>
              <div>
                <h3>Connect the disciplines</h3>
                <p>Coordinate channels, content and systems instead of treating them in isolation.</p>
              </div>
            </div>
            <div>
              <span>03</span>
              <div>
                <h3>Keep learning</h3>
                <p>Review what is working and use it to guide the next decision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="home-process home-section"
        id="process"
        aria-labelledby="process-title"
      >
        <div className="home-shell">
          <div className="home-section-heading">
            <div>
              <Eyebrow>A considered process</Eyebrow>
              <h2 id="process-title">
                From first question to <em>next iteration.</em>
              </h2>
            </div>
            <p>
              The work is scoped around your needs. These are the checkpoints
              that keep an engagement clear and collaborative.
            </p>
          </div>
          <ol className="home-process-list">
            {process.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="home-impact home-section"
        id="impact"
        aria-labelledby="impact-title"
      >
        <div className="home-shell home-impact-content">
          <div className="home-section-heading">
            <div>
              <Eyebrow>Connected work, meaningful progress</Eyebrow>
              <h2 id="impact-title">
                Make the work add up <em>to something useful.</em>
              </h2>
            </div>
            <p>
              A clearer view of the work comes from bringing strategy,
              creativity and technology together around the same goal.
            </p>
          </div>
          <div className="home-intro-grid">
            <p>One partner across the growth stack.</p>
            <span>Strategy that sets direction</span>
            <span>Creative that earns attention</span>
            <span>Technology that removes friction</span>
          </div>
          <p className="home-impact-note">
            Every business is different; this illustration makes no specific
            performance or client-outcome claims.
          </p>
        </div>
      </section>

      <section
        className="home-industries home-section"
        id="industries"
        aria-labelledby="industries-title"
      >
        <div className="home-shell home-industries-grid">
          <div>
            <Eyebrow>Who we can support</Eyebrow>
            <h2 id="industries-title">
              Flexible for different <em>kinds of business.</em>
            </h2>
            <p>
              The right solution depends on your audience and context. Our
              capabilities can support work across these sectors.
            </p>
          </div>
          <ul>
            {industries.map((industry) => (
              <li key={industry}>{industry}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="home-work home-section"
        id="work"
        aria-labelledby="work-title"
      >
        <div className="home-shell">
          <div className="home-section-heading">
            <div>
              <Eyebrow>Selected creative work</Eyebrow>
              <h2 id="work-title">
                Made to move from <em>idea to experience.</em>
              </h2>
            </div>
            <Link href="/portfolio" className="home-text-link">
              Browse the portfolio <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="home-project-grid">
            <ProjectTile
              href="/portfolio#social-posts"
              image="/social-posts/1.png"
              alt="Social media creative from the Prioritize Labs portfolio"
              category="Social content"
              title="Campaign-ready creative"
              imageClass="home-project-tall"
            />
            <ProjectTile
              href="/portfolio#thumbnails"
              image="/thumbnails/4.png"
              alt="Video thumbnail creative from the Prioritize Labs portfolio"
              category="Video creative"
              title="A strong first frame"
            />
            <Link href="/portfolio" className="home-project-document">
              <div className="home-document-art" aria-hidden="true">
                <Layers3 size={35} strokeWidth={1.2} />
                <span />
                <span />
                <span />
              </div>
              <div className="home-project-caption">
                <div>
                  <p>Website UI</p>
                  <h3>Design documents</h3>
                </div>
                <MoveUpRight aria-hidden="true" size={18} />
              </div>
            </Link>
          </div>
          <p className="home-work-note">
            Browse the portfolio for social creative, video work and UI design
            documents. No client outcomes are implied here.
          </p>
        </div>
      </section>

      <section
        className="home-faq home-section"
        id="faq"
        aria-labelledby="faq-title"
      >
        <div className="home-shell home-faq-grid">
          <div>
            <Eyebrow>Good to know</Eyebrow>
            <h2 id="faq-title">
              A few useful <em>starting points.</em>
            </h2>
            <p>
              Every engagement is different. If your question is not answered
              here, share it with the team.
            </p>
            <Link href="/contact-us" className="home-text-link">
              Contact Prioritize Labs <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="home-faq-list">
            {faqs.map(({ question, answer }) => (
              <details key={question}>
                <summary>
                  {question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="home-final-cta home-section" aria-labelledby="home-cta-title">
        <div className="home-shell home-final-cta-inner">
          <div className="home-final-orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <Eyebrow>Your next step</Eyebrow>
          <h2 id="home-cta-title">
            Have something <em>worth building?</em>
          </h2>
          <p>
            Tell us what you want to change, grow or make. We can start with a
            conversation about the work.
          </p>
          <button
            type="button"
            className="home-button home-button-primary"
            onClick={() => openModal("Homepage final CTA")}
          >
            Start a conversation <ArrowRight size={17} aria-hidden="true" />
          </button>
          <Link href="mailto:info@prioritizelabs.com" className="home-email-link">
            Or email info@prioritizelabs.com
          </Link>
          <span className="home-cta-mark" aria-hidden="true">
            <Sparkles size={17} />
          </span>
        </div>
      </section>
      </main>
    </>
  );
}
