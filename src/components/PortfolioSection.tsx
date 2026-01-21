// src/components/PortfolioSection.tsx
import { ExternalLink, ArrowRight } from "lucide-react";

const PRIMARY = "#13489B";
const SECONDARY = "#8BFFF0";

type Project = {
  name: string;
  industry: "Security" | "Cleaning" | "Logistics" | "Construction";
  tech: string[];
  image: string; // import from assets
  liveUrl: string;
};

//
// ✅ Replace these imports with your actual asset filenames
//
import SecurityImg from "../assets/security.png";
import CleaningImg from "../assets/cleaning.png";
import LogisticsImg from "../assets/logistics.png";
import ConstructionImg from "../assets/construction.png";

const projects: Project[] = [
  {
    name: "Security Company Website",
    industry: "Security",
    tech: ["React", "Vite", "Tailwind CSS"],
    image: SecurityImg,
    liveUrl: "https://security-company-seven.vercel.app/",
  },
  {
    name: "Cleaning Services Website",
    industry: "Cleaning",
    tech: ["React", "Tailwind CSS", "Email Form"],
    image: CleaningImg,
    liveUrl: "https://cleaning-compnay.vercel.app/",
  },
  {
    name: "Logistics & Transport Website",
    industry: "Logistics",
    tech: ["React", "Vite", "Tailwind CSS"],
    image: LogisticsImg,
    liveUrl: "https://logistics-company-nine.vercel.app/",
  },
  {
    name: "Construction Company Website",
    industry: "Construction",
    tech: ["React", "Tailwind CSS", "Responsive UI"],
    image: ConstructionImg,
    liveUrl: "https://construction-company-wheat.vercel.app/",
  },
];

const badgeStyles: Record<Project["industry"], { bg: string; text: string }> = {
  Security: { bg: "rgba(19,72,155,0.12)", text: PRIMARY },
  Cleaning: { bg: "rgba(139,255,240,0.18)", text: PRIMARY },
  Logistics: { bg: "rgba(255,255,255,0.18)", text: "#0f172a" },
  Construction: { bg: "rgba(19,72,155,0.10)", text: PRIMARY },
};

const PortfolioSection = () => {
  return (
    <section className="relative py-16 sm:py-20">
      {/* Soft accents */}
      <div
        className="absolute -top-10 right-10 h-64 w-64 rounded-full blur-3xl opacity-25"
        style={{ backgroundColor: SECONDARY }}
      />
      <div
        className="absolute bottom-0 left-0 h-64 w-64 rounded-full blur-3xl opacity-15"
        style={{ backgroundColor: PRIMARY }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-2xl">
            <p
              className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium"
              style={{
                borderColor: "rgba(19,72,155,0.25)",
                color: PRIMARY,
                backgroundColor: "rgba(139,255,240,0.18)",
              }}
            >
              Proof of Work
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
              Selected Work
            </h2>

            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              A few modern, responsive websites I’ve built—focused on clean UI,
              strong structure, and customer conversion.
            </p>
          </div>

          {/* Optional “view more” (keep or remove) */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold transition hover:translate-x-0.5"
            style={{ color: PRIMARY }}
          >
            Need something similar? Let’s talk <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group rounded-3xl border bg-white/40 shadow-lg overflow-hidden transition hover:-translate-y-1"
              style={{ borderColor: "rgba(255,255,255,0.5)" }}
            >
              {/* Image */}
              <div className="relative h-60 sm:h-72 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  draggable={false}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-90" />

                {/* Industry badge */}
                <div
                  className="absolute top-4 left-4 rounded-2xl px-4 py-2 text-xs sm:text-sm font-semibold border"
                  style={{
                    backgroundColor: badgeStyles[p.industry].bg,
                    color: badgeStyles[p.industry].text,
                    borderColor: "rgba(255,255,255,0.45)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {p.industry}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-extrabold text-slate-900">
                  {p.name}
                </h3>

                <p className="mt-3 text-sm font-semibold text-slate-700">
                  Tech used
                </p>

                {/* Tech chips */}
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border px-3 py-1 text-xs font-medium"
                      style={{
                        borderColor: "rgba(19,72,155,0.18)",
                        backgroundColor: "rgba(255,255,255,0.55)",
                        color: "#0f172a",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 flex items-center justify-between">
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      backgroundColor: PRIMARY,
                      color: "white",
                    }}
                  >
                    View Live <ExternalLink className="h-4 w-4" />
                  </a>

                  <span
                    className="text-xs font-semibold opacity-0 translate-x-1 transition group-hover:opacity-100 group-hover:translate-x-0"
                    style={{ color: PRIMARY }}
                  >
                    Open demo
                  </span>
                </div>

                {/* bottom highlight */}
                <div
                  className="mt-6 h-[2px] w-full rounded-full opacity-60"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(19,72,155,0.0), rgba(19,72,155,0.45), rgba(139,255,240,0.55), rgba(19,72,155,0.0))",
                  }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
