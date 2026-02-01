import ReactMarkdown from "react-markdown";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl h-[90vh] p-0 bg-[#1a1c1e] border-white/10 overflow-hidden">
        {/* Single scrollable container for everything */}
        <div className="h-full" style={{ overflowY: "auto" }}>
          {/* Hero image - scrolls with content */}
          <div className="relative h-48 md:h-64">
            <img
              src={project.fullImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1e] via-transparent to-transparent" />
          </div>

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
              <ReactMarkdown>{project.markdown}</ReactMarkdown>
            </article>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
