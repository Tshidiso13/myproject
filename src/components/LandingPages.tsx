// src/pages/services/LandingPages.tsx
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  Gauge,
  MessageCircle,
  MousePointerClick,
//   Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Timer,
  Zap,
} from "lucide-react";

// ✅ Replace these with your real asset filenames
import HeroImg from "../assets/landing-hero.jpg";
import Preview1 from "../assets/landing-preview-1.png";
import Preview2 from "../assets/landing-preview-2.png";
import BgTexture from "../assets/services-landing.jpg";
import Footer from "./Footer";

const PRIMARY = "#13489B";
const SECONDARY = "#8BFFF0";

const WHATSAPP_NUMBER = "27658207639";
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Tshidiso, I need a Landing Page for ads/campaigns. Please share a quote."
)}`;

type Feature = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const coreFeatures: Feature[] = [
  {
    title: "Conversion-focused structure + strong CTAs",
    desc: "We design the page around one goal—leads. Clear messaging, strong CTA buttons, and a smooth flow that guides visitors to action.",
    icon: <MousePointerClick className="h-5 w-5" />,
  },
  {
    title: "Trust blocks (FAQs, badges, testimonials-ready)",
    desc: "We add credibility sections that reduce doubt: FAQs, trust badges, reviews/testimonials slots, and reassurance copy.",
    icon: <BadgeCheck className="h-5 w-5" />,
  },
  {
    title: "Speed optimized for better ad performance",
    desc: "Fast pages improve ad results and reduce drop-offs. We optimize assets, structure, and layout to load quickly.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    title: "Analytics-ready layout (track clicks + enquiries)",
    desc: "Your landing page is structured to track conversions: button clicks, form submissions, and engagement—ready for analytics.",
    icon: <BarChart3 className="h-5 w-5" />,
  },
];

const trustBlocks = [
  {
    title: "Testimonials-ready section",
    desc: "Drop in customer reviews anytime—designed to look premium and boost trust instantly.",
    icon: <Star className="h-5 w-5" />,
  },
  {
    title: "FAQ block to remove objections",
    desc: "We answer common questions upfront so visitors feel confident to contact you.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "CTA sections placed strategically",
    desc: "We place CTA buttons at the top, mid, and bottom—so users can act at any point.",
    icon: <ArrowRight className="h-5 w-5" />,
  },
  {
    title: "Lead capture that feels premium",
    desc: "Forms that look modern, feel smooth, and reduce friction—so more visitors submit.",
    icon: <Sparkles className="h-5 w-5" />,
  },
];

const deliverables = [
  "Hero section with one clear offer + strong CTA",
  "Benefits block (why your offer wins)",
  "Trust blocks (badges, testimonials-ready, FAQs)",
  "Offer details / product breakdown (simple + clear)",
  "Lead capture form + WhatsApp quick contact",
  "Mobile-first layout + fast loading",
  "SEO-ready headings + clean structure",
  "Analytics-ready structure (track clicks + leads)",
];

const campaigns = [
  "Facebook / Instagram Ads landing page",
  "Google Ads landing page",
  "Product launch landing page",
  "Service campaign landing page",
  "Event / webinar registration page",
  "Lead generation page for WhatsApp enquiries",
];

const LandingPages = () => {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section
        className="relative pt-[96px] pb-16 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${BgTexture})` }}
      >
        <div className="absolute inset-0 bg-black/45" />

        {/* accents */}
        <div
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: SECONDARY }}
        />
        <div
          className="absolute top-28 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: PRIMARY }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left */}
            <div>
              <p
                className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold"
                style={{
                  borderColor: "rgba(139,255,240,0.35)",
                  color: SECONDARY,
                  backgroundColor: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                }}
              >
                Service • Landing Pages
              </p>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Landing Pages
              </h1>

              <p className="mt-4 text-white/85 text-base sm:text-lg max-w-xl">
                High-converting pages for ads, campaigns, and launches—built for
                results. Clean structure, strong CTAs, and trust blocks that
                increase enquiries.
              </p>

              {/* mini bullets */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                {[
                  "Conversion-focused structure + strong CTAs",
                  "Trust blocks (FAQs, badges, testimonials-ready)",
                  "Speed optimized for better ad performance",
                  "Analytics-ready layout (track clicks + enquiries)",
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border px-4 py-3 text-sm font-semibold text-white/90"
                    style={{
                      borderColor: "rgba(255,255,255,0.20)",
                      backgroundColor: "rgba(255,255,255,0.08)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <span style={{ color: SECONDARY }}>✓</span> {t}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded-2xl px-6 py-3 text-sm sm:text-base font-semibold transition hover:scale-[1.02] active:scale-[0.98]"
                  style={{ backgroundColor: SECONDARY, color: "#0b1220" }}
                >
                  Get a Free Quote
                </Link>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl px-6 py-3 text-sm sm:text-base font-semibold border transition hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    borderColor: "rgba(255,255,255,0.30)",
                    color: "white",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  WhatsApp Us
                </a>
              </div>

              {/* quick stats row */}
              <div className="mt-8 flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="inline-flex items-center gap-2">
                  <Gauge className="h-4 w-4" style={{ color: SECONDARY }} />
                  Speed-first build
                </span>
                <span className="inline-flex items-center gap-2">
                  <Timer className="h-4 w-4" style={{ color: SECONDARY }} />
                  Built for campaigns
                </span>
                <span className="inline-flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" style={{ color: SECONDARY }} />
                  Track conversions
                </span>
              </div>
            </div>

            {/* Right 3D preview */}
            <div className="relative">
              <div className="[perspective:1200px]">
                <div
                  className="
                    relative rounded-3xl border bg-white/10 backdrop-blur-xl shadow-2xl p-4 sm:p-6
                    transition-transform duration-300 will-change-transform
                    hover:[transform:rotateX(6deg)_rotateY(-8deg)_translateY(-6px)]
                  "
                  style={{ borderColor: "rgba(255,255,255,0.22)" }}
                >
                  <img
                    src={HeroImg}
                    alt="Landing page preview"
                    className="w-full h-auto rounded-2xl object-cover"
                    draggable={false}
                  />

                  {/* floating badge */}
                  <div
                    className="
                      absolute -top-4 left-5 rounded-2xl border px-4 py-2 text-sm font-semibold
                      bg-white/15 backdrop-blur-xl text-white shadow-lg
                      animate-[floaty_4.8s_ease-in-out_infinite]
                    "
                    style={{ borderColor: "rgba(255,255,255,0.22)" }}
                  >
                    Ads-ready ⚡
                  </div>

                  <div
                    className="
                      absolute -bottom-4 right-6 rounded-2xl border px-4 py-2 text-sm font-semibold
                      bg-white/15 backdrop-blur-xl text-white shadow-lg
                      animate-[floaty_5.3s_ease-in-out_infinite]
                    "
                    style={{ borderColor: "rgba(255,255,255,0.22)" }}
                  >
                    Strong CTA 🎯
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 h-24 w-[80%] rounded-full blur-3xl opacity-30"
                style={{ backgroundColor: SECONDARY }}
              />
            </div>
          </div>
        </div>

        <style>{`
          @keyframes floaty {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
        `}</style>
      </section>

      {/* CORE FEATURES */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl">
            <p
              className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold"
              style={{
                borderColor: "rgba(19,72,155,0.20)",
                color: PRIMARY,
                backgroundColor: "rgba(139,255,240,0.18)",
              }}
            >
              Built for results
            </p>

            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900">
              A landing page designed to convert visitors into leads
            </h2>

            <p className="mt-3 text-slate-600">
              Campaign traffic is expensive—your page must be clear, fast, and
              persuasive. We design the structure to increase enquiries.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {coreFeatures.map((f) => (
              <div
                key={f.title}
                className="group rounded-3xl border bg-white/35 backdrop-blur-xl shadow-lg p-6 [perspective:1000px]"
                style={{ borderColor: "rgba(255,255,255,0.55)" }}
              >
                <div className="transition-transform duration-300 group-hover:[transform:rotateX(6deg)_rotateY(-6deg)_translateY(-6px)]">
                  <div
                    className="h-11 w-11 rounded-2xl flex items-center justify-center border"
                    style={{
                      borderColor: "rgba(19,72,155,0.18)",
                      backgroundColor: "rgba(255,255,255,0.70)",
                      color: PRIMARY,
                    }}
                  >
                    {f.icon}
                  </div>

                  <h3 className="mt-4 text-base font-extrabold text-slate-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{f.desc}</p>

                  <div
                    className="mt-5 h-[2px] w-full rounded-full opacity-70"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(19,72,155,0), rgba(19,72,155,0.45), rgba(139,255,240,0.55), rgba(19,72,155,0))",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BLOCKS */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div className="max-w-2xl">
              <p
                className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold"
                style={{
                  borderColor: "rgba(19,72,155,0.20)",
                  color: PRIMARY,
                  backgroundColor: "rgba(139,255,240,0.18)",
                }}
              >
                Trust + clarity
              </p>
              <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Trust blocks that remove doubt and boost enquiries
              </h2>
              <p className="mt-3 text-slate-600">
                People don’t convert when they’re unsure. We add credibility
                sections that make visitors feel confident.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <CheckCircle2 className="h-4 w-4" style={{ color: PRIMARY }} />
              Testimonials-ready • FAQs • Badges
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trustBlocks.map((b) => (
              <div
                key={b.title}
                className="group rounded-3xl border bg-white/25 backdrop-blur-xl shadow-lg p-6 transition hover:-translate-y-1"
                style={{ borderColor: "rgba(255,255,255,0.55)" }}
              >
                <div
                  className="h-11 w-11 rounded-2xl flex items-center justify-center border"
                  style={{
                    borderColor: "rgba(19,72,155,0.18)",
                    backgroundColor: "rgba(255,255,255,0.70)",
                    color: PRIMARY,
                  }}
                >
                  {b.icon}
                </div>
                <h3 className="mt-4 text-base font-extrabold text-slate-900">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREVIEWS (images) */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="[perspective:1200px]">
              <div
                className="rounded-3xl border bg-white/30 backdrop-blur-xl shadow-xl p-4 transition-transform duration-300 hover:[transform:rotateX(6deg)_rotateY(8deg)_translateY(-6px)]"
                style={{ borderColor: "rgba(255,255,255,0.55)" }}
              >
                <img
                  src={Preview1}
                  alt="Landing page section preview"
                  className="w-full h-auto rounded-2xl object-cover"
                  draggable={false}
                />
              </div>
            </div>

            <div className="[perspective:1200px]">
              <div
                className="rounded-3xl border bg-white/30 backdrop-blur-xl shadow-xl p-4 transition-transform duration-300 hover:[transform:rotateX(6deg)_rotateY(-8deg)_translateY(-6px)]"
                style={{ borderColor: "rgba(255,255,255,0.55)" }}
              >
                <img
                  src={Preview2}
                  alt="Landing page section preview"
                  className="w-full h-auto rounded-2xl object-cover"
                  draggable={false}
                />
              </div>
            </div>
          </div>

          <div
            className="mt-10 rounded-3xl border bg-white/35 backdrop-blur-xl shadow-lg p-7 sm:p-9"
            style={{ borderColor: "rgba(255,255,255,0.55)" }}
          >
            <h3 className="text-xl font-extrabold text-slate-900">
              Deliverables (what’s included)
            </h3>
            <p className="mt-2 text-slate-600">
              You get a complete landing page structure designed for campaigns and conversions.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {deliverables.map((d) => (
                <div key={d} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" style={{ color: PRIMARY }} />
                  <span className="text-sm text-slate-700">{d}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border bg-white/45 backdrop-blur-xl p-6"
              style={{ borderColor: "rgba(19,72,155,0.14)" }}
            >
              <h4 className="text-base font-extrabold text-slate-900">
                Perfect for campaigns like:
              </h4>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {campaigns.map((c) => (
                  <div
                    key={c}
                    className="rounded-2xl border px-4 py-3 text-sm font-semibold text-slate-800"
                    style={{
                      borderColor: "rgba(19,72,155,0.16)",
                      backgroundColor: "rgba(255,255,255,0.65)",
                    }}
                  >
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div
            className="rounded-3xl border bg-slate-900 text-white shadow-2xl p-8 sm:p-10 overflow-hidden relative"
            style={{ borderColor: "rgba(255,255,255,0.12)" }}
          >
            <div
              className="absolute -top-16 -left-16 h-64 w-64 rounded-full blur-3xl opacity-30"
              style={{ backgroundColor: SECONDARY }}
            />
            <div
              className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: PRIMARY }}
            />

            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold" style={{ color: SECONDARY }}>
                  Ready to launch your campaign?
                </p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold">
                  Let’s build a landing page that converts.
                </h3>
                <p className="mt-3 text-white/80">
                  Strong CTAs • Trust blocks • Fast loading • Analytics-ready
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {[
                    { icon: <Zap className="h-4 w-4" />, text: "Speed optimized" },
                    { icon: <BadgeCheck className="h-4 w-4" />, text: "Trust blocks" },
                    { icon: <BarChart3 className="h-4 w-4" />, text: "Track results" },
                    { icon: <MessageCircle className="h-4 w-4" />, text: "WhatsApp leads" },
                  ].map((b) => (
                    <span
                      key={b.text}
                      className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold"
                      style={{
                        borderColor: "rgba(255,255,255,0.16)",
                        backgroundColor: "rgba(255,255,255,0.06)",
                        backdropFilter: "blur(10px)",
                        color: "white",
                      }}
                    >
                      <span style={{ color: SECONDARY }}>{b.icon}</span>
                      {b.text}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-2xl px-6 py-3 text-sm font-semibold transition hover:scale-[1.02] active:scale-[0.98]"
                  style={{ backgroundColor: SECONDARY, color: "#0b1220" }}
                >
                  Get a Free Quote
                </Link>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl px-6 py-3 text-sm font-semibold border transition hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    borderColor: "rgba(255,255,255,0.22)",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(10px)",
                    color: "white",
                  }}
                >
                  WhatsApp 
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default LandingPages;
