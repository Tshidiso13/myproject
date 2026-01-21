// src/components/HeroSection.tsx
import { Link } from "react-router-dom";
import HeroImg from "../assets/hero-image.jpg";
import HeroBg from "../assets/hero-bg.jpg"; // <-- BACKGROUND IMAGE

const PRIMARY = "#13489B";
const SECONDARY = "#8BFFF0";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] pt-[72px] overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HeroBg})`,
        }}
      />

      {/* DARK GRADIENT OVERLAY (for readability) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />

      {/* COLOR ACCENTS */}
      <div
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-40"
        style={{ backgroundColor: SECONDARY }}
      />
      <div
        className="absolute top-40 -right-24 h-72 w-72 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: PRIMARY }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* HERO GRID */}
        <div className="grid items-center gap-10 lg:grid-cols-2 py-12 lg:py-16">
          {/* LEFT */}
          <div>
            <p
              className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium"
              style={{
                borderColor: "rgba(139,255,240,0.5)",
                color: SECONDARY,
                backgroundColor: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
              }}
            >
              Frontend Developer • South Africa
            </p>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              We Build Modern Websites That Help Businesses Get Customers
            </h1>

            <p className="mt-5 text-base sm:text-lg text-white/80 max-w-xl">
              Fast, mobile-first websites designed to convert visitors into leads.
              <span className="block">Based in South Africa.</span>
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-2xl px-6 py-3 text-sm sm:text-base font-semibold shadow-lg transition hover:scale-[1.03]"
                style={{
                  backgroundColor: PRIMARY,
                  color: "white",
                }}
              >
                Get a Quote
              </Link>

              <Link
                to="/work"
                className="rounded-2xl px-6 py-3 text-sm sm:text-base font-semibold transition hover:scale-[1.03] border"
                style={{
                  borderColor: "rgba(255,255,255,0.45)",
                  color: "white",
                  backgroundColor: "rgba(255,255,255,0.18)",
                  backdropFilter: "blur(12px)",
                }}
              >
                View Work
              </Link>
            </div>
          </div>

          {/* RIGHT (Hero image / laptop mockup) */}
          <div className="relative">
            <div className="rounded-3xl border bg-white/30 backdrop-blur-xl shadow-2xl p-4 sm:p-6">
              <img
                src={HeroImg}
                alt="Laptop mockup showcasing website"
                className="w-full h-auto rounded-2xl object-cover"
                draggable={false}
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 left-6 rounded-2xl px-4 py-3 text-sm font-semibold shadow-lg border bg-white/70 backdrop-blur-xl text-slate-900">
              High-converting UI • Fast load times
            </div>
          </div>
        </div>

        {/* TRUST STRIP */}
        <div className="pb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              "✓ Fast Delivery",
              "✓ Mobile First",
              "✓ SEO Ready",
              "✓ WhatsApp Integration",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border bg-white/20 backdrop-blur-xl px-4 py-3 text-sm font-medium text-white shadow-sm"
                style={{ borderColor: "rgba(255,255,255,0.35)" }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
