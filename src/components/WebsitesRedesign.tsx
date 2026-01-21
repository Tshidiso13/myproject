// src/pages/services/WebsiteRedesign.tsx
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  Compass,
  Gauge,
  Layers,
  LayoutTemplate,
  MessageCircle,
  Rocket,
  Sparkles,
  Smartphone,
  Wand2,
  Zap,
} from "lucide-react";

// ✅ Replace these with your real asset filenames
import HeroImg from "../assets/redesign-hero.jpeg";
import BeforeImg from "../assets/redesign-before.jpeg";
import AfterImg from "../assets/redesign-after.jpeg";
import BgTexture from "../assets/redesign-services.jpeg";
import Footer from "./Footer";

const PRIMARY = "#13489B";
const SECONDARY = "#8BFFF0";

const WHATSAPP_NUMBER = "27658207639";
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Tshidiso, I want to redesign my website. Please share a quote."
)}`;

type Feature = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const coreFeatures: Feature[] = [
  {
    title: "Modern UI refresh (typography, spacing, layout)",
    desc: "We update the design to look premium—better fonts, spacing, section layout, and visual hierarchy that builds trust.",
    icon: <Wand2 className="h-5 w-5" />,
  },
  {
    title: "Better navigation + page flow",
    desc: "We reorganize your pages and sections so visitors find what they need quickly and move smoothly to the CTA.",
    icon: <Compass className="h-5 w-5" />,
  },
  {
    title: "Mobile + tablet rebuild",
    desc: "We rebuild responsiveness so the site looks perfect on phones and tablets—no broken layouts, no tiny text.",
    icon: <Smartphone className="h-5 w-5" />,
  },
  {
    title: "Performance cleanup + polish",
    desc: "We speed up the site by optimizing assets, cleaning structure, and polishing interactions for a smooth experience.",
    icon: <Gauge className="h-5 w-5" />,
  },
];

const upgrades = [
  {
    title: "Stronger CTA + enquiry flow",
    desc: "We improve buttons, forms, and contact flow so your website generates more enquiries.",
    icon: <ArrowRight className="h-5 w-5" />,
  },
  {
    title: "Trust sections that convert",
    desc: "We add/upgrade testimonials-ready blocks, badges, FAQs, and credibility elements.",
    icon: <BadgeCheck className="h-5 w-5" />,
  },
  {
    title: "Cleaner pages + better structure",
    desc: "We remove clutter and rebuild the layout so your message is simple, clear, and professional.",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    title: "Analytics-ready improvements",
    desc: "We can structure the site for tracking (clicks, enquiries, conversions) when you run ads.",
    icon: <BarChart3 className="h-5 w-5" />,
  },
];

const deliverables = [
  "Modern refresh of fonts, spacing, layout, and section hierarchy",
  "Improved navigation + clearer content flow",
  "Mobile + tablet rebuild for responsiveness",
  "Performance cleanup (speed + polish)",
  "Updated CTA buttons + enquiry flow",
  "Optional: WhatsApp button + improved contact forms",
  "SEO-friendly structure (headings + clean pages)",
];

const steps = [
  {
    title: "Audit",
    desc: "We review your current site (design, speed, mobile issues, content flow) and identify what to improve first.",
    icon: <LayoutTemplate className="h-5 w-5" />,
  },
  {
    title: "Redesign",
    desc: "We rebuild the UI with modern typography, spacing, and a premium layout that matches your brand.",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: "Rebuild + Optimize",
    desc: "We implement the new layout, fix mobile/tablet, optimize images, and polish interactions for speed.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    title: "Launch",
    desc: "We test everything, push updates live, and ensure the site looks great on all devices.",
    icon: <Rocket className="h-5 w-5" />,
  },
];

export default function WebsiteRedesign() {
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
                Service • Website Redesigns
              </p>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Website Redesigns
              </h1>

              <p className="mt-4 text-white/85 text-base sm:text-lg max-w-xl">
                Upgrade an outdated site into a modern, fast, and professional
                experience. We refresh the UI, improve navigation, rebuild mobile,
                and optimize performance.
              </p>

              {/* mini bullets */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                {[
                  "Modern UI refresh (typography, spacing, layout)",
                  "Better navigation + page flow",
                  "Mobile + tablet rebuild",
                  "Performance cleanup + polish",
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

                <a
                  href="#learn-more"
                  className="rounded-2xl px-6 py-3 text-sm sm:text-base font-semibold border transition hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    borderColor: "rgba(255,255,255,0.25)",
                    color: "white",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  Learn More
                </a>
              </div>

              {/* small trust */}
              <div className="mt-8 flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="inline-flex items-center gap-2">
                  <Wand2 className="h-4 w-4" style={{ color: SECONDARY }} />
                  Premium refresh
                </span>
                <span className="inline-flex items-center gap-2">
                  <Gauge className="h-4 w-4" style={{ color: SECONDARY }} />
                  Faster load times
                </span>
                <span className="inline-flex items-center gap-2">
                  <Smartphone className="h-4 w-4" style={{ color: SECONDARY }} />
                  Mobile rebuild
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
                    alt="Redesign preview"
                    className="w-full h-auto rounded-2xl object-cover"
                    draggable={false}
                  />

                  <div
                    className="
                      absolute -top-4 left-5 rounded-2xl border px-4 py-2 text-sm font-semibold
                      bg-white/15 backdrop-blur-xl text-white shadow-lg
                      animate-[floaty_4.8s_ease-in-out_infinite]
                    "
                    style={{ borderColor: "rgba(255,255,255,0.22)" }}
                  >
                    Modern UI ✨
                  </div>

                  <div
                    className="
                      absolute -bottom-4 right-6 rounded-2xl border px-4 py-2 text-sm font-semibold
                      bg-white/15 backdrop-blur-xl text-white shadow-lg
                      animate-[floaty_5.3s_ease-in-out_infinite]
                    "
                    style={{ borderColor: "rgba(255,255,255,0.22)" }}
                  >
                    Faster + cleaner ⚡
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

      {/* LEARN MORE / FEATURES */}
      <section id="learn-more" className="py-16">
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
              What we improve
            </p>

            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900">
              A redesign that looks modern and performs better
            </h2>

            <p className="mt-3 text-slate-600">
              If your website feels outdated, slow, or weak on mobile—we rebuild it into a
              premium experience that builds trust and generates enquiries.
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

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {upgrades.map((u) => (
              <div
                key={u.title}
                className="rounded-3xl border bg-white/25 backdrop-blur-xl shadow-lg p-6 transition hover:-translate-y-1"
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
                  {u.icon}
                </div>
                <h3 className="mt-4 text-base font-extrabold text-slate-900">
                  {u.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
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
                Before vs After
              </p>
              <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900">
                A clear upgrade in design, speed, and professionalism
              </h2>
              <p className="mt-3 text-slate-600">
                We modernize the UI, simplify the flow, and polish the experience so it feels premium.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Sparkles className="h-4 w-4" style={{ color: PRIMARY }} />
              UI refresh • Better flow • Faster
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="[perspective:1200px]">
              <div
                className="rounded-3xl border bg-white/30 backdrop-blur-xl shadow-xl p-4 transition-transform duration-300 hover:[transform:rotateX(6deg)_rotateY(8deg)_translateY(-6px)]"
                style={{ borderColor: "rgba(255,255,255,0.55)" }}
              >
                <p className="mb-3 text-sm font-extrabold text-slate-900">
                  Before
                </p>
                <img
                  src={BeforeImg}
                  alt="Before redesign"
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
                <p className="mb-3 text-sm font-extrabold text-slate-900">
                  After
                </p>
                <img
                  src={AfterImg}
                  alt="After redesign"
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
              Everything needed to upgrade your site into a modern experience.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {deliverables.map((d) => (
                <div key={d} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" style={{ color: PRIMARY }} />
                  <span className="text-sm text-slate-700">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
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
                Our redesign process
              </p>
              <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Clear steps. Clean upgrade. Smooth launch.
              </h2>
              <p className="mt-3 text-slate-600">
                We keep it simple, professional, and focused on results.
              </p>
            </div>

            <Link
              to="/contact"
              className="rounded-2xl px-6 py-3 text-sm font-semibold transition hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: PRIMARY, color: "white" }}
            >
              Start a Redesign
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.title}
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
                    {s.icon}
                  </div>
                  <h3 className="mt-4 text-base font-extrabold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                </div>
              </div>
            ))}
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
                  Ready to upgrade your website?
                </p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold">
                  Let’s redesign your site into a modern, fast, premium experience.
                </h3>
                <p className="mt-3 text-white/80">
                  Modern UI • Better flow • Mobile rebuild • Performance polish
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {[
                    { icon: <Wand2 className="h-4 w-4" />, text: "Modern refresh" },
                    { icon: <Smartphone className="h-4 w-4" />, text: "Mobile rebuild" },
                    { icon: <Gauge className="h-4 w-4" />, text: "Speed cleanup" },
                    { icon: <MessageCircle className="h-4 w-4" />, text: "More enquiries" },
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
}
