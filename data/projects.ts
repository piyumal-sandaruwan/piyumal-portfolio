export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  href: string;
  image: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "GoviMart",
    category: "FULL STACK / E-COMMERCE",
    description:
      "An online marketplace designed to connect farmers with customers.",
    stack: [
      "React",
      "Tailwind CSS",
      "Laravel",
      "MySQL",
      "Stripe",
    ],
    href: "YOUR_REPOSITORY_URL",
    image: "/projects/govimart.png",
  },

  {
    number: "02",
    title: "Student API",
    category: "BACKEND / DEVOPS",
    description:
      "A Spring Boot REST API created as a practical CI/CD and deployment project.",
    stack: [
      "Java",
      "Spring Boot",
      "Maven",
      "MySQL",
      "Docker",
    ],
    href: "YOUR_REPOSITORY_URL",
    image: "/projects/student-api.png",
  },
];
