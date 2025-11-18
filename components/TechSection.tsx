"use client";

import { useEffect, useState } from "react";
import TechIcon from "./TechIcon";
import TechModal from "./TechModal";

import { IconType } from "react-icons";

import {
  SiPython, SiTypescript, SiDart, SiCplusplus, SiDotnet,
  SiHtml5, SiCss3, SiDjango, SiFlask, SiReact, SiNextdotjs,
  SiFlutter, SiBootstrap, SiTailwindcss, SiPostgresql, SiMysql,
  SiHeroku, SiVercel, SiGodaddy, SiAmazonaws, SiStripe, SiSwagger,
  SiVisualstudiocode, SiAndroidstudio, SiEclipseide, SiGithub,
  SiGit, SiJira, SiJupyter, SiNodedotjs
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function TechSection({ techsTitle }:  { techsTitle: string }) {
  const [modal, setModal] = useState({ open: false, title: "", description: "" });

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<{ title: string; description: string }>;
      setModal({ open: true, ...customEvent.detail });
    };
    window.addEventListener("techModal-open", handler);
    return () => window.removeEventListener("techModal-open", handler);
  }, []);

 const techItems = [
  { Icon: SiPython, title: "Python", description: "Experienced with Django, Flask and scripting." },
  { Icon: SiTypescript, title: "TypeScript", description: "Used extensively in React and Next.js projects." },
  { Icon: SiDart, title: "Dart", description: "Used with Flutter for mobile development." },
  { Icon: FaJava, title: "Java Swing", description: "Built desktop GUI apps during training." },
  { Icon: SiCplusplus, title: "C++", description: "Systems programming fundamentals." },
  { Icon: SiDotnet, title: "Visual Basic .NET", description: "Built Windows apps during early dev work." },
  { Icon: SiHtml5, title: "HTML5", description: "Semantic, accessible markup." },
  { Icon: SiCss3, title: "CSS3", description: "Custom CSS & layout techniques." },
  { Icon: SiDjango, title: "Django", description: "Full-stack web apps with REST APIs." },
  { Icon: SiFlask, title: "Flask", description: "Lightweight Python apps & APIs." },
  { Icon: SiReact, title: "React", description: "Modern front-end development." },
  { Icon: SiNextdotjs, title: "Next.js", description: "App Router, server actions, API routes." },
  { Icon: SiFlutter, title: "Flutter", description: "Cross-platform mobile apps." },
  { Icon: SiBootstrap, title: "Bootstrap", description: "Rapid prototyping." },
  { Icon: SiTailwindcss, title: "Tailwind CSS", description: "Utility-first UI development." },
  { Icon: SiPostgresql, title: "PostgreSQL", description: "Primary database for Django & analytics apps." },
  { Icon: SiMysql, title: "MySQL", description: "Experience with relational schema design." },
  { Icon: SiHeroku, title: "Heroku", description: "Deployment of Django and Node apps." },
  { Icon: SiVercel, title: "Vercel", description: "Deployment of Next.js apps." },
  { Icon: SiGodaddy, title: "GoDaddy", description: "DNS, hosting, email configuration." },
  { Icon: SiAmazonaws, title: "AWS", description: "S3, IAM, CloudFront basics." },
  { Icon: SiStripe, title: "Stripe", description: "Payment processing API integration." },
  { Icon: SiSwagger, title: "Swagger", description: "API documentation generation." },
  { Icon: SiVisualstudiocode, title: "VS Code", description: "Primary IDE." },
  { Icon: SiAndroidstudio, title: "Android Studio", description: "Flutter & native testing." },
  { Icon: SiEclipseide, title: "Eclipse", description: "Legacy Java development." },
  { Icon: SiGithub, title: "GitHub", description: "Version control & CI integration." },
  { Icon: SiGit, title: "Git", description: "Branching, merging, PR workflows." },
  { Icon: SiJira, title: "Jira", description: "Agile boards & sprint planning." },
  { Icon: SiJupyter, title: "Jupyter", description: "Data exploration notebooks." },
  { Icon: SiNodedotjs, title: "Node.js", description: "Runtime for tools and servers." },

  { imgSrc: "/images/cloudinary_cloud.png", title: "Cloudinary", description: "Media storage, transformations and delivery." }
];

return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-center mb-8">{techsTitle}</h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 justify-items-center text-gray-800">
        {techItems.map((item, i) => (
          <TechIcon key={i} {...item} />
        ))}
      </div>

      <TechModal
        open={modal.open}
        title={modal.title}
        description={modal.description}
        onClose={() => setModal({ open: false, title: "", description: "" })}
      />
    </section>
  );
}
