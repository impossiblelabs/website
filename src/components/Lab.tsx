import { useState } from "react";
import { Pill } from "@/components/Pill";
import { SectionHeading } from "@/components/SectionHeading";
import type { Project } from "@/data/projects";

interface LabProps {
  items: Project[];
  onSelect: (project: Project) => void;
}

export function Lab({ items, onSelect }: LabProps) {
  return (
    <section id="lab" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-10 md:py-20">
        <SectionHeading
          title="From the lab"
          blurb="Hardware hacks and prototypes. Code, schematics and notes are on GitHub."
        />
        <ul className="border-t border-line">
          {items.map((project) => (
            <li
              key={project.title}
              className="group relative -mx-3 grid grid-cols-[56px_minmax(0,1fr)] items-center gap-x-5 gap-y-3 rounded-[14px] border-b border-line px-3 py-5 transition-colors hover:bg-[#10355a] md:grid-cols-[72px_minmax(0,1fr)_auto] md:gap-6"
            >
              <Thumb src={project.image} title={project.title} />

              <div className="flex min-w-0 flex-col gap-1">
                <h3 className="font-display text-[16px] font-semibold tracking-tight">
                  <button
                    type="button"
                    onClick={() => onSelect(project)}
                    className="cursor-pointer text-left decoration-2 underline-offset-4 after:absolute after:inset-0 after:content-[''] group-hover:underline focus-visible:underline focus-visible:outline-none"
                  >
                    {project.title}
                  </button>
                </h3>
                <p className="text-[15px] leading-relaxed text-mist">
                  {project.description}
                </p>
              </div>

              {project.github && (
                <Pill
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 col-start-2 justify-self-start md:col-start-auto"
                >
                  GitHub
                </Pill>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Square thumbnail that falls back to the project's initial if the image is missing */
function Thumb({ src, title }: { src: string; title: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-ink-2 md:h-[72px] md:w-[72px]">
      {failed ? (
        <span className="font-display text-xl font-bold text-mist" aria-hidden="true">
          {title.charAt(0)}
        </span>
      ) : (
        <img
          src={src}
          alt=""
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}
