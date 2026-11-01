import { Penrose } from "@/components/Penrose";

const NAV = [
  { href: "#products", label: "Products" },
  { href: "#lab", label: "Lab" },
  { href: "#about", label: "About" },
];

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-ink/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 md:h-[72px] md:gap-6 md:px-10">
          <a href="#top" className="flex h-11 items-center gap-2.5 rounded-lg text-paper md:gap-3">
            <Penrose className="h-[24px] w-[28px] md:h-[26px] md:w-[30px]" />
            <span className="font-display text-[16px] font-extrabold tracking-tight md:text-lg">
              ImpossibleLabs
            </span>
          </a>

          <nav
            aria-label="Main"
            className="hidden items-center gap-8 text-[15px] font-medium text-mist md:flex"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-paper"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex h-11 shrink-0 items-center whitespace-nowrap rounded-full border border-paper/20 px-3.5 font-display text-[12px] font-semibold text-paper transition-colors hover:bg-ink-3 md:px-4 md:text-[13px]"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* Phones get the section links as a row under the bar; it scrolls away so only the bar stays pinned */}
      <nav
        aria-label="Sections"
        className="flex h-11 items-stretch justify-center gap-1 border-b border-line text-[15px] font-medium text-mist md:hidden"
      >
        {NAV.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex flex-1 items-center justify-center transition-colors hover:text-paper"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}
