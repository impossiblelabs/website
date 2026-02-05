import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Twitter, Github, Linkedin, Loader2, Check, X } from "lucide-react";

// Initialize EmailJS
emailjs.init({
  publicKey: "LbDyYoEu-cDyN8TOY",
  limitRate: {
    id: "impossiblelabs_landing",
    throttle: 5000,
  },
});

interface AboutPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export function AboutPanel({ isOpen, onClose }: AboutPanelProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Reset status after success/error
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle");
        if (status === "success") {
          setName("");
          setEmail("");
          setMessage("");
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all fields");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    try {
      await emailjs.send("service_outlook", "template_3rp5qai", templateParams);
      setStatus("success");
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setStatus("idle");
    setErrorMessage("");
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
                    "Only those who attempt the absurd will achieve the
                    impossible." - M.C. Escher
                  </SheetTitle>
                </SheetHeader>
                <p className="font-body text-gray-400 leading-relaxed mb-8">
                  A hardware and software studio turning wild ideas into real
                  products. Open source by default.
                </p>

                <div className="mb-8">
                  <h3 className="font-heading text-white text-sm uppercase tracking-widest mb-4">
                    Connect
                  </h3>
                  <div className="flex gap-4">
                    {[
                      {
                        icon: Twitter,
                        label: "Twitter/X",
                        href: "https://x.com/OxMarco_",
                      },
                      {
                        icon: Github,
                        label: "GitHub personal",
                        href: "https://github.com/OxMarco",
                      },
                      {
                        icon: Github,
                        label: "GitHub company",
                        href: "https://github.com/impossiblelabs",
                      },
                      {
                        icon: Linkedin,
                        label: "LinkedIn",
                        href: "https://linkedin.com/in/grcasanova/",
                      },
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

                <p className="font-body text-gray-500 text-sm">By OxMarco</p>
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={status === "loading"}
                      className="bg-[#34363b] border-0 text-gray-300 placeholder:text-gray-500 focus-visible:ring-[#34a58e] h-11 disabled:opacity-50"
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === "loading"}
                      className="bg-[#34363b] border-0 text-gray-300 placeholder:text-gray-500 focus-visible:ring-[#34a58e] h-11 disabled:opacity-50"
                    />
                  </div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={status === "loading"}
                    className="w-full bg-[#34363b] border-0 rounded-md text-gray-300 placeholder:text-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#34a58e] resize-none disabled:opacity-50"
                  />

                  {/* Status feedback */}
                  {status === "success" && (
                    <div className="flex items-center gap-2 text-[#34a58e]">
                      <Check className="w-4 h-4" />
                      <span className="text-sm">
                        Message sent successfully!
                      </span>
                    </div>
                  )}
                  {status === "error" && errorMessage && (
                    <div className="flex items-center gap-2 text-red-400">
                      <X className="w-4 h-4" />
                      <span className="text-sm">{errorMessage}</span>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      className="font-brand bg-[#34a58e] hover:bg-[#47c5ab] text-white uppercase tracking-widest text-sm px-6 disabled:opacity-50"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send"
                      )}
                    </Button>
                    <Button
                      type="button"
                      onClick={handleReset}
                      disabled={status === "loading"}
                      variant="outline"
                      className="font-brand border-gray-600 text-white hover:border-[#34a58e] hover:text-[#34a58e] uppercase tracking-widest text-sm px-6 bg-transparent disabled:opacity-50"
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
