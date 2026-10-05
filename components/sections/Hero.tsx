"use client";
import { Oxanium } from "next/font/google";
const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["600", "700"],
});
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Cloud,
  Github,
  Linkedin,
  Network,
  Server,
} from "lucide-react";

import { Button } from "@/components/Button";
import { Container as PageContainer } from "@/components/Container";

const techStack = ["NEXT.JS", "DOCKER", "JENKINS", "AWS", "LINUX"];

const stats = [
  { value: "03+", label: "YEARS LEARNING" },
  { value: "08+", label: "PROJECTS" },
  { value: "06+", label: "CORE TOOLS" },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  /* =========================================================
     ANIMATION VARIANTS
  ========================================================== */

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 18,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const stagger: Variants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative flex min-h-[calc(100svh-1px)] items-center overflow-hidden bg-[#05070a] text-white"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Cyan ambient glow */}
        <motion.div
          className="absolute left-[25%] top-[8%] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.035] blur-[120px]"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.35, 0.6, 0.35],
                  scale: [1, 1.08, 1],
                }
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Right ambient glow */}
        <div className="absolute right-[5%] top-[25%] h-[350px] w-[350px] rounded-full bg-blue-500/[0.025] blur-[120px]" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05070a] to-transparent" />
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================== */}

      <PageContainer className="relative z-10 w-full py-8 sm:py-12 lg:py-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-7 lg:grid-cols-[1.18fr_.82fr] lg:gap-10"
        >
          {/* =====================================================
              LEFT SIDE
          ====================================================== */}

          <div className="min-w-0">
            

            {/* ===================================================
                NAME
            ==================================================== */}

            <motion.div variants={fadeUp}>
              <h1
  className={`${oxanium.className} text-[clamp(3rem,5.5vw,5.7rem)] font-bold leading-[0.9] tracking-[-0.055em] text-white`}
