// src/pages/ServicesPage.tsx
import { Link } from "react-router-dom";
import {
  Code2,
  LayoutTemplate,
  RefreshCcw,
  CheckCircle2,
  ShoppingCart,
  Globe,
  ShieldCheck,
  Zap,
  Wrench,
  Server,
} from "lucide-react";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const PRIMARY = "#13489B";
const SECONDARY = "#8BFFF0";

type Service = {
  title: string;
  desc: string;
  points: string[];
  icon: React.ReactNode;
  to: string;
};

const services: Service[] = [
  {
    title: "Business Websites",
    desc: "A clean, premium website that builds trust and turns visitors into enquiries.",
    points: [
      "Professional layout + clear messaging",
      "Mobile-first, responsive design",
      "Fast performance + SEO-ready structure",
      "Contact forms + WhatsApp integration",
    ],
    icon: <Code2 className="h-6 w-6" />,
    to: "/services/business-websites",
  },
  {
    title: "Landing Pages",
    desc: "High-converting pages for ads, campaigns, and product launches—built for results.",
    points: [
      "Conversion-focused structure + strong CTAs",
      "Trust blocks (FAQs, badges, testimonials-ready)",
      "Speed optimized for better ad performance",
      "Analytics-ready layout (track clicks + enquiries)",
    ],
    icon: <LayoutTemplate className="h-6 w-6" />,
    to: "/services/landing-pages",
  },
  {
    title: "Website Redesigns",
    desc: "Upgrade an outdated site into a modern, fast, and professional experience.",
    points: [
      "Modern UI refresh (typography, spacing, layout)",
      "Better navigation + page flow",
      "Mobile + tablet rebuild",
      "Performance cleanup + polish",
    ],
    icon: <RefreshCcw className="h-6 w-6" />,
    to: "/services/redesign",
  },
  {
    title: "WordPress & E-Commerce",
    desc: "Sell online with a professional store that’s easy to manage and ready for growth.",
    points: [
      "WooCommerce setup (products, shipping, coupons)",
      "Secure checkout + payment integration (PayFast/Paystack)",
      "Store pages that convert (home, product, cart, checkout)",
      "Training so you can update products yourself",
    ],
    icon: <ShoppingCart className="h-6 w-6" />,
    to: "/services/wordpress-ecommerce",
  },
];

const addOns = [
  {
    title: "Domain + Email Setup",
    desc: "Professional email like info@yourbusiness.co.za and clean DNS setup.",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    title: "cPanel Hosting Setup",
    desc: "cPanel configuration, SSL, file manager, and email accounts—all done correctly.",
    icon: <Server className="h-5 w-5" />,
  },
  {
    title: "Security & SSL",
    desc: "HTTPS, basic hardening, spam protection, and safe forms.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "Speed Optimization",
    desc: "Compress images, improve load time, and optimize Core Web Vitals.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    title: "Maintenance & Updates",
    desc: "Monthly updates, backups, and small changes so your site stays fresh.",
    icon: <Wrench className="h-5 w-5" />,
  },
];

const Services = () => {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative pt-[96px] pb-14 overflow-hidden">
        <div
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-35"
          style={{ backgroundColor: SECONDARY }}
        />
        <div
          className="absolute top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-25"
          style={{ backgroundColor: PRIMARY }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <p
            className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium"
            style={{
              borderColor: "rgba(19,72,155,0.25)",
              color: PRIMARY,
              backgroundColor: "rgba(139,255,240,0.18)",
            }}
          >
            Services
          </p>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
            Simple, modern websites that help businesses get customers
          </h1>

          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl">
            I build fast, mobile-first websites with clean design and strong structure—
            focused on turning visitors into real enquiries. I also offer WordPress,
            e-commerce stores, and cPanel hosting setup.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-2xl px-6 py-3 text-sm sm:text-base font-semibold shadow-sm transition hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: PRIMARY, color: "white" }}
            >
              Get a Free Quote
            </Link>

            <a
              href="https://wa.me/27658207639"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl px-6 py-3 text-sm sm:text-base font-semibold border transition hover:scale-[1.02] active:scale-[0.98]"
              style={{
                borderColor: "rgba(19,72,155,0.35)",
                color: PRIMARY,
                backgroundColor: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(12px)",
              }}
            >
              WhatsApp 
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((s) => (
              <article
                key={s.title}
                className="rounded-3xl border bg-white/40 backdrop-blur-xl shadow-lg p-6 sm:p-7 transition hover:-translate-y-1"
                style={{ borderColor: "rgba(255,255,255,0.5)" }}
              >
                <div
                  className="h-12 w-12 rounded-2xl flex items-center justify-center border"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.65)",
                    borderColor: "rgba(19,72,155,0.18)",
                    color: PRIMARY,
                  }}
                >
                  {s.icon}
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>

                <ul className="mt-5 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <CheckCircle2
                        className="h-5 w-5 flex-shrink-0"
                        style={{ color: PRIMARY }}
                      />
                      <span className="text-sm text-slate-700 leading-relaxed">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-3 flex-wrap">
                  <Link
                    to={s.to}
                    className="rounded-2xl px-5 py-3 text-sm font-semibold transition hover:scale-[1.02] active:scale-[0.98]"
                    style={{ backgroundColor: PRIMARY, color: "white" }}
                  >
                    Learn More
                  </Link>

                  <Link
                    to="/contact"
                    className="rounded-2xl px-5 py-3 text-sm font-semibold border transition hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      borderColor: "rgba(19,72,155,0.35)",
                      color: PRIMARY,
                      backgroundColor: "rgba(255,255,255,0.6)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    Get Quote
                  </Link>
                </div>

                <div
                  className="mt-7 h-[2px] w-full rounded-full opacity-60"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(19,72,155,0.0), rgba(19,72,155,0.45), rgba(139,255,240,0.55), rgba(19,72,155,0.0))",
                  }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div
            className="rounded-3xl border bg-white/35 backdrop-blur-xl shadow-lg p-7 sm:p-10"
            style={{ borderColor: "rgba(255,255,255,0.5)" }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What’s included (standard)
            </h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Every project is built with a modern foundation—fast, responsive, and ready to convert.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Mobile-first responsive design",
                "Fast loading performance",
                "SEO-ready structure",
                "Contact forms + lead capture",
                "WhatsApp integration",
                "Clean modern UI & layout",
                "Basic on-page SEO setup",
                "Deployment + live launch support",
                "Cross-browser testing",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border px-5 py-4 text-sm font-medium text-slate-800"
                  style={{
                    borderColor: "rgba(19,72,155,0.18)",
                    backgroundColor: "rgba(255,255,255,0.55)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADD-ONS (WordPress, cPanel, extras) */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Add-ons & Setup (optional)
              </h2>
              <p className="mt-2 text-slate-600">
                If you need a complete setup, I can handle the technical side too—so you don’t stress.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((a) => (
              <div
                key={a.title}
                className="rounded-3xl border bg-white/35 backdrop-blur-xl shadow-lg p-6 transition hover:-translate-y-1"
                style={{ borderColor: "rgba(255,255,255,0.5)" }}
              >
                <div
                  className="h-11 w-11 rounded-2xl flex items-center justify-center border"
                  style={{
                    borderColor: "rgba(19,72,155,0.18)",
                    backgroundColor: "rgba(255,255,255,0.65)",
                    color: PRIMARY,
                  }}
                >
                  {a.icon}
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-slate-900">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
      <Footer />
    </main>
  );
};

export default Services;
