// src/pages/services/Wordpress.tsx
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Boxes,
  CheckCircle2,
  CreditCard,
  Gauge,
  MessageCircle,
  Package,
  Percent,
  ShieldCheck,
  ShoppingBag,
  Truck,
  
  Zap,
} from "lucide-react";

// ✅ Replace with your real asset filenames (put in src/assets/)
import HeroImg from "../assets/wp-hero.jpeg";
import StorePreview1 from "../assets/wp-preview-1.jpeg";
import StorePreview2 from "../assets/wp-preview-2.jpeg";
import BgTexture from "../assets/wp-services.jpeg";
import Footer from "./Footer";

const PRIMARY = "#13489B";
const SECONDARY = "#8BFFF0";

const WHATSAPP_NUMBER = "27658207639";
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Tshidiso, I want a WordPress/WooCommerce store. Please share a quote."
)}`;

type Feature = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const coreFeatures: Feature[] = [
  {
    title: "WooCommerce setup (products, shipping, coupons)",
    desc: "We set up your online store properly—from product structure and categories to shipping zones and coupon rules.",
    icon: <Boxes className="h-5 w-5" />,
  },
  {
    title: "Secure checkout + payment integration (PayFast/Paystack/Stripe-ready)",
    desc: "We configure secure payments and ensure checkout is smooth and trustworthy—built to reduce cart abandonment.",
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    title: "Store pages that convert (home, product, cart, checkout)",
    desc: "We design the store experience to sell: clean product pages, clear CTAs, trust cues, and a simple checkout flow.",
    icon: <ShoppingBag className="h-5 w-5" />,
  },
  {
    title: "Training so you can update products yourself",
    desc: "We show you how to add/edit products, manage orders, update prices, add images, and run promotions.",
    icon: <BookOpen className="h-5 w-5" />,
  },
];

const storeAddOns: Feature[] = [
  {
    title: "Product categories + filters",
    desc: "Make it easy to browse: categories, collections, filters, and search that help customers find items fast.",
    icon: <Package className="h-5 w-5" />,
  },
  {
    title: "Discounts + coupon campaigns",
    desc: "We configure discounts, coupons, bundles (optional), and promo layouts that increase order value.",
    icon: <Percent className="h-5 w-5" />,
  },
  {
    title: "Speed & performance optimization",
    desc: "We optimize images, caching basics, and layouts so your store loads faster and feels premium.",
    icon: <Gauge className="h-5 w-5" />,
  },
  {
    title: "Trust & security setup",
    desc: "SSL, security basics, and trust sections (badges, policies, FAQs) to improve checkout confidence.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

const deliverables = [
  "WordPress setup + essential plugins configured",
  "WooCommerce configured (products, categories, shipping, coupons)",
  "Payment setup (PayFast/Paystack/Stripe-ready) + secure checkout flow",
  "Store pages designed to convert (Home, Shop, Product, Cart, Checkout)",
  "Policy pages (Returns, Shipping, Privacy) template-ready",
  "Mobile-first design + performance optimizations",
  "WhatsApp integration for sales/support",
  "Training so you can manage products & orders yourself",
];

const pagesIncluded = [
  "Home (hero + categories + best sellers + trust)",
  "Shop / Collections",
  "Product Page (gallery, price, reviews-ready, CTA)",
  "Cart + Checkout (clean, secure, simple)",
  "Contact + WhatsApp",
  "Policies (returns/shipping/privacy) template-ready",
];

const payments = ["PayFast", "Paystack", "Stripe (ready)", "Manual EFT (optional)"];

const faqs = [
  {
    q: "Can you upload my products for me?",
    a: "Yes. We can upload a starter set of products and set up categories. After training, you can manage products yourself.",
  },
  {
    q: "Can I accept payments in South Africa?",
    a: "Yes. PayFast works well for SA. If you need Paystack/Stripe-ready setup, we can configure it depending on your business requirements.",
  },
  {
    q: "Do you set up shipping?",
    a: "Yes. We configure shipping zones, rates, and options (flat rate, free shipping rules, etc.).",
  },
  {
    q: "Will it work on mobile?",
    a: "Yes. Your store is built mobile-first, so it looks and works great on phones and tablets.",
  },
];

export default function Wordpress() {
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
                Service • WordPress & E-Commerce
              </p>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                WordPress & E-Commerce
              </h1>

              <p className="mt-4 text-white/85 text-base sm:text-lg max-w-xl">
                Sell online with a professional store that’s easy to manage and ready
                for growth. We build WooCommerce stores with secure checkout, clean
                product pages, and training so you can update products yourself.
              </p>

              {/* mini bullets */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                {[
                  "WooCommerce setup (products, shipping, coupons)",
                  "Secure checkout + payment integration (PayFast/Paystack/Stripe-ready)",
                  "Store pages that convert (home, product, cart, checkout)",
                  "Training so you can update products yourself",
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

              {/* quick trust row */}
              <div className="mt-8 flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="inline-flex items-center gap-2">
                  <Zap className="h-4 w-4" style={{ color: SECONDARY }} />
                  Fast store experience
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" style={{ color: SECONDARY }} />
                  Secure checkout
                </span>
                <span className="inline-flex items-center gap-2">
                  <BookOpen className="h-4 w-4" style={{ color: SECONDARY }} />
                  Training included
                </span>
              </div>
            </div>

            {/* Right (3D preview) */}
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
                    alt="WooCommerce store preview"
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
                    WooCommerce 🛒
                  </div>

                  <div
                    className="
                      absolute -bottom-4 right-6 rounded-2xl border px-4 py-2 text-sm font-semibold
                      bg-white/15 backdrop-blur-xl text-white shadow-lg
                      animate-[floaty_5.3s_ease-in-out_infinite]
                    "
                    style={{ borderColor: "rgba(255,255,255,0.22)" }}
                  >
                    PayFast-ready 💳
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

      {/* LEARN MORE / CORE */}
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
              Built to sell
            </p>

            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900">
              A store that’s easy to manage and designed to convert
            </h2>

            <p className="mt-3 text-slate-600">
              We build a clean shopping experience with a smooth checkout flow and
              strong product pages—so customers can buy with confidence.
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
                  <h3 className="mt-4 text-base font-extrabold text-slate-900">{f.title}</h3>
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
            {storeAddOns.map((u) => (
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
                <h3 className="mt-4 text-base font-extrabold text-slate-900">{u.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREVIEWS */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="[perspective:1200px]">
              <div
                className="rounded-3xl border bg-white/30 backdrop-blur-xl shadow-xl p-4 transition-transform duration-300 hover:[transform:rotateX(6deg)_rotateY(8deg)_translateY(-6px)]"
                style={{ borderColor: "rgba(255,255,255,0.55)" }}
              >
                <img
                  src={StorePreview1}
                  alt="Store homepage preview"
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
                  src={StorePreview2}
                  alt="Product page preview"
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
            <h3 className="text-xl font-extrabold text-slate-900">What’s included</h3>
            <p className="mt-2 text-slate-600">
              A complete WordPress store setup designed for sales and easy management.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {deliverables.map((d) => (
                <div key={d} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" style={{ color: PRIMARY }} />
                  <span className="text-sm text-slate-700">{d}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div
                className="rounded-3xl border bg-white/45 backdrop-blur-xl p-6"
                style={{ borderColor: "rgba(19,72,155,0.14)" }}
              >
                <h4 className="text-base font-extrabold text-slate-900">Pages included</h4>
                <div className="mt-4 space-y-2">
                  {pagesIncluded.map((p) => (
                    <div key={p} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5" style={{ color: PRIMARY }} />
                      <span className="text-sm text-slate-700">{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-3xl border bg-white/45 backdrop-blur-xl p-6"
                style={{ borderColor: "rgba(19,72,155,0.14)" }}
              >
                <h4 className="text-base font-extrabold text-slate-900">Payments</h4>
                <p className="mt-2 text-sm text-slate-600">
                  We configure payments based on what fits your business.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {payments.map((p) => (
                    <span
                      key={p}
                      className="rounded-full border px-4 py-2 text-sm font-semibold"
                      style={{
                        borderColor: "rgba(19,72,155,0.18)",
                        backgroundColor: "rgba(255,255,255,0.65)",
                        color: "#0f172a",
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="rounded-3xl border bg-white/45 backdrop-blur-xl p-6"
                style={{ borderColor: "rgba(19,72,155,0.14)" }}
              >
                <h4 className="text-base font-extrabold text-slate-900">Conversion focus</h4>
                <p className="mt-2 text-sm text-slate-600">
                  We add structure that helps customers buy with confidence.
                </p>

                <div className="mt-4 space-y-3">
                  {[
                    { icon: <BadgeCheck className="h-4 w-4" />, text: "Trust badges + policies" },
                    { icon: <MessageCircle className="h-4 w-4" />, text: "WhatsApp support button" },
                    { icon: <Zap className="h-4 w-4" />, text: "Speed-first experience" },
                    { icon: <BarChart3 className="h-4 w-4" />, text: "Analytics-ready structure" },
                  ].map((b) => (
                    <div key={b.text} className="flex items-center gap-3">
                      <span style={{ color: PRIMARY }}>{b.icon}</span>
                      <span className="text-sm text-slate-700">{b.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
              FAQs
            </p>
            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900">
              Common e-commerce questions
            </h2>
            <p className="mt-3 text-slate-600">
              Simple answers to help you get started quickly.
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-3xl border bg-white/35 backdrop-blur-xl shadow-lg p-6"
                style={{ borderColor: "rgba(255,255,255,0.55)" }}
              >
                <p className="text-sm sm:text-base font-extrabold text-slate-900">{f.q}</p>
                <p className="mt-2 text-sm sm:text-base text-slate-600">{f.a}</p>
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
                  Ready to sell online?
                </p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold">
                  Let’s build your WordPress store the right way.
                </h3>
                <p className="mt-3 text-white/80">
                  WooCommerce setup • Secure checkout • PayFast-ready • Training included
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {[
                    { icon: <ShoppingBag className="h-4 w-4" />, text: "WooCommerce" },
                    { icon: <CreditCard className="h-4 w-4" />, text: "Payments" },
                    { icon: <Truck className="h-4 w-4" />, text: "Shipping" },
                    { icon: <BookOpen className="h-4 w-4" />, text: "Training" },
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

                <Link
                  to="/work"
                  className="rounded-2xl px-6 py-3 text-sm font-semibold border transition hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    borderColor: "rgba(255,255,255,0.22)",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(10px)",
                    color: "white",
                  }}
                >
                  View Work <ArrowRight className="inline-block ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