>
                PIYUMAL
                <br />
                SANDARUWAN
                <span className="ml-2 inline-block h-[0.12em] w-[0.62em] translate-y-[-0.05em] bg-cyan-400 align-middle" />
              </h1>
            </motion.div>

            {/* ===================================================
                ROLE
            ==================================================== */}

            <motion.div
              variants={fadeUp}
              className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[9px] font-medium tracking-[0.14em] sm:text-[10px]"
            >
              <span className="text-emerald-400">→</span>

              <span className="text-cyan-400">DEVOPS</span>

              <span className="text-zinc-700">/</span>

              <span className="text-cyan-400">CLOUD</span>

              <span className="text-zinc-700">/</span>

              <span className="text-cyan-400">NETWORKING</span>
            </motion.div>

            {/* ===================================================
                DESCRIPTION
            ==================================================== */}

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-[15px] leading-6 text-zinc-300 sm:text-base"
            >
              ICT undergraduate focused on building applications,
              automating CI/CD pipelines and deploying cloud-ready systems.
            </motion.p>
         
            {/* <motion.p
              variants={fadeUp}
              className="mt-1.5 max-w-xl text-xs leading-5 text-zinc-500 sm:text-sm"
            >
              I enjoy working across the stack — from source code and
              containers to infrastructure and production deployment.
            </motion.p> */}

            {/* ===================================================
                TERMINAL PROFILE
            ==================================================== */}

            <motion.div
              variants={fadeUp}
              className="mt-5 max-w-[620px] overflow-hidden rounded-xl border border-white/[0.08] bg-[#080b0f]/95 shadow-2xl shadow-black/30"
            >
              {/* Terminal header */}
              <div className="flex h-8 items-center border-b border-white/[0.07] px-3.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                </div>

                <span className="ml-4 font-mono text-[8px] tracking-[0.18em] text-zinc-600">
                  profile.sh
                </span>

                <span className="ml-auto font-mono text-[8px] text-emerald-400">
                  RUNNING
                </span>
              </div>

              {/* Terminal body */}
              <div className="px-3.5 py-2.5 font-mono text-[9px] leading-[1.45rem] sm:text-[10px]">
                <div>
                  <span className="text-cyan-400">piyumal@portfolio</span>
                  <span className="text-zinc-600">:</span>
                  <span className="text-zinc-500">~</span>
                  <span className="text-zinc-600"> $ </span>
                  <span className="text-zinc-200">cat profile.txt</span>
                </div>

                <div className="mt-0.5 text-zinc-500">
                  <p>
                    <span className="text-zinc-600">role:</span>{" "}
                    <span className="text-zinc-300">
                      ICT Undergraduate
                    </span>
                  </p>

                  <p>
                    <span className="text-zinc-600">focus:</span>{" "}
                    <span className="text-cyan-400">DevOps / Cloud</span>
                  </p>

                  <p>
                    <span className="text-zinc-600">environment:</span>{" "}
                    <span className="text-zinc-300">Linux</span>
                  </p>

                  <p>
                    <span className="text-zinc-600">status:</span>{" "}
                    <span className="text-emerald-400">
                      open_to_internships
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ===================================================
                BUTTONS
            ==================================================== */}

            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-wrap items-center gap-2.5"
            >
              <Button href="#projects">
                VIEW PROJECTS
                <ArrowDown className="h-3.5 w-3.5" />
              </Button>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 items-center gap-2 rounded-md border border-white/10 px-3.5 font-mono text-[9px] tracking-[0.12em] text-zinc-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
              >
                <Github className="h-3.5 w-3.5" />
                GITHUB
                <ArrowUpRight className="h-3 w-3" />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 items-center gap-2 rounded-md border border-white/10 px-3.5 font-mono text-[9px] tracking-[0.12em] text-zinc-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
              >
                <Linkedin className="h-3.5 w-3.5" />
                LINKEDIN
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </motion.div>

            {/* ===================================================
                TECH STACK + STATS
            ==================================================== */}

            <motion.div variants={fadeUp} className="mt-4">
              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-white/[0.08] bg-white/[0.02] px-2 py-0.5 font-mono text-[8px] tracking-[0.12em] text-zinc-500 transition-colors hover:border-cyan-400/30 hover:text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-3.5 flex flex-wrap gap-x-7 gap-y-2">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-mono text-base font-semibold text-white">
                      {stat.value}
                    </div>

                    <div className="mt-0.5 font-mono text-[7px] tracking-[0.14em] text-zinc-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT SIDE — PROFILE TERMINAL
          ====================================================== */}

          <motion.div
            variants={fadeUp}
            className="relative mx-auto w-full max-w-[350px] lg:ml-auto lg:max-w-[390px]"
          >
            {/* ===================================================
                CLOUD LABEL
            ==================================================== */}

            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -4, 0],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-4 top-[15%] z-20 hidden items-center gap-2 rounded-md border border-white/[0.08] bg-[#080b0f]/90 px-2.5 py-1.5 backdrop-blur-sm lg:flex"
            >
              <Cloud className="h-3 w-3 text-cyan-400" />

              <span className="font-mono text-[7px] tracking-[0.12em] text-zinc-500">
                CLOUD
              </span>
            </motion.div>

            {/* ===================================================
                SERVER LABEL
            ==================================================== */}

            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, 4, 0],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 top-[46%] z-20 hidden items-center gap-2 rounded-md border border-white/[0.08] bg-[#080b0f]/90 px-2.5 py-1.5 backdrop-blur-sm lg:flex"
            >
              <Server className="h-3 w-3 text-cyan-400" />

              <span className="font-mono text-[7px] tracking-[0.12em] text-zinc-500">
                SERVER
              </span>
            </motion.div>

            {/* ===================================================
                NETWORK LABEL
            ==================================================== */}

            <div className="absolute -bottom-3 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 rounded-md border border-white/[0.08] bg-[#080b0f]/95 px-2.5 py-1.5 backdrop-blur-sm sm:flex">
              <Network className="h-3 w-3 text-cyan-400" />

              <span className="font-mono text-[7px] tracking-[0.12em] text-zinc-500">
                NETWORK
              </span>
            </div>

            {/* ===================================================
                MAIN TERMINAL
            ==================================================== */}

            <div className="overflow-hidden rounded-xl border border-white/[0.1] bg-[#090c10] shadow-2xl shadow-black/50">
              {/* Terminal header */}
              <div className="flex h-9 items-center border-b border-white/[0.08] px-3.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                </div>

                <span className="ml-3.5 font-mono text-[7px] tracking-[0.14em] text-zinc-600">
                  piyumal@cloud:~
                </span>

                <div className="ml-auto flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                  <span className="font-mono text-[7px] text-emerald-400">
                    ONLINE
                  </span>
                </div>
              </div>

              {/* =================================================
                  PROFILE IMAGE
              ================================================== */}

              <div className="relative aspect-[0.9] overflow-hidden bg-zinc-900">
                <Image
                  src="/profile.jpg"
                  alt="Piyumal Sandaruwan"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 390px"
                  className="object-cover object-top grayscale"
                />

                {/* Bottom image gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090c10] via-transparent to-transparent" />

                {/* Cyan edge */}
                <div className="absolute inset-y-0 left-0 w-px bg-cyan-400/30" />
              </div>

              {/* =================================================
                  PROFILE STATUS
              ================================================== */}

              <div className="border-t border-white/[0.08] px-3.5 py-2.5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[7px] tracking-[0.15em] text-zinc-600">
                      SYSTEM PROFILE
                    </p>

                    <p className="mt-0.5 font-mono text-[10px] text-zinc-300">
                      piyumal.dev
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-mono text-[7px] tracking-[0.15em] text-zinc-600">
                      STATUS
                    </p>

                    <p className="mt-0.5 font-mono text-[9px] text-emerald-400">
                      CI/CD READY
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* =========================================================
            SCROLL INDICATOR
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[7px] tracking-[0.18em] text-zinc-700 lg:flex"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="h-3 w-3" />
        </motion.div>
      </PageContainer>
    </section>
  );
}