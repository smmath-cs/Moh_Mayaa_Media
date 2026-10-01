import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-ivory text-oxblood pt-8 pb-10 px-6 md:px-12 border-t border-oxblood/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Title + Subtitle Container with Reduced Spacing */}
        <div className="w-full text-center mb-8 flex flex-col items-center gap-2">
          {/* Added tracking-wide to spread out letters and space-x-6 / gap-6 for spaces between words */}
          <h1 className="font-display font-bold text-[6.5vw] whitespace-nowrap leading-none tracking-wide uppercase select-none flex items-center justify-center gap-4 md:gap-8">
            <span>MOH</span>
            <span>MAYAA</span>
            <span>MEDIA</span>
          </h1>
          <p className="font-deva text-sm md:text-base tracking-wide text-oxblood/80">
            हर खुशी का मोह, हर पल की माया
          </p>
        </div>

        {/* Bottom Bar: Copyright, Policy Links & Social Icons */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 pt-6 border-t border-oxblood/15 text-xs text-ink-soft">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2">
            <span>© {new Date().getFullYear()} Moh Mayaa Media. All Rights Reserved.</span>
            <a href="#privacy" className="underline hover:text-oxblood transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="underline hover:text-oxblood transition-colors">
              Terms of Use
            </a>
          </div>

          <div className="flex items-center gap-5 text-oxblood">
            <a
              href="https://www.instagram.com/mohmayaamedia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:scale-110 transition-transform"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3.6" strokeWidth="1.5" />
                <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/mohmayamediaofficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:scale-110 transition-transform"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                <path
                  d="M15 8.5h2V5h-2c-2.2 0-4 1.8-4 4v2H9v3.5h2V21h3.5v-6.5H17l.7-3.5h-3.2V9c0-.3.2-.5.5-.5z"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="https://wa.me/918431041060"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:scale-110 transition-transform"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                <path
                  d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
