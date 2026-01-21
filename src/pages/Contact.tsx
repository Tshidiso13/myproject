// src/pages/Contact.tsx
import { useMemo, useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, ChevronDown } from "lucide-react";

const PRIMARY = "#13489B";
const SECONDARY = "#8BFFF0";

const WHATSAPP_NUMBER = "27658207639";
const EMAIL = "tshidisomexico@gmail.com";
const LOCATION = "Pretoria, South Africa";

// ✅ Put your Formspree endpoint here
const FORM_ENDPOINT = "https://formspree.io/f/xpqqkqbz";

type Faq = { q: string; a: string };

const faqs: Faq[] = [
  { q: "How long does a website take to build?", a: "Most standard business websites take 5–10 working days, depending on pages, content readiness, and revisions. Landing pages are usually faster." },
  { q: "What do you need from us to start?", a: "We’ll need your business name, services, contact details, branding (logo/colors if you have), and examples of websites you like. If you don’t have content yet, we can guide the structure and messaging." },
  { q: "Do you build websites for phones and tablets?", a: "Yes. Every website is built mobile-first, meaning it’s designed to look and work perfectly on phones, tablets, and desktop." },
  { q: "Can you redesign our existing website?", a: "Yes. We can modernize the look, improve the structure, make it mobile-friendly, speed it up, and rebuild pages to convert better." },
  { q: "Do you offer WordPress websites?", a: "Yes. We build WordPress websites that are easy to manage, professional, and optimized for performance." },
  { q: "Can you build an online store (e-commerce)?", a: "Yes. We build WooCommerce stores with product setup, checkout flow, shipping configuration, and a clean store design that converts." },
  { q: "Can you help with domain and hosting?", a: "Yes. We can help you register a domain, set up hosting, connect DNS, and ensure everything is configured correctly." },
  { q: "Do you set up cPanel and business emails?", a: "Yes. We can configure cPanel, SSL, email accounts, and professional business email like info@yourdomain.co.za." },
  { q: "Will my website be SEO-ready?", a: "Yes. We build with clean structure, headings, and best practices. Full SEO packages can also be added." },
  { q: "Can you add WhatsApp to the website?", a: "Yes. We can add a WhatsApp button, click-to-chat links, and enquiry flows to make it easy for customers to contact you instantly." },
  { q: "Will I be able to update my website later?", a: "Yes. For WordPress, you can update content easily. For React sites, we can maintain it for you or set it up so updates are simple." },
  { q: "Do you provide website maintenance?", a: "Yes. We offer maintenance options including updates, backups, small changes, and security checks." },
  { q: "Can you integrate forms and lead capture?", a: "Yes. We can add quote forms, contact forms, and email notifications so enquiries go to the right place." },
  { q: "Do you support payment integration?", a: "Yes. For e-commerce we can integrate PayFast/Paystack/Stripe-ready solutions." },
  { q: "How do we get a quote?", a: "Send your business details and what you need. We’ll respond with a clear quote and plan." },
];

