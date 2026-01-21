// src/pages/services/BusinessWebsites.tsx
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  Clock,
  Code2,
  LayoutTemplate,
  MessageCircle,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

// ✅ Replace these filenames with your real assets
import HeroImg from "../assets/business-hero.jpg";
import Preview1 from "../assets/preview-1.png";
import Preview2 from "../assets/preview-2.png";
import BgTexture from "../assets/service-bg.png";
import Footer from "./Footer";


const PRIMARY = "#13489B";
const SECONDARY = "#8BFFF0";

const waLink = `https://wa.me/27658207639?text=${encodeURIComponent(
  "Hi Tshidiso, I want a Business Website. Please share a quote."
)}`;

type Feature = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const coreFeatures: Feature[] = [
  {
    title: "Professional layout + clear messaging",
    desc: "We structure your website to explain what you do quickly, build trust, and guide visitors toward contacting you.",
    icon: <LayoutTemplate className="h-5 w-5" />,
  },
  {
    title: "Mobile-first, responsive design",
    desc: "Designed for phones first—so it looks premium on mobile, tablet, and desktop without breaking layout.",
    icon: <Smartphone className="h-5 w-5" />,
  },
  {
    title: "Fast performance + SEO-ready structure",
    desc: "Clean code, optimized images, and best-practice page structure for speed and visibility on Google.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    title: "Contact forms + WhatsApp integration",
    desc: "Quote forms + click-to-chat WhatsApp so customers can contact you instantly and you don’t miss leads.",
    icon: <MessageCircle className="h-5 w-5" />,
  },
];

const extras = [
  {
    title: "Trust & credibility sections",
    desc: "Testimonials, badges, FAQs, and guarantees—added in the right places to boost conversions.",
    icon: <BadgeCheck className="h-5 w-5" />,
  },
  {
    title: "Conversion-focused CTA layout",
    desc: "Buttons and enquiry flows that make it clear what the customer must do next.",
    icon: <ArrowRight className="h-5 w-5" />,
  },
  {
    title: "Security + reliability basics",
    desc: "SSL-ready structure and best practices so your site is safe, stable, and professional.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "Analytics-ready setup",
    desc: "Structured pages that are ready for Google Analytics / basic tracking when you start running ads.",
    icon: <BarChart3 className="h-5 w-5" />,
  },
];

const deliverables = [
  "Home page with premium hero + trust strip + strong CTA",
  "Services section with clear benefits + icons",
  "About section (brand story + credibility)",
  "Portfolio / gallery (optional)",
  "FAQs to remove customer objections",
  "Contact page with quote form + WhatsApp button",
  "SEO-ready headings + clean structure",
  "Mobile-first responsiveness + fast loading",
];

const steps = [
  {
    title: "Discovery",
    desc: "We learn your business, services, competitors, and what your customers need to see first.",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: "Design",
    desc: "We map a modern layout (sections, messaging, and CTAs) to make the website look premium and convert.",
    icon: <LayoutTemplate className="h-5 w-5" />,
  },
  {
    title: "Development",
    desc: "We build it fast, responsive, and SEO-ready with clean UI components and smooth effects.",
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    title: "Launch",
    desc: "We test, polish, connect domain/hosting, and go live. You get a ready-to-use website.",
    icon: <Rocket className="h-5 w-5" />,
  },
];

