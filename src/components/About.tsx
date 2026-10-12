import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Check, Github, Linkedin, Loader2 } from "lucide-react";

emailjs.init({
  publicKey: "LbDyYoEu-cDyN8TOY",
  limitRate: {
    id: "impossiblelabs_landing",
    throttle: 5000,
  },
});

const SOCIAL = [
  {
    label: "OxMarco_ on X",
    href: "https://x.com/OxMarco_",
    Icon: XIcon,
  },
  {
    label: "OxMarco on GitHub",
    href: "https://github.com/OxMarco",
    Icon: Github,
  },
  {
    label: "ImpossibleLabs on GitHub",
    href: "https://github.com/impossiblelabs",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/grcasanova/",
    Icon: Linkedin,
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-2 md:gap-20 md:px-10 md:py-20">
        <div className="flex flex-col gap-5">
          <h2 className="font-display text-[26px] font-bold tracking-[-0.03em] md:text-[34px]">
            About
          </h2>
          <p className="max-w-[52ch] text-lg leading-relaxed text-body">
            ImpossibleLabs is where OxMarco builds the things that sound like
            a bad idea at first: a bedroom sensor with an e-ink face, a game
            about guessing prices, a sea map for one small country.
          </p>
          <p className="max-w-[52ch] text-lg leading-relaxed text-body">
            Hardware, firmware and apps are open source unless a project says
            otherwise. Say hello if you want to collaborate, you built one of
            these, or something is broken.
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {SOCIAL.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center gap-2 rounded-full border border-paper/20 px-3.5 text-sm font-semibold text-paper transition-colors hover:bg-ink-3"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

type FormStatus = "idle" | "sending" | "sent" | "error";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setError("Fill in your name, email and a message.");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      await emailjs.send("service_outlook", "template_3rp5qai", {
        from_name: name,
        from_email: email,
        message,
      });
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Email send failed:", err);
      setStatus("error");
      setError("Sending failed. Try again in a moment, or reach out on GitHub.");
    }
  };

  const fieldClass =
    "h-12 w-full rounded-xl border border-paper/15 bg-ink px-3.5 text-base text-paper transition-colors focus:border-accent focus:outline-none disabled:opacity-60";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-[20px] border border-paper/8 bg-ink-2 p-6 md:p-8"
    >
      <h3 className="mb-1 font-display text-[22px] font-bold tracking-[-0.02em]">
        Get in touch
      </h3>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-name" className="text-sm font-medium text-mist">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Ada"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={status === "sending"}
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-email" className="text-sm font-medium text-mist">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="ada@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "sending"}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-sm font-medium text-mist">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="What are you building?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={status === "sending"}
          className="min-h-[140px] w-full resize-y rounded-xl border border-paper/15 bg-ink px-3.5 py-3 text-base leading-relaxed text-paper transition-colors focus:border-accent focus:outline-none disabled:opacity-60"
        />
      </div>

      <div className="mt-1 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-full bg-accent px-5 font-display text-sm font-semibold text-ink transition-colors hover:bg-accent-strong disabled:cursor-default disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            "Send message"
          )}
        </button>

        <p className="text-sm" role="status" aria-live="polite">
          {status === "sent" && (
            <span className="inline-flex items-center gap-1.5 text-accent">
              <Check className="h-4 w-4" aria-hidden="true" />
              Sent. You’ll hear back soon.
            </span>
          )}
          {status === "error" && <span className="text-[#ff9b9b]">{error}</span>}
          {(status === "idle" || status === "sending") && (
            <span className="text-mist">Replies usually take a few days.</span>
          )}
        </p>
      </div>
    </form>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 4l16 16" />
      <path d="M20 4L4 20" />
    </svg>
  );
}