export default function Contact() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    websiteType: "",
    timeline: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const waLink = useMemo(() => {
    const msg = "Hi Tshidiso, I want a website for my business. Please share a quote.";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }, []);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    if (!form.fullName.trim()) return setStatus("error"), setError("Please enter your full name.");
    if (!form.email.trim()) return setStatus("error"), setError("Please enter your email.");
    if (!form.message.trim()) return setStatus("error"), setError("Please tell us about your project.");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.fullName,
          phone: form.phone,
          email: form.email,
          websiteType: form.websiteType,
          timeline: form.timeline,
          message: form.message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send.");
      }

      setStatus("success");
      setForm({ fullName: "", phone: "", email: "", websiteType: "", timeline: "", message: "" });
    } catch {
      setStatus("error");
      setError("Failed to send. Please try again or use WhatsApp.");
    }
  };

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative pt-[96px] pb-14 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-35" style={{ backgroundColor: SECONDARY }} />
        <div className="absolute top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20" style={{ backgroundColor: PRIMARY }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <p className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium"
            style={{ borderColor: "rgba(19,72,155,0.25)", color: PRIMARY, backgroundColor: "rgba(139,255,240,0.18)" }}>
            Contact
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
            Let’s build a modern website for your business
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl">
            Send a request and we’ll reply with a clear plan and a free quote.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* FORM */}
            <div className="rounded-3xl border bg-white/35 backdrop-blur-xl shadow-lg p-6 sm:p-8"
              style={{ borderColor: "rgba(255,255,255,0.5)" }}>
              <h2 className="text-2xl font-extrabold text-slate-900">Request a free quote</h2>
              <p className="mt-2 text-slate-600">We’ll reply to your email.</p>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-slate-700">Full Name *</label>
                    <input name="fullName" value={form.fullName} onChange={onChange}
                      className="mt-2 w-full rounded-2xl border bg-white/70 px-4 py-3 text-sm outline-none"
                      style={{ borderColor: "rgba(19,72,155,0.18)" }}
                      placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-700">Phone / WhatsApp</label>
                    <input name="phone" value={form.phone} onChange={onChange}
                      className="mt-2 w-full rounded-2xl border bg-white/70 px-4 py-3 text-sm outline-none"
                      style={{ borderColor: "rgba(19,72,155,0.18)" }}
                      placeholder="e.g. 065 000 0000" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">Email *</label>
                  <input name="email" type="email" value={form.email} onChange={onChange}
                    className="mt-2 w-full rounded-2xl border bg-white/70 px-4 py-3 text-sm outline-none"
                    style={{ borderColor: "rgba(19,72,155,0.18)" }}
                    placeholder="you@email.com" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-slate-700">Website Type</label>
                    <select name="websiteType" value={form.websiteType} onChange={onChange}
                      className="mt-2 w-full rounded-2xl border bg-white/70 px-4 py-3 text-sm outline-none"
                      style={{ borderColor: "rgba(19,72,155,0.18)" }}>
                      <option value="">Select one</option>
                      <option>Business Website</option>
                      <option>Landing Page</option>
                      <option>Website Redesign</option>
                      <option>WordPress Website</option>
                      <option>E-Commerce (WooCommerce)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700">Timeline</label>
                    <select name="timeline" value={form.timeline} onChange={onChange}
                      className="mt-2 w-full rounded-2xl border bg-white/70 px-4 py-3 text-sm outline-none"
                      style={{ borderColor: "rgba(19,72,155,0.18)" }}>
                      <option value="">Select one</option>
                      <option>ASAP</option>
                      <option>1–2 weeks</option>
                      <option>2–4 weeks</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">Tell us about your project *</label>
                  <textarea name="message" value={form.message} onChange={onChange}
                    className="mt-2 w-full rounded-2xl border bg-white/70 px-4 py-3 text-sm outline-none min-h-[140px]"
                    style={{ borderColor: "rgba(19,72,155,0.18)" }}
                    placeholder="Pages, features, WhatsApp, e-commerce, hosting, examples you like..." />
                </div>

                {status === "error" && (
                  <div className="rounded-2xl border px-4 py-3 text-sm font-semibold"
                    style={{ borderColor: "rgba(239,68,68,0.35)", backgroundColor: "rgba(239,68,68,0.08)", color: "#991b1b" }}>
                    {error}
                  </div>
                )}

                {status === "success" && (
                  <div className="rounded-2xl border px-4 py-3 text-sm font-semibold"
                    style={{ borderColor: "rgba(34,197,94,0.35)", backgroundColor: "rgba(34,197,94,0.10)", color: "#166534" }}>
                    Sent! We’ll reply shortly.
                  </div>
                )}

                <div className="flex flex-wrap gap-3 pt-2">
                  <button type="submit" disabled={status === "sending"}
                    className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ backgroundColor: PRIMARY, color: "white" }}>
                    {status === "sending" ? "Sending..." : "Send Request"} <Send className="h-4 w-4" />
                  </button>

                  <a href={waLink} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold border transition hover:scale-[1.02] active:scale-[0.98]"
                    style={{ borderColor: "rgba(19,72,155,0.35)", color: PRIMARY, backgroundColor: "rgba(255,255,255,0.65)", backdropFilter: "blur(10px)" }}>
                    WhatsApp Us <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              </form>
            </div>

            {/* CONTACT INFO + MAP */}
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border bg-white/35 backdrop-blur-xl shadow-lg p-6"
                  style={{ borderColor: "rgba(255,255,255,0.5)" }}>
                  <div className="h-11 w-11 rounded-2xl flex items-center justify-center border"
                    style={{ borderColor: "rgba(19,72,155,0.18)", backgroundColor: "rgba(255,255,255,0.7)", color: PRIMARY }}>
                    <Mail className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-slate-700">Email</p>
                  <a href={`mailto:${EMAIL}`} className="mt-1 block text-sm font-bold" style={{ color: PRIMARY }}>
                    {EMAIL}
                  </a>
                </div>

                <div className="rounded-3xl border bg-white/35 backdrop-blur-xl shadow-lg p-6"
                  style={{ borderColor: "rgba(255,255,255,0.5)" }}>
                  <div className="h-11 w-11 rounded-2xl flex items-center justify-center border"
                    style={{ borderColor: "rgba(19,72,155,0.18)", backgroundColor: "rgba(255,255,255,0.7)", color: PRIMARY }}>
                    <Phone className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-slate-700">Phone / WhatsApp</p>
                  <a href={`tel:+${WHATSAPP_NUMBER}`} className="mt-1 block text-sm font-bold" style={{ color: PRIMARY }}>
                    +{WHATSAPP_NUMBER}
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border bg-white/35 backdrop-blur-xl shadow-lg p-6"
                style={{ borderColor: "rgba(255,255,255,0.5)" }}>
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-2xl flex items-center justify-center border"
                    style={{ borderColor: "rgba(19,72,155,0.18)", backgroundColor: "rgba(255,255,255,0.7)", color: PRIMARY }}>
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700">Location</p>
                    <p className="mt-1 text-sm font-bold text-slate-900">{LOCATION}</p>
                    <p className="mt-2 text-sm text-slate-600">We work with clients across South Africa (remote-friendly).</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border bg-white/35 backdrop-blur-xl shadow-lg overflow-hidden"
                style={{ borderColor: "rgba(255,255,255,0.5)" }}>
                <iframe
                  title="Pretoria Location"
                  src="https://www.google.com/maps?q=Pretoria,+South+Africa&output=embed"
                  className="w-full h-[320px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="p-5">
                  <p className="text-sm text-slate-600">
                    Pretoria, South Africa — serving clients nationwide.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQS */}
          <div className="mt-14">
            <div className="max-w-2xl">
              <p className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium"
                style={{ borderColor: "rgba(19,72,155,0.25)", color: PRIMARY, backgroundColor: "rgba(139,255,240,0.18)" }}>
                FAQs
              </p>
              <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900">Common questions</h2>
              <p className="mt-3 text-slate-600">Quick answers to help you get started with confidence.</p>
            </div>

            <div className="mt-8 grid gap-4">
              {faqs.map((f, idx) => {
                const open = openIndex === idx;
                return (
                  <div key={f.q} className="rounded-3xl border bg-white/35 backdrop-blur-xl shadow-lg overflow-hidden"
                    style={{ borderColor: "rgba(255,255,255,0.5)" }}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-sm sm:text-base font-extrabold text-slate-900">{f.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                        style={{ color: PRIMARY }}
                      />
                    </button>

                    {open && (
                      <div className="px-6 pb-6">
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{f.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
