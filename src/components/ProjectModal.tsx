import { useEffect, useState, useMemo } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

// Transform relative URLs to absolute GitHub raw URLs
function transformImageUrl(src: string, markdownUrl: string): string {
  // Already absolute URL
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }

  // Get base URL from markdown URL (remove filename)
  const baseUrl = markdownUrl.substring(0, markdownUrl.lastIndexOf("/") + 1);

  // Handle relative paths starting with ./
  if (src.startsWith("./")) {
    return baseUrl + src.slice(2);
  }

  // Handle other relative paths
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
          const text = await response.text();
          setMarkdownContent(text);
        } else {
          setMarkdownContent("Failed to load content.");
        }
      } catch {
        setMarkdownContent("Failed to load content.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarkdown();
  }, [project?.markdown, isOpen]);

  // Custom components for ReactMarkdown with image URL transformation and heading styles
  const markdownComponents: Components = useMemo(
    () => ({
      h1: ({ children }) => (
        <h1 className="font-brand text-2xl text-white tracking-wide mt-8 mb-4 first:mt-0">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="font-brand text-xl text-white tracking-wide mt-8 mb-4 pb-2 border-b border-white/10">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="font-brand text-lg text-white tracking-wide mt-6 mb-3">
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h4 className="font-brand text-base text-white tracking-wide mt-4 mb-2">
          {children}
        </h4>
      ),
      img: ({ src, alt, ...props }) => {
        const transformedSrc = src
          ? transformImageUrl(src, project?.markdown || "")
          : "";
        return (
          <img
            src={transformedSrc}
            alt={alt || ""}
            className="rounded-lg max-w-full"
            {...props}
          />
        );
      },
      code: ({ className, children, ...props }) => {
        const match = /language-(\w+)/.exec(className || "");
        const codeString = String(children).replace(/\n$/, "");

        // Check if it's a code block (has language) or inline code
        if (match) {
          return (
            <SyntaxHighlighter
              style={oneDark}
              language={match[1]}
              PreTag="div"
              className="rounded-lg !bg-[#242629] !my-4 text-sm"
              customStyle={{
                margin: 0,
                padding: "1rem",
                background: "#242629",
              }}
            >
              {codeString}
            </SyntaxHighlighter>
          );
        }

        // Inline code
        return (
          <code
            className="text-[#34a58e] bg-white/5 px-1.5 py-0.5 rounded text-sm font-mono"
            {...props}
          >
            {children}
          </code>
        );
      },
      pre: ({ children }) => {
        // Just pass through - the code component handles the styling
        return <>{children}</>;
      },
    }),
    [project?.markdown],
  );

  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl h-[90vh] p-0 bg-[#1a1c1e] border-white/10 overflow-hidden">
        {/* Single scrollable container for everything */}
        <div className="h-full" style={{ overflowY: "auto" }}>
          {/* Content */}
          <div className="px-6 pb-6">
            <DialogHeader className="pt-4 pb-4">
              <DialogTitle className="font-brand text-xl md:text-2xl text-white tracking-wide">
                {project.title}
              </DialogTitle>
              <p className="font-body text-white/70 text-sm">
                {project.description}
              </p>
            </DialogHeader>

            <article className="font-body text-white prose prose-invert prose-sm md:prose-base max-w-none prose-p:text-white prose-li:text-white prose-strong:text-white prose-headings:font-brand prose-headings:text-white prose-headings:tracking-wide prose-h1:text-2xl prose-h2:text-xl prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-2 prose-a:text-[#34a58e] prose-code:text-[#34a58e] prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-[#242629] prose-pre:text-white prose-blockquote:border-l-[#34a58e] prose-blockquote:text-white/80 prose-table:text-sm prose-th:text-left prose-th:text-white prose-td:text-white prose-td:py-2">
              {isLoading ? (
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full bg-white/10" />
                  <Skeleton className="h-4 w-3/4 bg-white/10" />
                  <Skeleton className="h-4 w-5/6 bg-white/10" />
                  <Skeleton className="h-4 w-2/3 bg-white/10" />
                </div>
              ) : (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={markdownComponents}
                >
                  {markdownContent}
                </ReactMarkdown>
              )}
            </article>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
