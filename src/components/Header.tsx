import { Button } from "@/components/ui/button";

interface HeaderProps {
  onAboutClick: () => void;
}

export function Header({ onAboutClick }: HeaderProps) {
  return (
    <header className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-[#1f2224] border-t border-white/10 md:h-20">
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        <div>
          <span className="font-brand text-white text-lg md:text-xl">
            ImpossibleLabs
          </span>
          <span className="block font-body text-gray-400 text-xs md:text-sm font-light">
            building absurd products for fun
          </span>
        </div>
        <nav>
          <Button
            variant="ghost"
            onClick={onAboutClick}
            className="font-brand text-white hover:bg-white hover:text-black uppercase tracking-widest text-xs md:text-sm"
          >
            About
          </Button>
        </nav>
      </div>
    </header>
  );
}
