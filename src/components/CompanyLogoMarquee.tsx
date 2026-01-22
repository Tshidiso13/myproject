// src/components/CompanyLogoMarquee.tsx


import Logo3 from "../assets/logo-3.png";
import Logo4 from "../assets/logo-4.png";
import Logo5 from "../assets/logo-5.png";
import Logo6 from "../assets/logo-6.png";
import Logo7 from "../assets/logo-7.png";


const companyLogos = [  Logo3, Logo4, Logo5, Logo6, Logo7];
const PRIMARY = "#13489B";

const CompanyLogoMarquee = () => {
  return (
    <>
      <style>{`
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <section className="w-full py-10">
        {/* TITLE */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          {/* Title */}
          <div className="mb-10">
            <p
              className="inline-flex items-center rounded-full border px-6 py-2 text-sm font-semibold"
              style={{
                borderColor: "rgba(19,72,155,0.25)",
                color: PRIMARY,
                backgroundColor: "rgba(139,255,240,0.18)",
              }}
            >
              Platforms &amp; tools we use
            </p>
          </div>

        {/* MARQUEE */}
        <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
          {/* LEFT FADE */}
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

          <div
            className="marquee-inner flex will-change-transform min-w-[200%]"
            style={{ animationDuration: "15s" }}
          >
            <div className="flex items-center">
              {[...companyLogos, ...companyLogos].map((company, index) => (
                <div
                  key={index}
                  className="mx-1 flex items-center justify-center"
                >
                  <img
                    src={company}
                    alt="Company logo"
                    className="h-9 sm:h-11 md:h-12 lg:h-14 w-auto object-contain"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT FADE */}
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
        </div>

        {/* LEGAL DISCLAIMER */}
        <div className="max-w-5xl mx-auto px-4 mt-4">
          <p className="text-center text-xs text-slate-500 leading-relaxed">
            Logos are trademarks of their respective owners. Usage indicates
            technology experience, not endorsement.
          </p>
        </div>
        </div>
      </section>
    </>
  );
};

export default CompanyLogoMarquee;
