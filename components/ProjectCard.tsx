"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, GitBranch, X } from "lucide-react";

import { Badge } from "@/components/Badge";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reduced = useReducedMotion();
  const [imageOpen, setImageOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={reduced ? false : { opacity: 0, y: 45 }}
        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.7,
          delay: index * 0.08,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={reduced ? undefined : { y: -8 }}
        onClick={() => setImageOpen(true)}
        className="
          group
          relative
          min-h-[430px]
          cursor-pointer
          overflow-hidden
          rounded-3xl
          border
          border-white/[.07]
          bg-[#080a0e]
        "
      >
        {/* =====================================================
            PROJECT IMAGE
        ====================================================== */}
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="
              object-cover
              opacity-[0.48]
              transition-all
              duration-700
              group-hover:scale-105
              group-hover:opacity-[0.68]
            "
          />

          {/* 
            Darken the image progressively toward the bottom.

            TOP    → image remains visible
            MIDDLE → darker
            BOTTOM → very dark
          */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-b
              from-[#050609]/10
              via-[#050609]/45
              to-[#050609]/95
            "
          />

          {/* 
            Extra bottom protection for:
            description
            technology badges
            repository link
          */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-[#050609]
              via-[#050609]/40
              to-transparent
            "
          />
        </div>

        {/* =====================================================
            CARD CONTENT
        ====================================================== */}
        <div className="relative flex min-h-[430px] flex-col p-6 sm:p-7">
          {/* Header */}
          <div className="flex items-start justify-between">
            <span className="font-mono text-xs text-cyan">
              {project.number}
            </span>

            <GitBranch
              size={16}
              className="
                text-zinc-700
                transition-colors
                duration-300
                group-hover:text-cyan
              "
            />
          </div>

          {/* Project information */}
          <div className="mt-auto">
            <p
              className="
                font-mono
                text-[9px]
                tracking-[.22em]
                text-zinc-500
              "
            >
              {project.category}
            </p>

            <h3
              className="
                mt-2
                text-2xl
                font-semibold
                tracking-tight
                text-white
              "
            >
              {project.title}
            </h3>

            <p
              className="
                mt-4
                max-w-xl
                text-sm
                leading-7
                text-zinc-400
              "
            >
              {project.description}
            </p>

            {/* Technology badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>

            {/* Repository */}
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="
                focus-ring
                mt-8
                inline-flex
                items-center
                font-mono
                text-[10px]
                tracking-[.12em]
                text-zinc-400
                transition-colors
                hover:text-cyan
              "
            >
              VIEW REPOSITORY
              <ArrowUpRight
                size={14}
                className="ml-2"
              />
            </a>
          </div>
        </div>
      </motion.article>

      {/* =======================================================
          IMAGE MODAL
      ======================================================== */}
      {imageOpen ? (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/90
            p-5
            backdrop-blur-sm
          "
          onClick={() => setImageOpen(false)}
        >
          {/* Close button */}
          <button
            type="button"
            aria-label="Close image preview"
            onClick={() => setImageOpen(false)}
            className="
              focus-ring
              absolute
              right-5
              top-5
              z-10
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-black/50
              text-zinc-300
              transition-colors
              hover:border-cyan/30
              hover:text-cyan
            "
          >
            <X size={20} />
          </button>

          {/* Image */}
          <div
            className="
              relative
              max-h-[90vh]
              max-w-[92vw]
            "
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              width={1400}
              height={900}
              className="
                max-h-[85vh]
                w-auto
                rounded-xl
                object-contain
              "
            />

            <p
              className="
                mt-3
                text-center
                font-mono
                text-[10px]
                uppercase
                tracking-[.2em]
                text-zinc-500
              "
            >
              {project.title}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}