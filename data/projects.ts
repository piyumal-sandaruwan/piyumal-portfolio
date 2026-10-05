export type Project = {
  number: string;
  title: string;
  description: string;
  category: string;
  stack: string[];
  href: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "STUDENT API / CI-CD",
    description: "Spring Boot REST API used to demonstrate testing, quality gates, containerization and automated deployment.",
    category: "BACKEND / DEVOPS",
    stack: ["Spring Boot", "MySQL", "Docker", "Jenkins", "SonarQube", "AWS"],
    href: "https://github.com/",
  },
  {
    number: "02",
    title: "GOVIMART",
    description: "Agricultural marketplace concept with product workflows and payment integration.",
    category: "FULL STACK",
    stack: ["React", "Laravel", "MySQL", "Stripe", "Tailwind"],
    href: "https://github.com/",
  },
  {
    number: "03",
    title: "ENTERPRISE NETWORK",
    description: "Company-style topology exploring VLAN segmentation, addressing, routing, services and traffic paths.",
    category: "NETWORKING",
    stack: ["VLAN", "TCP/IP", "Routing", "DHCP", "Nginx"],
    href: "https://github.com/",
  },
];
