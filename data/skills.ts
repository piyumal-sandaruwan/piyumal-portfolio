import type { IconType } from "react-icons";

import {
  SiAndroid,
  SiAmazonaws,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiJenkins,
  SiJavascript,
  SiJava,
  SiLinux,
  SiMicrosoftazure,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type SkillItem = {
  name: string;
  icon?: IconType;
};

export type SkillGroup = {
  number: string;
  title: string;
  description: string;
  skills: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    number: "01",
    title: "FULL STACK DEVELOPMENT",
    description:
      "Building web applications with React, Next.js and the MERN stack through academic and personal projects.",
    skills: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "MERN",
      },
    ],
  },

  {
    number: "02",
    title: "JAVA & BACKEND",
    description:
      "Working with Java backend development while applying object-oriented programming and REST API fundamentals.",
    skills: [
      {
        name: "Java",
        icon: SiJava,
      },
      {
        name: "Spring Boot",
        icon: SiSpringboot,
      },
      {
        name: "Maven",
      },
      {
        name: "REST APIs",
      },
      {
        name: "OOP",
      },
    ],
  },

  {
    number: "03",
    title: "ANDROID DEVELOPMENT",
    description:
      "Building Android applications with Java and Firebase-based services through mobile development projects.",
    skills: [
      {
        name: "Android",
        icon: SiAndroid,
      },
      {
        name: "Java",
        icon: SiJava,
      },
      {
        name: "Firebase",
        icon: SiFirebase,
      },
      {
        name: "Firestore",
        icon: SiFirebase,
      },
      {
        name: "REST APIs",
      },
    ],
  },

  {
    number: "04",
    title: "DEVOPS & CLOUD",
    description:
      "Working with containerization, CI/CD pipelines, Linux servers, reverse proxies and cloud platforms.",
    skills: [
      {
        name: "Docker",
        icon: SiDocker,
      },
      {
        name: "Docker Compose",
        icon: SiDocker,
      },
      {
        name: "Jenkins",
        icon: SiJenkins,
      },
      {
        name: "GitHub Actions",
        icon: SiGithubactions,
      },
      {
        name: "AWS",
        icon: SiAmazonaws,
      },
      {
        name: "Azure",
        icon: SiMicrosoftazure,
      },
      {
        name: "Linux",
        icon: SiLinux,
      },
      {
        name: "Nginx",
        icon: SiNginx,
      },
    ],
  },

  {
    number: "05",
    title: "DATABASES & SERVICES",
    description:
      "Working with relational, NoSQL and cloud-backed databases across different application projects.",
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        name: "Firebase",
        icon: SiFirebase,
      },
      {
        name: "Firestore",
        icon: SiFirebase,
      },
      {
        name: "Supabase",
        icon: SiSupabase,
      },
    ],
  },

  {
    number: "06",
    title: "VERSION CONTROL",
    description:
      "Using Git-based workflows for source control, collaboration and CI/CD integration.",
    skills: [
      {
        name: "Git",
        icon: SiGit,
      },
      {
        name: "GitHub",
        icon: SiGithub,
      },
      {
        name: "GitLab",
        icon: SiGitlab,
      },
    ],
  },
];