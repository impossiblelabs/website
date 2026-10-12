import { Penrose } from "@/components/Penrose";

const NAV = [
  { href: "#products", label: "Products" },
  { href: "#lab", label: "Lab" },
  { href: "#about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 md:h-[72px] md:px-10">
        <a href="#top" className="flex items-center gap-3 text-paper">
          <Penrose className="h-[26px] w-[30px]" />
          <span className="font-display text-[17px] font-extrabold tracking-tight md:text-lg">
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
          href="#about"
          className="inline-flex h-11 shrink-0 items-center whitespace-nowrap rounded-full border border-paper/20 px-4 font-display text-[13px] font-semibold text-paper transition-colors hover:bg-ink-3"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
