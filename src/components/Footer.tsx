// src/components/Footer.tsx
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

import Logo from "../assets/logo.png";

const PRIMARY = "#13489B";
// const SECONDARY = "#8BFFF0";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0b1220] text-white">
      {/* Top glow */}
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: PRIMARY }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Logo + short note */}
          <div>
            <img
              src={Logo}
              alt="Logo"
              className="h-25 w-auto mb-4"
              draggable={false}
            />
            <p className="text-sm text-white/70 max-w-xs">
                We design and build fast, modern websites that help businesses stand
              out and convert visitors into customers.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link to="/" className="hover:text-[#8BFFF0] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#8BFFF0] transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-[#8BFFF0] transition">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#8BFFF0] transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#8BFFF0] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#8BFFF0]" />
                <a
                  href="mailto:tshidisomexico@gmail.com"
                  className="hover:text-[#8BFFF0] transition"
                >
                  tshidisomexico@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#8BFFF0]" />
                <a
                  href="https://wa.me/27658207639"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#8BFFF0] transition"
                >
                  WhatsApp 
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Tshidiso13"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8BFFF0] transition"
                aria-label="GitHub"
              >
                <Github />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8BFFF0] transition"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>

              <a
                href="https://www.instagram.com/code_by.tshidiso?igsh=MW40bDJ1MGp4anJ5Mg=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8BFFF0] transition"
                aria-label="Instagram"
              >
                <Instagram />
              </a>

              <a
                href="https://www.facebook.com/share/1BjY6qPmSu/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8BFFF0] transition"
                aria-label="Facebook"
              >
                <Facebook />
              </a>

              {/* TikTok (SVG since lucide doesn't include it) */}
              <a
                href="https://www.tiktok.com/@code.by.tshidiso?_r=1&_t=ZS-93G0MLc59BY"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8BFFF0] transition"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.525 2h3.057c.082.785.295 1.561.632 2.288a6.79 6.79 0 002.08 2.388 6.85 6.85 0 002.706 1.216V11.1a10.13 10.13 0 01-2.706-.424 9.75 9.75 0 01-2.08-.99v6.54a6.57 6.57 0 01-1.98 4.688A6.77 6.77 0 018.5 22a6.94 6.94 0 01-4.826-1.923A6.42 6.42 0 012 15.354c0-3.52 2.817-6.39 6.287-6.39.334 0 .663.026.987.078v3.39a3.09 3.09 0 00-.987-.16c-1.78 0-3.224 1.43-3.224 3.083 0 1.701 1.444 3.085 3.224 3.085 1.996 0 3.238-1.358 3.238-3.484V2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © {year} Tshidiso. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
