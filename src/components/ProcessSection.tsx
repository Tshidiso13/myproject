// src/components/ProcessSection.tsx
import { Search, PencilRuler, Code2, Rocket } from "lucide-react";
import ProcessBg from "../assets/process-bg.png"; // <-- change filename if needed

const PRIMARY = "#13489B";
const SECONDARY = "#8BFFF0";

type Step = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    title: "Discovery",
    description:
      "We clarify your goals, audience, and what success looks like—so the website is built with purpose.",
    icon: <Search className="h-5 w-5" />,
  },
  {
    title: "Design",
    description:
      "We design a clean, modern layout with strong structure and clear calls-to-action for conversion.",
    icon: <PencilRuler className="h-5 w-5" />,
  },
  {
    title: "Development",
    description:
      "We build a fast, responsive website with smooth UI, optimized performance, and solid SEO foundations.",
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    title: "Launch",
    description:
      "We go live confidently—tested on devices, polished, and ready to start bringing you enquiries.",
    icon: <Rocket className="h-5 w-5" />,
  },
];

const ProcessSection = () => {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* BG Image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${ProcessBg})` }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/45 to-black/30" />

      {/* Soft accents */}
      <div
        className="absolute -top-24 left-0 h-72 w-72 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: SECONDARY }}
      />
      <div
        className="absolute bottom-0 right-0 h-72 w-72 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: PRIMARY }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl">
          <p
            className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium"
            style={{
              borderColor: "rgba(139,255,240,0.55)",
              color: SECONDARY,
              backgroundColor: "rgba(255,255,255,0.10)",
              backdropFilter: "blur(10px)",
            }}
          >
            How We Work
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white">
            Process
          </h2>

          <p className="mt-3 text-white/80 text-base sm:text-lg">
            A simple, professional workflow—so your website gets built faster,
            looks premium, and launches with confidence.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="group rounded-3xl border bg-white/12 backdrop-blur-xl shadow-lg p-6 transition hover:-translate-y-1"
              style={{ borderColor: "rgba(255,255,255,0.25)" }}
            >
              {/* Top row */}
              <div className="flex items-center justify-between">
                <div
                  className="h-11 w-11 rounded-2xl flex items-center justify-center border"
                  style={{
                    borderColor: "rgba(255,255,255,0.25)",
                    backgroundColor: "rgba(255,255,255,0.10)",
                    color: SECONDARY,
                  }}
                >
                  {step.icon}
                </div>

                <span
                  className="text-xs font-bold px-3 py-1 rounded-full border"
                  style={{
                    borderColor: "rgba(255,255,255,0.25)",
                    color: "white",
                    backgroundColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  Step {i + 1}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-extrabold text-white">
                {step.title}
              </h3>

              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                {step.description}
              </p>

              {/* Bottom glow line */}
              <div
                className="mt-6 h-[2px] w-full rounded-full opacity-70"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(139,255,240,0.0), rgba(139,255,240,0.55), rgba(19,72,155,0.55), rgba(139,255,240,0.0))",
                }}
              />
            </div>
          ))}
        </div>

        {/* Optional connector line for large screens */}
        <div className="hidden lg:block mt-8">
          <div className="h-[1px] w-full opacity-30 bg-white/50" />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