const BusinessWebsites = () => {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section
        className="relative pt-[96px] pb-16 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${BgTexture})` }}
      >
        {/* overlay */}
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
                Service • Business Websites
              </p>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Business Websites
              </h1>

              <p className="mt-4 text-white/85 text-base sm:text-lg max-w-xl">
                A clean, premium website that builds trust and turns visitors
                into enquiries. Built for speed, mobile, and conversion-focused
                layout.
              </p>

              {/* mini bullets */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                {[
                  "Professional layout + clear messaging",
                  "Mobile-first, responsive design",
                  "Fast performance + SEO-ready structure",
                  "Contact forms + WhatsApp integration",
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

              {/* small trust */}
              <div className="mt-8 flex flex-wrap gap-3 text-white/80 text-sm">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" style={{ color: SECONDARY }} />
                  Fast turnaround
                </span>
                <span className="inline-flex items-center gap-2">
                  <Search className="h-4 w-4" style={{ color: SECONDARY }} />
                  SEO-ready structure
                </span>
                <span className="inline-flex items-center gap-2">
                  <Zap className="h-4 w-4" style={{ color: SECONDARY }} />
                  Performance-first
                </span>
              </div>
            </div>

            {/* Right (3D-ish floating card) */}
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
                    alt="Business website preview"
                    className="w-full h-auto rounded-2xl object-cover"
                    draggable={false}
                  />

                  {/* floating badges */}
                  <div
                    className="
                      absolute -top-4 left-5 rounded-2xl border px-4 py-2 text-sm font-semibold
                      bg-white/15 backdrop-blur-xl text-white shadow-lg
                      animate-[floaty_4.5s_ease-in-out_infinite]
                    "
                    style={{ borderColor: "rgba(255,255,255,0.22)" }}
                  >
                    Premium UI ✨
                  </div>

                  <div
                    className="
                      absolute -bottom-4 right-6 rounded-2xl border px-4 py-2 text-sm font-semibold
                      bg-white/15 backdrop-blur-xl text-white shadow-lg
                      animate-[floaty_5.2s_ease-in-out_infinite]
                    "
                    style={{ borderColor: "rgba(255,255,255,0.22)" }}
                  >
                    Built to convert 🎯
                  </div>
                </div>
              </div>

              {/* small glow */}
              <div
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 h-24 w-[80%] rounded-full blur-3xl opacity-30"
                style={{ backgroundColor: SECONDARY }}
              />
            </div>
          </div>
        </div>

        {/* Keyframes */}
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
              What you get
            </p>

            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900">
              A modern business website built for trust and enquiries
            </h2>

            <p className="mt-3 text-slate-600">
              We build clean, premium websites that explain your services clearly, look
              professional, and make it easy for customers to contact you.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {coreFeatures.map((f) => (
              <div
                key={f.title}
                className="
                  group rounded-3xl border bg-white/35 backdrop-blur-xl shadow-lg p-6
                  [perspective:1000px]
                "
                style={{ borderColor: "rgba(255,255,255,0.55)" }}
              >
                <div
                  className="
                    rounded-3xl transition-transform duration-300
                    group-hover:[transform:rotateX(6deg)_rotateY(-6deg)_translateY(-6px)]
                  "
                >
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

          {/* Extra features */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {extras.map((x) => (
              <div
                key={x.title}
                className="
                  group rounded-3xl border bg-white/25 backdrop-blur-xl shadow-lg p-6
                  transition hover:-translate-y-1
                "
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
                  {x.icon}
                </div>
                <h3 className="mt-4 text-base font-extrabold text-slate-900">
                  {x.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{x.desc}</p>
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
                className="
                  rounded-3xl border bg-white/30 backdrop-blur-xl shadow-xl p-4
                  transition-transform duration-300 hover:[transform:rotateX(6deg)_rotateY(8deg)_translateY(-6px)]
                "
                style={{ borderColor: "rgba(255,255,255,0.55)" }}
              >
                <img
                  src={Preview1}
                  alt="Business website section preview"
                  className="w-full h-auto rounded-2xl object-cover"
                  draggable={false}
                />
              </div>
            </div>

            <div className="[perspective:1200px]">
              <div
                className="
                  rounded-3xl border bg-white/30 backdrop-blur-xl shadow-xl p-4
                  transition-transform duration-300 hover:[transform:rotateX(6deg)_rotateY(-8deg)_translateY(-6px)]
                "
                style={{ borderColor: "rgba(255,255,255,0.55)" }}
              >
                <img
                  src={Preview2}
                  alt="Business website section preview"
                  className="w-full h-auto rounded-2xl object-cover"
                  draggable={false}
                />
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border bg-white/35 backdrop-blur-xl shadow-lg p-7 sm:p-9"
            style={{ borderColor: "rgba(255,255,255,0.55)" }}
          >
            <h3 className="text-xl font-extrabold text-slate-900">
              Deliverables (what we build)
            </h3>
            <p className="mt-2 text-slate-600">
              You get a complete website with the structure and sections your customers expect.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
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
                Our process
              </p>
              <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Simple steps. Modern design. Real results.
              </h2>
              <p className="mt-3 text-slate-600">
                A clear workflow that keeps everything professional, fast, and easy to follow.
              </p>
            </div>

            <Link
              to="/contact"
              className="rounded-2xl px-6 py-3 text-sm font-semibold transition hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: PRIMARY, color: "white" }}
            >
              Start a Project
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
                  Ready to build your website?
                </p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold">
                  Let’s create a premium business website that converts.
                </h3>
                <p className="mt-3 text-white/80">
                  Fast delivery • Mobile-first • Professional design • WhatsApp + forms
                </p>
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

            <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: <Zap className="h-4 w-4" />, text: "Fast Delivery" },
                { icon: <Smartphone className="h-4 w-4" />, text: "Mobile First" },
                { icon: <Search className="h-4 w-4" />, text: "SEO Ready" },
                { icon: <MessageCircle className="h-4 w-4" />, text: "WhatsApp Integration" },
              ].map((b) => (
                <div
                  key={b.text}
                  className="rounded-2xl border px-4 py-3 text-sm font-semibold flex items-center gap-2"
                  style={{
                    borderColor: "rgba(255,255,255,0.16)",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(10px)",
                    color: "white",
                  }}
                >
                  <span style={{ color: SECONDARY }}>{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
};

export default BusinessWebsites;
