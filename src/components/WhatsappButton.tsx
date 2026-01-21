// src/components/WhatsAppButton.tsx
import { useMemo } from "react";


const WHATSAPP_NUMBER = "27658207639"; // ✅ your number (no +)
const DEFAULT_MESSAGE =
  "Hi Tshidiso, I’d like a website. Please share a quote and next steps.";

type Props = {
  phone?: string;     // optional override
  message?: string;   // optional override
};

const WhatsAppButton = ({ phone = WHATSAPP_NUMBER, message = DEFAULT_MESSAGE }: Props) => {
  const waLink = useMemo(() => {
    const clean = String(phone).replace(/[^\d]/g, "");
    return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
  }, [phone, message]);

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50
        h-14 w-14 sm:h-16 sm:w-16
        rounded-full
        flex items-center justify-center
        shadow-2xl
        transition-transform duration-200
        hover:scale-110 active:scale-95
        focus:outline-none focus:ring-4
      "
      style={{
        backgroundColor: "#25D366",
        boxShadow: "0 18px 45px rgba(0,0,0,0.25)",
      }}
      onMouseEnter={(e) => {
        // subtle brand glow (optional)
        (e.currentTarget as HTMLAnchorElement).style.boxShadow =
          `0 18px 45px rgba(0,0,0,0.25), 0 0 0 6px rgba(139,255,240,0.18)`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.boxShadow =
          "0 18px 45px rgba(0,0,0,0.25)";
      }}
    >
      {/* little pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-20"
        style={{ backgroundColor: "#25D366" }}
        aria-hidden="true"
      />

      {/* icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 sm:h-8 sm:w-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ color: "white" }}
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.913 11.913 0 0012 0C5.372 0 0 5.372 0 12c0 2.11.55 4.07 1.51 5.83L0 24l6.27-1.51A11.937 11.937 0 0012 24c6.628 0 12-5.372 12-12 0-3.19-1.25-6.19-3.48-8.52zm-8.28 18.4c-1.85 0-3.68-.5-5.28-1.44l-.37-.22-3.73.9.9-3.63-.24-.37C2.1 15.71 1.6 13.88 1.6 12c0-5.72 4.68-10.4 10.4-10.4s10.4 4.68 10.4 10.4-4.68 10.4-10.4 10.4zm5.09-7.21c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.21-.59.07-.28-.14-1.18-.44-2.24-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.47.09-.18.05-.35-.02-.49-.07-.14-.61-1.47-.84-2.02-.22-.53-.44-.46-.61-.47l-.52-.01c-.16 0-.42.06-.64.29s-.84.82-.84 2 .86 2.33.98 2.49c.12.16 1.69 2.59 4.1 3.63.57.25 1.01.4 1.36.51.57.18 1.09.15 1.5.09.46-.07 1.64-.67 1.87-1.32.23-.66.23-1.22.16-1.32-.07-.11-.25-.18-.53-.32z" />
      </svg>

      
      
    </a>
  );
};

export default WhatsAppButton;
