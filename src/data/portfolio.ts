import aiStudentAssistant from "@/assets/ai-student-assistant.png";
import eda from "@/assets/eda.png";
import jat from "@/assets/jat.png";
// Placeholder content — replace these values with your real information.
export const profile = {
  name: "Zara Ahmed",
  initials: "ZA",
  role: "AI Engineer",
  typingRoles: [
    "Full-Stack Developer",
    "AI Automation Engineer",
    "Data Enthusiast",
    "Problem Solver",
  ],
  tagline:
    "Computer Science Student | Web Developer | AI Automation Enthusiast",
  location: "Karachi, Pakistan",
  email: "imzarajamal@gmail.com",
  phone: "+92 346 266 7417",
  resumeUrl: "#",
  github: "https://github.com/imzaraahmed",
  linkedin: "https://www.linkedin.com/in/imzaraahmed/",
};

export const about = {
  paragraphs: [
    "I am a Computer Science student passionate about web development, AI, and workflow automation. I enjoy building full-stack web applications and automating repetitive tasks using modern technologies. I continuously learn new tools and enjoy solving real-world problems through software.",
    "I am currently focused on improving my skills in full-stack web development and AI automation by building practical projects. I enjoy working with React, Node.js, Express.js, MySQL, Tailwind CSS, Git, GitHub, and n8n to create efficient and user-friendly applications. I am looking for opportunities to gain real-world experience.",
  ],
  stats: [
    { label: "Years experience", value: "0+" },
    { label: "Projects shipped", value: "03" },
    { label: "Automations built", value: "03" },
    { label: "Certifications", value: "00" },
  ],
};

export const skillGroups = [
  {
    title: "Frontend",
    icon: "code" as const,
    items: ["React", "JavaScript", "CSS3", "Bootstrap","Next.js", "Tailwind CSS "],
  },
  {
    title: "Backend",
    icon: "server" as const,
    items: ["Node.js", "Express.js", "JWT Authentication", "REST APIs","My SQL" ,"Python"],
  },
  {
    title: "AI & Automation",
    icon: "sparkles" as const,
    items: ["Google Gemini API", "Prompt engineering", "n8n", "AI Workflows", "Workflow Automation","API Integration"],
  },
  {
    title: "Tools & Cloud",
    icon: "cloud" as const,
    items: ["Git & GitHub", "VS Code", "Postman", "Vercel", "Netlify"],
  },
];

export const featuredProjects = [
  {
    title: "Job Application Tracker",
    description:
      "A full-stack web application that helps users manage job applications, upload resumes, track application status, and receive reminders. Built as my final year project using modern web technologies..",
    tags: ["React", "Node.js", "Express.js","MySQL","Tailwind CSS"],
    image: jat,
    demo: "#",
    repo: "https://github.com/imzaraahmed/VU-final-project-job-application-tracker-26.git",
  },
  {
    title: "AI Student Assistant",
    description:
      "An AI-powered student learning assistant built with n8n that helps students ask academic questions, maintain conversation context, and receive study notes by email..",
    tags: ["n8n","Chat Trigger ", "AI Agent", "Google Gemini API","Memory"],
    image: aiStudentAssistant,
    demo: "#",
    repo: "https://github.com/imzaraahmed/smit-student-registration-n8n-project",
  },
  {
    title: "Exploratory Data Analysis (EDA)",
    description:
      "Performed exploratory data analysis on a real-world dataset by cleaning missing values, transforming data, and creating visualizations to uncover trends, patterns, and insights. The project demonstrates data preprocessing and analytical skills using Python..",
    tags: ["Python", "Pandas", "NumPy","Matplotlib","Seaborn","Google Colab"],
    image: eda,
    demo: "#",
    repo: "https://github.com/imzaraahmed/EDA-Ecommerce-Customer-Behavior",
  },
];

export const aiProjects = [
  {
    title: "AI Student Assistant with Webhook",
    description:
      "An AI-powered student learning assistant built with n8n that helps students ask academic questions, maintain conversation context, and receive study notes by email.",
    impact: "30 hrs/month",
    tags: ["LLM", "n8n", "Webhooks"],
  },
  {
    title: "AI Student Assistant with Chat Trigger",
    description:
      "An AI-powered student learning assistant built with n8n that helps students ask academic questions, maintain conversation context, and receive study notes by email.",
    impact: "20 hrs/month ",
    tags: ["LLM", "n8n", "Chat Trigger"],
  },
  {
    title: "AI-Agent Student registraion ",
    description:
      "The AI-Agent Student Registration system was developed using n8n automation to streamline the student enrollment process. The AI agent collects student information, validates the provided details, responds to admission-related queries.",
    impact: "20 hrs/month",
    tags: ["AI-Agent", "LLM", "Google Sheet"],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    school: "Virtual University of Pakistan",
    period: "2022 — 2026",
    detail: "Currently in the final semester of my BSCS degree. Gained practical experience in web development, database systems, software engineering, artificial intelligence, and full-stack application development. Built academic projects using React, Node.js, Express.js, MySQL, and modern web technologies..",
  },
  {
    degree: "Bachelor in Commerce (B.com)",
    school: "Premier Govt College Karachi",
    period: "20XX — 20XX",
    detail: "Studied core business subjects including Accounting, Business Mathematics, Economics, Business Communication, Finance, Marketing, and Management. Developed analytical, financial, and problem-solving skills along with a strong understanding of business operations and commercial practices.",
  },
];

export const certifications = [
  { name: "Modern Web Application Development (Batch-17)", issuer: "Saylani Mass Training Programme", year: "2026", url: "#" },
  { name: "ARTIFICIAL INTELLIGENCE USING PYTHON", issuer: "DigiSkills.PK", year: "2026", url: "#" },
  { name: "UI/UX &WEBFLOW ", issuer: "DigiSkills.PK", year: "2026", url: "#" },
  { name: "Cloud Computing", issuer: "DigiSkills.PK", year: "20XX", url: "#" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "AI Automation", href: "#ai-automation" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
