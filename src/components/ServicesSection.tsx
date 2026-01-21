// src/components/ServicesSection.tsx
import { useEffect, useRef, useState } from "react";
import { Code2, LayoutTemplate, RefreshCcw, ArrowRight, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const PRIMARY = "#13489B";
const SECONDARY = "#8BFFF0";

type Service = {
  title: string;
  description: string;
  points: string[];
  icon: React.ReactNode;
  to: string;
};

const services: Service[] = [
  {
    title: "Business Websites",
    description:
      "A premium website that builds trust, explains your services clearly, and turns visitors into enquiries.",
    points: [
      "Modern UI layout with clear sections (Services, About, Trust, Contact)",
      "Mobile-first design that looks perfect on any device",
      "Fast performance + clean structure for better SEO visibility",
      "WhatsApp + lead capture forms (email-ready)",
    ],
    icon: <Code2 className="h-6 w-6" />,
    to: "/services/business-websites",
  },
  {
    title: "Landing Pages",
    description:
      "High-converting landing pages built for campaigns, ads, and product launches—focused on one goal: leads.",
    points: [
      "Conversion-first copy layout with strong CTAs",
      "Trust blocks: testimonials, badges, FAQs, guarantees",
      "Speed-optimized page for better ad performance",
      "Analytics-ready structure (track clicks + enquiries)",
    ],
    icon: <LayoutTemplate className="h-6 w-6" />,
    to: "/services/landing-pages",
  },
  {
    title: "Website Redesigns",
    description:
      "Upgrade an outdated website into a modern, fast, and professional experience that matches your brand today.",
    points: [
      "Modern visual refresh (typography, spacing, UI components)",
      "Improved navigation and page flow for better user experience",
      "Responsive rebuild for mobile + tablet",
      "Performance cleanup: faster loading and cleaner code",
    ],
    icon: <RefreshCcw className="h-6 w-6" />,
    to: "/services/redesign",
  },
  {
    title: "WordPress & E-Commerce",
    description: "Sell online with a professional store that’s easy to manage and ready for growth.",
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

/**
 * 3D tilt + floating animation hook (no extra libraries)
 */
function useTilt3D(strength = 10) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const cx = rect.width / 2;
      const cy = rect.height / 2;

      // rotateX: top/bottom, rotateY: left/right
      const dx = (x - cx) / cx;
      const dy = (y - cy) / cy;

      const rotateY = dx * strength;
      const rotateX = -dy * strength;

      el.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleEnter = () => {
      setIsHover(true);
      el.style.transition = "transform 120ms ease";
      el.style.willChange = "transform";
    };

    const handleLeave = () => {
      setIsHover(false);
      el.style.transition = "transform 220ms ease";
      el.style.transform = "translateY(0px) rotateX(0deg) rotateY(0deg)";
    };

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return { ref, isHover };
}

const ServicesSection = () => {
  return (
    <section className="relative py-16 sm:py-20">
      {/* Background accents */}
      <div
        className="absolute -top-10 left-10 h-64 w-64 rounded-full blur-3xl opacity-25"
        style={{ backgroundColor: SECONDARY }}
      />
      <div
        className="absolute bottom-0 right-0 h-64 w-64 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: PRIMARY }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Title */}
        <div className="max-w-2xl">
          <p
            className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium"
            style={{
              borderColor: "rgba(19,72,155,0.25)",
              color: PRIMARY,
              backgroundColor: "rgba(139,255,240,0.18)",
            }}
          >
            What I Offer
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Services
          </h2>

          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Clean, modern websites designed to look premium, load fast, and help
            businesses turn visitors into real enquiries.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3 [perspective:1200px]">
          {services.map((service, idx) => (
            <ServiceCard key={service.title} service={service} index={idx} />
          ))}
        </div>
      </div>

      {/* Floating keyframes (global) */}
      <style>{`
        @keyframes floaty {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { ref, isHover } = useTilt3D(10);

  // stagger float timing so they don't move identically
  const floatDelay = `${index * 180}ms`;

  return (
    <div className="relative">
      {/* Glow layer */}
      <div
        className="absolute inset-0 rounded-3xl blur-2xl opacity-25"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(139,255,240,0.7), rgba(19,72,155,0.25), rgba(255,255,255,0))",
        }}
      />

      <div
        ref={ref}
        className={[
          "relative group rounded-3xl border bg-white/40 backdrop-blur-xl shadow-lg p-6 sm:p-7",
          "transition",
        ].join(" ")}
        style={{
          borderColor: "rgba(255,255,255,0.35)",
          // soft idle floating (paused on hover for better control)
          animation: isHover ? "none" : `floaty 5.2s ease-in-out ${floatDelay} infinite`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between">
          <div
            className="h-12 w-12 rounded-2xl flex items-center justify-center border"
            style={{
              backgroundColor: "rgba(255,255,255,0.65)",
              borderColor: "rgba(19,72,155,0.18)",
              color: PRIMARY,
              transform: "translateZ(18px)",
            }}
          >
            {service.icon}
          </div>

          <div
            className="h-10 w-10 rounded-2xl flex items-center justify-center border opacity-0 translate-x-1 transition group-hover:opacity-100 group-hover:translate-x-0"
            style={{
              borderColor: "rgba(19,72,155,0.18)",
              backgroundColor: "rgba(139,255,240,0.25)",
              color: PRIMARY,
              transform: "translateZ(14px)",
            }}
            aria-hidden="true"
          >
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>

        {/* Content */}
        <h3
          className="mt-5 text-xl font-bold text-slate-900"
          style={{ transform: "translateZ(16px)" }}
        >
          {service.title}
        </h3>
        <p className="mt-2 text-slate-600" style={{ transform: "translateZ(12px)" }}>
          {service.description}
        </p>

        {/* Points */}
        <ul className="mt-5 space-y-3" style={{ transform: "translateZ(10px)" }}>
          {service.points.map((p) => (
            <li key={p} className="flex gap-3">
              <span
                className="mt-2 h-2.5 w-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: PRIMARY }}
              />
              <span className="text-sm text-slate-700 leading-relaxed">{p}</span>
            </li>
          ))}
        </ul>

        {/* Link */}
        <div className="mt-7" style={{ transform: "translateZ(14px)" }}>
          <Link
            to={service.to}
            className="inline-flex items-center gap-2 text-sm font-semibold transition"
            style={{ color: PRIMARY }}
          >
            Learn more
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>

        {/* subtle bottom glow */}
        <div
          className="mt-6 h-[2px] w-full rounded-full opacity-60"
          style={{
            background:
              "linear-gradient(90deg, rgba(19,72,155,0.0), rgba(19,72,155,0.45), rgba(139,255,240,0.55), rgba(19,72,155,0.0))",
            transform: "translateZ(8px)",
          }}
        />
      </div>
    </div>
  );
}

export default ServicesSection;
