// src/pages/WorkPage.tsx
import React, { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  ArrowRight,
  Code2,
  Globe,
  Layers,
  Sparkles,
} from "lucide-react";
import CTA from "../components/CTA";

// ✅ Replace these with YOUR real asset filenames
import WorkSecurityImg from "../assets/security.png";
import WorkCleaningImg from "../assets/cleaning.png";
import WorkLogisticsImg from "../assets/logistics.png";
import WorkConstructionImg from "../assets/construction.png";
import Footer from "../components/Footer";
import CompanyLogoMarquee from "../components/CompanyLogoMarquee";

const PRIMARY = "#13489B";
const SECONDARY = "#8BFFF0";

type Industry = "Security" | "Cleaning" | "Logistics" | "Construction" | "E-Commerce";

type Project = {
  name: string;
  industry: Industry;
  category: "Business Website" | "Landing Page" | "Redesign" | "E-Commerce";
  tech: string[];
  image: string;
  liveUrl: string;
  highlights: string[];
};

const projects: Project[] = [
  {
    name: "Security Company Website",
    industry: "Security",
    category: "Business Website",
    tech: ["React", "Vite", "Tailwind CSS"],
    image: WorkSecurityImg,
    liveUrl: "https://your-security-demo.vercel.app/",
    highlights: [
      "Trust-first layout with clear service sections",
      "Fast, mobile-first UI with WhatsApp enquiry flow",
      "Clean structure for SEO + easy navigation",
    ],
  },
  {
    name: "Cleaning Services Website",
    industry: "Cleaning",
    category: "Business Website",
    tech: ["React", "Tailwind CSS", "Responsive UI"],
    image: WorkCleaningImg,
    liveUrl: "https://your-cleaning-demo.vercel.app/",
    highlights: [
      "Conversion-focused hero + quote form",
      "Service cards + FAQs for common questions",
      "Designed to feel premium and local",
    ],
  },
  {
    name: "Logistics & Transport Website",
    industry: "Logistics",
    category: "Landing Page",
    tech: ["React", "Tailwind CSS", "Vercel"],
    image: WorkLogisticsImg,
    liveUrl: "https://your-logistics-demo.vercel.app/",
    highlights: [
      "Strong CTA placement and clean information hierarchy",
      "Fleet/solutions layout built for B2B trust",
      "Fast loading and mobile-friendly sections",
    ],
  },
  {
    name: "Construction Company Website",
    industry: "Construction",
    category: "Redesign",
    tech: ["React", "Tailwind CSS", "UI/UX"],
    image: WorkConstructionImg,
    liveUrl: "https://your-construction-demo.vercel.app/",
    highlights: [
      "Modern redesign with better project presentation",
      "Improved flow: services → proof → contact",
      "Clean visual rhythm with bold headings",
    ],
  },
];

type TiltStyle = {
  transform: string;
  glareOpacity: number;
  glowOpacity: number;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

/**
 * Lightweight 3D hover tilt + glare (no libs)
 * - Mouse movement tilts the card
 * - Soft glare follows cursor
 * - Subtle glow amplifies on hover
 */
function useTilt(maxTilt = 10) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<TiltStyle>({
    transform: "perspective(1100px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
    glareOpacity: 0,
    glowOpacity: 0,
  });
  const raf = useRef<number | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1

    const rx = clamp((0.5 - py) * (maxTilt * 2), -maxTilt, maxTilt);
    const ry = clamp((px - 0.5) * (maxTilt * 2), -maxTilt, maxTilt);

    const glare = clamp(0.12 + Math.abs(rx + ry) / (maxTilt * 14), 0.12, 0.32);
    const glow = clamp(0.10 + Math.abs(rx + ry) / (maxTilt * 10), 0.10, 0.35);

    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      setStyle({
        transform: `perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0px)`,
        glareOpacity: glare,
        glowOpacity: glow,
      });
    });
  };

  const onEnter = () => {
    setStyle((s) => ({
      ...s,
      glareOpacity: 0.18,
      glowOpacity: 0.22,
      transform: "perspective(1100px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
    }));
  };

  const onLeave = () => {
    if (raf.current) cancelAnimationFrame(raf.current);
    setStyle({
      transform: "perspective(1100px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
      glareOpacity: 0,
      glowOpacity: 0,
    });
  };

  return { ref, style, onMove, onEnter, onLeave };
}

