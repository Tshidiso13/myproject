// src/pages/AboutPage.tsx
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  MessageCircle,
  Layers,
  Code2,
  Globe,
  Wrench,
} from "lucide-react";
import CTA from "../components/CTA";

import AboutImg1 from "../assets/about-1.jpeg";
import AboutImg2 from "../assets/about-2.jpg";
import WhyBg from "../assets/why-bg.jpg";
import Footer from "../components/Footer";

const PRIMARY = "#13489B";
const SECONDARY = "#8BFFF0";

const tools = [
  "React",
  "Vite",
  "Tailwind CSS",
  "WordPress",
  "WooCommerce",
  "cPanel",
  "GitHub",
  "Vercel",
];

const highlights = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Modern, premium UI",
    desc: "Clean design with strong hierarchy, spacing, and a professional look that builds trust.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Fast performance",
    desc: "Optimized images, clean code, and lightweight layouts for faster load times.",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Mobile-first builds",
    desc: "Every section is designed to look perfect on phones, tablets, and desktop.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "SEO-ready structure",
    desc: "Proper headings, clean pages, and best-practice structure for better visibility.",
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    title: "Clear communication",
    desc: "We keep the process simple: updates, timelines, and quick responses.",
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Full setup support",
    desc: "We can help with hosting, cPanel, SSL, business emails, and going live.",
  },
];

const steps = [
  {
    title: "Discovery",
    desc: "We understand your business, goals, and what customers should do on your website.",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    title: "Design",
    desc: "We plan a clean layout with strong sections, modern styling, and clear calls-to-action.",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: "Development",
    desc: "We build a fast, responsive website with a professional feel and strong structure.",
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    title: "Launch",
    desc: "We connect domain/hosting, set up SSL, test everything, and launch your site live.",
    icon: <Globe className="h-5 w-5" />,
  },
];

