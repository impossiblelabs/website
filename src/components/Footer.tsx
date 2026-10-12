import { Penrose } from "@/components/Penrose";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 md:flex-row md:items-center md:justify-between md:px-10 md:py-8">
        <div className="flex items-center gap-2.5">
          <Penrose className="h-[19px] w-[22px]" />
          <span className="font-display text-[15px] font-extrabold tracking-tight">
            ImpossibleLabs
          </span>
        </div>
        <p className="text-sm text-mist">
          Made by OxMarco. Open source unless a project says otherwise.
        </p>
      </div>
    </footer>
  );
}
