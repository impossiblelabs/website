import { useEffect, useState, useMemo } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Pill } from "@/components/Pill";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

// Relative README paths resolve against the README's own location
function transformImageUrl(src: string, markdownUrl: string): string {
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  const baseUrl = markdownUrl.substring(0, markdownUrl.lastIndexOf("/") + 1);
  if (src.startsWith("./")) {
    return baseUrl + src.slice(2);
  }
  return baseUrl + src;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!project?.markdown || !isOpen) {
      setMarkdownContent("");
      return;
    }

    const fetchMarkdown = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(project.markdown);
        if (response.ok) {
          setMarkdownContent(await response.text());
        } else {
          setMarkdownContent("The write-up could not be loaded. The GitHub link below has the full README.");
        }
      } catch {
        setMarkdownContent("The write-up could not be loaded. The GitHub link below has the full README.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarkdown();
  }, [project?.markdown, isOpen]);

  const markdownComponents: Components = useMemo(
    () => ({
      h1: ({ children }) => (
        <h1 className="mt-8 mb-3 font-display text-[22px] font-semibold tracking-[-0.02em] text-paper first:mt-0">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="mt-8 mb-3 font-display text-[18px] font-semibold tracking-[-0.02em] text-paper">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="mt-6 mb-2 font-display text-[16px] font-semibold tracking-[-0.01em] text-paper">
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h4 className="mt-5 mb-2 text-base font-semibold text-paper">
          {children}
        </h4>
      ),
      img: ({ src, alt, ...props }) => (
        <img
          src={src ? transformImageUrl(src, project?.markdown || "") : ""}
          alt={alt || ""}
          loading="lazy"
          {...props}
        />
      ),
      source: ({ srcSet, ...props }) => (
        <source
          srcSet={
            srcSet ? transformImageUrl(srcSet, project?.markdown || "") : ""
          }
          {...props}
        />
      ),
      code: ({ className, children, ...props }) => {
        const match = /language-(\w+)/.exec(className || "");
        const codeString = String(children).replace(/\n$/, "");

        if (match) {
          return (
            <SyntaxHighlighter
              style={oneDark}
              language={match[1]}
              PreTag="div"
              className="my-4 rounded-xl border border-line text-sm"
              customStyle={{
                margin: 0,
                padding: "1rem 1.1rem",
                background: "#0b2a4a",
              }}
            >
              {codeString}
            </SyntaxHighlighter>
          );
        }

        return (
          <code className="font-mono" {...props}>
            {children}
          </code>
        );
      },
      pre: ({ children }) => <>{children}</>,
    }),
    [project?.markdown],
  );

  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="flex h-[90vh] max-w-3xl flex-col gap-0 overflow-hidden rounded-3xl border-line bg-ink-2 p-0 sm:max-w-3xl">
        {project.background && (
          <div
            className="flex h-44 flex-none items-center justify-center p-5 md:h-56"
            style={{ background: project.background }}
          >
            <img
              src={project.image}
              alt=""
              className="max-h-full max-w-full object-contain"
            />
          </div>
        )}

        <DialogHeader className="flex-none gap-2.5 border-b border-line px-6 pt-6 pb-5 text-left md:px-8">
          <DialogTitle className="font-display text-[24px] font-bold tracking-[-0.03em] text-paper md:text-[26px]">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-[17px] leading-relaxed text-mist">
            {project.description}
          </DialogDescription>
          <div className="mt-1.5 flex flex-wrap gap-2">
            {project.website && (
              <Pill href={project.website} primary target="_blank" rel="noopener noreferrer">
                Website
              </Pill>
            )}
            {project.appStore && (
              <Pill href={project.appStore} target="_blank" rel="noopener noreferrer">
                App Store
              </Pill>
            )}
            {project.googlePlay && (
              <Pill href={project.googlePlay} target="_blank" rel="noopener noreferrer">
                Google Play
              </Pill>
            )}
            {project.github && (
              <Pill href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </Pill>
            )}
          </div>
        </DialogHeader>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6 md:px-8">
          {isLoading ? (
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ) : (
            <article className="readme">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={markdownComponents}
              >
                {markdownContent}
              </ReactMarkdown>
            </article>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