function Badge({
  children,
  tone = "glass",
}: {
  children: React.ReactNode;
  tone?: "glass" | "accent";
}) {
  return (
    <span
      className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold"
      style={{
        borderColor:
          tone === "accent" ? "rgba(19,72,155,0.25)" : "rgba(255,255,255,0.35)",
        backgroundColor:
          tone === "accent" ? "rgba(139,255,240,0.18)" : "rgba(255,255,255,0.12)",
        color: tone === "accent" ? PRIMARY : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
      }}
    >
      {children}
    </span>
  );
}

function TechChip({ text }: { text: string }) {
  return (
    <span
      className="rounded-full border px-3 py-1 text-[11px] font-semibold"
      style={{
        borderColor: "rgba(19,72,155,0.18)",
        backgroundColor: "rgba(255,255,255,0.55)",
        color: "#0f172a",
      }}
    >
      {text}
    </span>
  );
}

function WorkCard({ project }: { project: Project }) {
  const { ref, style, onMove, onEnter, onLeave } = useTilt(10);

  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="relative rounded-3xl border overflow-hidden shadow-xl"
      style={{
        borderColor: "rgba(255,255,255,0.45)",
        transform: style.transform,
        transformStyle: "preserve-3d",
        transition: "transform 220ms ease",
        background: "rgba(255,255,255,0.18)",
        backdropFilter: "blur(14px)",
      }}
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute -inset-10 rounded-[40px]"
        style={{
          opacity: style.glowOpacity,
          background: `radial-gradient(circle at 20% 10%, ${SECONDARY}55, transparent 55%), radial-gradient(circle at 85% 40%, ${PRIMARY}55, transparent 55%)`,
          filter: "blur(22px)",
          transform: "translateZ(-1px)",
        }}
      />

      {/* Image area */}
      <div className="relative h-56 sm:h-64 lg:h-60 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover"
          draggable={false}
          style={{
            transform: "translateZ(18px) scale(1.03)",
            transformStyle: "preserve-3d",
          }}
        />

        {/* Dark gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

        {/* Top badges */}
        <div
          className="absolute top-4 left-4 flex flex-wrap gap-2"
          style={{ transform: "translateZ(28px)" }}
        >
          <Badge>{project.industry}</Badge>
          <Badge>{project.category}</Badge>
        </div>

        {/* Glare (follows cursor slightly via opacity only; simple + clean) */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: style.glareOpacity,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.45), rgba(255,255,255,0.08), rgba(255,255,255,0.0))",
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3
            className="text-xl font-extrabold text-slate-900"
            style={{ transform: "translateZ(22px)" }}
          >
            {project.name}
          </h3>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition hover:scale-[1.03] active:scale-[0.98]"
            style={{
              backgroundColor: PRIMARY,
              color: "white",
              transform: "translateZ(26px)",
            }}
          >
            View Live <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Tech */}
        <div className="mt-4 flex flex-wrap gap-2" style={{ transform: "translateZ(18px)" }}>
          {project.tech.map((t) => (
            <TechChip key={t} text={t} />
          ))}
        </div>

        {/* Highlights */}
        <ul className="mt-5 space-y-3" style={{ transform: "translateZ(16px)" }}>
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm text-slate-700">
              <span
                className="mt-[7px] h-2.5 w-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: PRIMARY }}
              />
              <span className="leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>

        {/* Bottom accent line */}
        <div
          className="mt-6 h-[2px] w-full rounded-full opacity-60"
          style={{
            background:
              "linear-gradient(90deg, rgba(19,72,155,0.0), rgba(19,72,155,0.45), rgba(139,255,240,0.55), rgba(19,72,155,0.0))",
          }}
        />
      </div>
    </article>
  );
}

