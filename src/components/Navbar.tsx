// src/components/Navbar.tsx
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

import Logo from "../assets/logo.png";

type ServiceLink = { label: string; to: string };

const servicesLinks: ServiceLink[] = [
  { label: "Business Websites", to: "/services/business-websites" },
  { label: "Landing Pages", to: "/services/landing-pages" },
  { label: "Website Redesign", to: "/services/redesign" },
  { label: "WordPress & E-Commerce", to: "/services/wordpress-ecommerce" },
];

const SECONDARY = "orange";
const PRIMARY = "#8BFFF0";
const ANOTHER_COLOR = "#13489B";

const navLinkBase = "text-sm md:text-[15px] font-medium transition";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // hide navbar on scroll down
  const [hideNav, setHideNav] = useState(false);
  const lastScrollY = useRef(0);

  const servicesRef = useRef<HTMLDivElement | null>(null);

  // close dropdown on outside click
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      const el = servicesRef.current;
      if (el && !el.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  // scroll logic (hide on down, show on up)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      const goingDown = y > lastScrollY.current;
      const pastHero = y > 60;

      if (pastHero && goingDown) {
        setHideNav(true);
        setMobileOpen(false);
        setServicesOpen(false);
      } else {
        setHideNav(false);
      }

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className={[
        "fixed top-0 left-0 w-full z-50 transition-transform duration-300",
        hideNav ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
    >
      {/* FULLY TRANSPARENT NAVBAR */}
      <nav className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="h-[72px] flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center pt-3" onClick={closeAll}>
              <img
                src={Logo}
                alt="Logo"
                className="h-30 w-auto select-none"
                draggable={false}
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink
                to="/"
                className={navLinkBase}
                style={({ isActive }) => ({
                  color: isActive ? SECONDARY : "orange",
                })}
              >
                Home
              </NavLink>

              {/* Services dropdown */}
              {/* Services dropdown */}
<div className="relative flex items-center gap-2" ref={servicesRef}>
  {/* Services text = clickable link (navigates) */}
  <NavLink
    to="/services"
    className={navLinkBase}
    style={({ isActive }) => ({
      color: isActive ? SECONDARY : "orange",
    })}
    onClick={closeAll}
  >
    Services
  </NavLink>

  {/* Chevron = only toggles dropdown (no navigation) */}
  <button
    type="button"
    onClick={() => setServicesOpen((prev) => !prev)}
    className="inline-flex items-center justify-center"
    aria-label={servicesOpen ? "Close services menu" : "Open services menu"}
  >
    <ChevronDown
      className={`h-4 w-4 text-orange-500 transition-transform duration-300 ${
        servicesOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  {/* Dropdown */}
  {servicesOpen && (
    <div
      className="
        absolute left-0 top-full mt-3 w-56 rounded-2xl
        bg-white/50 backdrop-blur-xl
        border border-white/40
        shadow-xl overflow-hidden
        animate-in fade-in slide-in-from-top-2 duration-200
      "
    >
      <div className="p-2">
        {servicesLinks.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={closeAll}
            className="
              block rounded-xl px-3 py-2 text-sm font-medium
              text-slate-900 transition
            "
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(19,72,155,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  )}
</div>


              <NavLink
                to="/work"
                className={navLinkBase}
                style={({ isActive }) => ({
                  color: isActive ? SECONDARY : "orange",
                })}
              >
                Work
              </NavLink>

              <NavLink
                to="/about"
                className={navLinkBase}
                style={({ isActive }) => ({
                  color: isActive ? SECONDARY : "orange",
                })}
              >
                About
              </NavLink>

              {/* Contact */}
              <NavLink
                to="/contact"
                className="rounded-xl px-4 py-2 text-sm font-medium border transition"
                style={{
                  borderColor: SECONDARY,
                  color: SECONDARY,
                }}
                onClick={closeAll}
              >
                Contact
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-secondary"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (zigzag squeeze) */}
        {mobileOpen && (
          <div className="md:hidden bg-black/80">
            <div className="px-6 py-6 flex flex-col gap-4">
              {["Home", "Services", "Work", "About"].map((item, index) => (
                <NavLink
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  onClick={closeAll}
                  className={[
                    "px-5 py-3 text-sm font-medium rounded-2xl transition",
                    "bg-white/10 text-white",
                    index % 2 === 0 ? "self-start" : "self-end",
                    "max-w-[85%]",
                    "hover:bg-white/20",
                  ].join(" ")}
                >
                  {item}
                </NavLink>
              ))}

              <NavLink
                to="/contact"
                onClick={closeAll}
                className="px-6 py-3 text-sm font-semibold rounded-2xl self-start max-w-[85%] transition"
                style={{
                  backgroundColor: PRIMARY,
                  color: ANOTHER_COLOR,
                }}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
