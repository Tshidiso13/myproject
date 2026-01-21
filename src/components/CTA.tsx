// src/components/CTA.tsx
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PRIMARY = "#13489B";
const SECONDARY = "#8BFFF0";

const CTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#0b1220]" />

      {/* Accent glows */}
      <div
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: PRIMARY }}
      />
      <div
        className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-25"
        style={{ backgroundColor: SECONDARY }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-10 text-center">
        {/* Text */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
          Ready to build your website?
        </h2>

        <p className="mt-4 text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
          Let’s turn your idea into a fast, modern website that helps your
          business attract real customers.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {/* Primary CTA */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-sm sm:text-base font-semibold transition hover:scale-[1.03] active:scale-[0.98]"
            style={{
              backgroundColor: SECONDARY,
              color: PRIMARY,
            }}
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </Link>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/27658207639"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-sm sm:text-base font-semibold transition hover:scale-[1.03] active:scale-[0.98] border"
            style={{
              borderColor: "rgba(255,255,255,0.35)",
              color: "white",
              backgroundColor: "rgba(255,255,255,0.08)",
            }}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