const Work = () => {
  const [filter, setFilter] = useState<"All" | Project["category"]>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative pt-[96px] pb-14 overflow-hidden">
        {/* Accents */}
        <div
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-35"
          style={{ backgroundColor: SECONDARY }}
        />
        <div
          className="absolute top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: PRIMARY }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex items-start justify-between gap-8 flex-wrap">
            <div className="max-w-2xl">
              <p
                className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium"
                style={{
                  borderColor: "rgba(19,72,155,0.25)",
                  color: PRIMARY,
                  backgroundColor: "rgba(139,255,240,0.18)",
                }}
              >
                Selected Work
              </p>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
                Modern projects built to look premium and convert
              </h1>

              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                A curated set of demo websites for service-based businesses (Security,
                Cleaning, Logistics, Construction). Built with clean UI, fast loading, and
                strong structure.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="rounded-2xl px-6 py-3 text-sm sm:text-base font-semibold border transition hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    borderColor: "rgba(19,72,155,0.35)",
                    color: PRIMARY,
                    backgroundColor: "rgba(255,255,255,0.6)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  View Services <ArrowRight className="inline-block ml-2 h-4 w-4" />
                </Link>

                <Link
                  to="/contact"
                  className="rounded-2xl px-6 py-3 text-sm sm:text-base font-semibold transition hover:scale-[1.02] active:scale-[0.98]"
                  style={{ backgroundColor: PRIMARY, color: "white" }}
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Mini “stats” block */}
            <div className="grid gap-3 min-w-[260px]">
              {[
                { icon: <Sparkles className="h-5 w-5" />, label: "Premium UI Feel" },
                { icon: <Layers className="h-5 w-5" />, label: "Clean Structure" },
                { icon: <Globe className="h-5 w-5" />, label: "Mobile-First" },
                { icon: <Code2 className="h-5 w-5" />, label: "Modern Stack" },
              ].map((x) => (
                <div
                  key={x.label}
                  className="rounded-2xl border bg-white/35 backdrop-blur-xl px-4 py-3 shadow-sm"
                  style={{ borderColor: "rgba(255,255,255,0.5)" }}
                >
                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                    <span style={{ color: PRIMARY }}>{x.icon}</span>
                    {x.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filters (simple + pro) */}
          <div className="mt-10 flex flex-wrap gap-3">
            {(["All", "Business Website", "Landing Page", "Redesign", "E-Commerce"] as const).map(
              (t) => {
                const active = filter === t;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFilter(t)}
                    className="rounded-full px-4 py-2 text-sm font-semibold border transition"
                    style={{
                      borderColor: active ? PRIMARY : "rgba(19,72,155,0.20)",
                      backgroundColor: active ? "rgba(19,72,155,0.10)" : "rgba(255,255,255,0.55)",
                      color: active ? PRIMARY : "#0f172a",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {t}
                  </button>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-7 md:grid-cols-2">
            {filtered.map((p) => (
              <WorkCard key={p.name} project={p} />
            ))}
          </div>
          <CompanyLogoMarquee />

          {/* Extra credibility strip */}
          <div className="mt-12 rounded-3xl border bg-white/30 backdrop-blur-xl shadow-lg p-7 sm:p-8"
               style={{ borderColor: "rgba(255,255,255,0.5)" }}>
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Want a website like these?
                </h2>
                <p className="mt-2 text-slate-600">
                  I can build you a modern site with a clean layout, fast load times, WhatsApp
                  integration, and a strong conversion flow.
                </p>
              </div>

              <Link
                to="/contact"
                className="rounded-2xl px-6 py-3 text-sm font-semibold transition hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: PRIMARY, color: "white" }}
              >
                Start a Project <ArrowRight className="inline-block ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
      <Footer />
    </main>
  );
};

export default Work;
