 "use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { Badge } from "@/components/Badge";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 45 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .15 }}
      transition={{ duration: .7, delay: index * .08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reduced ? undefined : { y: -8 }}
      className="glass group relative overflow-hidden rounded-3xl p-6 sm:p-7"
    >
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan/5 blur-3xl transition duration-500 group-hover:bg-cyan/12" />
      <div className="relative flex items-start justify-between">
        <span className="font-mono text-xs text-cyan">{project.number}</span>
        <GitBranch size={16} className="text-zinc-700 transition group-hover:text-cyan" />
      </div>

      <p className="relative mt-14 font-mono text-[9px] tracking-[.22em] text-zinc-600">{project.category}</p>
      <h3 className="relative mt-2 text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
      <p className="relative mt-4 text-sm leading-7 text-zinc-600">{project.description}</p>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => <Badge key={item}>{item}</Badge>)}
      </div>

      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring relative mt-8 inline-flex items-center font-mono text-[10px] tracking-[.12em] text-zinc-400 transition hover:text-cyan"
      >
        VIEW REPOSITORY <ArrowUpRight size={14} className="ml-2" />
      </a>
    </motion.article>
  );
}
