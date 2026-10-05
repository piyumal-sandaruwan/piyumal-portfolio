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
