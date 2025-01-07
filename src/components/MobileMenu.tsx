import { useState, useEffect } from "react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden"
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden">
          <div className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-background p-8 ring-1 ring-zinc-900/5 dark:ring-white/10">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Skills
              </a>
              <a
                href="#qualification"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Qualification
              </a>
              <a
                href="#services"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Services
              </a>
              <a
                href="#portfolio"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
