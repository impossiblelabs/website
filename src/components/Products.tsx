import { Apple, Github, Play } from "lucide-react";
import { Pill } from "@/components/Pill";
import { SectionHeading } from "@/components/SectionHeading";
import type { Project } from "@/data/projects";

interface ProductsProps {
  items: Project[];
  onSelect: (project: Project) => void;
}

export function Products({ items, onSelect }: ProductsProps) {
  return (
    <section id="products" className="scroll-mt-16 md:scroll-mt-[72px] border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-10 md:py-20">
        <SectionHeading
          title="Products"
          blurb="Shipped, and in people’s hands"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((project) => (
            <ProductCard
              key={project.title}
              project={project}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (project: Project) => void;
}) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[20px] border border-paper/8 bg-ink-2 transition-colors hover:border-paper/25">
      <div
        className="flex h-[236px] items-center justify-center overflow-hidden p-6"
        style={{ background: project.background }}
      >
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        {project.tags && (
          <ul className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-paper/15 px-2.5 py-0.5 text-xs font-medium text-mist"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <h3 className="font-display text-[19px] font-semibold tracking-tight">
          {/* Stretched over the whole card; the links below sit above it */}
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

        <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-2">
          {project.website && (
            <Pill href={project.website} primary target="_blank" rel="noopener noreferrer">
              Website
            </Pill>
          )}
          {/* Icon buttons keep every card on one row; the popup spells them out */}
          {project.appStore && (
            <IconPill href={project.appStore} label="App Store">
              <Apple className="h-[18px] w-[18px]" aria-hidden="true" />
            </IconPill>
          )}
          {project.googlePlay && (
            <IconPill href={project.googlePlay} label="Google Play">
              <Play className="h-[17px] w-[17px]" aria-hidden="true" />
            </IconPill>
          )}
          {project.github && (
            <IconPill href={project.github} label="GitHub">
              <Github className="h-[18px] w-[18px]" aria-hidden="true" />
            </IconPill>
          )}
        </div>
      </div>
    </article>
  );
}

function IconPill({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Pill
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="w-11 justify-center px-0 md:w-9 md:px-0"
    >
      {children}
    </Pill>
  );
}