const About = () => {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative pt-[96px] pb-14 overflow-hidden">
        <div
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-35"
          style={{ backgroundColor: SECONDARY }}
        />
        <div
          className="absolute top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: PRIMARY }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left */}
            <div>
              <p
                className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium"
                style={{
                  borderColor: "rgba(19,72,155,0.25)",
                  color: PRIMARY,
                  backgroundColor: "rgba(139,255,240,0.18)",
                }}
              >
                About Us
              </p>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
                We build modern websites that help businesses look premium and get more enquiries
              </h1>

              <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-xl">
                We focus on clean design, fast performance, and mobile-first layouts—built for real
                customers and real results. Based in South Africa.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded-2xl px-6 py-3 text-sm sm:text-base font-semibold transition hover:scale-[1.02] active:scale-[0.98]"
                  style={{ backgroundColor: PRIMARY, color: "white" }}
                >
                  Get a Free Quote
                </Link>

                <Link
                  to="/work"
                  className="rounded-2xl px-6 py-3 text-sm sm:text-base font-semibold border transition hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    borderColor: "rgba(19,72,155,0.35)",
                    color: PRIMARY,
                    backgroundColor: "rgba(255,255,255,0.6)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  View Work
                </Link>
              </div>

              {/* mini trust strip */}
              <div className="mt-8 grid grid-cols-2 gap-3 max-w-lg">
                {["✓ Fast Delivery", "✓ Mobile First", "✓ SEO Ready", "✓ WhatsApp Integration"].map(
                  (t) => (
                    <div
                      key={t}
                      className="rounded-2xl border bg-white/35 backdrop-blur-xl px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm"
                      style={{ borderColor: "rgba(255,255,255,0.5)" }}
                    >
                      <span style={{ color: PRIMARY }}>{t}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Right images */}
            <div className="relative">
              <div
                className="rounded-3xl border bg-white/30 backdrop-blur-xl shadow-xl p-4 sm:p-6"
                style={{ borderColor: "rgba(255,255,255,0.5)" }}
              >
                <img
                  src={AboutImg1}
                  alt="Website preview"
                  className="w-full h-auto rounded-2xl object-cover"
                  draggable={false}
                />
              </div>

              <div
                className="absolute -bottom-8 -left-6 hidden sm:block w-[52%] rounded-3xl border bg-white/35 backdrop-blur-xl shadow-xl p-3"
                style={{ borderColor: "rgba(255,255,255,0.5)" }}
              >
                <img
                  src={AboutImg2}
                  alt="Design details preview"
                  className="w-full h-auto rounded-2xl object-cover"
                  draggable={false}
                />
              </div>

              <div
                className="absolute -top-6 right-6 rounded-2xl border bg-white/55 backdrop-blur-xl px-4 py-3 text-sm font-semibold shadow-lg"
                style={{ borderColor: "rgba(255,255,255,0.55)", color: PRIMARY }}
              >
                Premium UI • Clean Layout • Fast
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY / POSITIONING */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                What we do
              </h2>
              <p className="mt-3 text-slate-600 text-base sm:text-lg">
                We create modern business websites, landing pages, and redesigns that feel premium,
                load fast, and guide visitors toward one goal: contacting you. We also build WordPress
                and WooCommerce stores, and we can help set up hosting, cPanel, SSL, and business email.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Business websites built for trust and enquiries",
                  "Landing pages built for campaigns and conversions",
                  "Modern redesigns for outdated websites",
                  "WordPress + WooCommerce e-commerce setup",
                  "Domain, hosting, cPanel, SSL and email setup",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2
                      className="h-5 w-5 flex-shrink-0"
                      style={{ color: PRIMARY }}
                    />
                    <span className="text-sm sm:text-base text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-3xl border bg-white/35 backdrop-blur-xl shadow-lg p-7 sm:p-9"
              style={{ borderColor: "rgba(255,255,255,0.5)" }}
            >
              <h3 className="text-xl font-extrabold text-slate-900">Tools & tech we use</h3>
              <p className="mt-2 text-slate-600">
                Modern stack, clean structure, and best practices—so your site looks great and performs well.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border px-4 py-2 text-sm font-semibold"
                    style={{
                      borderColor: "rgba(19,72,155,0.18)",
                      backgroundColor: "rgba(255,255,255,0.6)",
                      color: "#0f172a",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US (WITH BG IMAGE) */}
      <section
        className="relative py-14 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${WhyBg})` }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl">
            <p
              className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium"
              style={{
                borderColor: "rgba(255,255,255,0.35)",
                color: "white",
                backgroundColor: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(12px)",
              }}
            >
              Why choose us
            </p>

            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-white">
              Simple process. Modern design. Real results.
            </h2>

            <p className="mt-3 text-white/80">
              We build websites that look professional, load fast, and help customers take action.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-3xl border bg-white/15 backdrop-blur-xl shadow-lg p-6 transition hover:-translate-y-1"
                style={{ borderColor: "rgba(255,255,255,0.28)" }}
              >
                <div
                  className="h-11 w-11 rounded-2xl flex items-center justify-center border"
                  style={{
                    borderColor: "rgba(255,255,255,0.25)",
                    backgroundColor: "rgba(255,255,255,0.18)",
                    color: SECONDARY,
                  }}
                >
                  {h.icon}
                </div>

                <h3 className="mt-4 text-lg font-extrabold text-white">{h.title}</h3>
                <p className="mt-2 text-sm text-white/80">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div
            className="rounded-3xl border bg-white/35 backdrop-blur-xl shadow-lg p-7 sm:p-10"
            style={{ borderColor: "rgba(255,255,255,0.5)" }}
          >
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Our process
                </h2>
                <p className="mt-2 text-slate-600">
                  A simple step-by-step approach that keeps the project clear and professional.
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
                  className="rounded-3xl border bg-white/40 backdrop-blur-xl p-6"
                  style={{ borderColor: "rgba(19,72,155,0.16)" }}
                >
                  <div
                    className="h-10 w-10 rounded-2xl flex items-center justify-center border"
                    style={{
                      borderColor: "rgba(19,72,155,0.18)",
                      backgroundColor: "rgba(255,255,255,0.65)",
                      color: PRIMARY,
                    }}
                  >
                    {s.icon}
                  </div>

                  <h3 className="mt-4 text-lg font-extrabold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
};

export default About;
