import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Twitter,
  Facebook,
  Instagram,
  Github,
  Dribbble,
  Linkedin,
} from "lucide-react";

interface AboutPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutPanel({ isOpen, onClose }: AboutPanelProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side="bottom"
        className="h-[80vh] bg-[#242629]/98 border-t border-white/10 p-0"
      >
        <ScrollArea className="h-full">
          <div className="max-w-5xl mx-auto p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              {/* Left column - About */}
              <div>
                <SheetHeader className="mb-6 text-left">
                  <SheetTitle className="font-heading text-white text-lg md:text-xl tracking-wide italic">
                    "Only those who attempt the absurd will achieve the impossible." - M.C. Escher
                  </SheetTitle>
                </SheetHeader>
                <p className="font-body text-gray-400 leading-relaxed mb-8">
                  A hardware and software studio turning wild ideas into real products. Open source by default.
                </p>

                <div className="mb-8">
                  <h3 className="font-heading text-white text-sm uppercase tracking-widest mb-4">
                    Connect
                  </h3>
                  <div className="flex gap-4">
                    {[
                      { icon: Twitter, label: "Twitter/X", href: "https://x.com/OxMarco_" },
                      { icon: Github, label: "GitHub", href: "https://github.com/OxMarco" },
                      { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/grcasanova/" },
                    ].map(({ icon: Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#34a58e] transition-colors"
                        aria-label={label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                <p className="font-body text-gray-500 text-sm">
                  By OxMarco
                </p>
              </div>

              {/* Right column - Contact form */}
              <div>
                <h2 className="font-brand text-white text-xl md:text-2xl tracking-wide uppercase mb-6">
                  Get in touch
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      type="text"
                      placeholder="Name"
                      className="bg-[#34363b] border-0 text-gray-300 placeholder:text-gray-500 focus-visible:ring-[#34a58e] h-11"
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-[#34363b] border-0 text-gray-300 placeholder:text-gray-500 focus-visible:ring-[#34a58e] h-11"
                    />
                  </div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full bg-[#34363b] border-0 rounded-md text-gray-300 placeholder:text-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#34a58e] resize-none"
                  />
                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      className="font-brand bg-[#34a58e] hover:bg-[#47c5ab] text-white uppercase tracking-widest text-sm px-6"
                    >
                      Send
                    </Button>
                    <Button
                      type="reset"
                      variant="outline"
                      className="font-brand border-gray-600 text-white hover:border-[#34a58e] hover:text-[#34a58e] uppercase tracking-widest text-sm px-6 bg-transparent"
                    >
                      Reset
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
